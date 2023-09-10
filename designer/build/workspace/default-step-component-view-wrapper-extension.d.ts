import { StepComponentViewWrapperExtension } from '../designer-extension';
import { StepComponentView } from './component';
export declare class DefaultStepComponentViewWrapperExtension implements StepComponentViewWrapperExtension {
    readonly wrap: (view: StepComponentView) => StepComponentView;
}
