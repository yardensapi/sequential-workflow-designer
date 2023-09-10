export declare class NextQuantifiedNumber {
    private readonly values;
    constructor(values: number[]);
    next(value: number, direction: boolean): {
        current: number;
        next: number;
    };
}
