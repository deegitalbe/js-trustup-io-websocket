import Echo from "laravel-echo";
import { TrustupWebsocketIoConfig } from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Pusher = require("pusher-js");

class TrustupWebsocketIoClient {
  private echoInstance: Echo;

  public constructor(config?: TrustupWebsocketIoConfig) {
    // eslint-disable-next-line no-console
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
