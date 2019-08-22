import * as React from "react";
import {IFilter} from "../models/IFilter";
//import {RadioButton} from "./RadioButton";
import { Radio as RadioButton } from "@bentley/bwc-react/core";

interface IProps {
  filters: IFilter[];
  selectedFilter: IFilter;
  onChange: (filter: IFilter) => void;
}

// tslint:disable-next-line:variable-name
export const FilterRadioGroup = (props: IProps) => {
    return (
      <div>
        {props.filters.map((filter) =>
          <RadioButton style={{display: "block",
                                color: "green", fontWeight: "bold"}}
                       key={filter.key}
                       label={filter.title}
                       checked={props.selectedFilter.key === filter.key}
                       onChange={() => props.onChange(filter)} />
        )}
      </div>

    );
};
