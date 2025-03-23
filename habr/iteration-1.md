# 🚀 Итерация 1: DSL-обёртка `testCase`, `step`, `attach`

## Цель

Сделать API-тест читаемым, логически структурированным и готовым к загрузке в Allure TestOps — без использования `allure.label(...)` напрямую.

## Проблема

Официальный `allure-vitest` даёт доступ к фасаду (метки, шаги, вложения), но API остаётся низкоуровневым:

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

## Решение: обёртка

### testCase()

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

## Что мы сделали

- ✍️ Написали `testCase(name, meta, fn)`
- 📌 Добавили метаинформацию (`allureId`, `feature`, `severity`)
- 📚 Обернули шаги и вложения (`step()`, `attach()`)

---

## Почему это полезно

- Убираем повторяющийся код (`label`, `step`, `attachment`)
- Повышаем читаемость
- Стандартизируем стиль написания тестов
- Готовим фундамент под class-based тестирование

---

## 📦 Под капотом

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

В следующей итерации мы начнём превращать тесты в полноценные классы с `@TestCase`, `@Feature`, и единым runner'ом.