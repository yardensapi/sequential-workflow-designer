import { PlaceholderDirection, PlaceholderView } from '../component';
export declare class RectPlaceholderView implements PlaceholderView {
    readonly rect: SVGElement;
    readonly g: SVGGElement;
    static create(parent: SVGElement, width: number, height: number, radius: number, iconSize: number, direction: PlaceholderDirection): RectPlaceholderView;
    private constructor();
    setIsHover(isHover: boolean): void;
    setIsVisible(isVisible: boolean): void;
}
