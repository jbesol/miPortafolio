<script>
	import { fadeUp, scaleIn, tilt } from '$lib/animate.js';

	const traits = [
		{ num: '01', label: 'Lógica & Algoritmos', desc: 'Descomposición de problemas complejos' },
		{ num: '02', label: 'Bases de datos', desc: 'Diseño relacional y consultas eficientes' },
		{ num: '03', label: 'APIs REST', desc: 'Arquitectura limpia y endpoints bien definidos' },
		{ num: '04', label: 'Pensamiento sistémico', desc: 'Visión del sistema antes del detalle' }
	];
</script>

<section id="sobre-mi" class="py-32 px-6 relative">

	<!-- Section number watermark -->
	<div class="absolute right-8 top-16 font-display font-bold text-[10rem] leading-none text-white/[0.018] select-none hidden md:block">
		01
	</div>

	<div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

		<div use:fadeUp={0}>
			<div class="flex items-center gap-3 mb-4">
				<span class="w-6 h-px bg-orange-500/50"></span>
				<p class="font-mono text-[11px] tracking-widest uppercase text-orange-400/70">Sobre mí</p>
			</div>
			<h2 class="text-4xl font-bold text-white mb-6 leading-tight">Desarrollador con<br/>enfoque en backend</h2>
			<p class="text-slate-400 leading-relaxed mb-4 font-light">
				Soy estudiante de Ingeniería de Sistemas en la
				<span class="text-slate-300 font-medium">Corporación Universitaria Latinoamericana</span>,
				con interés genuino en construir sistemas eficientes y bien razonados.
				Mi mayor fortaleza es el pensamiento crítico aplicado a la resolución de problemas.
			</p>
			<p class="text-slate-500 leading-relaxed mb-7 font-light text-sm">
				Actualmente profundizando en arquitecturas backend con
				<span class="text-slate-400">Python, Java y Spring Boot</span>,
				y en diseño de bases de datos relacionales.
			</p>
			<div class="flex gap-2 flex-wrap">
				<span class="font-mono text-xs px-3 py-1.5 rounded-full border border-orange-500/25 text-orange-300/80 bg-orange-500/[0.06]">
					Español nativo
				</span>
				<span class="font-mono text-xs px-3 py-1.5 rounded-full border border-white/8 text-slate-600 bg-white/[0.02]">
					Inglés intermedio
				</span>
			</div>
		</div>

		<div class="grid grid-cols-2 gap-3">
			{#each traits as t, i}
				<div use:scaleIn={i * 80} use:tilt={6}
					class="group border border-white/5 rounded-2xl p-5 bg-white/[0.02] relative overflow-hidden
					hover:border-orange-500/30 transition-all duration-300 hover:bg-orange-500/[0.04]">

					<!-- Hover glow -->
					<div class="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/[0.05] group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>

					<span class="font-mono text-[10px] text-orange-500/40 block mb-2 group-hover:text-orange-500/60 transition-colors duration-300">{t.num}</span>
					<p class="text-slate-300 text-sm font-semibold leading-snug mb-1.5 group-hover:text-white transition-colors duration-300">{t.label}</p>
					<p class="text-slate-600 text-xs leading-snug group-hover:text-slate-500 transition-colors duration-300">{t.desc}</p>
				</div>
			{/each}
		</div>

	</div>
</section>
