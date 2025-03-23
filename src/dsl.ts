import * as allure from 'allure-js-commons'
import { test } from 'vitest'

type AllureMeta = {
    id?: string
    feature?: string
    severity?: 'trivial' | 'minor' | 'normal' | 'critical' | 'blocker'
}

export function testCase(
    name: string,
    meta: AllureMeta,
    fn: () => Promise<void> | void
) {
    test(name, async () => {
        if (meta.id) await allure.label('AS_ID', meta.id)
        if (meta.feature) await allure.feature(meta.feature)
        if (meta.severity) await allure.severity(meta.severity)
        await fn()
    })
}

export async function step<T>(name: string, fn: () => Promise<T> | T): Promise<T> {
    return await allure.step(name, fn)
}

export function attach(
    name: string,
    content: any,
    type = 'text/plain'
): void {
    const formatted = typeof content === 'string'
        ? content
        : JSON.stringify(content, null, 2)

    allure.attachment(name, formatted, type)
}
