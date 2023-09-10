import { ViewportController } from '../designer-extension';
import { WorkspaceControllerWrapper } from '../workspace/workspace-controller';
export declare class ViewportApi {
    private readonly workspaceController;
    private readonly viewportController;
    constructor(workspaceController: WorkspaceControllerWrapper, viewportController: ViewportController);
    resetViewport(): void;
    zoom(direction: boolean): void;
    moveViewportToStep(stepId: string): void;
}
