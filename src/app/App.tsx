import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

export const App = () => {
   return (
    <Hello compiler="Typescript" framework="React" bundler="Webpack" />
   );
};
