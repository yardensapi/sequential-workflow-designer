import { WorkspaceApi } from '../../api/workspace-api';
import { WheelController } from '../../designer-extension';
export declare class ClassicWheelController implements WheelController {
    private readonly api;
    static create(api: WorkspaceApi): ClassicWheelController;
    private constructor();
    onWheel(e: WheelEvent): void;
}
