import { UiComponent } from '../designer-extension';
import { DesignerApi } from '../api/designer-api';
export declare class ControlBar implements UiComponent {
    private readonly view;
    private readonly controlBarApi;
    private readonly isUndoRedoSupported;
    static create(parent: HTMLElement, api: DesignerApi): UiComponent;
    private constructor();
    destroy(): void;
    private onResetButtonClicked;
    private onZoomInButtonClicked;
    private onZoomOutButtonClicked;
    private onMoveButtonClicked;
    private onUndoButtonClicked;
    private onRedoButtonClicked;
    private onDeleteButtonClicked;
    private refreshButtons;
    private refreshIsDragDisabled;
    private refreshUndoRedoAvailability;
    private refreshDeleteButtonVisibility;
}
