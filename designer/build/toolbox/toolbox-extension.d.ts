import { DesignerApi } from '../api/designer-api';
import { UiComponent, UiComponentExtension } from '../designer-extension';
export declare class ToolboxExtension implements UiComponentExtension {
    create(root: HTMLElement, api: DesignerApi): UiComponent;
}
