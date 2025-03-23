import axios from 'axios'
import { Step } from '@core/step'
import { AutoRun } from '@core/auto-run'
import {Context} from "@core/lifecycle";

@AutoRun()
export class AccessSteps {
    @Context()
    ctx!: { email?: string; token?: string; status?: number; log?: string[] }

    @Step('Проверка email')
    async checkEmail() {
        expect(this.ctx.email).toMatch(/@example\.com/)
    }

    @Step('Генерация токена')
    async checkToken() {
        expect(this.ctx.token).toBe(this.ctx.email + '-token')
    }

    @Step('Проверка ожидаемого статуса')
    async checkStatus() {
        const url = `https://httpbin.org/status/${this.ctx.status}`
        try {
            const res = await axios.get(url)
            expect(res.status).toBe(this.ctx.status)
        } catch (e: any) {
            expect(e.response?.status).toBe(this.ctx.status)
        }
    }
}
