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
		ctx.moveTo(30, 30);
		ctx.lineTo(80, 80);
		ctx.lineTo(130, 30);
		ctx.lineTo(180, 80);
		ctx.lineTo(230, 30);
		ctx.stroke();
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
