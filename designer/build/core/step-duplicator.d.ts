import { DefinitionWalker, Step } from '../definition';
import { UidGenerator } from '../designer-configuration';
export declare class StepDuplicator {
    private readonly uidGenerator;
    private readonly definitionWalker;
    constructor(uidGenerator: UidGenerator, definitionWalker: DefinitionWalker);
    duplicate(step: Step): Step;
}
