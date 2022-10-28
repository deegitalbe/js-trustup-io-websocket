import Echo from "laravel-echo";
import Pusher from "pusher-js";

import { TrustupWebsocketIoConfig, TrustupWebsocketIoWindow } from "./types";

declare let window: TrustupWebsocketIoWindow;
class TrustupWebsocketIoClient {
  private echoInstance: Echo;

  public constructor(config?: TrustupWebsocketIoConfig) {
    window.Pusher = Pusher;
    // eslint-disable-next-line no-console
    console.log({ Pusher });
    this.echoInstance = new Echo({
      broadcaster: "pusher",
      key:
        config?.key ||
        "$2y$10$svQIJ8lZEqclI9AqcZEBZeKEqhePKWoFTFU85ML2u9w4aa2wbRHG",
      wsHost: config?.host || "websocket.trustup.io",
      wsPort: config?.port || 443,
      wssPort: config?.port || 443,
      disableStats: true,
    });
  }

  public echo() {
    return this.echoInstance;
  }
}

const trustupWebsocket = new TrustupWebsocketIoClient();

export { trustupWebsocket };
export default TrustupWebsocketIoClient;
