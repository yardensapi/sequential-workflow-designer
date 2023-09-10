import { DesignerState } from '../designer-state';
import { DefinitionModifier } from '../definition-modifier';
import { GlobalEditorContext, StepEditorContext } from '../designer-configuration';
import { EditorRenderer, EditorRendererHandler } from './editor-renderer';
import { Definition, DefinitionWalker } from '../definition';
import { SimpleEventListener } from '../core';
export declare class EditorApi {
    private readonly state;
    private readonly definitionWalker;
    private readonly definitionModifier;
    constructor(state: DesignerState, definitionWalker: DefinitionWalker, definitionModifier: DefinitionModifier);
    isCollapsed(): boolean;
    toggleIsCollapsed(): void;
    subscribeIsCollapsed(listener: SimpleEventListener<boolean>): void;
    getDefinition(): Definition;
    runRenderer(rendererHandler: EditorRendererHandler): EditorRenderer;
    createStepEditorContext(stepId: string): StepEditorContext;
    createGlobalEditorContext(): GlobalEditorContext;
}
