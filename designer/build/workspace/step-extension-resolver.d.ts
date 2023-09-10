import { ComponentType, Step } from '../definition';
import { StepExtension } from '../designer-extension';
import { Services } from '../services';
export declare class StepExtensionResolver {
    private readonly dict;
    static create(services: Services): StepExtensionResolver;
    private constructor();
    resolve(componentType: ComponentType): StepExtension<Step>;
}
