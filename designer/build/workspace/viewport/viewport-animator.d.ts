import { WorkspaceApi } from '../../api';
import { Viewport } from '../../designer-extension';
export declare class ViewportAnimator {
    private readonly api;
    private animation?;
    constructor(api: WorkspaceApi);
    execute(target: Viewport): void;
}
