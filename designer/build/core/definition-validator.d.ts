import { Sequence, Step } from '../definition';
import { ValidatorConfiguration } from '../designer-configuration';
import { DesignerState } from '../designer-state';
export declare class DefinitionValidator {
    private readonly configuration;
    private readonly state;
    constructor(configuration: ValidatorConfiguration | undefined, state: DesignerState);
    validateStep(step: Step, parentSequence: Sequence): boolean;
    validateRoot(): boolean;
}
