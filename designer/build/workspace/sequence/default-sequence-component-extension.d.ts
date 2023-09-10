import { SequenceComponentExtension } from '../../designer-extension';
import { DefaultSequenceComponent } from './default-sequence-component';
export declare class DefaultSequenceComponentExtension implements SequenceComponentExtension {
    readonly create: typeof DefaultSequenceComponent.create;
}
