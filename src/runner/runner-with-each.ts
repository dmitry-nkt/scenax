import { test } from 'vitest'
import * as allure from 'allure-js-commons'
import { getFeature, getTestCases, TestCaseEntry } from '../decorators-with-each'

export function runTestClass(Class: new () => any) {
  const instance = new Class()
  const feature = getFeature(instance)
  const testCases: TestCaseEntry[] = getTestCases(instance)

  for (const { method, name, meta, params } of testCases) {
    test(name, async () => {
      if (feature) await allure.feature(feature)
      if (meta?.id) await allure.label('AS_ID', meta.id)
      if (meta?.severity) await allure.severity(meta.severity)

      if (params?.length) {
        params.forEach((val, i) => allure.parameter(`param${i + 1}`, val))
        await instance[method](...params)
      } else {
        await instance[method]()
      }
    })
  }
}
