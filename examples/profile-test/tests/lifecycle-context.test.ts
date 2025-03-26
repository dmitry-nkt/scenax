import { Feature, TestCase } from '@core/decorators'
import { runTest } from '@core/runner/runner'
import { step, attach } from '@core/dsl'
import { Setup, Teardown, Inject, Context } from '@core/lifecycle'
import { Description, Severity, Tag } from '@core/meta'

@Feature('Сессия')
@Tag('session')
class SessionTests {
    @Context()
    ctx!: { token?: string; log?: string[] }

    @Inject()
    token!: string

    @Setup()
    async init() {
        const user = 'admin'
        this.ctx.token = user + '-token'
        this.ctx.log = [`Token initialized for ${user}`]
    }

    @Teardown()
    async cleanup() {
        this.ctx.log?.push('Cleanup after test')
        attach('Лог выполнения', this.ctx.log?.join('\n') ?? '', 'text/plain')
    }

    @TestCase('Получение токена')
    @Description('Проверка, что токен создаётся и доступен через контекст и инжекцию')
    @Severity('normal')
    @Tag('token')
    async checkToken() {
        await step('Проверка токена из @Context', () => {
            expect(this.ctx.token).toBe('admin-token')
        })

        await step('Проверка токена из @Inject', () => {
            this.token = this.ctx.token! // имитируем Inject
            expect(this.token).toBe('admin-token')
        })
    }
}

runTest(SessionTests)
