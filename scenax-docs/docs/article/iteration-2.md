# 🧱 Итерация 2: Классы, декораторы и `runTestClass()`

После того как мы получили читаемый `testCase()` в первой итерации, стало понятно, что **тесты нужно структурировать**.  
В этой итерации мы добавим поддержку **класс-ориентированной архитектуры**, вдохновлённой подходами из NestJS, Playwright и BDD.

---

## 🧩 Цель

- Сгруппировать тесты по классам
- Добавить `@TestCase()` для метода
- Добавить `@Feature()` для класса
- Поддержать `runTestClass()` — который автоматически вызовет `vitest.test(...)` с нужными метками

---

## 📦 Пример: читаемый класс с тремя кейсами

```ts
@Feature('Профиль')
class ProfileTests {
  @TestCase('Получение профиля пользователя', {
    id: 'API-CLASS-01',
    severity: 'critical',
  })
  async getProfile() {
    await step('GET /users/1', async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      attach('Ответ JSON', response.data, 'application/json')
      if (response.data.username !== 'Bret') {
        throw new Error(`Ожидался username = Bret, а получен ${response.data.username}`)
      }
    })
  }

  @TestCase('Получение списка пользователей', {
    id: 'API-CLASS-02',
    severity: 'normal',
  })
  async getUsersList() {
    await step('GET /users', async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      attach('Список пользователей', res.data)
      if (!Array.isArray(res.data)) throw new Error('Ожидался массив пользователей')
    })
  }

  @TestCase('Ошибка при запросе несуществующего пользователя', {
    id: 'API-CLASS-03',
    severity: 'minor',
  })
  async getInvalidUser() {
    await step('GET /users/9999', async () => {
      try {
        await axios.get('https://jsonplaceholder.typicode.com/users/9999')
        throw new Error('Ожидался 404, но ответ успешен')
      } catch (error: any) {
        attach('Ошибка запроса', error.toJSON?.() || error.message)
        if (!error.response || error.response.status !== 404) {
          throw new Error('Ожидался статус 404')
        }
      }
    })
  }
}

runTestClass(ProfileTests)
```

---

## ⚙️ Под капотом

```ts
// @TestCase
Reflect.defineMetadata(TEST_CASES_KEY, [...], target)
// @Feature
Reflect.defineMetadata(FEATURE_KEY, name, target.prototype)

// runTestClass
test(meta.name, async () => {
  await allure.feature(...)
  await allure.label(...)
  await allure.step(..., () => instance[method]())
})
```

---

## 💡 Почему это важно

- Тесты структурируются по модулям (Profile, Auth и т.д.)
- Метаданные становятся декларативными
- Всё читаемо, повторно используемо и масштабируемо
- Возможна дальнейшая автоматизация через `@BeforeEachCase()`, `@Suite()`, параметризацию

---

## 🧠 Подводный камень: вложения вне `step`

> Если `attach()` или `label()` вызывается вне `step(...)`, они не попадают в шаг в Allure.

Решение: использовать `attach()` **внутри `step()`** — тогда всё будет красиво.

---

## ✅ Итог

В этой итерации мы вышли на новый уровень читаемости и организации:

- `ProfileTests` стал логическим блоком
- Каждый `@TestCase` — это сценарий
- Всё это остаётся в TypeScript, без `Given-When-Then`

Следующий шаг: **параметризация и data-driven подход**
