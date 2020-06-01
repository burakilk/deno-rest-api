import {Application} from 'https://deno.land/x/oak/mod.ts'
import router from './router.ts'
import {APP_HOST, APP_PORT} from './config/config.ts';

const server = new Application()

server.use(router.routes())
server.use(router.allowedMethods())

console.log(`Listening on port ${APP_PORT} ...`)
await server.listen(`${APP_HOST}:${APP_PORT}`);