import * as React from "react";
import { IFilter } from "../models/IFilter";
import { Button } from "@bentley/bwc-react/core";

interface IProps {
  filter: IFilter;
  isSelected: boolean;
  onClick: (filter: IFilter) => void;
}

const buttonStyle = {
  padding: "10px",
  marginLeft: "5px",
};

// tslint:disable-next-line:variable-name
export const FilterButton = (props: IProps) => {
  const styleType = props.isSelected ? "primary" : "hollow";
  return (
    <Button style={buttonStyle} styleType={styleType}
            onClick={() => props.onClick(props.filter)}>
      {props.filter.title}
    </Button>
  );
};
