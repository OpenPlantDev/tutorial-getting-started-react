import * as React from "react";
import { IComponent } from "../models/component";
import { ExpandableBlock } from "@bentley/bwc-react/core";
import { ComponentDetails } from "./ComponentDetails";

interface IProps {
  component: IComponent;
  onClick: (component: IComponent) => void;
  isSelected: boolean;
}

const selectedStyle = {
  color: "blue",
  fontWeight: "bold",
};


const unselectedStyle = {
  color: "black",
}

// tslint:disable-next-line:variable-name
export const ComponentsListItem = (props: IProps) => {
  const style = props.isSelected ? selectedStyle : unselectedStyle;
  return (
    <div>
    <ExpandableBlock title={props.component.tag}>
      <ComponentDetails component={props.component} />
    </ExpandableBlock>
    </div>
  );
//    <li style={style} onClick={() => props.onClick(props.component)}>{props.component.tag}</li>

};
