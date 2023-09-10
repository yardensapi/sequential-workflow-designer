import { ViewportApi } from '../../api/viewport-api';
import { DefinitionModifier } from '../../definition-modifier';
import { DesignerState } from '../../designer-state';
import { ClickCommand } from '../component';
import { ContextMenuItems } from './context-menu';
export declare class ContextMenuItemsBuilder {
    static build(commandOrNull: ClickCommand | null, viewportApi: ViewportApi, definitionModifier: DefinitionModifier, state: DesignerState): ContextMenuItems;
}
