import { Vector } from '../core/vector';

export interface Behavior {
	onStart(position: Vector): void;
	onMove(delta: Vector): Behavior | void;
	onEnd(target: Element): void;
}
