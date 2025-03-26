import { test, beforeAll, afterAll } from 'vitest'
import * as allure from 'allure-js-commons'
import { getTestCases, TestCaseEntry, getFeature } from '../decorators'
import { getMetaFor } from '../meta'
import { getHierarchyMeta } from '../hierarchy'
import { getLifecycleMeta } from '../lifecycle'
import { getClassHookMethods } from '../class-hooks'
import 'reflect-metadata'

export function runTest(Class: new () => any) {
    const instance = new Class()
    const feature = getFeature(instance)
    const testCases: TestCaseEntry[] = getTestCases(instance)
    const lifecycle = getLifecycleMeta(instance)
    const classHooks = getClassHookMethods(instance)
    const sharedContext: Record<string, any> = {}

    // Ensure context exists before any hooks
    if (lifecycle.contextProp) {
        ;(instance as any)[lifecycle.contextProp] = sharedContext
    }

    // Inject step-like dependencies (any field with at least one @Step)
    const stepProps = Object.getOwnPropertyNames(instance)
    for (const prop of stepProps) {
        const value = (instance as any)[prop]
        if (value && typeof value === 'object') {
            const proto = Object.getPrototypeOf(value)
            const methodNames = Object.getOwnPropertyNames(proto)

            const hasStep = methodNames.some(name => {
                const keys = Reflect.getMetadataKeys(proto, name)
                return keys.some(k => k.toString().includes('step'))
            })

            if (hasStep) {
                const stepCtxProp = getLifecycleMeta(value).contextProp
                if (stepCtxProp) {
                    value[stepCtxProp] = sharedContext
                }
            }
        }
    }

    if (classHooks.beforeAll) {
        beforeAll(async () => {
            await instance[classHooks.beforeAll!]()
        })
    }

    if (classHooks.afterAll) {
        afterAll(async () => {
            await instance[classHooks.afterAll!]()
        })
    }

    for (const { method, name, meta, params } of testCases) {
        test(name, async () => {
            if (lifecycle.contextProp) {
                ;(instance as any)[lifecycle.contextProp] = sharedContext
            }

            for (const key of lifecycle.injectedProps) {
                ;(instance as any)[key] =
                    lifecycle.contextProp && sharedContext
                        ? sharedContext[key] ?? (instance as any)[lifecycle.contextProp]?.[key]
                        : sharedContext[key]
            }

            if (feature) await allure.feature(feature)
            if (meta?.id) await allure.label('AS_ID', meta.id)
            if (meta?.severity) await allure.severity(meta.severity)

            const classMeta = getMetaFor(instance)
            const methodMeta = getMetaFor(instance, method)

            if (methodMeta.description || classMeta.description)
                await allure.description(methodMeta.description || classMeta.description)

            if (methodMeta.owner || classMeta.owner)
                await allure.label('owner', methodMeta.owner || classMeta.owner)

            if (!meta?.severity && (methodMeta.severity || classMeta.severity))
                await allure.severity(methodMeta.severity || classMeta.severity)

            const tags = [...new Set([...(classMeta.tags || []), ...(methodMeta.tags || [])])]
            for (const tag of tags) await allure.tag(tag)

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

            // Call setup with parameters if available
            if (lifecycle.setup) {
                if (params?.length) {
                    await instance[lifecycle.setup](params)
                } else {
                    await instance[lifecycle.setup]()
                }
            }

            if (params?.length) {
                params.forEach((val, i) => allure.parameter(`param${i + 1}`, val))
                await instance[method](...params)
            } else {
                await instance[method]()
            }

            if (lifecycle.teardown) {
                await instance[lifecycle.teardown]()
            }
        })
    }
}
