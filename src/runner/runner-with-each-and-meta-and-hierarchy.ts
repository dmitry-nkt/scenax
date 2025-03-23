import { test } from 'vitest'
import * as allure from 'allure-js-commons'
import { getTestCases, TestCaseEntry, getFeature } from '../decorators-with-each'
import { getMetaFor } from '../meta'
import { getHierarchyMeta } from '../hierarchy'

export function runTestClass(Class: new () => any) {
    const instance = new Class()
    const feature = getFeature(instance)
    const testCases: TestCaseEntry[] = getTestCases(instance)

    for (const { method, name, meta, params } of testCases) {
        test(name, async () => {
            if (feature) await allure.feature(feature)
            if (meta?.id) await allure.label('AS_ID', meta.id)
            if (meta?.severity) await allure.severity(meta.severity)

            // Мета-информация
            const classMeta = getMetaFor(instance)
            const methodMeta = getMetaFor(instance, method)

            if (methodMeta.description || classMeta.description)
                await allure.description(methodMeta.description || classMeta.description)

            if (methodMeta.owner || classMeta.owner)
                await allure.label('owner', methodMeta.owner || classMeta.owner)

            if (!meta?.severity && (methodMeta.severity || classMeta.severity))
                await allure.severity(methodMeta.severity || classMeta.severity)

            const tags = [...new Set([...(classMeta.tags || []), ...(methodMeta.tags || [])])]
            for (const tag of tags) {
                await allure.tag(tag)
            }

            // Иерархия
            const classHierarchy = getHierarchyMeta(instance)
            const methodHierarchy = getHierarchyMeta(instance, method)

            if (methodHierarchy.parentSuite || classHierarchy.parentSuite)
                await allure.parentSuite(methodHierarchy.parentSuite || classHierarchy.parentSuite)

            if (methodHierarchy.suite || classHierarchy.suite)
                await allure.suite(methodHierarchy.suite || classHierarchy.suite)

            if (methodHierarchy.subSuite || classHierarchy.subSuite)
                await allure.subSuite(methodHierarchy.subSuite || classHierarchy.subSuite)

            if (methodHierarchy.layer || classHierarchy.layer)
                await allure.label('layer', methodHierarchy.layer || classHierarchy.layer)

            // Параметры и вызов
            if (params?.length) {
                params.forEach((val, i) => allure.parameter(`param${i + 1}`, val))
                await instance[method](...params)
            } else {
                await instance[method]()
            }
        })
    }
}
