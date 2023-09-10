import { GlobalEditorProvider, StepEditorProvider } from '../designer-configuration';
import { EditorApi } from '../api';
export declare class Editor {
    private readonly view;
    private readonly renderer;
    static create(parent: HTMLElement, api: EditorApi, stepEditorClassName: string, stepEditorProvider: StepEditorProvider, globalEditorClassName: string, globalEditorProvider: GlobalEditorProvider): Editor;
    private constructor();
    destroy(): void;
}
