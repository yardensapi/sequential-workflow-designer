import { Sequence } from '../../definition';
import { BadgesResult, ClickDetails, ClickCommand, Component, Placeholder } from '../component';
import { ComponentContext } from '../../component-context';
import { StartStopRootComponentView } from './start-stop-root-component-view';
import { SequencePlaceIndicator } from '../../designer-extension';
import { StepComponent } from '../step-component';
export declare class StartStopRootComponent implements Component {
    readonly view: StartStopRootComponentView;
    static create(parentElement: SVGElement, sequence: Sequence, parentPlaceIndicator: SequencePlaceIndicator | null, context: ComponentContext): StartStopRootComponent;
    private constructor();
    resolveClick(click: ClickDetails): ClickCommand | null;
    findById(stepId: string): StepComponent | null;
    getPlaceholders(result: Placeholder[]): void;
    setIsDragging(isDragging: boolean): void;
    updateBadges(result: BadgesResult): void;
}
