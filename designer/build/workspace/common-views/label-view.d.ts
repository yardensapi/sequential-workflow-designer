import { LabelViewConfiguration } from './label-view-configuration';
export declare class LabelView {
    readonly g: SVGGElement;
    readonly width: number;
    readonly height: number;
    static create(parent: SVGElement, y: number, cfg: LabelViewConfiguration, text: string, theme: 'primary' | 'secondary'): LabelView;
    constructor(g: SVGGElement, width: number, height: number);
}
