import { SimpleEvent } from './core/simple-event';
import { Definition } from './definition';
import { Viewport } from './designer-extension';
export interface DefinitionChangedEvent {
    changeType: DefinitionChangeType;
    stepId: string | null;
}
export declare enum DefinitionChangeType {
    stepNameChanged = 1,
    stepPropertyChanged = 2,
    stepChildrenChanged = 3,
    stepDeleted = 4,
    stepMoved = 5,
    stepInserted = 6,
    globalPropertyChanged = 7,
    rootReplaced = 8
}
export declare class DesignerState {
    definition: Definition;
    isReadonly: boolean;
    isToolboxCollapsed: boolean;
    isEditorCollapsed: boolean;
    readonly onViewportChanged: SimpleEvent<Viewport>;
    readonly onSelectedStepIdChanged: SimpleEvent<string | null>;
    readonly onFolderPathChanged: SimpleEvent<string[]>;
    readonly onIsReadonlyChanged: SimpleEvent<boolean>;
    readonly onIsDraggingChanged: SimpleEvent<boolean>;
    readonly onIsDragDisabledChanged: SimpleEvent<boolean>;
    readonly onDefinitionChanged: SimpleEvent<DefinitionChangedEvent>;
    readonly onIsToolboxCollapsedChanged: SimpleEvent<boolean>;
    readonly onIsEditorCollapsedChanged: SimpleEvent<boolean>;
    viewport: Viewport;
    selectedStepId: string | null;
    folderPath: string[];
    isDragging: boolean;
    isDragDisabled: boolean;
    constructor(definition: Definition, isReadonly: boolean, isToolboxCollapsed: boolean, isEditorCollapsed: boolean);
    setSelectedStepId(stepId: string | null): void;
    pushStepIdToFolderPath(stepId: string): void;
    setFolderPath(path: string[]): void;
    tryGetLastStepIdFromFolderPath(): string | null;
    setDefinition(definition: Definition): void;
    notifyDefinitionChanged(changeType: DefinitionChangeType, stepId: string | null): void;
    setViewport(viewport: Viewport): void;
    setIsReadonly(isReadonly: boolean): void;
    setIsDragging(isDragging: boolean): void;
    toggleIsDragDisabled(): void;
    setIsToolboxCollapsed(isCollapsed: boolean): void;
    setIsEditorCollapsed(isCollapsed: boolean): void;
}
