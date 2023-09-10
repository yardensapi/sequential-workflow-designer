import { Vector } from '../core/vector';
import { Step } from '../definition';
import { ComponentContext } from '../component-context';
import { DraggedComponent } from '../designer-extension';
export declare class DragStepView {
    readonly component: DraggedComponent;
    private readonly layer;
    static create(step: Step, theme: string, componentContext: ComponentContext): DragStepView;
    private constructor();
    setPosition(position: Vector): void;
    remove(): void;
}
