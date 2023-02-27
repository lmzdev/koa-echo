# koa-echo

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

app
.use(echo())
.listen()

```