import { Vector } from '../../core';
import { Grid } from '../../designer-extension';
export declare class LineGrid implements Grid {
    readonly size: Vector;
    readonly element: SVGPathElement;
    static create(size: Vector): LineGrid;
    private constructor();
    setScale(_: number, scaledSize: Vector): void;
}
