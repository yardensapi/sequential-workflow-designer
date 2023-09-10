import { Vector } from '../../core';
import { Sequence } from '../../definition';
import { Placeholder, PlaceholderDirection } from '../component';
import { RectPlaceholderConfiguration } from './rect-placeholder-configuration';
import { RectPlaceholderView } from './rect-placeholder-view';
export declare class RectPlaceholder implements Placeholder {
    readonly view: RectPlaceholderView;
    readonly parentSequence: Sequence;
    readonly index: number;
    static create(parent: SVGElement, size: Vector, direction: PlaceholderDirection, sequence: Sequence, index: number, configuration: RectPlaceholderConfiguration): RectPlaceholder;
    constructor(view: RectPlaceholderView, parentSequence: Sequence, index: number);
    getClientRect(): DOMRect;
    setIsHover(isHover: boolean): void;
    setIsVisible(isVisible: boolean): void;
    resolveClick(): null;
}
