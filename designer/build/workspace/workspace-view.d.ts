import { Vector } from '../core/vector';
import { Sequence } from '../definition';
import { SequencePlaceIndicator } from '../designer-extension';
import { ComponentContext } from '../component-context';
import { Component } from './component';
export declare class WorkspaceView {
    private readonly workspace;
    private readonly canvas;
    private readonly pattern;
    private readonly gridPattern;
    private readonly foreground;
    private readonly context;
    static create(parent: HTMLElement, componentContext: ComponentContext): WorkspaceView;
    private onResizeHandler;
    rootComponent?: Component;
    private constructor();
    render(sequence: Sequence, parentSequencePlaceIndicator: SequencePlaceIndicator | null): void;
    setPositionAndScale(position: Vector, scale: number): void;
    getCanvasPosition(): Vector;
    getCanvasSize(): Vector;
    bindClick(handler: (position: Vector, target: Element, buttonIndex: number) => void): void;
    bindContextMenu(handler: (position: Vector, target: Element) => void): void;
    bindWheel(handler: (e: WheelEvent) => void): void;
    destroy(): void;
    refreshSize(): void;
    private onResize;
}
