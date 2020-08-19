import {
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
} from "@microsoft/signalr";

class SignalR {
  connection: HubConnection | undefined;

  async connect(): Promise<HubConnection> {
    // TODO change the path to env var
    const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:5000/chat")
      .withAutomaticReconnect()
      .build();

    this.connection = connection;

    await connection
      .start()
      .then(() => {
        console.log("Connection successful!");
      })
      .catch((err) => {
        console.log(`Error while establishing connection: ${err}`);
      });

    return connection;
  }

  login(username: string): void {
    this.send("NewUserConnected", username);
  }

  send(action: string, data: any): void {
    try {
      if (this.connected()) {
        this.connection?.invoke(action, data).catch((e) => console.error(e));
      } else {
        console.log(`SignalR not connected`);
      }
    } catch (e) {
      console.log(`SignalR error ${e}`);
    }
  }

  connected = (): boolean =>
    this.connection?.state === HubConnectionState.Connected ? true : false;
}

const signal = new SignalR();

export default signal;
