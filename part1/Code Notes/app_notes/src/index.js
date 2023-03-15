// full stack open
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App"

/***** Page Re-Rendering *****/
let counter = 1

ReactDOM.createRoot(document.getElementById("root")).render(<App counter={counter}/>)
//ReactDOM.createRoot(document.getElementById("root")).render(<App/>)