# 🧱 Итерация 5: `@Suite`, `@ParentSuite`, `@SubSuite`, `@Layer` — иерархия тестов в Allure

## 🎯 Цель

Структурировать тесты как сценарии в документации:  
по модулям, слоям, группам и уровням ответственности.  
Добавим иерархические декораторы, чтобы Allure-отчёт стал навигационным.

---

## 🤔 Почему это важно?

Когда тестов становится много, нужно уметь:

- понимать, какой модуль покрыт
- находить конкретные группы тестов
- запускать только `auth`, или `smoke`, или `e2e`

---

## ✅ Что добавили

- `@ParentSuite(name)` — верхний уровень (напр. `E2E Тесты`)
- `@Suite(name)` — модуль или раздел (напр. `Auth API`)
- `@SubSuite(name)` — подгруппа сценариев (напр. `Негативные сценарии`)
- `@Layer(name)` — технический уровень (`api`, `unit`, `e2e`)
- Поддержка этих декораторов в `runTestClass`
- Отображение структуры в Allure

---

## 📦 Пример

```ts
@ParentSuite('E2E Тесты')
@Suite('Auth API')
@SubSuite('Негативные сценарии')
@Layer('api')
@Feature('Авторизация')
@Tag('regression')
@Tag('auth')
@Owner('team-auth')
class AuthNegativeTests {
  @TestCase.each([
    ['user@example.com', 'wrongpass', 401],
    ['invalid@example.com', '123456', 401],
  ])('Логин неуспешен для %s')
  @Description('Проверка отказа в доступе при неверных данных')
  @Tag('login')
  @Severity('critical')
  @Owner('dmitry.nkt')
  async negativeLogin(email: string, password: string, expectedStatus: number) {
    const res = await step(`POST /login с ${email}`, () =>
      axios.post('https://httpbin.org/status/' + expectedStatus, { email, password }).catch(e => e.response)
    )
    expect(res.status).toBe(expectedStatus)
  }
}
```

---

## 🔍 Как это отображается в Allure

```
E2E Тесты
└── Auth API
    └── Негативные сценарии
        └── Логин неуспешен для user@example.com ✅
```

---

## 🧠 Что это даёт

- 🧭 Навигация по модулям
- 📊 Группировка по слоям (`unit`, `api`, `e2e`)
- 🔍 Фильтрация по группам (`@auth`, `@smoke`)
- 💼 Стандартизация отчётов
- ⚙️ Возможность auto-labeling на CI/CD

---

## 🎯 Вывод

Теперь каждый тест — это:

- часть конкретной фичи
- вложен в понятную иерархию
- снабжён техническим и смысловым контекстом

Allure-отчёт стал не просто списком проверок, а **живым паспортом системы**.

---

## 🚀 Что дальше?

В следующей итерации:

- добавим `beforeAll`, `afterEach`, глобальные хуки
- начнём поддерживать `@Setup`, `@Teardown`, возможно — `@Inject` и `Context`