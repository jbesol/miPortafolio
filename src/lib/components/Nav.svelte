<script>
	let scrolled = $state(false);
	let menuOpen = $state(false);
	let active = $state('');

	$effect(() => {
		const onScroll = () => (scrolled = window.scrollY > 40);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		const ids = ['sobre-mi', 'habilidades', 'proyectos', 'contacto'];
		const observers = ids.map((id) => {
			const el = document.getElementById(id);
			if (!el) return null;
			const io = new IntersectionObserver(
				([e]) => { if (e.isIntersecting) active = id; },
				{ threshold: 0.3 }
			);
			io.observe(el);
			return io;
		});
		return () => observers.forEach((o) => o?.disconnect());
	});

	const navLinks = [
		{ label: 'Sobre mí',    href: '#sobre-mi',    id: 'sobre-mi'    },
		{ label: 'Habilidades', href: '#habilidades', id: 'habilidades' },
		{ label: 'Proyectos',   href: '#proyectos',   id: 'proyectos'   },
		{ label: 'Contacto',    href: '#contacto',    id: 'contacto'    }
	];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500
	{scrolled ? 'bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/[0.06]' : ''}">

	<div class="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

		<a href="/" class="font-mono text-sm font-medium text-slate-200 tracking-wide">
			<span class="text-blue-400">J</span>DB
		</a>

		<!-- Desktop links -->
		<ul class="hidden md:flex items-center gap-8">
			{#each navLinks as link}
				<li>
					<a href={link.href}
						class="text-sm transition-colors duration-200
							{active === link.id ? 'text-slate-100' : 'text-slate-500 hover:text-slate-300'}">
						{link.label}
						{#if active === link.id}
							<span class="block h-px bg-blue-500 mt-0.5 rounded-full"></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Hamburger -->
		<button onclick={() => (menuOpen = !menuOpen)} aria-label="Menú"
			class="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1">
			<span class="block w-5 h-px bg-slate-500 transition-all duration-200
				{menuOpen ? 'rotate-45 translate-y-[6px]' : ''}"></span>
			<span class="block w-5 h-px bg-slate-500 transition-all duration-200
				{menuOpen ? 'opacity-0 scale-x-0' : ''}"></span>
			<span class="block w-5 h-px bg-slate-500 transition-all duration-200
				{menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}"></span>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div class="md:hidden border-t border-white/[0.06] bg-[#0F172A]/98 backdrop-blur-xl">
			<ul class="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-5">
				{#each navLinks as link}
					<li>
						<a href={link.href} onclick={() => (menuOpen = false)}
							class="block text-sm transition-colors duration-200
								{active === link.id ? 'text-slate-100' : 'text-slate-500'}">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
