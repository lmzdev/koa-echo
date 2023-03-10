# koa-echo
[![Node.js Build](https://github.com/lmzdev/koa-echo/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/lmzdev/koa-echo/actions/workflows/node.js.yml)

Koa Middleware for debugging and mockup purposes.
Mirrors the ```ctx``` Object as response body, including ```ctx.params``` (when used with [@koa/router](https://www.npmjs.com/package/koa-router)), ```ctx.query``` and ```ctx.request.body``` and adds a ```X-Response-Time```-Header.

## Installation
```sh
npm install koa-echo
```

## Usage

```js
import Koa from 'koa'
import { echo } from 'koa-echo'

const app = new Koa()
const port = 3333

app
.use(echo())
.use((ctx) => ctx.status = 204)
.listen(port, () => console.log(`Listening on :${port}`))

```

## Example Request
```sh
curl --head "localhost:3333" && curl -s "localhost:3333" | jq
```

```
HTTP/1.1 200 OK
Content-Type: application/json
Server: node/v18.13.0
X-Response-Time: 0.13ms
Content-Length: 184
Connection: keep-alive
Keep-Alive: timeout=5
```

```json
{
  "ctx": {
    "request": {
      "method": "GET",
      "url": "/",
      "header": {
        "host": "localhost:3333",
        "user-agent": "curl/7.79.1",
        "accept": "*/*"
      }
    },
    "query": {},
    "response": {
      "status": 204,
      "message": "No Content"
    }
  }
}
```
