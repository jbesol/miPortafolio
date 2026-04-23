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
				{ threshold: 0.35 }
			);
			io.observe(el);
			return io;
		});
		return () => observers.forEach((o) => o?.disconnect());
	});

	const navLinks = [
		{ label: 'Sobre mí', href: '#sobre-mi', id: 'sobre-mi' },
		{ label: 'Habilidades', href: '#habilidades', id: 'habilidades' },
		{ label: 'Proyectos', href: '#proyectos', id: 'proyectos' },
		{ label: 'Contacto', href: '#contacto', id: 'contacto' }
	];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300
	{scrolled ? 'bg-[#0a0a0b]/90 backdrop-blur-md border-b border-white/5' : ''}">
	<div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

		<a href="/" class="font-mono text-sm font-semibold tracking-widest text-orange-400">JDB_</a>

		<!-- Desktop -->
		<ul class="hidden md:flex gap-8">
			{#each navLinks as link}
				<li>
					<a href={link.href}
						class="relative text-xs uppercase tracking-widest transition-colors duration-200
							{active === link.id ? 'text-orange-400' : 'text-slate-500 hover:text-slate-200'}">
						{link.label}
						{#if active === link.id}
							<span class="absolute -bottom-0.5 left-0 right-0 h-px bg-orange-400 rounded-full"></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Hamburger -->
		<button onclick={() => (menuOpen = !menuOpen)} aria-label="Menú"
			class="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8">
			<span class="block w-5 h-px bg-slate-400 transition-all duration-200
				{menuOpen ? 'rotate-45 translate-y-[6px]' : ''}"></span>
			<span class="block w-5 h-px bg-slate-400 transition-all duration-200
				{menuOpen ? 'opacity-0 scale-x-0' : ''}"></span>
			<span class="block w-5 h-px bg-slate-400 transition-all duration-200
				{menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}"></span>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div class="md:hidden border-t border-white/5 bg-[#0a0a0b]/95 backdrop-blur-md">
			<ul class="max-w-5xl mx-auto px-6 py-5 flex flex-col gap-4">
				{#each navLinks as link}
					<li>
						<a href={link.href} onclick={() => (menuOpen = false)}
							class="block text-xs uppercase tracking-widest py-1 transition-colors duration-200
								{active === link.id ? 'text-orange-400' : 'text-slate-500'}">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
