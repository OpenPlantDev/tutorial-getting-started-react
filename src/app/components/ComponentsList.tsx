import * as React from "react";
import {IComponent} from "../models/component";
import {ComponentsListItem} from "./ComponentsListItem";
import { bool } from "prop-types";

interface IProps {
  components: IComponent[];
}

interface IState {
  componentDisplayOptions: any;
}

export class ComponentsList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {componentDisplayOptions: {}};
  }

  onComponentClick = (comp: IComponent) => {
    if(!this.state.componentDisplayOptions[comp.id]) {
      this.state.componentDisplayOptions[comp.id] = {showDetails: true};
    } else {
      this.state.componentDisplayOptions[comp.id] = {showDetails: !this.state.componentDisplayOptions[comp.id].showDetails};
    }
    console.log(this.state.componentDisplayOptions);
    this.setState({componentDisplayOptions: this.state.componentDisplayOptions});
  }
  
  public render () {
    const displayOptions = this.state.componentDisplayOptions;
    return(
      <div>
      <ul>Components</ul>
          {this.props.components.map((comp) =>
            <ComponentsListItem key={comp.id} component={comp}
              showDetails={displayOptions[comp.id] ? displayOptions[comp.id].showDetails : false} 
              onClick={this.onComponentClick} />
        )}
      </div>
    );
  }
}
