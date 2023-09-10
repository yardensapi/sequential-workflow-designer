import { BranchedStep } from '../../definition';
import { StepExtension } from '../../designer-extension';
import { SwitchStepExtensionConfiguration } from './switch-step-extension-configuration';
export declare class SwitchStepExtension implements StepExtension<BranchedStep> {
    private readonly configuration;
    static create(configuration?: SwitchStepExtensionConfiguration): SwitchStepExtension;
    readonly componentType = "switch";
    private constructor();
    readonly createComponentView: (parentElement: SVGElement, stepContext: import("../../designer-extension").StepContext<import("sequential-workflow-model").Step>, viewContext: import("../../designer-extension").StepComponentViewContext) => import("..").StepComponentView;
}
