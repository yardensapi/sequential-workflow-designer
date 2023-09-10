import { Step } from '../definition';
import { ComponentContext } from '../component-context';
import { StepComponentViewContext, StepContext } from '../designer-extension';
export declare class StepComponentViewContextFactory {
    static create<S extends Step>(stepContext: StepContext<S>, componentContext: ComponentContext): StepComponentViewContext;
}
