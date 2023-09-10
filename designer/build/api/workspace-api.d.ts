import { Vector } from '../core';
import { Viewport } from '../designer-extension';
import { DesignerState } from '../designer-state';
import { WorkspaceControllerWrapper } from '../workspace/workspace-controller';
export declare class WorkspaceApi {
    private readonly state;
    private readonly workspaceController;
    constructor(state: DesignerState, workspaceController: WorkspaceControllerWrapper);
    getCanvasPosition(): Vector;
    getCanvasSize(): Vector;
    getRootComponentSize(): Vector;
    getViewport(): Viewport;
    setViewport(viewport: Viewport): void;
    updateRootComponent(): void;
    updateBadges(): void;
    updateCanvasSize(): void;
}
