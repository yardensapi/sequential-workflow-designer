import { Vector } from '../../core';
import { Viewport } from '../../designer-extension';
export declare class CenteredViewportCalculator {
    static center(margin: number, canvasSize: Vector, rootComponentSize: Vector): Viewport;
    static focusOnComponent(canvasSize: Vector, viewport: Viewport, componentPosition: Vector, componentSize: Vector): Viewport;
}
