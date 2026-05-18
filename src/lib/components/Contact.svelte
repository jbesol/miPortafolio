<script>
	import { fadeUp } from '$lib/animate.js';

	const links = [
		{ label: 'GitHub', href: 'https://github.com/jbesol' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/' }
	];

	const EMAIL = 'Jbellosolano@gmail.com';
	let copied = $state(false);

	async function copyEmail() {
		await navigator.clipboard.writeText(EMAIL);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<section id="contacto" class="py-32 px-6 relative">

	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/[0.06]"></div>

	<!-- Section number watermark -->
	<div class="absolute left-8 top-16 font-display font-bold text-[10rem] leading-none text-white/[0.018] select-none hidden md:block">
		04
	</div>

	<div class="max-w-5xl mx-auto">

		<div use:fadeUp={0} class="mb-16">
			<div class="flex items-center gap-3 mb-4">
				<span class="w-6 h-px bg-orange-500/50"></span>
				<p class="font-mono text-[11px] tracking-widest uppercase text-orange-400/70">Contacto</p>
			</div>
			<h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">
				¿Trabajamos<br/>
				<span class="text-orange-400">juntos?</span>
			</h2>
		</div>

		<div use:fadeUp={120} class="grid md:grid-cols-2 gap-12 items-center">

			<!-- Left: text and social -->
			<div>
				<p class="text-slate-400 mb-8 leading-relaxed font-light text-lg max-w-sm">
					Abierto a prácticas, proyectos colaborativos y oportunidades en backend.
				</p>
				<div class="flex gap-8">
					{#each links as l}
						<a href={l.href} target="_blank" rel="noopener"
							class="group font-mono text-xs text-slate-600 hover:text-white transition-colors duration-200 tracking-widest uppercase flex items-center gap-2">
							<span class="w-4 h-px bg-slate-700 group-hover:w-6 group-hover:bg-orange-500 transition-all duration-300"></span>
							{l.label}
						</a>
					{/each}
				</div>
			</div>

			<!-- Right: email CTA -->
			<div>
				<div class="group block w-full border border-white/8 rounded-2xl p-8 relative overflow-hidden
					transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.04]">

					<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						style="background: radial-gradient(ellipse at center, rgba(249,115,22,0.06) 0%, transparent 70%)">
					</div>

					<p class="font-mono text-[10px] text-slate-700 tracking-widest uppercase mb-3">Escríbeme</p>

					<p class="text-slate-600 text-sm font-mono mb-6 tracking-widest select-none">
						••••••••••@gmail.com
					</p>

					<button
						onclick={copyEmail}
						class="flex items-center gap-2 px-5 py-2.5 rounded-lg border transition-all duration-300 font-mono text-xs
							{copied
								? 'border-orange-500/50 text-orange-400 bg-orange-500/10'
								: 'border-white/10 text-slate-500 hover:border-orange-500/40 hover:text-orange-400 hover:bg-orange-500/[0.06]'}">
						{#if copied}
							<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
							Copiado
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
							Copiar email
						{/if}
					</button>
				</div>
			</div>

		</div>
	</div>
</section>
