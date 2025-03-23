# 🔁 Итерация 3: параметризация тестов с `@TestCase.each`

Один из самых частых паттернов в автотестах — проверка одного сценария с разными данными.  
Vitest умеет `test.each(...)`, но наш DSL — тоже.

---

## 🧩 Цель

- Добавить `@TestCase.each([...])` — для генерации множественных тестов
- Автоматически передавать параметры в метод
- Фиксировать значения в отчёте через `allure.parameter`

---

## 📦 Как выглядит

```ts
@Feature('Авторизация')
class AuthTests {
  @TestCase.each([
    ['admin@example.com', 'admin123', 200],
    ['user@example.com', 'user123', 200],
    ['hacker@example.com', 'wrongpass', 401],
  ])('Логин для %s', async (email, password, expectedStatus) => {
    const res = await axios.post('/login', { email, password })
    expect(res.status).toBe(expectedStatus)
  })
}
```

### ✅ Что происходит:

- Генерируются 3 отдельных теста с названиями:
  - `Логин для admin@example.com`
  - ...
- Аргументы `email`, `password`, `expectedStatus` передаются в метод
- Allure фиксирует параметры:
  - `param1 = admin@example.com`
  - `param2 = admin123`
  - `param3 = 200`

---

## 🧠 Любое количество аргументов

Метод получает столько аргументов, сколько указано в `.each()`:

```ts
@TestCase.each([
  ['admin', '123', 'desktop', true],
  ['guest', 'qwerty', 'mobile', false]
])('Попытка входа: %s', async (login, pass, platform, expected) => {
  // все аргументы приходят как есть
})
```

> DSL не ограничивает количество параметров — работает как `(...args) => {}`

---

## 📈 Выгода:

- Читаемость и лаконичность
- Единая точка теста и данных
- Allure отображает параметры и шаги для каждого случая
- Работает с `step()` и `attach()`

---

## 🎯 Результат

Теперь наш DSL поддерживает один из самых частых паттернов в тестировании.  
В следующей итерации — `@BeforeEachCase`, хуки и re-use шагов.