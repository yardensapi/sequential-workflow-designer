import { Vector } from '../core';
import { Placeholder } from './component';
import { StepComponent } from './step-component';
export interface WorkspaceController {
    getPlaceholders(): Placeholder[];
    getComponentByStepId(stepId: string): StepComponent;
    getCanvasPosition(): Vector;
    getCanvasSize(): Vector;
    getRootComponentSize(): Vector;
    updateBadges(): void;
    updateRootComponent(): void;
    updateCanvasSize(): void;
}
export declare class WorkspaceControllerWrapper implements WorkspaceController {
    private controller?;
    set(controller: WorkspaceController): void;
    private get;
    getPlaceholders(): Placeholder[];
    getComponentByStepId(stepId: string): StepComponent;
    getCanvasPosition(): Vector;
    getCanvasSize(): Vector;
    getRootComponentSize(): Vector;
    updateBadges(): void;
    updateRootComponent(): void;
    updateCanvasSize(): void;
}
