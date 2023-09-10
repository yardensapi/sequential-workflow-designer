import { Vector } from '../core/vector';
import { DesignerState } from '../designer-state';
import { Behavior } from './behavior';
export declare class MoveViewportBehavior implements Behavior {
    private readonly startPosition;
    private readonly resetSelectedStep;
    private readonly state;
    static create(state: DesignerState, resetSelectedStep: boolean): MoveViewportBehavior;
    private constructor();
    onStart(): void;
    onMove(delta: Vector): void;
    onEnd(): void;
}
