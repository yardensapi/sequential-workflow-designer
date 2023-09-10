import { EditorApi } from '../api';
import { EditorsConfiguration } from '../designer-configuration';
export declare class SmartEditorView {
    private readonly root;
    private readonly toggle;
    private readonly editor;
    static create(parent: HTMLElement, api: EditorApi, configuration: EditorsConfiguration): SmartEditorView;
    private toggleIcon?;
    private constructor();
    bindToggleClick(handler: () => void): void;
    setIsCollapsed(isCollapsed: boolean): void;
    destroy(): void;
}
