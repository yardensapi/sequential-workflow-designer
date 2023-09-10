import { ComponentContext } from '../component-context';
import { Sequence, Step } from '../definition';
import { StepContext } from '../designer-extension';
import { BadgesResult, ClickDetails, ClickCommand, Component, Placeholder, StepComponentView } from './component';
export declare class StepComponent implements Component {
    readonly view: StepComponentView;
    readonly step: Step;
    readonly parentSequence: Sequence;
    readonly hasOutput: boolean;
    private readonly badges;
    static create(view: StepComponentView, stepContext: StepContext, componentContext: ComponentContext): StepComponent;
    private isDisabled;
    private constructor();
    findById(stepId: string): StepComponent | null;
    resolveClick(click: ClickDetails): ClickCommand | null;
    getPlaceholders(result: Placeholder[]): void;
    setIsDragging(isDragging: boolean): void;
    setIsSelected(isSelected: boolean): void;
    setIsDisabled(isDisabled: boolean): void;
    updateBadges(result: BadgesResult): void;
}
