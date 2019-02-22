import * as React from 'react';
import {IComponent} from "../models/component";

interface IProps {
    component: IComponent;
}

export const ComponentsListItemDetails = (props: IProps) => {
    let comp = props.component;
    return (
        <div>
            <ul>
                <li>id: {comp.id}</li>
                <li>class: {comp.className}</li>
            </ul>
        </div>
    );
}