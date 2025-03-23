import { test } from 'vitest'
import * as allure from 'allure-js-commons'
import { getTestCases, TestCaseEntry, getFeature } from '../decorators-with-each'
import { getMetaFor } from '../meta'

export function runTestClass(Class: new () => any) {
  const instance = new Class()
  const feature = getFeature(instance)
  const testCases: TestCaseEntry[] = getTestCases(instance)

  for (const { method, name, meta, params } of testCases) {
    test(name, async () => {
      if (feature) await allure.feature(feature)
      if (meta?.id) await allure.label('AS_ID', meta.id)
      if (meta?.severity) await allure.severity(meta.severity)

      // Получаем мета-декораторы
      const classMeta = getMetaFor(instance)
      const methodMeta = getMetaFor(instance, method)

      // Описание
      if (methodMeta.description || classMeta.description)
        await allure.description(methodMeta.description || classMeta.description)

      // Owner
      if (methodMeta.owner || classMeta.owner)
        await allure.label('owner', methodMeta.owner || classMeta.owner)

      // Severity (если не задан через TestCase)
      if (!meta?.severity && (methodMeta.severity || classMeta.severity))
        await allure.severity(methodMeta.severity || classMeta.severity)

      // Tags
      const tags = [...new Set([...(classMeta.tags || []), ...(methodMeta.tags || [])])]
      for (const tag of tags) {
        await allure.tag(tag)
      }

      // Вызов метода с параметрами
      if (params?.length) {
        params.forEach((val, i) => allure.parameter(`param${i + 1}`, val))
        await instance[method](...params)
      } else {
        await instance[method]()
      }
    })
  }
}
