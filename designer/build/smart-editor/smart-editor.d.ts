import { DesignerApi } from '../api/designer-api';
import { UiComponent } from '../designer-extension';
import { EditorsConfiguration } from '../designer-configuration';
export declare class SmartEditor implements UiComponent {
    private readonly view;
    private editorApi;
    private workspaceApi;
    static create(parent: HTMLElement, api: DesignerApi, configuration: EditorsConfiguration): SmartEditor;
    private constructor();
    private onToggleClicked;
    private setIsCollapsed;
    private onIsCollapsedChanged;
    private updateVisibility;
    destroy(): void;
}
