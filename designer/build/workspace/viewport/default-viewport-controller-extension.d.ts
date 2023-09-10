import { ViewportControllerExtension } from '../../designer-extension';
import { DefaultViewportController } from './default-viewport-controller';
export declare class DefaultViewportControllerExtension implements ViewportControllerExtension {
    readonly create: typeof DefaultViewportController.create;
}
