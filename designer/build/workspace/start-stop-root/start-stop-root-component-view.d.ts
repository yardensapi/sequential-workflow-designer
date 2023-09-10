import { Sequence } from '../../definition';
import { ComponentView, Placeholder, SequenceComponent } from '../component';
import { ComponentContext } from '../../component-context';
import { SequencePlaceIndicator } from '../../designer-extension';
import { Badges } from '../badges/badges';
export declare class StartStopRootComponentView implements ComponentView {
    readonly g: SVGGElement;
    readonly width: number;
    readonly height: number;
    readonly joinX: number;
    readonly component: SequenceComponent;
    readonly startPlaceholder: Placeholder | null;
    readonly endPlaceholder: Placeholder | null;
    readonly badges: Badges;
    static create(parent: SVGElement, sequence: Sequence, parentPlaceIndicator: SequencePlaceIndicator | null, context: ComponentContext): StartStopRootComponentView;
    private constructor();
    destroy(): void;
}
