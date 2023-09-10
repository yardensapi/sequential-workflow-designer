import { DefinitionModifier } from '../definition-modifier';
import { DesignerState } from '../designer-state';
import { HistoryController } from '../history-controller';
import { ViewportApi } from './viewport-api';
export declare class ControlBarApi {
    private readonly state;
    private readonly historyController;
    private readonly definitionModifier;
    private readonly viewportApi;
    constructor(state: DesignerState, historyController: HistoryController | undefined, definitionModifier: DefinitionModifier, viewportApi: ViewportApi);
    /**
     * @deprecated Don't use this method
     */
    subscribe(handler: () => void): void;
    resetViewport(): void;
    zoomIn(): void;
    zoomOut(): void;
    isDragDisabled(): boolean;
    toggleIsDragDisabled(): void;
    isUndoRedoSupported(): boolean;
    tryUndo(): boolean;
    canUndo(): boolean;
    tryRedo(): boolean;
    canRedo(): boolean;
    tryDelete(): boolean;
    canDelete(): boolean;
}
