# Итерация 1: DSL-обёртка `testCase`, `step`, `attach`

## 🎯 Цель

Сделать API-тест читаемым, логически структурированным и готовым к загрузке в Allure TestOps — без необходимости вручную писать `allure.label(...)`, `allure.step(...)` и другие низкоуровневые вызовы.

---

## 🤯 Проблема

`allure-vitest` предоставляет доступ к фасаду Allure (метки, шаги, вложения), но при этом API остаётся низкоуровневым и дублируемым:

```ts
import * as allure from 'allure-js-commons'

test('profile', async () => {
  await allure.label('AS_ID', 'API-123')
  await allure.feature('Profile')
  await allure.step('GET /profile', async () => {
    const res = await axios.get('/profile')
    await allure.attachment('response', JSON.stringify(res.data), 'application/json')
    expect(res.status).toBe(200)
  })
})
```

- 🔁 Повторяются одни и те же вызовы
- ⚠️ Лёгко ошибиться в строковых ключах (`AS_ID`, `severity`)
- 📉 Снижается читаемость и темп разработки

---

## ✅ Решение — обёртка

Создаём минимальный DSL: `testCase`, `step`, `attach`  
→ единый стиль, чистая структура, меньше ошибок.

```ts
testCase(
  'Получение профиля',
  { id: 'API-101', feature: 'Профиль', severity: 'critical' },
  async () => {
    const response = await step('GET /profile', () => axios.get('/profile'))
    attach('Ответ', response.data, 'application/json')
    expect(response.status).toBe(200)
  }
)
```

> Коротко, декларативно, красиво. Всё нужное — на виду.

---

## 🔧 Что мы сделали

- ✍️ Написали `testCase(name, meta, fn)` с поддержкой метаданных
- 📚 Обернули шаги в `step(name, fn)`
- 📎 Добавили `attach(name, content)` с автосериализацией

---

## 💡 Почему это важно

- Удаляет boilerplate (`label`, `step`, `attachment`)
- Повышает читаемость, особенно в отчётах
- Стандартизирует стиль написания тестов
- Закладывает фундамент для архитектуры: классы, декораторы, слои

---

## ⚙️ Под капотом

```ts
import * as allure from 'allure-js-commons'
import { test } from 'vitest'

export function testCase(name, meta, fn) {
  test(name, async () => {
    if (meta.id) await allure.label('AS_ID', meta.id)
    if (meta.feature) await allure.feature(meta.feature)
    if (meta.severity) await allure.severity(meta.severity)
    await fn()
  })
}

export async function step(name, fn) {
  return await allure.step(name, fn)
}

export function attach(name, data, type = 'text/plain') {
  allure.attachment(name, typeof data === 'string' ? data : JSON.stringify(data), type)
}
```

---

## 📈 Что это даёт на практике

- ✅ Тест становится читаем как **сценарий**
- ✅ Сокращается дублирование
- ✅ Повышается стандартизация
- ✅ Уменьшается вероятность ошибок (`label('AS_ID', ...)` → типизировано)
- ✅ Повышается качество Allure-отчётов
- ✅ Готова почва для class-based архитектуры

---

## 🧩 Итоги Итерации 1: читаемые тесты, декларативность и язык намерений

Первая итерация дала нам минимально жизнеспособный DSL (`testCase`, `step`, `attach`) для написания API-тестов.  
И вроде бы — всего три обёртки. Но они изменили всё.

### 💡 Что именно мы сделали?

- Упаковали вызовы фасада в декларативный `testCase()`
- Добавили читаемую обёртку `step()` с логикой прохождения
- Сделали `attach()` безопасным, с автосериализацией JSON
- Добавили поддержку `allureId`, `feature`, `severity`

```ts
testCase(
  'Получение профиля',
  { id: 'API-101', feature: 'Профиль', severity: 'critical' },
  async () => {
    const response = await step('GET /profile', () => axios.get(...))
    attach('Ответ', response.data, 'application/json')
    expect(response.status).toBe(200)
  }
)
```

---

### 🧠 Как это назвать?

Мы больше не пишем “тест-функцию”. Мы описываем **тест-кейс**.

- Это не `unit test`, это `use-case`
- Это не `test(name, () => {})`, это `testCase(meta, steps)`
- Это не “проверка функции”, это “проверка бизнес-сценария”

📌 Это направление ближе к:

| Термин                  | Подходит? | Комментарий                          |
|-------------------------|-----------|--------------------------------------|
| Scenario-based testing  | ✅        | есть шаги, сценарии, feature         |
| Use-case testing        | ✅        | каждый `testCase` — это use-case     |
| Structured test DSL     | ✅        | у нас свой язык описания             |
| Classic unit testing    | ❌        | слишком низкоуровнево                |

---

## 🔜 Что дальше

В следующей итерации мы превратим тесты в полноценные классы с `@TestCase`, `@Feature`, `@Severity` и единым `runTestClass()`.

Так мы сделаем ещё один шаг от технической реализации — к **тесту как сценарию**.

---

📎 После первой итерации легко подумать:
> “Это просто обёртка над vitest и allure, да?”

Но нет. Мы закладываем архитектуру. И это важно.

---
