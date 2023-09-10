import { SimpleEvent } from './simple-event';
export declare function race<A, B, C>(timeout: number, a: SimpleEvent<A>, b: SimpleEvent<B>, c?: SimpleEvent<C>): SimpleEvent<[A?, B?, C?]>;
