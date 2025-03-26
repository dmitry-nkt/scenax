import 'reflect-metadata'

export type TestMeta = {
  id?: string
  feature?: string
  severity?: 'trivial' | 'minor' | 'normal' | 'critical' | 'blocker'
}

const TEST_CASES_KEY = Symbol('test:cases')
const FEATURE_KEY = Symbol('test:feature')

export type TestCaseEntry = {
  method: string | symbol
  name: string
  meta: TestMeta
  params?: any[]
}

// Основной декоратор TestCase
function TestCase(name: string, meta: TestMeta = {}) {
  return function (target: any, propertyKey: string) {
    const cases: TestCaseEntry[] = Reflect.getMetadata(TEST_CASES_KEY, target) || []
    cases.push({ method: propertyKey, name, meta })
    Reflect.defineMetadata(TEST_CASES_KEY, cases, target)
  }
}

// Вложенный декоратор TestCase.each
TestCase.each = (table: any[][]) => (nameTemplate: string, meta: TestMeta = {}): MethodDecorator =>
    function (target: any, propertyKey?: string | symbol)  {
      const cases: TestCaseEntry[] = Reflect.getMetadata(TEST_CASES_KEY, target) || []
      for (const row of table) {
        const name = formatTemplate(nameTemplate, row)
        if (propertyKey) {
          cases.push({ method: propertyKey, name, meta, params: row })
        } else {
          throw new Error('Method must be defined');
        }
      }
      Reflect.defineMetadata(TEST_CASES_KEY, cases, target)
    }

function formatTemplate(template: string, values: any[]): string {
  let index = 0
  return template.replace(/%[sdj]/g, () => {
    const val = values[index++]
    return typeof val === 'string' ? val : JSON.stringify(val)
  })
}

export function getTestCases(instance: any): TestCaseEntry[] {
  return Reflect.getMetadata(TEST_CASES_KEY, instance) || []
}

export function Feature(name: string) {
  return function (target: any) {
    Reflect.defineMetadata(FEATURE_KEY, name, target.prototype)
  }
}

export function getFeature(instance: any): string | undefined {
  return Reflect.getMetadata(FEATURE_KEY, instance)
}

// Добавляем типизацию вручную
namespace TestCase {
  export let each: (
      table: any[][]
  ) => (nameTemplate: string, meta?: TestMeta) => MethodDecorator
}

export { TestCase }
