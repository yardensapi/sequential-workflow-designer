import { DefinitionWalker, Step } from '../definition';
import { DesignerState } from '../designer-state';
export type EditorRendererHandler = (step: Step | null) => void;
export declare class EditorRenderer {
    private readonly state;
    private readonly definitionWalker;
    private readonly handler;
    static create(state: DesignerState, definitionWalker: DefinitionWalker, handler: EditorRendererHandler): EditorRenderer;
    private currentStepId;
    private constructor();
    destroy(): void;
    private render;
    private tryRender;
    private onDefinitionChanged;
    private onSelectedStepIdChanged;
}
