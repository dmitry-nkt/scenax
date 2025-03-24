import axios from 'axios'
import {TestCase} from '@core/decorators'
import {Setup, Context} from '@core/lifecycle'
import {BeforeAll, AfterAll} from '@core/class-hooks'
import {step, attach} from '@core/dsl'
import {runTestClass} from '@core/runner/runner'

class ParametrizedSetupTest {
    @Context()
    ctx!: { email?: string; status?: number; token?: string; log?: string[] }

    @BeforeAll()
    async initSuite() {
        this.ctx = this.ctx || {}
        this.ctx.log = ['🚀 Начинаем тесты доступа']
    }

    @AfterAll()
    async finishSuite() {
        this.ctx.log?.push('🏁 Завершили тесты доступа')
        attach('Лог выполнения тестов', this.ctx.log?.join('\n') ?? '', 'text/plain')
    }

    @Setup()
    async createUser([email, expectedStatus]: [string, number]) {
        this.ctx.email = email
        this.ctx.status = expectedStatus
        this.ctx.token = email + '-token'
        this.ctx.log?.push(`👤 Создан пользователь: ${email}`)
    }

    @TestCase.each([
        ['admin@example.com', 200],
        ['guest@example.com', 403],
    ])('Проверка доступа для %s')
    async checkAccess(email: string, password: string, expectedStatus: number) {
        await step('Проверка email в контексте', () => {
            expect(this.ctx.email).toMatch(/@example\.com/)
        })

        await step('Проверка генерации токена', () => {
            expect(this.ctx.token).toBe(this.ctx.email + '-token')
        })

        await step('Проверка ожидаемого статуса', async () => {
            const url = `https://httpbin.org/status/${this.ctx.status}`
            try {
                const res = await axios.get(url)
                expect(res.status).toBe(this.ctx.status)
            } catch (e: any) {
                expect(e.response?.status).toBe(this.ctx.status)
            }
        })

        this.ctx.log?.push(`✅ Проверка доступа пройдена: ${this.ctx.email}`)
    }
}

runTestClass(ParametrizedSetupTest)
