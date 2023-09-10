import { WheelControllerExtension } from '../../designer-extension';
import { ClassicWheelController } from './classic-wheel-controller';
export declare class ClassicWheelControllerExtension implements WheelControllerExtension {
    readonly create: typeof ClassicWheelController.create;
}
