import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import Canvas from "./Canvas.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Canvas width={600} height={400} />
	</StrictMode>
);
