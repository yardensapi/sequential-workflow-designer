import { Vector } from '../core/vector';
import { Behavior } from './behavior';
export declare class BehaviorController {
    private state?;
    start(startPosition: Vector, behavior: Behavior): void;
    private readonly onMouseMove;
    private readonly onTouchMove;
    private readonly onMouseUp;
    private readonly onTouchEnd;
    private readonly onTouchStart;
    private move;
    private stop;
}
