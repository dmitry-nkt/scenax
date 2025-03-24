# 🔁 Итерация 3: параметризация тестов через `@TestCase.each`

## 🎯 Цель

Добавить декларативную поддержку параметризации тестов через `@TestCase.each(...)`,  
чтобы писать один тест — и получать сразу несколько случаев в Allure-отчёте.

---

## 🤔 Почему это важно?

Параметризация — один из самых частых паттернов в тестировании:

```ts
test.each([
  ['email1', 'pass1', 200],
  ['email2', 'pass2', 401],
])('Login for %s', ...)
```

Но с Allure и фасадом это превращается в вручную размножаемый код без меток и контекста.  
Мы хотим сохранить читаемость, мета-информацию и типизацию.

---

## ✅ Что сделали

Добавили в `scenax` поддержку:

```ts
@TestCase.each([
  ['admin@example.com', 'admin123', 200],
  ['user@example.com', 'user123', 200],
])('Логин для %s', { severity: 'critical' })
async login(email, password, expectedStatus) {
  ...
}
```

---

## 🔬 Как это работает

- Декоратор `@TestCase.each()` генерирует **несколько тестов** из одного метода.
- Название параметризуется: `Логин для admin@example.com`
- Каждый набор параметров (`email`, `password`, `status`) передаётся в метод.
- `runTestClass()` регистрирует их как отдельные `vitest.test(...)`.

---

## 🧠 Что это даёт

- 📊 Один метод → несколько тестов в Allure
- 🔍 Все параметры видны в отчёте (`param1`, `param2`, ...)
- 💡 Шаблон названия (с `%s`) повышает читаемость
- 🔁 Нет повторяющегося кода — всё описывается один раз

---

## 📦 Пример использования

```ts
@Feature('Авторизация')
class AuthTests {
  @TestCase.each([
    ['admin@example.com', 'admin123', 200],
    ['user@example.com', 'user123', 200],
    ['hacker@example.com', 'wrongpass', 401],
  ])('Логин для %s', { severity: 'critical' })
  async login(email, password, expectedStatus) {
    const res = await step(`POST /login с ${email}`, () =>
      axios.post('https://httpbin.org/status/' + expectedStatus, { email, password })
    )
    expect(res.status).toBe(expectedStatus)
  }
}
```

---

## 🧩 Итог

`@TestCase.each` — это декларативный способ описания группы сценариев:  
один `testCase`, один метод, но множество случаев и отчётов.

---

## 🚧 Что дальше?

В следующей итерации мы:
- добавим `@Description`, `@Owner`, `@Tag` и другие мета-декораторы
- сделаем отчёт в Allure структурным, красивым, и полезным для команды
