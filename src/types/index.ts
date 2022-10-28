import Pusher from "pusher-js";

export type TrustupWebsocketIoConfig = {
  key?: string;
  host?: string;
  port?: number;
};

export interface TrustupWebsocketIoWindow extends Window {
  Pusher: typeof Pusher;
}
