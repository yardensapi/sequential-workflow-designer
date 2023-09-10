import { ComponentView, Placeholder } from '../component';
import { ComponentContext } from '../../component-context';
import { SequenceContext } from '../../designer-extension';
import { StepComponent } from '../step-component';
export declare class DefaultSequenceComponentView implements ComponentView {
    readonly g: SVGGElement;
    readonly width: number;
    readonly height: number;
    readonly joinX: number;
    readonly placeholders: Placeholder[];
    readonly components: StepComponent[];
    static create(parent: SVGElement, sequenceContext: SequenceContext, componentContext: ComponentContext): DefaultSequenceComponentView;
    private constructor();
    setIsDragging(isDragging: boolean): void;
    hasOutput(): boolean;
}
