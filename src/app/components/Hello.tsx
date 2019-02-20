import * as React from "react";

interface IProps {
   compiler: string;
   framework: string;
   bundler: string;
}

export const Hello = (props: IProps) => {
   return (
     <h1>This is a {props.framework} application using {props.compiler} with {props.bundler}</h1>
   );
};
