import { GridExtension } from '../../designer-extension';
import { LineGrid } from './line-grid';
import { LineGridConfiguration } from './line-grid-configuration';
export declare class LineGridExtension implements GridExtension {
    private readonly configuration;
    static create(configuration?: LineGridConfiguration): LineGridExtension;
    private constructor();
    create(): LineGrid;
}
