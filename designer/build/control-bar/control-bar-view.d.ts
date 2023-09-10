export declare class ControlBarView {
    private readonly resetButton;
    private readonly zoomInButton;
    private readonly zoomOutButton;
    private readonly undoButton;
    private readonly redoButton;
    private readonly disableDragButton;
    private readonly deleteButton;
    static create(parent: HTMLElement, isUndoRedoSupported: boolean): ControlBarView;
    private constructor();
    bindResetButtonClick(handler: () => void): void;
    bindZoomInButtonClick(handler: () => void): void;
    bindZoomOutButtonClick(handler: () => void): void;
    bindUndoButtonClick(handler: () => void): void;
    bindRedoButtonClick(handler: () => void): void;
    bindDisableDragButtonClick(handler: () => void): void;
    bindDeleteButtonClick(handler: () => void): void;
    setIsDeleteButtonHidden(isHidden: boolean): void;
    setDisableDragButtonDisabled(isDisabled: boolean): void;
    setUndoButtonDisabled(isDisabled: boolean): void;
    setRedoButtonDisabled(isDisabled: boolean): void;
}
