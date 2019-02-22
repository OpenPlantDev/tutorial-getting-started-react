import * as React from "react";
import {IComponent} from "../models/component";
import {ComponentsList} from "./ComponentsList";

interface IProps {
  components: IComponent[];
}

interface IState {

}

export class ComponentsView extends React.Component <IProps, IState> {

  public state: IState;
  constructor(props: IProps) {
    super(props);
  }

  public render () {
    console.log("Render ComponentsView");
    return (
      <div>
        <ComponentsList components={this.props.components} />
      </div>

    );
  }

};
