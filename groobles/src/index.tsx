import * as React from "react";
import * as ReactDOM from "react-dom";
import Grooble from "./components/grooble";

ReactDOM.render(
<div>
<h1>Groobles</h1>
<Grooble name="Monster" bodyColor="Red" limbColor="Blue"/> 
</div>,
  document.getElementById("root")
);