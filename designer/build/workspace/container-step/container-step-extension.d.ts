import { SequentialStep } from '../../definition';
import { StepExtension } from '../../designer-extension';
import { ContainerStepExtensionConfiguration } from './container-step-extension-configuration';
export declare class ContainerStepExtension implements StepExtension<SequentialStep> {
    private readonly configuration;
    static create(configuration?: ContainerStepExtensionConfiguration): ContainerStepExtension;
    readonly componentType = "container";
    private constructor();
    readonly createComponentView: (parentElement: SVGElement, stepContext: import("../../designer-extension").StepContext<import("sequential-workflow-model").Step>, viewContext: import("../../designer-extension").StepComponentViewContext) => import("..").StepComponentView;
}
