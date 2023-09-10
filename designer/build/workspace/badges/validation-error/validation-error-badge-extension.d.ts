import { Step } from '../../../definition';
import { ComponentContext } from '../../../component-context';
import { BadgeExtension, StepContext } from '../../../designer-extension';
import { Badge } from '../../component';
import { ValidationErrorBadgeExtensionConfiguration } from './validation-error-badge-extension-configuration';
export declare class ValidationErrorBadgeExtension implements BadgeExtension {
    private readonly configuration;
    static create(configuration?: ValidationErrorBadgeExtensionConfiguration): ValidationErrorBadgeExtension;
    readonly id = "validationError";
    private constructor();
    createForStep(parentElement: SVGElement, stepContext: StepContext<Step>, componentContext: ComponentContext): Badge;
    createForRoot(parentElement: SVGElement, componentContext: ComponentContext): Badge;
    readonly createStartValue: () => boolean;
}
