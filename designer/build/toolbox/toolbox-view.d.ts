import { ToolboxApi } from '../api/toolbox-api';
import { ToolboxGroupConfiguration } from '../designer-configuration';
export declare class ToolboxView {
    private readonly header;
    private readonly body;
    private readonly filterInput;
    private readonly scrollBoxView;
    private readonly api;
    static create(parent: HTMLElement, api: ToolboxApi): ToolboxView;
    private headerToggleIcon?;
    private constructor();
    bindToggleClick(handler: () => void): void;
    bindFilterInputChange(handler: (value: string) => void): void;
    setIsCollapsed(isCollapsed: boolean): void;
    setGroups(groups: ToolboxGroupConfiguration[]): void;
    destroy(): void;
}
