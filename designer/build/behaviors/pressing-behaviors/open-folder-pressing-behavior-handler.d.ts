import { DesignerContext } from '../../designer-context';
import { OpenFolderClickCommand } from '../../workspace';
import { PressingBehaviorHandler } from './pressing-behavior';
export declare class OpenFolderPressingBehaviorHandler implements PressingBehaviorHandler {
    private readonly command;
    private readonly designerContext;
    constructor(command: OpenFolderClickCommand, designerContext: DesignerContext);
    handle(): void;
}
