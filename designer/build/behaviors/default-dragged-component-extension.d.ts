import { DraggedComponentExtension } from '../designer-extension';
import { DefaultDraggedComponent } from './default-dragged-component';
export declare class DefaultDraggedComponentExtension implements DraggedComponentExtension {
    readonly create: typeof DefaultDraggedComponent.create;
}
