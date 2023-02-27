# koa-echo
[![Node.js Build](https://github.com/lmzdev/koa-echo/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/lmzdev/koa-echo/actions/workflows/node.js.yml)

Koa Middleware for debugging and mockup purposes.
Mirrors the ```ctx``` Object as response body and adds a ```X-Response-Time```-Header.

## Installation
```sh
npm install koa-echo
```


## Usage
```ts
import Koa from 'koa'
import { echo } from 'koa-echo'

const app = new Koa()
const port = 3333

app
.use(echo())
.listen(port, () => console.log(`Listening on :${port}`))

```