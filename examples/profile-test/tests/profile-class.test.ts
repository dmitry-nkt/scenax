import axios from 'axios'
import { TestCase, Feature } from '@core/decorators'
import { runTestClass } from '@core/runner/runner'
import { step, attach } from '@core/dsl'

@Feature('Профиль')
class ProfileTests {
    @TestCase('Получение профиля пользователя', {
        id: 'API-CLASS-01',
        severity: 'critical',
    })
    async getProfile() {
        let response: any

        await step('Выполнение запроса GET /users/1', async () => {
            response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            attach('Ответ JSON', response.data, 'application/json')
        })

        await step('Проверка наличия username', () => {
            if (!response.data.username) {
                throw new Error('В ответе отсутствует username')
            }
        })

        await step('Проверка значения username', () => {
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
