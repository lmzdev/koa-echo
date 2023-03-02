"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.echo = void 0;
const timespan_milliseconds_1 = require("timespan-milliseconds");
function echo() {
    return async (ctx, next) => {
        const then = (0, timespan_milliseconds_1.now)();
        const { header, url, method } = ctx.request;
        await next();
        const { status, message } = ctx.response;
        ctx.body = {
            ctx: {
                request: {
                    method,
                    url,
                    header,
                    body: ctx.request['body']
                },
                params: ctx.params,
                query: ctx.query,
                response: {
                    status,
                    message
                }
            }
        };
        ctx.status = 200;
        ctx.set('Content-Type', 'application/json');
        ctx.set('Server', `node/${process.version}`);
        ctx.set('X-Response-Time', `${(0, timespan_milliseconds_1.since)(then)}ms`);
    };
}
exports.echo = echo;
//# sourceMappingURL=index.js.map