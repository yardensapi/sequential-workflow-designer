import { Step } from '../../definition';
import { StepExtension } from '../../designer-extension';
import { TaskStepExtensionConfiguration } from './task-step-extension-configuration';
export declare class TaskStepExtension implements StepExtension<Step> {
    private readonly configuration;
    static create(configuration?: TaskStepExtensionConfiguration): TaskStepExtension;
    readonly componentType = "task";
    private constructor();
    readonly createComponentView: (parentElement: SVGElement, stepContext: import("../../designer-extension").StepContext<Step>, viewContext: import("../../designer-extension").StepComponentViewContext) => import("..").StepComponentView;
}
