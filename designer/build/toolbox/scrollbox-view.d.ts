export declare class ScrollBoxView {
    private readonly root;
    private readonly viewport;
    static create(parent: HTMLElement, viewport: HTMLElement): ScrollBoxView;
    private content?;
    private scroll?;
    constructor(root: HTMLElement, viewport: HTMLElement);
    setContent(element: HTMLElement): void;
    refresh(): void;
    destroy(): void;
    private reload;
    private readonly onResize;
    private onWheel;
    private readonly onTouchStart;
    private readonly onMouseDown;
    private readonly onTouchMove;
    private readonly onMouseMove;
    private readonly onTouchEnd;
    private readonly onMouseUp;
    private startScroll;
    private moveScroll;
    private stopScroll;
    private getScrollTop;
    private setScrollTop;
}
