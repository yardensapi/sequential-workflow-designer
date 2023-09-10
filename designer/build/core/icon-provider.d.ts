import { StepDefinition, StepsConfiguration } from '../designer-configuration';
export declare class IconProvider {
    private readonly configuration;
    constructor(configuration: StepsConfiguration);
    getIconUrl(step: StepDefinition): string | null;
}
