import { Vector } from '../core/vector';
import { DesignerContext } from '../designer-context';
import { Placeholder } from './component';
import { WorkspaceController } from './workspace-controller';
import { SimpleEvent } from '../core/simple-event';
import { DesignerApi } from '../api/designer-api';
import { StepComponent } from './step-component';
export declare class Workspace implements WorkspaceController {
    private readonly view;
    private readonly definitionWalker;
    private readonly state;
    private readonly behaviorController;
    private readonly wheelController;
    private readonly contextMenuController;
    private readonly clickBehaviorResolver;
    private readonly viewportApi;
    private readonly services;
    static create(parent: HTMLElement, designerContext: DesignerContext, api: DesignerApi): Workspace;
    readonly onReady: SimpleEvent<void>;
    isValid: boolean;
    private selectedStepComponent;
    private validationErrorBadgeIndex;
    private constructor();
    updateRootComponent(): void;
    updateBadges(): void;
    getPlaceholders(): Placeholder[];
    getComponentByStepId(stepId: string): StepComponent;
    getCanvasPosition(): Vector;
    getCanvasSize(): Vector;
    getRootComponentSize(): Vector;
    updateCanvasSize(): void;
    destroy(): void;
    private onClick;
    private onWheel;
    private onContextMenu;
    private onIsDraggingChanged;
    private onViewportChanged;
    private onStateChanged;
    private trySelectStepComponent;
    private resolveClick;
    private getRootComponent;
}
