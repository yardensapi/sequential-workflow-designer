import { DaemonExtension } from '../designer-extension';
import { KeyboardDaemon } from './keyboard-daemon';
export declare class KeyboardDaemonExtension implements DaemonExtension {
    readonly create: typeof KeyboardDaemon.create;
}
