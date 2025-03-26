import { isScenario } from '../scenario'
import 'reflect-metadata'
import { getLifecycleMeta } from '../lifecycle'

export async function runSteps(Class: new () => any, ctx?: any) {
    const instance = new Class()

    if (!instance || typeof instance !== 'object') {
        throw new Error('runSteps: Step Class must be a valid')
    }

    if (!isScenario(instance)) {
        throw new Error('runSteps: instance is not marked with @Scenario')
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
