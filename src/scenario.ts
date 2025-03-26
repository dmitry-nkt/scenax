import 'reflect-metadata'

const AUTO_RUN_KEY = Symbol('scenario')

export function Scenario(): ClassDecorator {
    return target => {
        Reflect.defineMetadata(AUTO_RUN_KEY, true, target)
    }
}

export function isScenario(instance: any): boolean {
    return Reflect.getMetadata(AUTO_RUN_KEY, instance.constructor) === true
}
