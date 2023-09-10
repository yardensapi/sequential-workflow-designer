import { ComponentContext } from '../../../component-context';
import { StepContext } from '../../../designer-extension';
import { Badge } from '../../component';
import { ValidationErrorBadgeView } from './validation-error-badge-view';
import { ValidationErrorBadgeViewConfiguration } from './validation-error-badge-view-configuration';
export declare class ValidationErrorBadge implements Badge {
    private readonly parentElement;
    private readonly validator;
    private readonly configuration;
    static createForStep(parentElement: SVGElement, stepContext: StepContext, componentContext: ComponentContext, configuration: ValidationErrorBadgeViewConfiguration): ValidationErrorBadge;
    static createForRoot(parentElement: SVGElement, componentContext: ComponentContext, configuration: ValidationErrorBadgeViewConfiguration): ValidationErrorBadge;
    view: ValidationErrorBadgeView | null;
    private constructor();
    update(result: unknown): unknown;
    resolveClick(): null;
}
