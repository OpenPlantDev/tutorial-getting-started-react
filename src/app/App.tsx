import * as React from "react";
import * as socketio from "socket.io-client";
import { DataService } from "../services/data.service";
import {IComponent} from "../models/component";

interface IState {
  components: IComponent[];
  isLoading: boolean;
  error: Error | undefined;
}

export class App extends React.Component <any, IState> {

  private _socket: SocketIOClient.Socket;
  private _dataService: DataService;
  private _baseUrl: string = "http://localhost:4060";
  public state: IState;

  constructor(props: any) {
    super(props);
    this._socket = socketio(this._baseUrl);
    this._dataService = new DataService(`${this._baseUrl}/api`);
    this.state = { components: [], isLoading: true, error: undefined }
  }

  public render() {
    if (this.state.isLoading) {
      return <h3>Loading...</h3>;
    }
    if (this.state.error) {
      return <h3>Error: {this.state.error.message}</h3>;
    }
    console.log(this.state.components);
    return (
     <div>
          <ul>Components
            {this.state.components.map((comp) =>
                <li key={comp.id}>{comp.tag}</li>
                )
            }
          </ul>
     </div>
   );
  }

  private async UpdateData() {
    try {
      const result = await this._dataService.fetchComponents();
      console.log(result);
      this.setState({ components: result, isLoading: false, error: undefined} );
      return result;
    } catch (err) {
      console.log(err.message);
      this.setState({ isLoading: false, error: err} );
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
