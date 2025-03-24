import axios from 'axios'
import { Feature, TestCase } from '@core/decorators'
import { runTestClass } from '@core/runner/runner'
import { step } from '@core/dsl'

@Feature('Авторизация')
class AuthTests {
    @TestCase.each([
        ['admin@example.com', 'admin123', 200],
        ['user@example.com', 'user123', 200],
        ['hacker@example.com', 'wrongpass', 401]
    ])('Логин для %s', { severity: 'critical' })
    async login(email: string, password: string, expectedStatus: number) {
        await step(`POST /login с ${email}`, async () => {
            const res = await axios.post('https://httpbin.org/status/' + expectedStatus, {
                email, password
            }).catch(e => e.response)

            expect(res.status).toBe(expectedStatus)
        })
    }
}

runTestClass(AuthTests)
