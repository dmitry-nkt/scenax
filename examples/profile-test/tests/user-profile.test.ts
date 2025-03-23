import axios from 'axios'
import { testCase, step, attach } from '@core/dsl'

testCase(
  'Получение профиля пользователя',
  {
    id: 'API-001',
    feature: 'Профиль',
    severity: 'critical'
  },
  async () => {
    const response = await step('GET /users/1', async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      attach('Ответ JSON', res.data, 'application/json')
      return res
    })

    await step('Проверка имени пользователя', () => {
      if (response.data.username !== 'Bret') {
        throw new Error(`username должен быть Bret, а получен ${response.data.username}`)
      }
    })
  }
)
