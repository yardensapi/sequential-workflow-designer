import { ToolboxApi } from '../api/toolbox-api';
import { StepDefinition } from '../designer-configuration';
export declare class ToolboxItem {
    private readonly step;
    private readonly api;
    static create(parent: HTMLElement, step: StepDefinition, api: ToolboxApi): ToolboxItem;
    private constructor();
    private onTouchstart;
    private onMousedown;
    private onContextMenu;
    private tryDrag;
}
