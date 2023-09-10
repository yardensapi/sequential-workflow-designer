import { DesignerApi } from '../api/designer-api';
import { Daemon } from '../designer-extension';
export declare class KeyboardDaemon implements Daemon {
    private readonly controlBarApi;
    static create(api: DesignerApi): KeyboardDaemon;
    private constructor();
    private readonly onKeyUp;
    destroy(): void;
}
