import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import TechnologyStack from "./components/TechnologyStack";

const appDiv = document.getElementById("app");
render(<App />, appDiv);

const techDiv = document.getElementById("divTechnologyStack");
render(<TechnologyStack />, techDiv);