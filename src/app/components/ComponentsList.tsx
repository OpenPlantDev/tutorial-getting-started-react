import * as React from "react";
import {IComponent} from "../models/component";
import {ComponentsListItem} from "./ComponentsListItem";

interface IProps {
  title: string;
  components: IComponent[];
  selectedComponent: IComponent;
  onComponentClick: (component: IComponent) => void;
}

// tslint:disable-next-line:variable-name
export const ComponentsList = (props: IProps) => {
  return (
      <div style={{width: "400px"}}>
        <ul>{props.title}</ul>
            {props.components.map((comp) =>
              <ComponentsListItem key={comp.id} component={comp}
                isSelected={props.selectedComponent && (comp.id === props.selectedComponent.id)}
                onClick={props.onComponentClick} />
          )}
      </div>
  );
};
