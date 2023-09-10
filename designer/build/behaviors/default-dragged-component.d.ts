import { Step } from '../definition';
import { ComponentContext } from '../component-context';
import { DraggedComponent } from '../designer-extension';
export declare class DefaultDraggedComponent implements DraggedComponent {
    readonly width: number;
    readonly height: number;
    static create(parent: HTMLElement, step: Step, componentContext: ComponentContext): DefaultDraggedComponent;
    private constructor();
    destroy(): void;
}
