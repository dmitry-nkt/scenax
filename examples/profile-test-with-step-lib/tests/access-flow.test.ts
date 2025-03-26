import { TestCase } from '@core/decorators'
import {Context, Inject, Setup} from '@core/lifecycle'
import { AccessSteps } from 'steps/access.steps'
import { runTest } from '@core/runner/runner'
import { runSteps } from '@core/runner/runSteps'
import {AfterAll, BeforeAll} from "@core/class-hooks";
import {attach} from "@core/dsl";

class AccessFlowTest {
    @Context()
    ctx!: { email?: string; token?: string; status?: number; log?: string[] }

    @Inject()
    steps!: AccessSteps

    @Setup()
    async createUser([email, expectedStatus]: [string, number]) {
        this.ctx.email = email
        this.ctx.status = expectedStatus
        this.ctx.token = email + '-token'
        this.ctx.log?.push(`👤 Создан пользователь: ${email}`)
    }

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

    @TestCase.each([
        ['admin@example.com', 200],
        ['guest@example.com', 403],
    ])('Проверка доступа для %s')
    async checkAccess(email: string, status: number) {
        await runSteps(AccessSteps, this.ctx)

        this.ctx.log?.push(`✅ Проверка доступа пройдена: ${email}`)
    }
}

runTest(AccessFlowTest)
