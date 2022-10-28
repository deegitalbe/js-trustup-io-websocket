# js-trustup-io-websocket

## Installation

```shell
yarn add @deegital/js-trustup-io-websocket
```

### Usage

Import `trustupWebsocket` and call `echo()` to get laravel echo instance.

```js
import { trustupWebsocket } from "@deegital/js-trustup-io-websocket";

trustupWebsocket.echo()
  .channel("testChannel")
  .listen('testEvent', (e) => console.log(e));
```
