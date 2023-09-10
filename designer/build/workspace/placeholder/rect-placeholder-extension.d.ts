import { Sequence } from '../../definition';
import { Vector } from '../../core';
import { PlaceholderExtension } from '../../designer-extension';
import { PlaceholderDirection, Placeholder } from '../component';
import { RectPlaceholderConfiguration } from './rect-placeholder-configuration';
export declare class RectPlaceholderExtension implements PlaceholderExtension {
    private readonly configuration;
    static create(configuration?: RectPlaceholderConfiguration): RectPlaceholderExtension;
    readonly gapSize: Vector;
    private constructor();
    createForGap(parent: SVGElement, parentSequence: Sequence, index: number): Placeholder;
    createForArea(parent: SVGElement, size: Vector, direction: PlaceholderDirection, parentSequence: Sequence, index: number): Placeholder;
}
