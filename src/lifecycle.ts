import 'reflect-metadata'

export const LIFECYCLE_KEYS = {
    setup: Symbol('setup'),
    teardown: Symbol('teardown'),
    inject: Symbol('inject'),
    context: Symbol('context'),
}

export function Setup(): MethodDecorator {
    return (target, propertyKey) => {
        Reflect.defineMetadata(LIFECYCLE_KEYS.setup, true, target, propertyKey!)
    }
}

export function Teardown(): MethodDecorator {
    return (target, propertyKey) => {
        Reflect.defineMetadata(LIFECYCLE_KEYS.teardown, true, target, propertyKey!)
    }
}

export function Inject(): PropertyDecorator {
    return (target, propertyKey) => {
        const existing = Reflect.getMetadata(LIFECYCLE_KEYS.inject, target) || []
        Reflect.defineMetadata(LIFECYCLE_KEYS.inject, [...existing, propertyKey], target)
    }
}

export function Context(): PropertyDecorator {
    return (target, propertyKey) => {
        Reflect.defineMetadata(LIFECYCLE_KEYS.context, propertyKey, target)
    }
}

export function getLifecycleMeta(instance: any) {
    const proto = Object.getPrototypeOf(instance)

    const setup = Object.getOwnPropertyNames(proto).find(
        key => Reflect.getMetadata(LIFECYCLE_KEYS.setup, proto, key)
    )

    const teardown = Object.getOwnPropertyNames(proto).find(
        key => Reflect.getMetadata(LIFECYCLE_KEYS.teardown, proto, key)
    )

    const injectedProps = Reflect.getMetadata(LIFECYCLE_KEYS.inject, proto) || []
    const contextProp = Reflect.getMetadata(LIFECYCLE_KEYS.context, proto)

    return { setup, teardown, injectedProps, contextProp }
}
