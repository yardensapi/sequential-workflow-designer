import { DesignerApi } from '../api/designer-api';
import { EditorsConfiguration } from '../designer-configuration';
import { UiComponent, UiComponentExtension } from '../designer-extension';
export declare class SmartEditorExtension implements UiComponentExtension {
    private readonly configuration;
    constructor(configuration: EditorsConfiguration);
    create(root: HTMLElement, api: DesignerApi): UiComponent;
}
