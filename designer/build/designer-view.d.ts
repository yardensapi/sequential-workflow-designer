import { DesignerApi } from './api/designer-api';
import { DesignerContext } from './designer-context';
import { Daemon, UiComponent } from './designer-extension';
import { LayoutController } from './layout-controller';
import { Workspace } from './workspace/workspace';
export declare class DesignerView {
    private readonly root;
    private readonly layoutController;
    readonly workspace: Workspace;
    private readonly uiComponents;
    private readonly daemons;
    static create(parent: HTMLElement, designerContext: DesignerContext, api: DesignerApi): DesignerView;
    private readonly onResizeHandler;
    constructor(root: HTMLElement, layoutController: LayoutController, workspace: Workspace, uiComponents: UiComponent[], daemons: Daemon[]);
    destroy(): void;
    private onResize;
    private reloadLayout;
}
export type KeyUpHandler = (e: KeyboardEvent) => void;
