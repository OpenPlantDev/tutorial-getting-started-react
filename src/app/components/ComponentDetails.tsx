import * as React from "react";
import {IComponent} from "../models/component";
import { ComponentProperties } from "./ComponentProperties";

interface IProps {
    component: IComponent;
}

// tslint:disable-next-line:variable-name
export const ComponentDetails = (props: IProps) => {
    const comp = props.component;
    if (comp === undefined) {
      return <div></div>;
    }
    return (
        <div>
            <ul style={{listStyleType: "none"}}>
                <li>id: {comp.id}</li>
                <li>class: {comp.className}</li>
                <li>description: {comp.description}</li>
                <li>manufacturer: {comp.manufacturer}</li>
                <ComponentProperties properties={comp.properties} />
            </ul>
        </div>
    );
};
