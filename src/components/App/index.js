import React from "react";
import Button from "../Button";
import { hot } from "react-hot-loader";

if (process.env.NODE_ENV !== "production") {
  const { whyDidYouUpdate } = require("why-did-you-update");
  whyDidYouUpdate(React);
}

const App = () => (
  <div>
    <Button color="yellow" type="fill">
      Un Label de Botón
    </Button>
    <br />
    <Button color="yellow" type="border" disabled>
      Un Label de Botón
    </Button>
  </div>
);

export default hot(module)(App);
