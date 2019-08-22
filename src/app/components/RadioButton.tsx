import * as React from "react";

interface IProps {
  style: any;
  checked: boolean;
  label: string;
  onChange: () => void;
}

// tslint:disable-next-line:variable-name
export const RadioButton = (props: IProps) => {
    return (
      <label style={props.style}>
        <input type="radio"
                checked={props.checked}
                onChange={props.onChange} />
        {props.label}
      </label>
    );
};
