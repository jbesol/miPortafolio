<script>
	import { fadeUp, scaleIn } from '$lib/animate.js';

	const groups = [
		{
			title: 'Backend',
			items: ['Python', 'FastAPI', 'Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'MySQL']
		},
		{
			title: 'Frontend',
			items: ['Svelte', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
		},
		{
			title: 'Herramientas',
			items: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux', 'VS Code']
		}
	];
</script>

<section id="habilidades" class="py-28 px-6">

	<div class="max-w-6xl mx-auto">

		<div use:fadeUp={0} class="mb-12">
			<p class="font-mono text-xs text-blue-400/60 tracking-widest uppercase mb-5">Habilidades</p>
			<h2 class="text-4xl font-bold text-slate-100">Stack tecnológico</h2>
		</div>

		<div class="grid md:grid-cols-3 gap-4">
			{#each groups as group, i}
				<div use:scaleIn={i * 100}
					class="group border border-white/[0.07] rounded-xl p-6 bg-[#1E293B]/40
					hover:border-white/[0.12] hover:bg-[#1E293B]/70 transition-all duration-300">

					<h3 class="font-mono text-xs text-slate-600 uppercase tracking-widest mb-5">{group.title}</h3>

					<div class="flex flex-wrap gap-2">
						{#each group.items as item}
							<span class="text-xs px-3 py-1.5 rounded-lg border border-white/[0.07] text-slate-500
								bg-white/[0.02] hover:border-blue-500/25 hover:text-slate-200 hover:bg-blue-500/[0.05]
								transition-all duration-200 cursor-default select-none">
								{item}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
