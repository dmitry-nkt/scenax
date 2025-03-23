import { test } from 'vitest'
import * as allure from 'allure-js-commons'
import { getTestCases, getFeature } from '../decorators'

export function runTestClass(TestClass: new () => any) {
    const instance = new TestClass()
    const cases = getTestCases(instance)
    const feature = getFeature(instance)

    for (const testCase of cases) {
        const { method, name, meta } = testCase

        test(name, async () => {
            if (feature) await allure.feature(feature)
            if (meta?.id) await allure.label('AS_ID', meta.id)
            if (meta?.severity) await allure.severity(meta.severity)

            // 👇 обёртка, чтобы тест имел шаг
            // await allure.step(`Кейс: ${name}`, async () => {
                await instance[method]()
            // })
        })
    }
}
