import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import TechnologyStack from "./components/TechnologyStack";

const appDiv = document.getElementById("app");
const appRoot = createRoot(appDiv);
appRoot.render(<App />);

const techDiv = document.getElementById("divTechnologyStack");
const techRoot = createRoot(techDiv);
techRoot.render(<TechnologyStack />);