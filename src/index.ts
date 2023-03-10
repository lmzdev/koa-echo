import { Context, Next } from "koa";
import { now, since } from 'timespan-milliseconds'

export function echo() {
    return async (ctx: Context, next: Next) => {
        const then = now()
        const { header, url, method } = ctx.request
        
        await next()

        const { status, message } = ctx.response
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
        }
        ctx.status = 200
        ctx.set('Content-Type', 'application/json')
        ctx.set('Server', `node/${process.version}`)
        ctx.set('X-Response-Time', `${since(then)}ms`)
    }
}
