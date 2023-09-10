import { DesignerContext } from '../designer-context';
import { DesignerState } from '../designer-state';
import { ClickCommand } from '../workspace';
import { Behavior } from './behavior';
export declare class ClickBehaviorResolver {
    private readonly designerContext;
    private readonly state;
    constructor(designerContext: DesignerContext, state: DesignerState);
    resolve(commandOrNull: ClickCommand | null, element: Element, forceDisableDrag: boolean): Behavior;
}
