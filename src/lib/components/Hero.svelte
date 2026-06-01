<script>
	import { onMount } from 'svelte';

	let v = $state(false);

	onMount(() => {
		requestAnimationFrame(() => setTimeout(() => (v = true), 60));
	});

	const t = (delay = 0) =>
		`transition-all duration-700 ease-out [transition-delay:${delay}ms] ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`;

	const stack = ['Python', 'FastAPI', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Git'];
</script>

<section class="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

	<!-- Dot grid -->
	<div class="absolute inset-0 opacity-40" style="background-image: radial-gradient(circle, rgba(148,163,184,0.1) 1px, transparent 1px); background-size: 28px 28px;"></div>

	<!-- Blue ambient glow -->
	<div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
		style="background: radial-gradient(ellipse, rgba(59,130,246,0.065) 0%, transparent 65%)">
	</div>

	<!-- Corner marks -->
	<div class="absolute top-8 left-8 w-6 h-6 border-l border-t border-slate-700/50 hidden md:block"></div>
	<div class="absolute top-8 right-8 w-6 h-6 border-r border-t border-slate-700/50 hidden md:block"></div>
	<div class="absolute bottom-16 left-8 w-6 h-6 border-l border-b border-slate-700/50 hidden md:block"></div>
	<div class="absolute bottom-16 right-8 w-6 h-6 border-r border-b border-slate-700/50 hidden md:block"></div>

	<div class="relative text-center max-w-3xl mx-auto pt-20">

		<!-- Status badge -->
		<div class="{t(0)} inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.07] bg-white/[0.03] mb-12">
			<span class="relative flex h-2 w-2 shrink-0">
				<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
				<span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
			</span>
			<span class="font-mono text-xs text-slate-500 tracking-wide">Disponible para oportunidades</span>
		</div>

		<!-- Name -->
		<h1 class="{t(150)} font-bold leading-[1.04] tracking-tight mb-5">
			<span class="block text-5xl md:text-[82px] text-slate-100">Juan David</span>
			<span class="block text-5xl md:text-[82px] text-blue-400">Bello</span>
		</h1>

		<!-- Role + location -->
		<div class="{t(280)} flex items-center justify-center gap-3 mb-8">
			<span class="font-mono text-sm text-slate-500 tracking-widest uppercase">Backend Developer</span>
			<span class="w-px h-3.5 bg-slate-700"></span>
			<span class="font-mono text-sm text-slate-700">Colombia</span>
		</div>

		<!-- Tagline -->
		<p class="{t(400)} text-slate-400 text-lg md:text-xl leading-relaxed mb-12 font-light max-w-[520px] mx-auto">
			Construyo sistemas backend limpios y bien razonados.<br class="hidden md:block"/>
			Entiendo el problema a fondo antes de escribir una línea de código.
		</p>

		<!-- CTAs -->
		<div class="{t(520)} flex items-center justify-center gap-3 mb-14 flex-wrap">
			<a href="#proyectos"
				class="px-7 py-3 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg
					transition-all duration-200 hover:shadow-[0_0_32px_rgba(59,130,246,0.4)] hover:-translate-y-px active:scale-95">
				Ver proyectos
			</a>
			<a href="#contacto"
				class="px-7 py-3 border border-white/[0.1] text-slate-400 hover:text-white hover:border-white/[0.18] text-sm font-medium rounded-lg
					transition-all duration-200 hover:bg-white/[0.03] active:scale-95">
				Contacto →
			</a>
		</div>

		<!-- Stack chips -->
		<div class="{t(640)} flex flex-wrap gap-2 justify-center">
			{#each stack as tech}
				<span class="font-mono text-[11px] px-3 py-1.5 rounded-full border border-white/[0.07] text-slate-600 bg-white/[0.02] tracking-wide">
					{tech}
				</span>
			{/each}
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
		transition-opacity duration-1000 [transition-delay:1600ms] {v ? 'opacity-100' : 'opacity-0'}">
		<span class="font-mono text-[9px] text-slate-700 tracking-[0.25em] uppercase">scroll</span>
		<div class="w-px h-8 bg-gradient-to-b from-slate-700/60 to-transparent"></div>
	</div>
</section>
