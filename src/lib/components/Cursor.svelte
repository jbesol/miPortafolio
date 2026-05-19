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
			rx += (tx - rx) * 0.11;
			ry += (ty - ry) * 0.11;
			ringX = rx; ringY = ry;
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

<div class="pointer-events-none fixed z-[9999] rounded-full transition-[width,height,border-color,background-color,opacity] duration-200"
	style="
		left: {ringX}px; top: {ringY}px;
		width: {hovering ? '38px' : '22px'};
		height: {hovering ? '38px' : '22px'};
		transform: translate(-50%, -50%);
		border: 1px solid {hovering ? 'rgba(59,130,246,0.65)' : 'rgba(148,163,184,0.2)'};
		background: {hovering ? 'rgba(59,130,246,0.06)' : 'transparent'};
		opacity: {visible ? 1 : 0};
	">
</div>

<div class="pointer-events-none fixed z-[9999] rounded-full transition-[width,height,opacity] duration-100"
	style="
		left: {dotX}px; top: {dotY}px;
		width: {hovering ? '3px' : '4px'};
		height: {hovering ? '3px' : '4px'};
		transform: translate(-50%, -50%);
		background: rgba(148,163,184,{hovering ? '0.5' : '0.7'});
		opacity: {visible ? 1 : 0};
	">
</div>
