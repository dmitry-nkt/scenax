# 🧩 Итерация 4: описание тестов через `@Description`, `@Tag`, `@Owner`, `@Severity`

## 🎯 Цель

Дать тестам больше смысла — прямо из кода.  
Добавим поддержку мета-декораторов: описаний, тегов, владельцев, уровней важности.

---

## 🤔 Почему это важно?

Открываете Allure и видите:  
**"Логин для admin@example.com" — пройден ✅"**

Но больше — ничего. Ни кто владелец, ни зачем тест, ни приоритет.

Всё это важно, особенно когда:
- 👥 тестов много
- 📊 нужна аналитика в TestOps
- 🤝 команда хочет понимать, что тест проверяет

---

## ✅ Что мы сделали

Добавили поддержку следующих декораторов:

```ts
@Description('Проверяет, что пользователь с валидными данными может авторизоваться')
@Tag('auth')
@Owner('dmitry.nkt')
@Severity('critical')
```

Теперь они работают как на класс, так и на метод.

---

## 🔬 Как это работает

Каждый из этих декораторов:

- сохраняет значение в metadata через `reflect-metadata`
- при запуске в `runTest` — применяется к Allure через facade (`allure.description`, `allure.tag`, ...)

---

## 📦 Пример использования

```ts
@Feature('Авторизация')
@Tag('api')
@Owner('backend-team')
class AuthTests {

  @TestCase.each([
    ['admin@example.com', 'admin123', 200],
    ['hacker@example.com', 'wrongpass', 401]
  ])('Логин для %s')
  @Description('Проверяет сценарий логина с учётными данными')
  @Tag('login')
  @Severity('critical')
  @Owner('dmitry.nkt')
  async login(email, password, expectedStatus) {
    const res = await step(`POST /login`, () =>
      axios.post('https://httpbin.org/status/' + expectedStatus, { email, password })
    )
    expect(res.status).toBe(expectedStatus)
  }
}
```

---

## 🧠 Что это даёт

- 📎 Видно, зачем тест (описание)
- 🧩 Кто его владелец (`@Owner`)
- 🚦 Насколько он важен (`@Severity`)
- 🏷️ Какой группе принадлежит (`@Tag`)
- 📊 Allure и TestOps могут группировать, фильтровать, считать покрытие по owner/feature

---

## 🧩 Итог

Мы добавили **семантический слой** над тестами.  
Теперь каждый тест-кейс несёт не только шаги, но и **контекст** — и для людей, и для систем.

---

## 🚧 Что дальше?

В следующей итерации:
- добавим `@Suite`, `@ParentSuite`, `@Layer`
- начнём собирать полноценную **иерархию тестов**
- подключим auto-labeling для `api`, `regression`, `smoke`
