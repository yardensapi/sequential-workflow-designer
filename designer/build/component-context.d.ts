import { DefinitionValidator } from './core/definition-validator';
import { IconProvider } from './core/icon-provider';
import { StepsConfiguration, ValidatorConfiguration } from './designer-configuration';
import { PlaceholderController } from './designer-extension';
import { DesignerState } from './designer-state';
import { Services } from './services';
import { StepComponentFactory } from './workspace/step-component-factory';
import { StepExtensionResolver } from './workspace/step-extension-resolver';
export declare class ComponentContext {
    readonly validator: DefinitionValidator;
    readonly iconProvider: IconProvider;
    readonly placeholderController: PlaceholderController;
    readonly stepComponentFactory: StepComponentFactory;
    readonly services: Services;
    static create(stepsConfiguration: StepsConfiguration, validatorConfiguration: ValidatorConfiguration | undefined, state: DesignerState, stepExtensionResolver: StepExtensionResolver, services: Services): ComponentContext;
    private constructor();
}
