import { Vector } from '../../core/vector';
import { ClickDetails } from '../component';
export declare class RegionView {
    private readonly lines;
    private readonly width;
    private readonly height;
    static create(parent: SVGElement, widths: number[], height: number): RegionView;
    constructor(lines: SVGLineElement[], width: number, height: number);
    getClientPosition(): Vector;
    resolveClick(click: ClickDetails): boolean;
    setIsSelected(isSelected: boolean): void;
}
