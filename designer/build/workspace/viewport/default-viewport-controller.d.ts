import { WorkspaceApi } from '../../api';
import { Vector } from '../../core';
import { Viewport, ViewportController } from '../../designer-extension';
export declare class DefaultViewportController implements ViewportController {
    private readonly api;
    static create(api: WorkspaceApi): DefaultViewportController;
    private readonly animator;
    private constructor();
    setDefault(): void;
    zoom(direction: boolean): void;
    focusOnComponent(componentPosition: Vector, componentSize: Vector): void;
    animateTo(viewport: Viewport): void;
}
