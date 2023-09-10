import { DesignerState } from './designer-state';
import { DesignerConfiguration } from './designer-configuration';
import { DefinitionModifier } from './definition-modifier';
export declare class HistoryController {
    private readonly state;
    private readonly definitionModifier;
    private readonly stackSize;
    static create(state: DesignerState, definitionModifier: DefinitionModifier, configuration: DesignerConfiguration): HistoryController;
    private readonly stack;
    private currentIndex;
    constructor(state: DesignerState, definitionModifier: DefinitionModifier, stackSize: number);
    canUndo(): boolean;
    undo(): void;
    canRedo(): boolean;
    redo(): void;
    private remember;
    private commit;
}
