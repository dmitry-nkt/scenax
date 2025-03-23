import 'reflect-metadata'

const AUTO_RUN_KEY = Symbol('auto-run')

export function AutoRun(): ClassDecorator {
    return target => {
        Reflect.defineMetadata(AUTO_RUN_KEY, true, target)
    }
}

export function isAutoRun(instance: any): boolean {
    return Reflect.getMetadata(AUTO_RUN_KEY, instance.constructor) === true
}
