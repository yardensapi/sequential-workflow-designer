import { BadgeView } from '../../component';
import { ValidationErrorBadgeViewConfiguration } from './validation-error-badge-view-configuration';
export declare class ValidationErrorBadgeView implements BadgeView {
    private readonly parent;
    readonly g: SVGGElement;
    readonly width: number;
    readonly height: number;
    static create(parent: SVGElement, cfg: ValidationErrorBadgeViewConfiguration): ValidationErrorBadgeView;
    constructor(parent: SVGElement, g: SVGGElement, width: number, height: number);
    destroy(): void;
}
