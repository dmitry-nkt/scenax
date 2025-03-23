# 📝 Черновик статьи для Хабра

## Название (рабочее)
DSL для API-тестов на Vitest с поддержкой Allure TestOps: от боли к удовольствию

## 🚩 Введение

- Vitest — современный, быстрый тест-фреймворк.
- Allure — стандарт де-факто для отчётов и TestOps-интеграции.
- Но между ними до недавнего времени — пропасть.
- Ни шагов, ни allureId, ни интеграции с TestOps.
- Мы устали от дублирования и ручного связывания тестов.

🎯 Поэтому мы сделали `scenax`: простой DSL + кастомный reporter, превращающий ваши API-тесты в документацию — с метками, шагами и загрузкой в Allure TestOps.

---

## ⚙️ Зачем писать DSL?

- Улучшает читаемость
- Убирает дублирование
- Добавляет структуру и декларативность
- Обеспечивает стандарты внутри команды

```ts
testCase(
  'Получение профиля',
  { id: 'API-101', feature: 'Профиль', severity: 'critical' },
  async () => {
    const response = await step('GET /profile', () =>
      axios.get('/api/profile')
    )
    attach('Ответ', JSON.stringify(response.data), 'application/json')
  }
)
```

---

## 🧱 Архитектура

- Используем `allure-js-commons` напрямую
- Строим `testCase`, `step`, `attach` — через API
- Поддержка метаданных: `allureId`, `severity`, `epic`, `story`
- В перспективе — кастомный `reporter` и `beforeEachCase`

---

## 📦 Как подключить

1. Установить зависимости
2. Добавить `src/index.ts`
3. Писать тесты с DSL
4. Генерировать `allure-results` → отправлять в TestOps

---

## 🔮 Что дальше

- Поддержка параметров (`testCase.each`)
- Сниппеты для VSCode
- Публикация как npm-пакета
- Автоматическая интеграция с CI

---

## 🔗 Ссылки

- Репозиторий: https://github.com/dmitry-nkt/scenax
- Документация Allure: https://docs.qameta.io/allure/
- Vitest: https://vitest.dev/
