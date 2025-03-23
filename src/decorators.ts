import 'reflect-metadata'

export type TestMeta = {
    id?: string
    feature?: string
    severity?: 'trivial' | 'minor' | 'normal' | 'critical' | 'blocker'
}

const TEST_CASES_KEY = Symbol('test:cases')
const FEATURE_KEY = Symbol('test:feature')

export function TestCase(name: string, meta: TestMeta = {}) {
    return function (target: any, propertyKey: string) {
        const cases = Reflect.getMetadata(TEST_CASES_KEY, target) || []
        cases.push({ method: propertyKey, name, meta })
        Reflect.defineMetadata(TEST_CASES_KEY, cases, target)
    }
}

export function Feature(name: string) {
    return function (target: any) {
        Reflect.defineMetadata(FEATURE_KEY, name, target.prototype)
    }
}

export function getTestCases(instance: any) {
    return Reflect.getMetadata(TEST_CASES_KEY, instance) || []
}

export function getFeature(instance: any): string | undefined {
    return Reflect.getMetadata(FEATURE_KEY, instance)
}
