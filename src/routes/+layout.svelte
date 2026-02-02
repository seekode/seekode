<script lang="ts">
	import Contact from '$lib/components/layouts/Contact.svelte';
	import Footer from '$lib/components/layouts/Footer.svelte';
	import Navbar from '$lib/components/layouts/Navbar.svelte';
	import CalendlyModal from '$lib/components/ui/CalendlyModal.svelte';
	import ToastContainer from '$lib/components/ui/ToastContainer.svelte';
	import { calendlyModal } from '$lib/stores/calendly.svelte';
	import '$lib/styles/global.scss';

	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Contact />
<Footer />

<CalendlyModal open={calendlyModal.isOpen} onclose={() => calendlyModal.close()} />
<ToastContainer />
