import { Vector } from '../../core';
import { Viewport } from '../../designer-extension';
export declare class QuantifiedScaleViewportCalculator {
    static zoom(current: Viewport, direction: boolean): Viewport;
    static zoomByWheel(current: Viewport, e: WheelEvent, canvasPosition: Vector): Viewport | null;
}
