import axios from 'axios'
import { Feature, TestCase } from '@core/decorators-with-each'
import { runTestClass } from '@core/runner/runner-with-each-and-meta-and-hierarchy'
import { step } from '@core/dsl'
import { Description, Owner, Tag, Severity } from '@core/meta'
import { Suite, ParentSuite, SubSuite, Layer } from '@core/hierarchy'

@Feature('Авторизация')
@ParentSuite('E2E Тесты')
@Suite('Auth API')
@SubSuite('Негативные сценарии')
@Layer('api')
@Tag('regression')
@Tag('auth')
@Owner('team-auth')
class AuthNegativeTests {
    @TestCase.each([
        ['user@example.com', 'wrongpass', 401],
        ['invalid@example.com', '123456', 401],
    ])('Логин неуспешен для %s')
    @Description('Проверка отказа в доступе при неверных данных')
    @Tag('login')
    @Severity('critical')
    @Owner('dmitry.nkt')
    async negativeLogin(email: string, password: string, expectedStatus: number) {
        const res = await step(`POST /login с ${email}`, () =>
            axios.post('https://httpbin.org/status/' + expectedStatus, { email, password }).catch(e => e.response)
        )
        expect(res.status).toBe(expectedStatus)
    }
}

runTestClass(AuthNegativeTests)
