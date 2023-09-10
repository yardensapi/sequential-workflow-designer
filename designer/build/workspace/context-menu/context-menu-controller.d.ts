import { ViewportApi } from '../../api/viewport-api';
import { Vector } from '../../core';
import { DefinitionModifier } from '../../definition-modifier';
import { DesignerConfiguration } from '../../designer-configuration';
import { DesignerState } from '../../designer-state';
import { ClickCommand } from '../component';
export declare class ContextMenuController {
    private readonly theme;
    private readonly viewportApi;
    private readonly definitionModifier;
    private readonly state;
    private readonly configuration;
    private last?;
    constructor(theme: string, viewportApi: ViewportApi, definitionModifier: DefinitionModifier, state: DesignerState, configuration: DesignerConfiguration);
    tryOpen(position: Vector, commandOrNull: ClickCommand | null): void;
    destroy(): void;
}
