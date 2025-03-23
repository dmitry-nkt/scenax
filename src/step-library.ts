import 'reflect-metadata'

const STEP_LIB_KEY = Symbol('step-library')

export function StepLibrary(): ClassDecorator {
    return target => {
        Reflect.defineMetadata(STEP_LIB_KEY, true, target)
    }
}

export function isStepLibrary(instance: any): boolean {
    return Reflect.getMetadata(STEP_LIB_KEY, instance.constructor) === true
}
