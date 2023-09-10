export declare class EditorView {
    private readonly parent;
    static create(parent: HTMLElement): EditorView;
    private currentContainer;
    private constructor();
    setContent(content: HTMLElement, className: string): void;
    destroy(): void;
}
