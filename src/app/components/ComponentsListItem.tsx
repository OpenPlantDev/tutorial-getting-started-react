import * as React from "react";
import { IComponent } from "../models/component";
import { ComponentsListItemDetails} from "./ComponentsListItemDetails";

interface IProps {
  component: IComponent;
  onClick: (component: IComponent) => void;
  showDetails: boolean;
}

export const ComponentsListItem = (props: IProps) => {
  // console.log(props.component);
  if (props.showDetails) {
    return (
      <div>
        <li onClick={() => props.onClick(props.component)}>{props.component.tag}</li>
        <ComponentsListItemDetails component={props.component} />
      </div>
    );
    }
  return (
    <li onClick={() => props.onClick(props.component)}>{props.component.tag}</li>
  );

};
