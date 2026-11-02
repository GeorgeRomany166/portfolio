"use client";

import { useEffect, useRef } from "react";

// Soft lapis light that drifts slowly behind the page, over a fine dot grid
// that bends away from the cursor. Canvas 2D, no libraries.
// Pauses when the tab is hidden; draws one still frame for reduced motion.
const GAP = 26;
const REACH = 150;
const BLOBS = [
	{ x: 0.78, y: 0.18, r: 0.42, rgb: "44,79,207", a: 0.11, sx: 0.00011, sy: 0.00017, p: 0 },
	{ x: 0.12, y: 0.62, r: 0.38, rgb: "59,143,217", a: 0.09, sx: 0.00014, sy: 0.0001, p: 2.1 },
	{ x: 0.55, y: 0.92, r: 0.34, rgb: "120,98,230", a: 0.07, sx: 0.00009, sy: 0.00013, p: 4.2 },
];

export default function LivingBackground() {
	const ref = useRef(null);

	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas.getContext("2d");
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const coarse = window.matchMedia("(pointer: coarse)").matches;
		let w = 0, h = 0, dpr = 1, raf = 0, running = true;
		const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

		function resize() {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = window.innerWidth;
			h = window.innerHeight;
			canvas.width = Math.round(w * dpr);
			canvas.height = Math.round(h * dpr);
			canvas.style.width = `${w}px`;
			canvas.style.height = `${h}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		}

		function draw(t) {
			ctx.clearRect(0, 0, w, h);

			// drifting light
			const m = Math.max(w, h);
			for (const b of BLOBS) {
				const cx = (b.x + Math.sin(t * b.sx + b.p) * 0.08) * w;
				const cy = (b.y + Math.cos(t * b.sy + b.p) * 0.08) * h;
				const r = b.r * m * (1 + Math.sin(t * 0.0003 + b.p) * 0.06);
				const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
				g.addColorStop(0, `rgba(${b.rgb},${b.a})`);
				g.addColorStop(1, `rgba(${b.rgb},0)`);
				ctx.fillStyle = g;
				ctx.fillRect(0, 0, w, h);
			}

			// dot grid that bends around the cursor
			mouse.x += (mouse.tx - mouse.x) * 0.12;
			mouse.y += (mouse.ty - mouse.y) * 0.12;
			for (let y = GAP / 2; y < h; y += GAP) {
				for (let x = GAP / 2; x < w; x += GAP) {
					const dx = x - mouse.x;
					const dy = y - mouse.y;
					const d = Math.hypot(dx, dy);
					let px = x, py = y, alpha = 0.16, size = 0.9;
					if (d < REACH) {
						const f = 1 - d / REACH;
						const push = f * f * 14;
						px += (dx / (d || 1)) * push;
						py += (dy / (d || 1)) * push;
						alpha = 0.16 + f * 0.5;
						size = 0.9 + f * 1.1;
						ctx.fillStyle = `rgba(44,79,207,${alpha})`;
					} else {
						ctx.fillStyle = `rgba(28,28,30,${alpha})`;
					}
					ctx.beginPath();
					ctx.arc(px, py, size, 0, Math.PI * 2);
					ctx.fill();
				}
			}
		}

		function loop(t) {
			if (!running) return;
			draw(t);
			raf = requestAnimationFrame(loop);
		}

		function onMove(e) {
			mouse.tx = e.clientX;
			mouse.ty = e.clientY;
		}
		function onLeave() {
			mouse.tx = mouse.ty = -9999;
		}
		function onVisibility() {
			running = !document.hidden && !reduce;
			cancelAnimationFrame(raf);
			if (running) raf = requestAnimationFrame(loop);
		}

		resize();
		window.addEventListener("resize", resize);
		if (reduce) {
			draw(0);
		} else {
			if (!coarse) {
				window.addEventListener("pointermove", onMove, { passive: true });
				document.addEventListener("pointerleave", onLeave);
			}
			document.addEventListener("visibilitychange", onVisibility);
			raf = requestAnimationFrame(loop);
		}

		return () => {
			running = false;
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
			window.removeEventListener("pointermove", onMove);
			document.removeEventListener("pointerleave", onLeave);
			document.removeEventListener("visibilitychange", onVisibility);
		};
	}, []);

	return (
		<canvas
			ref={ref}
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 z-0 [mask-image:linear-gradient(to_bottom,black_55%,rgb(0_0_0/0.55))]"
		/>
	);
}
