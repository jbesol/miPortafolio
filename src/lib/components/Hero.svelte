<script>
	import { onMount } from 'svelte';

	let v = $state(false);
	let nameText = $state('');
	let nameReady = $state(false);
	const FULL_NAME = 'Juan David\nBello';

	onMount(() => {
		requestAnimationFrame(() =>
			setTimeout(() => {
				v = true;
				scrambleName();
			}, 80)
		);
	});

	function scrambleName() {
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';
		const lines = FULL_NAME.split('\n');
		const flat = FULL_NAME.replace('\n', ' ');
		let resolved = 0;
		let frame = 0;

		const tick = setInterval(() => {
			nameText = flat
				.split('')
				.map((ch, i) => {
					if (ch === ' ' && i === flat.indexOf(' ')) return '\n';
					if (i < resolved) return ch;
					if (ch === ' ') return ' ';
					return chars[Math.floor(Math.random() * chars.length)];
				})
				.join('');

			frame++;
			if (frame % 2 === 0 && resolved < flat.length) resolved++;
			if (resolved >= flat.length) {
				nameText = FULL_NAME;
				nameReady = true;
				clearInterval(tick);
			}
		}, 28);
	}

	const enter = (delay = 0) =>
		`transition-[opacity,transform] duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`;
</script>

<section class="min-h-screen flex items-center justify-center relative overflow-hidden px-6">

	<!-- Grid -->
	<div class="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

	<!-- Orb -->
	<div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
		style="background: radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)">
	</div>

	<!-- Corner decorations -->
	<div class="absolute top-8 left-8 w-12 h-12 border-l border-t border-orange-500/20 hidden md:block"></div>
	<div class="absolute top-8 right-8 w-12 h-12 border-r border-t border-orange-500/20 hidden md:block"></div>
	<div class="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-orange-500/20 hidden md:block"></div>
	<div class="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-orange-500/20 hidden md:block"></div>

	<div class="relative text-center max-w-4xl mx-auto">

		<!-- Label -->
		<div class="{enter()} [transition-delay:0ms] flex items-center justify-center gap-3 mb-8">
			<span class="w-8 h-px bg-orange-500/40"></span>
			<p class="font-mono text-[11px] tracking-[0.4em] uppercase text-orange-400/70">
				Backend Developer
			</p>
			<span class="w-8 h-px bg-orange-500/40"></span>
		</div>

		<!-- Name with scramble -->
		<h1 class="{enter()} [transition-delay:100ms] text-6xl md:text-[7.5rem] font-bold leading-[0.9] tracking-tight mb-8"
			style="white-space: pre-line">
			{#if nameText}
				{#each nameText.split('') as ch, i}
					{#if ch === '\n'}
						<br/>
					{:else if i < nameText.indexOf('\n') || nameText.indexOf('\n') === -1}
						<span class="{nameReady ? 'text-white' : 'text-slate-400'} transition-colors duration-200"
							style="display:inline-block">{ch === ' ' ? ' ' : ch}</span>
					{:else}
						<span class="text-orange-400" style="display:inline-block">{ch === ' ' ? ' ' : ch}</span>
					{/if}
				{/each}
			{:else}
				<span class="text-slate-700">_</span>
			{/if}
		</h1>

		<!-- Tagline -->
		<p class="{enter()} [transition-delay:300ms] text-slate-400 text-lg md:text-xl mb-2 max-w-lg mx-auto leading-relaxed font-light">
			Entiendo el problema antes de escribir una línea de código.
		</p>

		<!-- Stack chips -->
		<div class="{enter()} [transition-delay:420ms] flex gap-2 justify-center flex-wrap mb-12 mt-5">
			{#each ['Python', 'Java', 'Spring Boot', 'MySQL'] as tech}
				<span class="font-mono text-[10px] px-3 py-1 rounded-full border border-white/8 text-slate-600 bg-white/[0.02] tracking-widest">
					{tech}
				</span>
			{/each}
		</div>

		<!-- CTAs -->
		<div class="{enter()} [transition-delay:540ms] flex gap-3 justify-center flex-wrap">
			<a href="#proyectos"
				class="group relative px-7 py-3 bg-orange-500 text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_rgba(249,115,22,0.4)] hover:scale-[1.02]">
				<span class="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
				<span class="relative">Ver proyectos</span>
			</a>
			<a href="#contacto"
				class="group px-7 py-3 border border-white/10 text-slate-400 hover:text-white text-sm font-medium rounded-lg transition-all duration-300 hover:border-orange-500/50 hover:bg-orange-500/5">
				Contacto
				<span class="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
		transition-opacity duration-1000 [transition-delay:1000ms] {v ? 'opacity-100' : 'opacity-0'}">
		<span class="font-mono text-[9px] text-slate-700 tracking-[0.3em] uppercase">scroll</span>
		<div class="w-px h-8 bg-gradient-to-b from-transparent via-orange-600/40 to-transparent animate-pulse"></div>
	</div>
</section>
