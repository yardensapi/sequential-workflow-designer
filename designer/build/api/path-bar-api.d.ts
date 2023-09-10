import { DefinitionWalker } from '../definition';
import { DesignerState } from '../designer-state';
export declare class PathBarApi {
    private readonly state;
    private readonly definitionWalker;
    constructor(state: DesignerState, definitionWalker: DefinitionWalker);
    /**
     * @deprecated Don't use this method
     */
    subscribe(handler: () => void): void;
    setFolderPath(path: string[]): void;
    getFolderPath(): string[];
    getFolderPathStepNames(): string[];
}
