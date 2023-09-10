import { Behavior } from '../behavior';
export interface PressingBehaviorHandler {
    handle(): void;
}
export declare class PressingBehavior implements Behavior {
    private readonly clickedElement;
    private readonly handler;
    static create(clickedElement: Element, handler: PressingBehaviorHandler): PressingBehavior;
    private constructor();
    onStart(): void;
    onMove(): void;
    onEnd(interrupt: boolean, element: Element | null): void;
}
