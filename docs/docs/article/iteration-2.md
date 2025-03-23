# Итерация 2: Классы, декораторы и `runTestClass()`

## 🎯 Цель

Перевести тесты из функций в **структурированные классы**, чтобы:
- сократить дублирование шагов
- повысить читаемость
- обеспечить масштабируемую архитектуру

---

## 🤔 Проблема

В прошлой итерации мы писали тесты в функциональном стиле:

```ts
testCase('Получение профиля', async () => {
  const res = await step('GET /profile', () => api.getProfile())
  attach('Ответ', res.data)
  expect(res.status).toBe(200)
})
```

Это читаемо, но быстро приводит к дублированию логики — особенно если в сценарии много шагов или тестов несколько.

Нам нужно:
- возможность переиспользовать `this.ctx`
- структурировать шаги как методы
- сгруппировать тесты по классам и feature

---

## ✅ Решение — перейти к классам

С помощью декораторов `@Feature`, `@TestCase`, `@Severity` и `runTestClass()` мы превращаем каждый тест в метод, а весь сценарий — в класс.

```ts
@Feature('Профиль')
class ProfileTest {
  @TestCase('Получение профиля', { id: 'API-102', severity: 'critical' })
  async testProfile() {
    const res = await step('GET /profile', () => api.getProfile())
    attach('Ответ', res.data)
    expect(res.status).toBe(200)
  }
}

runTestClass(ProfileTest)
```

---

## 🔧 Что сделали

- Создали декоратор `@TestCase(name, meta)` для метода
- Добавили `@Feature` и `@Severity`
- Написали `runTestClass()` — адаптер, который превращает все методы в `test()`

```ts
export function runTestClass(clazz) {
  const instance = new clazz()
  const proto = Object.getPrototypeOf(instance)

  for (const key of Object.getOwnPropertyNames(proto)) {
    const method = proto[key]
    const meta = Reflect.getMetadata('testcase', instance, key)

    if (typeof method === 'function' && meta) {
      test(meta.name, async () => {
        if (meta.id) await label('AS_ID', meta.id)
        if (meta.severity) await severity(meta.severity)
        await method.call(instance)
      })
    }
  }
}
```

---

## 📚 Пример в стиле Scenax

```ts
@Feature('Профиль')
class ProfileTest {
  @TestCase('Проверка имени пользователя', { id: 'API-103', severity: 'normal' })
  async checkName() {
    const res = await step('GET /profile', () => api.getProfile())
    expect(res.data.name).toBe('Иван')
  }

  @TestCase('Проверка email')
  async checkEmail() {
    const res = await step('GET /profile', () => api.getProfile())
    expect(res.data.email).toMatch(/@example\.com/)
  }
}

runTestClass(ProfileTest)
```

---

## 🧩 Что такое класс в Scenax?

Класс в `Scenax` — это **архитектурная единица**, описывающая тестируемый сценарий на уровне **бизнес-фичи** или **контекста**.

В терминах проектирования:

- Это **не просто набор методов** — это контейнер намерения
- Он объединяет тест-кейсы по логике, а не по типу
- Он становится единицей в Allure-отчёте, документации и архитектуре

### ✳️ Фича или сущность?

Чаще всего — **сущность**, например: `ProfileTest`, `AuthFlow`, `PaymentChecks`.  
Но может быть и **логическая группа тестов**: `RegressionSuite`, `MobileAPITests`, `UnauthorizedFlows`.

---

### 🔧 Что можно повесить на класс?

| Декоратор          | Где применяется  | Что задаёт                                  |
|---------------------|------------------|----------------------------------------------|
| `@Feature('Profile')`     | на класс        | Название бизнес-фичи                         |
| `@Suite('API')`           | на класс        | Группировка в Allure                        |
| `@ParentSuite('E2E')`     | на класс        | Категория (UI, e2e, regression и т.п.)      |
| `@Layer('e2e')`           | на класс        | Архитектурный слой                          |
| `@Context()`              | на поле         | Передаёт shared state для всех методов      |
| `@Inject()`               | на поле         | Внедряет вспомогательные step-классы        |

---

### 📦 Класс — это:

- ✅ **Контейнер тестов** с единым контекстом
- ✅ **Неймспейс**, где можно централизованно задать `Feature`, `Suite`, `Layer`
- ✅ **Платформа** для Lifecycle-хуков (`@BeforeAll`, `@Setup`, `@Teardown`)
- ✅ **Единица документации**, которая отображается в Allure как модуль

> 💡 Класс делает архитектуру тестов явной, предсказуемой и расширяемой


## 🧠 Почему классы?

- ✅ Возможность шарить `this.ctx`, `this.client`, `this.steps`
- ✅ Легко группировать тесты по сущности (`@Feature('Profile')`)
- ✅ Можно подключить lifecycle (`@BeforeAll`, `@Setup`, `@Teardown`)
- ✅ Привычно для backend-разработчиков и архитекторов

> Мы не заменяем Vitest. Мы описываем намерения в архитектурной форме.

---

## 📈 Что это даёт на практике

| Было                         | Стало                           |
|------------------------------|----------------------------------|
| `testCase(name, fn)`         | `@TestCase()` над методом        |
| Метки внутри тела теста      | Декораторы над методом/классом   |
| Один тест = одна функция     | Один сценарий = один класс       |
| Нет общего контекста         | `this.ctx`, `this.steps`, и др.  |

---

## 🔜 Что дальше

В следующей итерации — сделаем параметризацию тестов через `@TestCase.each()` и создадим первую полноценную data-driven структуру.

➡️ К одному сценарию — много входов. Много данных. Один стиль.

