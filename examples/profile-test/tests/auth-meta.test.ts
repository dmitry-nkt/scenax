import axios from 'axios'
import { Feature, TestCase } from '@core/decorators'
import { runTestClass } from '@core/runner/runner'
import { step } from '@core/dsl'
import { Description, Owner, Tag, Severity } from '@core/meta'

@Feature('Авторизация')
@Tag('api')
@Owner('team-login')
class AuthWithMetaTests {
    @TestCase.each([
        ['admin@example.com', 'admin123', 200],
        ['user@example.com', 'wrongpass', 401]
    ])('Логин с %s')
    @Description('Проверяет поведение логина с разными наборами данных')
    @Tag('login')
    @Severity('critical')
    @Owner('dmitry.nkt')
    async login(email: string, password: string, expectedStatus: number) {
        const res = await step(`POST /login с ${email}`, () =>
            axios.post('https://httpbin.org/status/' + expectedStatus, { email, password }).catch(e => e.response)
        )
        expect(res.status).toBe(expectedStatus)
    }
}

runTestClass(AuthWithMetaTests)
