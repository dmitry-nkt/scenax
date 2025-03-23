import { isAutoRun } from '../auto-run'
import 'reflect-metadata'
import { getLifecycleMeta } from '../lifecycle'

export async function runSteps(instance: any, ctx?: any) {
    if (!instance || typeof instance !== 'object') {
        throw new Error('runSteps: instance must be a valid object')
    }

    if (!isAutoRun(instance)) {
        throw new Error('runSteps: instance is not marked with @AutoRun')
    }

    const lifecycle = getLifecycleMeta(instance)
    if (lifecycle.contextProp && ctx) {
        instance[lifecycle.contextProp] = ctx
    }

    const proto = Object.getPrototypeOf(instance)
    const methodNames = Object.getOwnPropertyNames(proto).filter(
        name => typeof instance[name] === 'function' && name !== 'constructor'
    )

    for (const name of methodNames) {
        const isMarkedStep = Reflect.getMetadataKeys(proto, name).some(k => k.toString().includes('step'))
        if (isMarkedStep) {
            await instance[name]()
        }
    }
}
