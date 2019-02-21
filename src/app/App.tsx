import * as React from "react";
import * as socketio from "socket.io-client";
import { DataService } from "../services/data.service";

export class App extends React.Component {

  private _socket: SocketIOClient.Socket;
  private _dataService: DataService;
  private _baseUrl: string = "http://localhost:4060";

  constructor(props: any) {
    super(props);
    this._socket = socketio(this._baseUrl);
    this._dataService = new DataService(`${this._baseUrl}/api`);
  }

  public render() {
   return (
     <div>
      <p>Check console for fetch results</p>
     </div>
   );
  }

  private async UpdateData() {
    try {
      const result = await this._dataService.fetchComponents();
      console.log(result);
      return result;
    } catch (err) {
      console.log(err.message);
    }
  }

  public async componentDidMount() {
    console.log("In componentDidMount");

    // initial fetch of data
    await this.UpdateData();

    // fetch data if we receive message that the data changed
    this._socket.on("DbUpdated", async (data: any) => {
      console.log("Recieved DbUpdated");
      await this.UpdateData();
    });

  }
}
