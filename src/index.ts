import Echo from "laravel-echo";
import { TrustupWebsocketIoConfig } from "./types";

class TrustupWebsocketIoClient {
  private echoInstance: Echo;

  public constructor(config?: TrustupWebsocketIoConfig) {
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
