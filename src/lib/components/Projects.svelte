<script>
	import { fadeUp } from '$lib/animate.js';

	const projects = [
		{
			num: '01',
			title: 'Auth Service',
			description: 'API REST de autenticación con access tokens de vida corta y refresh tokens de un solo uso en Redis. Blacklist activa para logout inmediato. Mensaje de error genérico en login para prevenir enumeración de cuentas. Desplegado en Railway.',
			tags: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
			github: 'https://github.com/jbesol/pry-auth-services',
			demo: 'https://pry-auth-services-production.up.railway.app/docs'
		},
		{
			num: '02',
			title: 'Task Manager API',
			description: 'Gestión de proyectos y tareas con Repository Pattern — el servicio no conoce SQLAlchemy directamente, desacoplando la lógica de negocio de la base de datos. Autenticación delegada al Auth Service vía httpx. PATCH, paginación y errores centralizados.',
			tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'httpx'],
			github: 'https://github.com/jbesol/pry-task-manager',
			demo: null
		},
		{
			num: '03',
			title: 'Notification Service',
			description: 'Emails y reportes procesados en background con Celery. Dos colas independientes (emails/reports) para escalar cada tipo por separado. La API responde en milisegundos; el worker procesa con reintentos automáticos si el SMTP falla. Dashboard con Flower.',
			tags: ['FastAPI', 'Celery', 'Redis', 'Flower'],
			github: 'https://github.com/jbesol/pry-notification-service',
			demo: null
		},
		{
			num: '04',
			title: 'Hotel Reservation System',
			description: 'API REST de gestión hotelera con máquina de estados para reservas (PENDIENTE → CONFIRMADA → CHECKED_IN → CHECKED_OUT) y prevención de double booking mediante query JPQL que detecta solapamiento de intervalos. Controller → Service → Repository estricto; nunca se exponen entities hacia afuera.',
			tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
			github: 'https://github.com/jbesol/Hotel_Reservation',
			demo: 'https://reservacionn-hotel.netlify.app/',
			preview: '/img/hotel.png'
		},
		{
			num: '05',
			title: 'Gestión de Cursos Electivos',
			description: 'Sistema fullstack para manejar cupos limitados por periodo con restricciones de cruce entre materias. Tres roles diferenciados: estudiante, docente y administrador.',
			tags: ['Python', 'MySQL', 'Fullstack'],
			github: null,
			demo: null,
			preview: '/img/cursos.png'
		},
		{
			num: '06',
			title: 'JdeJenny',
			description: 'Primer proyecto llevado a producción real. Decisiones de deploy tomadas sin experiencia previa: configuración de servidor, estructura de rutas y diseño responsivo sin frameworks externos.',
			tags: ['HTML', 'CSS', 'JavaScript'],
			github: null,
			demo: null,
			preview: '/img/jdejenny.png'
		}
	];
</script>

<section id="proyectos" class="py-28 px-6">

	<div class="max-w-6xl mx-auto">

		<div use:fadeUp={0} class="mb-12">
			<p class="font-mono text-xs text-blue-400/60 tracking-widest uppercase mb-5">Proyectos</p>
			<h2 class="text-4xl font-bold text-slate-100">Trabajo reciente</h2>
		</div>

		<div class="flex flex-col gap-3">
			{#each projects as p, i}
				<div use:fadeUp={i * 70}
					class="group border border-white/[0.07] rounded-xl p-6 md:p-8 bg-[#1E293B]/30
					hover:border-white/[0.12] hover:bg-[#1E293B]/60 transition-all duration-300">

					<div class="flex flex-col md:flex-row md:items-start justify-between gap-5">

						<div class="flex-1 min-w-0">
							<div class="flex items-center gap-3 mb-3">
								<span class="font-mono text-xs text-slate-700 select-none">{p.num}</span>
								<h3 class="text-base font-semibold text-slate-200 group-hover:text-white transition-colors duration-200">
									{p.title}
								</h3>
							</div>

							<p class="text-slate-500 text-sm leading-relaxed mb-4 max-w-2xl">
								{p.description}
							</p>

							<div class="flex flex-wrap gap-2">
								{#each p.tags as tag}
									<span class="font-mono text-[10px] px-2.5 py-1 rounded-md border border-white/[0.06] text-slate-600 bg-transparent">
										{tag}
									</span>
								{/each}
							</div>
						</div>

						<div class="flex md:flex-col items-center md:items-end gap-4 md:gap-3 shrink-0 md:pt-0.5">
							{#if p.preview}
								<div class="relative overflow-hidden rounded-lg border border-white/[0.07]
									w-28 h-[64px] group-hover:w-72 group-hover:h-[162px] hidden md:block shrink-0
									opacity-40 group-hover:opacity-90 transition-all duration-500 ease-out">
									<img
										src={p.preview}
										alt="Vista previa de {p.title}"
										class="w-full h-full object-cover object-top"
									/>
									<div class="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent"></div>
								</div>
							{:else}
								{#if p.demo}
									<a href={p.demo} target="_blank" rel="noopener"
										class="font-mono text-xs text-amber-500/70 hover:text-amber-400 transition-colors duration-200 whitespace-nowrap">
										Demo →
									</a>
								{/if}
								{#if p.github}
									<a href={p.github} target="_blank" rel="noopener"
										class="font-mono text-xs text-slate-600 hover:text-slate-300 transition-colors duration-200 whitespace-nowrap">
										GitHub →
									</a>
								{:else}
									<span class="font-mono text-xs text-slate-800">Privado</span>
								{/if}
							{/if}
						</div>

					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
