import React from "react";
import Button from "../Button";
import { hot } from "react-hot-loader";

if (process.env.NODE_ENV !== "production") {
  const { whyDidYouUpdate } = require("why-did-you-update");
  whyDidYouUpdate(React);
}

const App = () => (
  <div>
    <Button color="blue">Un Label de Botón</Button>
    <Button color="green">Un Label de Botón</Button>
    <Button color="red">Un Label de Botón</Button>
    <Button color="yellow">Un Label de Botón</Button>
  </div>
);

export default hot(module)(App);
