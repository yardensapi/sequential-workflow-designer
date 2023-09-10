import { Sequence, Step } from '../definition';
export declare class SequenceModifier {
    static tryMoveStep(sourceSequence: Sequence, step: Step, targetSequence: Sequence, targetIndex: number): (() => void) | null;
    static insertStep(step: Step, targetSequence: Sequence, targetIndex: number): void;
    static deleteStep(step: Step, parentSequence: Sequence): void;
}
