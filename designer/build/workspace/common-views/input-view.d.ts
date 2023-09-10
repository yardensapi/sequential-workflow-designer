export declare class InputView {
    private readonly root;
    static createRectInput(parent: SVGElement, x: number, y: number, size: number, iconSize: number, iconUrl: string | null): InputView;
    static createRoundInput(parent: SVGElement, x: number, y: number, size: number): InputView;
    private constructor();
    setIsHidden(isHidden: boolean): void;
}
