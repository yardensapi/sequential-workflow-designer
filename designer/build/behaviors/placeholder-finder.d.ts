import { Vector } from '../core/vector';
import { DesignerState } from '../designer-state';
import { Placeholder } from '../workspace/component';
export declare class PlaceholderFinder {
    private readonly placeholders;
    private readonly state;
    static create(placeholders: Placeholder[], state: DesignerState): PlaceholderFinder;
    private readonly clearCacheHandler;
    private cache?;
    private constructor();
    find(vLt: Vector, vWidth: number, vHeight: number): Placeholder | undefined;
    destroy(): void;
    private clearCache;
}
