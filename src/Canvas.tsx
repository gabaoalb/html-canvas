import { useRef, useEffect } from "react";

function Canvas({ width, height }: { width: number; height: number }) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return; // Ensure canvas exists

		const ctx = canvas.getContext("2d");
		if (!ctx) return; // Ensure context exists

		// Your drawing logic here
		ctx.fillStyle = "blue";
		ctx.fillRect(0, 0, width - 100, height - 100);

		ctx.fillStyle = "red";
		ctx.arc(width / 2, height / 2, 50, 0, Math.PI * 2);
		ctx.fill();
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
