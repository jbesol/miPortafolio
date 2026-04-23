<script>
	import { fadeUp, scaleIn } from '$lib/animate.js';

	const groups = [
		{
			title: 'Backend',
			accent: true,
			emoji: '⚙',
			items: ['Python', 'Java', 'Spring Boot', 'MySQL', 'REST APIs']
		},
		{
			title: 'Frontend',
			accent: false,
			emoji: '◻',
			items: ['Svelte', 'JavaScript', 'HTML / CSS', 'Tailwind CSS']
		},
		{
			title: 'Herramientas',
			accent: false,
			emoji: '◈',
			items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Linux']
		}
	];
</script>

<section id="habilidades" class="py-32 px-6 relative">

	<!-- Section number watermark -->
	<div class="absolute left-8 top-16 font-display font-bold text-[10rem] leading-none text-white/[0.018] select-none hidden md:block">
		02
	</div>

	<!-- Subtle separator line -->
	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/[0.06]"></div>

	<div class="max-w-5xl mx-auto">

		<div use:fadeUp={0} class="mb-14">
			<div class="flex items-center gap-3 mb-4">
				<span class="w-6 h-px bg-orange-500/50"></span>
				<p class="font-mono text-[11px] tracking-widest uppercase text-orange-400/70">Habilidades</p>
			</div>
			<h2 class="text-4xl font-bold text-white">Stack tecnológico</h2>
		</div>

		<div class="grid md:grid-cols-3 gap-4">
			{#each groups as group, i}
				<div use:scaleIn={i * 100}
					class="group border rounded-2xl p-7 relative overflow-hidden transition-all duration-300
					{group.accent
						? 'border-orange-500/20 bg-gradient-to-b from-orange-500/[0.06] to-orange-500/[0.02]'
						: 'border-white/5 bg-white/[0.02] hover:border-white/10'}">

					<!-- Card shimmer on hover -->
					<div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
						style="background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.015) 100%)">
					</div>

					<div class="flex items-baseline gap-3 mb-6">
						<span class="font-mono text-base {group.accent ? 'text-orange-500/50' : 'text-white/10'}">{group.emoji}</span>
						<h3 class="font-display text-sm uppercase tracking-widest font-bold
							{group.accent ? 'text-orange-400' : 'text-slate-500'}">
							{group.title}
						</h3>
					</div>

					<div class="flex flex-wrap gap-2">
						{#each group.items as item, j}
							<span class="text-xs px-3 py-1.5 rounded-full border
								transition-all duration-200 select-none font-medium
								{group.accent
									? 'border-orange-500/20 text-orange-200/80 bg-orange-500/[0.07] hover:bg-orange-500/20 hover:border-orange-400/50 hover:shadow-[0_0_16px_rgba(249,115,22,0.25)] hover:-translate-y-1 hover:scale-105'
									: 'border-white/8 text-slate-500 bg-white/[0.03] hover:border-white/20 hover:text-slate-200 hover:-translate-y-1 hover:bg-white/[0.06]'}"
								style="transition-delay: {j * 20}ms">
								{item}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
