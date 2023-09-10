import { Step } from './definition';
import { DesignerExtension, StepExtension } from './designer-extension';
import { ContainerStepExtensionConfiguration } from './workspace/container-step/container-step-extension-configuration';
import { SwitchStepExtensionConfiguration } from './workspace/switch-step/switch-step-extension-configuration';
import { TaskStepExtensionConfiguration } from './workspace/task-step/task-step-extension-configuration';
export interface StepsDesignerExtensionConfiguration {
    container?: ContainerStepExtensionConfiguration;
    switch?: SwitchStepExtensionConfiguration;
    task?: TaskStepExtensionConfiguration;
}
export declare class StepsDesignerExtension implements DesignerExtension {
    readonly steps: StepExtension<Step>[];
    static create(configuration: StepsDesignerExtensionConfiguration): StepsDesignerExtension;
    protected constructor(steps: StepExtension<Step>[]);
}
/**
 * @deprecated Use `StepsDesignerExtension` instead.
 */
export declare class StepsExtension extends StepsDesignerExtension {
}
/**
 * @deprecated Use `StepsDesignerExtensionConfiguration` instead.
 */
export interface StepsExtensionConfiguration extends StepsDesignerExtensionConfiguration {
}
