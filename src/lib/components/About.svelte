<script>
	import { fadeUp, scaleIn, tilt } from '$lib/animate.js';

	const traits = [
		{ label: 'Lógica & Algoritmos', desc: 'Descomposición de problemas complejos antes de escribir código' },
		{ label: 'Bases de datos',      desc: 'Diseño relacional, consultas eficientes y migraciones' },
		{ label: 'APIs REST',           desc: 'Arquitectura limpia, endpoints bien definidos y documentados' },
		{ label: 'Pensamiento sistémico', desc: 'Visión completa del sistema antes del detalle de implementación' }
	];
</script>

<section id="sobre-mi" class="py-28 px-6">

	<div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

		<div use:fadeUp={0}>
			<p class="font-mono text-xs text-blue-400/60 tracking-widest uppercase mb-5">Sobre mí</p>
			<h2 class="text-4xl font-bold text-slate-100 mb-6 leading-tight">
				Desarrollador con<br/>enfoque en backend
			</h2>
			<p class="text-slate-400 leading-relaxed mb-4">
				Estudiante de Ingeniería de Sistemas con interés genuino en construir sistemas
				eficientes y bien razonados. Mi mayor fortaleza es descomponer un problema hasta
				entenderlo del todo antes de escribir una sola línea de código.
			</p>
			<p class="text-slate-500 leading-relaxed mb-8 text-sm">
				Actualmente profundizando en arquitecturas backend con
				<span class="text-slate-400">Python y Java</span>,
				microservicios y diseño de bases de datos relacionales.
			</p>
			<div class="flex gap-2 flex-wrap">
				<span class="font-mono text-xs px-3 py-1.5 rounded-full border border-blue-500/20 text-blue-300/70 bg-blue-500/[0.05]">
					Español nativo
				</span>
				<span class="font-mono text-xs px-3 py-1.5 rounded-full border border-white/[0.07] text-slate-600 bg-transparent">
					Inglés B2
				</span>
			</div>
		</div>

		<div class="grid grid-cols-2 gap-3">
			{#each traits as trait, i}
				<div use:scaleIn={i * 80} use:tilt={5}
					class="group border border-white/[0.07] rounded-xl p-5 bg-[#1E293B]/40
					hover:border-blue-500/20 hover:bg-[#1E293B]/80 transition-all duration-300">
					<p class="text-slate-200 text-sm font-semibold mb-2 leading-snug group-hover:text-white transition-colors duration-200">{trait.label}</p>
					<p class="text-slate-600 text-xs leading-relaxed group-hover:text-slate-500 transition-colors duration-200">{trait.desc}</p>
				</div>
			{/each}
		</div>

	</div>
</section>
