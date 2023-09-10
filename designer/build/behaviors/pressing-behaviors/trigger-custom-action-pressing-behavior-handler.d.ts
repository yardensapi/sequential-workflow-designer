import { DesignerContext } from '../../designer-context';
import { TriggerCustomActionClickCommand } from '../../workspace';
import { PressingBehaviorHandler } from './pressing-behavior';
export declare class TriggerCustomActionPressingBehaviorHandler implements PressingBehaviorHandler {
    private readonly command;
    private readonly designerContext;
    constructor(command: TriggerCustomActionClickCommand, designerContext: DesignerContext);
    handle(): void;
    private createContext;
    private notifyStepChanged;
}
