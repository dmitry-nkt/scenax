import 'reflect-metadata'
import { step as runStep } from './dsl'

const STEP_KEY = Symbol('step')

export function Step(name?: string): MethodDecorator {
    return (target, propertyKey, descriptor) => {
        Reflect.defineMetadata(STEP_KEY, name ?? propertyKey?.toString(), target, propertyKey!)

        const original = descriptor.value!
        descriptor.value = async function (...args: any[]) {
            const stepName = Reflect.getMetadata(STEP_KEY, target, propertyKey!)
            return await runStep(stepName, () => original.apply(this, args))
        }
    }
}
