import { IPropertyObject } from "./propertyObject";

export interface IComponent {
    id: string;
    className: string;
    tag: string;
    properties?: IPropertyObject;
}
