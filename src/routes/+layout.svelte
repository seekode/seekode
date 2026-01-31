<script lang="ts">
	import Contact from '$lib/components/layouts/Contact.svelte';
	import Footer from '$lib/components/layouts/Footer.svelte';
	import Navbar from '$lib/components/layouts/Navbar.svelte';
	import '$lib/styles/global.scss';

	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Contact />
<Footer />
