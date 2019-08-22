import * as React from "react";
import {LabeledSelect} from "@bentley/bwc-react/core";
import {IFilter} from "../models/IFilter";

interface IProps {
  filters: IFilter[];
  selectedFilter: IFilter;
  onChange: (value: any) => void;
}

// tslint:disable-next-line:variable-name
export const FilterSelect = (props: IProps) => {
    return (
      <div>
        <LabeledSelect
          label="Select Filter"
          defaultValue={props.selectedFilter.title}
          options={props.filters.map((filter) => filter.title)}
          onChange={() => props.onChange(event.target)}
        />
      </div>

    );
};

// {props.filters.map((filter) =>
//   <RadioButton style={{display: "block",
//                         color: "green", fontWeight: "bold"}}
//                key={filter.key}
//                label={filter.title}
//                checked={props.selectedFilter.key === filter.key}
//                onChange={() => props.onChange(filter)} />
// )}
