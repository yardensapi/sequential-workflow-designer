import { Definition, DefinitionWalker, Sequence, Step } from './definition';
import { DesignerConfiguration } from './designer-configuration';
import { DesignerState } from './designer-state';
export declare class DefinitionModifier {
    private readonly definitionWalker;
    private readonly state;
    private readonly configuration;
    constructor(definitionWalker: DefinitionWalker, state: DesignerState, configuration: DesignerConfiguration);
    isDeletable(stepId: string): boolean;
    tryDelete(stepId: string): boolean;
    tryInsert(step: Step, targetSequence: Sequence, targetIndex: number): boolean;
    isDraggable(step: Step, parentSequence: Sequence): boolean;
    tryMove(sourceSequence: Sequence, step: Step, targetSequence: Sequence, targetIndex: number): boolean;
    isDuplicable(step: Step, parentSequence: Sequence): boolean;
    tryDuplicate(step: Step, parentSequence: Sequence): boolean;
    replaceDefinition(definition: Definition): void;
    updateDependantFields(): void;
}
