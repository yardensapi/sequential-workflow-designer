import { ComponentContext } from '../component-context';
import { StepExtensionResolver } from './step-extension-resolver';
import { StepComponent } from './step-component';
import { StepContext } from '../designer-extension';
export declare class StepComponentFactory {
    private readonly stepExtensionResolver;
    constructor(stepExtensionResolver: StepExtensionResolver);
    create(parentElement: SVGElement, stepContext: StepContext, componentContext: ComponentContext): StepComponent;
}
