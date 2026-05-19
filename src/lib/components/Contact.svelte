<script>
	import { fadeUp } from '$lib/animate.js';

	const EMAIL = 'jbellosolano@gmail.com';
	let copied = $state(false);

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(EMAIL);
		} catch {
			const el = document.createElement('textarea');
			el.value = EMAIL;
			el.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
			document.body.appendChild(el);
			el.select();
			document.execCommand('copy');
			document.body.removeChild(el);
		}
		copied = true;
		setTimeout(() => (copied = false), 2200);
	}
</script>

<section id="contacto" class="py-28 px-6">

	<div class="max-w-6xl mx-auto">

		<div use:fadeUp={0} class="mb-12">
			<p class="font-mono text-xs text-blue-400/60 tracking-widest uppercase mb-5">Contacto</p>
			<h2 class="text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
				¿Hablamos?
			</h2>
		</div>

		<div use:fadeUp={150} class="grid md:grid-cols-2 gap-12 items-start">

			<!-- Left -->
			<div>
				<p class="text-slate-400 text-lg leading-relaxed mb-10 font-light max-w-sm">
					Disponible para roles en backend, proyectos de software y cualquier oportunidad donde pueda aportar valor real.
				</p>

				<div class="flex flex-col gap-4">
					<a href="https://github.com/jbesol" target="_blank" rel="noopener"
						class="group flex items-center gap-3 text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200 w-fit">
						<span class="w-4 h-px bg-slate-700 group-hover:w-7 group-hover:bg-blue-500 transition-all duration-300"></span>
						GitHub
					</a>
					<a href="https://linkedin.com/in/" target="_blank" rel="noopener"
						class="group flex items-center gap-3 text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200 w-fit">
						<span class="w-4 h-px bg-slate-700 group-hover:w-7 group-hover:bg-blue-500 transition-all duration-300"></span>
						LinkedIn
					</a>
				</div>
			</div>

			<!-- Right: email card -->
			<div class="border border-white/[0.07] rounded-xl p-7 bg-[#1E293B]/40 hover:border-blue-500/20 hover:bg-[#1E293B]/70
				transition-all duration-300">

				<p class="font-mono text-xs text-slate-600 uppercase tracking-widest mb-3">Email directo</p>
				<p class="text-slate-600 text-sm font-mono mb-7 tracking-wide select-none">jbello·····@gmail.com</p>

				<button onclick={copyEmail}
					class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border text-xs font-mono transition-all duration-200
						{copied
							? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/[0.07]'
							: 'border-white/[0.1] text-slate-500 hover:border-blue-500/30 hover:text-blue-400 hover:bg-blue-500/[0.06]'}">
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
</section>
