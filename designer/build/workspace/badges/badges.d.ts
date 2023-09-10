import { ComponentContext } from '../../component-context';
import { Vector } from '../../core';
import { StepContext } from '../../designer-extension';
import { BadgesResult, ClickCommand, ClickDetails, StepComponentView } from '../component';
export declare class Badges {
    private readonly g;
    private readonly position;
    private readonly badges;
    static createForStep(stepContext: StepContext, view: StepComponentView, componentContext: ComponentContext): Badges;
    static createForRoot(parentElement: SVGGElement, position: Vector, componentContext: ComponentContext): Badges;
    private constructor();
    update(result: BadgesResult): void;
    resolveClick(click: ClickDetails): ClickCommand | null;
}
