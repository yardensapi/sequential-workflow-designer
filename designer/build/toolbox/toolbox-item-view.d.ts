import { ToolboxApi } from '../api/toolbox-api';
import { StepDefinition } from '../designer-configuration';
export declare class ToolboxItemView {
    private readonly root;
    static create(parent: HTMLElement, step: StepDefinition, api: ToolboxApi): ToolboxItemView;
    private constructor();
    bindMousedown(handler: (e: MouseEvent) => void): void;
    bindTouchstart(handler: (e: TouchEvent) => void): void;
    bindContextMenu(handler: (e: MouseEvent) => void): void;
}
