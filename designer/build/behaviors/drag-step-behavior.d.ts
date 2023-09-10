import { Vector } from '../core/vector';
import { Step } from '../definition';
import { DesignerContext } from '../designer-context';
import { Behavior } from './behavior';
import { StepComponent } from '../workspace/step-component';
export declare class DragStepBehavior implements Behavior {
    private readonly view;
    private readonly workspaceController;
    private readonly designerState;
    private readonly step;
    private readonly definitionModifier;
    private readonly draggedStepComponent?;
    static create(designerContext: DesignerContext, step: Step, draggedStepComponent?: StepComponent): DragStepBehavior;
    private state?;
    private currentPlaceholder?;
    private constructor();
    onStart(position: Vector): void;
    onMove(delta: Vector): void;
    onEnd(interrupt: boolean): void;
}
