import 'reflect-metadata'

const CLASS_HOOK_KEYS = {
    beforeAll: Symbol('beforeAll'),
    afterAll: Symbol('afterAll')
}

export function BeforeAll(): MethodDecorator {
    return (target, propertyKey) => {
        Reflect.defineMetadata(CLASS_HOOK_KEYS.beforeAll, true, target, propertyKey!)
    }
}

export function AfterAll(): MethodDecorator {
    return (target, propertyKey) => {
        Reflect.defineMetadata(CLASS_HOOK_KEYS.afterAll, true, target, propertyKey!)
    }
}

export function getClassHookMethods(instance: any) {
    const proto = Object.getPrototypeOf(instance)
    const beforeAll = Object.getOwnPropertyNames(proto).find(key =>
        Reflect.getMetadata(CLASS_HOOK_KEYS.beforeAll, proto, key)
    )
    const afterAll = Object.getOwnPropertyNames(proto).find(key =>
        Reflect.getMetadata(CLASS_HOOK_KEYS.afterAll, proto, key)
    )
    return { beforeAll, afterAll }
}
