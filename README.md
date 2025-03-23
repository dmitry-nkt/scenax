# 🧪 scenax

Turn your Vitest API tests into structured, human-readable reports — with steps, labels, and TestOps flair.

## 🚀 Что это

📦 `scenax` — это расширение для [Vitest](https://vitest.dev/), позволяющее писать тесты с декларативным DSL и встроенной интеграцией с Allure TestOps.

- Поддержка `allureId`, `displayName`, `severity`, `labels`, `epic`, `story`
- Шаги (`step`) и вложенность
- Прикрепление данных и артефактов (`attach`)
- Без магии: работает с обычным `vitest`

## 🔧 Установка

```bash
npm install vitest allure-js-commons axios
```

> 💡 Пока проект не опубликован в npm, можно просто скопировать `src/index.ts`

## 🧪 Пример

```ts
import { testCase, step, attach } from '../src/index'
import axios from 'axios'

testCase(
  'GET /profile',
  {
    id: 'API-101',
    name: 'Получение профиля',
    feature: 'Профиль',
    severity: 'critical'
  },
  async () => {
    const response = await step('Отправка запроса', () =>
      axios.get('https://jsonplaceholder.typicode.com/users/1')
    )

    attach('Ответ', JSON.stringify(response.data, null, 2), 'application/json')

    await step('Проверка имени', () => {
      if (response.data.username !== 'Bret') {
        throw new Error('Неверный username')
      }
    })
  }
)
```

## 📈 Интеграция с Allure TestOps

- Поддерживаются `allureId`, `labels`, `severity`, `epic`, `feature`, `story`
- Результаты сохраняются в `./allure-results`
- Используй [allurectl](https://docs.qameta.io/allure-testops/cli/allurectl/) для отправки отчётов:

```bash
allurectl upload --results=./allure-results
```

## 🛠️ В планах

- ✅ Базовый DSL
- ✅ Примеры тестов
- 🧩 Кастомный reporter
- 🧪 Параметризация
- 📝 Статья на Хабр
- CI-интеграция и GitHub Actions

## 👋 Контакты

Разработка: [Dmitry N.](https://github.com/dmitry-nkt)  
Идея и поддержка: сообщество Vitest & Allure ❤️
