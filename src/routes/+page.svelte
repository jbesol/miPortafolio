<script>
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	import Spotlight from '$lib/components/Spotlight.svelte';
</script>

<svelte:head>
	<title>Juan David Bello — Backend Developer</title>
	<meta name="description" content="Portafolio de Juan David Bello, estudiante de Ingeniería de Sistemas enfocado en backend con Python, Java y Spring Boot." />
</svelte:head>

<Cursor />
<Spotlight />
<Nav />
<main class="relative z-20">
	<Hero />
	<About />
	<Skills />
	<Projects />
	<Contact />
</main>
<Footer />
