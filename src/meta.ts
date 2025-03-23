// decorators/meta.ts
import 'reflect-metadata'

export const META_KEYS = {
    description: Symbol('description'),
    owner: Symbol('owner'),
    tag: Symbol('tag'),
    severity: Symbol('severity'),
}

export function Description(text: string): MethodDecorator & ClassDecorator {
    return (target, propertyKey?) => {
        Reflect.defineMetadata(META_KEYS.description, text, propertyKey ? target : target.prototype, propertyKey ?? undefined)
    }
}

export function Owner(name: string): MethodDecorator & ClassDecorator {
    return (target, propertyKey?) => {
        Reflect.defineMetadata(META_KEYS.owner, name, propertyKey ? target : target.prototype, propertyKey ?? undefined)
    }
}

export function Tag(tag: string): MethodDecorator & ClassDecorator {
    return (target, propertyKey?) => {
        const existing: string[] = Reflect.getMetadata(META_KEYS.tag, propertyKey ? target : target.prototype, propertyKey ?? undefined) || []
        Reflect.defineMetadata(META_KEYS.tag, [...existing, tag], propertyKey ? target : target.prototype, propertyKey ?? undefined)
    }
}

export function Severity(level: 'trivial' | 'minor' | 'normal' | 'critical' | 'blocker'): MethodDecorator & ClassDecorator {
    return (target, propertyKey?) => {
        Reflect.defineMetadata(META_KEYS.severity, level, propertyKey ? target : target.prototype, propertyKey ?? undefined)
    }
}

export const getMetaFor = (instance: any, methodName?: string) => {
    const target = methodName ? instance : Object.getPrototypeOf(instance)
    const key = methodName ?? undefined
    return {
        description: Reflect.getMetadata(META_KEYS.description, target, key),
        owner: Reflect.getMetadata(META_KEYS.owner, target, key),
        tags: Reflect.getMetadata(META_KEYS.tag, target, key) || [],
        severity: Reflect.getMetadata(META_KEYS.severity, target, key),
    }
}
