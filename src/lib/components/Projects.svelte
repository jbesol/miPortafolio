<script>
	import { fadeUp, tilt } from '$lib/animate.js';

	const projects = [
		{
			num: '01',
			title: 'Sistema de Gestión de Cursos Electivos',
			decision: 'La decisión de diseño central fue modelar la base de datos para manejar cupos limitados por periodo y restricciones de cruce entre materias. Se definieron tres roles con permisos diferenciados: estudiante, docente y administrador.',
			tags: ['Python', 'MySQL', 'Fullstack'],
			github: null
		},
		{
			num: '02',
			title: 'JdeJenny',
			decision: 'Primer proyecto llevado a producción real. El reto fue tomar decisiones de deploy sin experiencia previa: configuración de servidor, estructura de rutas y diseño responsivo sin frameworks externos.',
			tags: ['HTML', 'CSS', 'JavaScript'],
			github: null
		}
	];

	let expanded = $state(new Set());
	const toggle = (i) => {
		const next = new Set(expanded);
		next.has(i) ? next.delete(i) : next.add(i);
		expanded = next;
	};
</script>

<section id="proyectos" class="py-32 px-6 relative">

	<!-- Section number watermark -->
	<div class="absolute right-8 top-16 font-display font-bold text-[10rem] leading-none text-white/[0.018] select-none hidden md:block">
		03
	</div>

	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/[0.06]"></div>

	<div class="max-w-5xl mx-auto">

		<div use:fadeUp={0} class="mb-14">
			<div class="flex items-center gap-3 mb-4">
				<span class="w-6 h-px bg-orange-500/50"></span>
				<p class="font-mono text-[11px] tracking-widest uppercase text-orange-400/70">Proyectos</p>
			</div>
			<h2 class="text-4xl font-bold text-white mb-2">Trabajo reciente</h2>
			<p class="text-slate-700 font-mono text-xs">Repositorios disponibles próximamente.</p>
		</div>

		<div class="flex flex-col gap-4">
			{#each projects as p, i}
				<article use:fadeUp={i * 120}
					class="group border border-white/5 bg-white/[0.02] rounded-2xl overflow-hidden
					hover:border-orange-500/20 transition-all duration-300">

					<!-- Header row -->
					<button onclick={() => toggle(i)}
						class="w-full text-left p-8 flex items-start md:items-center justify-between gap-6 cursor-pointer">

						<div class="flex items-start md:items-center gap-5 flex-1 min-w-0">
							<!-- Big project number -->
							<span class="font-display font-bold text-3xl md:text-4xl text-white/[0.07] group-hover:text-orange-500/20 transition-colors duration-300 shrink-0 leading-none mt-0.5">
								{p.num}
							</span>

							<div class="min-w-0">
								<h3 class="text-lg md:text-xl font-bold text-white group-hover:text-orange-50 transition-colors duration-200 leading-snug">
									{p.title}
								</h3>
								<div class="flex flex-wrap gap-2 mt-2">
									{#each p.tags as tag}
										<span class="font-mono text-[10px] px-2.5 py-1 rounded-full border border-white/8 text-slate-600">
											{tag}
										</span>
									{/each}
								</div>
							</div>
						</div>

						<!-- Expand toggle -->
						<span class="shrink-0 w-8 h-8 rounded-full border border-white/8 flex items-center justify-center
							text-slate-600 group-hover:border-orange-500/30 group-hover:text-orange-400
							transition-all duration-300 {expanded.has(i) ? 'rotate-45 border-orange-500/30 text-orange-400' : ''}">
							+
						</span>
					</button>

					<!-- Expandable detail -->
					<div class="overflow-hidden transition-all duration-400 {expanded.has(i) ? 'max-h-40' : 'max-h-0'}">
						<div class="px-8 pb-8 pt-0">
							<div class="border-t border-white/5 pt-5">
								<p class="text-slate-400 text-sm leading-relaxed max-w-2xl font-light">
									<span class="text-orange-400/50 font-mono text-xs mr-2">→</span>
									{p.decision}
								</p>
								{#if p.github}
									<a href={p.github} target="_blank" rel="noopener"
										class="inline-block mt-4 font-mono text-xs text-slate-500 hover:text-orange-400 transition-colors duration-200">
										GitHub →
									</a>
								{:else}
									<span class="inline-block mt-4 font-mono text-xs text-slate-800">Repo privado</span>
								{/if}
							</div>
						</div>
					</div>

				</article>
			{/each}
		</div>

	</div>
</section>
