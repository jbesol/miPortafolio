<script>
	let x = $state(-1000);
	let y = $state(-1000);

	$effect(() => {
		const handler = (e) => { x = e.clientX; y = e.clientY; };
		window.addEventListener('mousemove', handler, { passive: true });
		return () => window.removeEventListener('mousemove', handler);
	});
</script>

<div
	class="pointer-events-none fixed inset-0 z-10 hidden md:block"
	style="background: radial-gradient(650px at {x}px {y}px, rgba(59,130,246,0.03), transparent 80%)"
></div>
