<script>
	import { onMount } from 'svelte';

	let dotX = $state(-200), dotY = $state(-200);
	let ringX = $state(-200), ringY = $state(-200);
	let hovering = $state(false);
	let visible = $state(false);

	onMount(() => {
		if (window.matchMedia('(hover: none)').matches) return;

		let tx = -200, ty = -200;
		let rx = -200, ry = -200;
		let raf;

		const loop = () => {
			rx += (tx - rx) * 0.13;
			ry += (ty - ry) * 0.13;
			ringX = rx;
			ringY = ry;
			raf = requestAnimationFrame(loop);
		};

		const onMove = (e) => {
			tx = e.clientX; ty = e.clientY;
			dotX = e.clientX; dotY = e.clientY;
			if (!visible) visible = true;
		};

		const onOver = (e) => {
			hovering = !!e.target.closest('a, button, [data-hover]');
		};

		window.addEventListener('mousemove', onMove, { passive: true });
		window.addEventListener('mouseover', onOver, { passive: true });
		raf = requestAnimationFrame(loop);

		return () => {
			window.removeEventListener('mousemove', onMove);
			window.removeEventListener('mouseover', onOver);
			cancelAnimationFrame(raf);
		};
	});
</script>

<!-- Ring — sigue con retraso -->
<div
	class="pointer-events-none fixed z-[9999] rounded-full border border-orange-400/40
		transition-[width,height,background-color,border-color,opacity] duration-200"
	style="
		left: {ringX}px; top: {ringY}px;
		width: {hovering ? '42px' : '26px'};
		height: {hovering ? '42px' : '26px'};
		transform: translate(-50%, -50%);
		background: {hovering ? 'rgba(249,115,22,0.08)' : 'transparent'};
		border-color: {hovering ? 'rgba(249,115,22,0.7)' : 'rgba(249,115,22,0.35)'};
		opacity: {visible ? 1 : 0};
	">
</div>

<!-- Dot — sigue instantáneo -->
<div
	class="pointer-events-none fixed z-[9999] rounded-full bg-orange-400
		transition-[width,height,opacity] duration-150"
	style="
		left: {dotX}px; top: {dotY}px;
		width: {hovering ? '3px' : '5px'};
		height: {hovering ? '3px' : '5px'};
		transform: translate(-50%, -50%);
		opacity: {visible ? 1 : 0};
	">
</div>
