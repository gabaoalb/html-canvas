import { useRef, useEffect } from "react";

function Canvas({ width, height }: { width: number; height: number }) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return; // Ensure canvas exists

		const ctx = canvas.getContext("2d");
		if (!ctx) return; // Ensure context exists

		// Your drawing logic here
		ctx.beginPath(); // reset ctx state
		ctx.strokeStyle = "red"; // define color of the line
		ctx.lineWidth = 10; // thickness of the line
		ctx.moveTo(30, 70); // moveTo(x,y) -> starting point of the line
		ctx.lineTo(130, 70); // line(x,y) -> end point of the line
		ctx.stroke(); // draws the line
	}, [width, height]); // Redraw if width or height changes

	return (
		<canvas
			ref={canvasRef}
			width={width}
			height={height}
			style={{
				border: "1px solid black"
			}}
		></canvas>
	);
}

export default Canvas;
