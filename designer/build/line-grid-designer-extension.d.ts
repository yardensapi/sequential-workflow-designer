import { DesignerExtension } from './designer-extension';
import { LineGridConfiguration } from './workspace/grid/line-grid-configuration';
import { LineGridExtension } from './workspace/grid/line-grid-extension';
export declare class LineGridDesignerExtension implements DesignerExtension {
    readonly grid: LineGridExtension;
    static create(configuration?: LineGridConfiguration): DesignerExtension;
    private constructor();
}
