import { BadgesResult, ClickCommand, ClickDetails, Placeholder, SequenceComponent } from '../component';
import { DefaultSequenceComponentView } from './default-sequence-component-view';
import { ComponentContext } from '../../component-context';
import { StepComponent } from '../step-component';
import { SequenceContext } from '../../designer-extension';
export declare class DefaultSequenceComponent implements SequenceComponent {
    readonly view: DefaultSequenceComponentView;
    readonly hasOutput: boolean;
    static create(parentElement: SVGElement, sequenceContext: SequenceContext, context: ComponentContext): DefaultSequenceComponent;
    private constructor();
    resolveClick(click: ClickDetails): ClickCommand | null;
    findById(stepId: string): StepComponent | null;
    getPlaceholders(result: Placeholder[]): void;
    setIsDragging(isDragging: boolean): void;
    updateBadges(result: BadgesResult): void;
}
