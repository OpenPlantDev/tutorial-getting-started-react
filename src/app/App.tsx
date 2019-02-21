import * as React from "react";
import * as socketio from "socket.io-client";
import { Hello } from "./components/Hello";

export class App extends React.Component {

  private _socket: SocketIOClient.Socket;

  constructor(props: any) {
    super(props);
    this._socket = socketio("http://localhost:4060");
  }

  render() {
   return (
     <div>
      <Hello compiler="Typescript" framework="React" bundler="Webpack" />
      <p>Check console for fetch results</p>
     </div>
   );
  }

  fetchComponents()  {
    let url = "http://localhost:4060/api/components";
    console.log(`url: ${url}`);
    return fetch(url).then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error("Error reading data");
            }
        }).then((result) => {
            return result;
        }).catch((err) => {
            console.log(`In fetchComponents catch: ${err}`);
            throw err;
        });
  }

  async componentDidMount() {
    console.log("In componentDidMount");

    // initial fetch of data
    try {
      const result = await this.fetchComponents();
      console.log(result);
    } catch (err) {
      console.log(err.message);
    }

    // fetch data if we receive message that the data changed
    this._socket.on("DbUpdated", async (data: any) => {
      try {
        console.log(data);
        const result = await this.fetchComponents();
        console.log(result);
      } catch (err) {
        console.log(err.message);
      }
    });

  }
};
