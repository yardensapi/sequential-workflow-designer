import { Vector } from '../../core';
export declare class ContextMenu {
    private readonly menu;
    private readonly elements;
    private readonly items;
    private readonly startTime;
    static create(position: Vector, theme: string, items: ContextMenuItems): ContextMenu;
    private isAttached;
    private constructor();
    private readonly mouseDown;
    private readonly mouseUp;
    private findIndex;
    tryDestroy(): void;
}
export type ContextMenuItems = (string | ContextMenuItem)[];
export interface ContextMenuItem {
    label: string;
    callback: () => void;
}
