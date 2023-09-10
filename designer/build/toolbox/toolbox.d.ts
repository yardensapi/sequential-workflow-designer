import { ToolboxApi } from '../api';
import { UiComponent } from '../designer-extension';
export declare class Toolbox implements UiComponent {
    private readonly view;
    private readonly api;
    static create(root: HTMLElement, api: ToolboxApi): Toolbox;
    private filter?;
    private constructor();
    destroy(): void;
    private render;
    private onIsCollapsedChanged;
    private onToggleClicked;
    private onFilterInputChanged;
}
