import 'reflect-metadata'

const HIERARCHY_KEYS = {
    suite: Symbol('suite'),
    parentSuite: Symbol('parentSuite'),
    subSuite: Symbol('subSuite'),
    layer: Symbol('layer'),
}

export function Suite(name: string): ClassDecorator & MethodDecorator {
    return (target, propertyKey?) => {
        Reflect.defineMetadata(HIERARCHY_KEYS.suite, name, propertyKey ? target : target.prototype, propertyKey ?? undefined)
    }
}

export function ParentSuite(name: string): ClassDecorator & MethodDecorator {
    return (target, propertyKey?) => {
        Reflect.defineMetadata(HIERARCHY_KEYS.parentSuite, name, propertyKey ? target : target.prototype, propertyKey ?? undefined)
    }
}

export function SubSuite(name: string): ClassDecorator & MethodDecorator {
    return (target, propertyKey?) => {
        Reflect.defineMetadata(HIERARCHY_KEYS.subSuite, name, propertyKey ? target : target.prototype, propertyKey ?? undefined)
    }
}

export function Layer(name: string): ClassDecorator & MethodDecorator {
    return (target, propertyKey?) => {
        Reflect.defineMetadata(HIERARCHY_KEYS.layer, name, propertyKey ? target : target.prototype, propertyKey ?? undefined)
    }
}

export const getHierarchyMeta = (instance: any, methodName?: string) => {
    const target = methodName ? instance : Object.getPrototypeOf(instance)
    const key = methodName ?? undefined
    return {
        suite: Reflect.getMetadata(HIERARCHY_KEYS.suite, target, key),
        parentSuite: Reflect.getMetadata(HIERARCHY_KEYS.parentSuite, target, key),
        subSuite: Reflect.getMetadata(HIERARCHY_KEYS.subSuite, target, key),
        layer: Reflect.getMetadata(HIERARCHY_KEYS.layer, target, key),
    }
}
