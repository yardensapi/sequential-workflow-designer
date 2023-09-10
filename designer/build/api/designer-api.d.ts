import { DesignerContext } from '../designer-context';
import { ControlBarApi } from './control-bar-api';
import { EditorApi } from './editor-api';
import { PathBarApi } from './path-bar-api';
import { ToolboxApi } from './toolbox-api';
import { ViewportApi } from './viewport-api';
import { WorkspaceApi } from './workspace-api';
export declare class DesignerApi {
    readonly controlBar: ControlBarApi;
    readonly toolbox: ToolboxApi;
    readonly editor: EditorApi;
    readonly workspace: WorkspaceApi;
    readonly viewport: ViewportApi;
    readonly pathBar: PathBarApi;
    static create(context: DesignerContext): DesignerApi;
    private constructor();
}
