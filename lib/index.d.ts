import { Context, Next } from "koa";
export declare function echo(): (ctx: Context, next: Next) => Promise<void>;
