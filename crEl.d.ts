export type Args = string | Record<string, any> | Array<HTMLElement> | HTMLElement | string | number | null | boolean | undefined;

declare const crEl: <T extends HTMLElement>(...args: Args[]) => T;

export default crEl;

declare module 'xneek-crel'