import { DesignerContext } from '../../designer-context';
import { PressingBehaviorHandler } from './pressing-behavior';
export declare class RerenderStepPressingBehaviorHandler implements PressingBehaviorHandler {
    private readonly designerContext;
    constructor(designerContext: DesignerContext);
    handle(): void;
}
