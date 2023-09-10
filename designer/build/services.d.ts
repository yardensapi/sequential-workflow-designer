import { DesignerConfiguration } from './designer-configuration';
import { DesignerExtension } from './designer-extension';
export type Services = Required<DesignerExtension>;
export declare class ServicesResolver {
    static resolve(extensions: DesignerExtension[] | undefined, configuration: DesignerConfiguration): Services;
}
