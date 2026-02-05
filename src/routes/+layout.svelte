<script lang="ts">
	import { untrack } from 'svelte';
	import * as m from '$lib/paraglide/messages';
	import Contact from '$lib/components/layouts/Contact.svelte';
	import Footer from '$lib/components/layouts/Footer.svelte';
	import CalendlyModal from '$lib/components/ui/CalendlyModal.svelte';
	import CookieBanner from '$lib/components/ui/CookieBanner.svelte';
	import ToastContainer from '$lib/components/ui/ToastContainer.svelte';
	import { audience } from '$lib/stores/audience.svelte';
	import { theme } from '$lib/stores/theme.svelte';
	import { calendlyModal } from '$lib/stores/calendly.svelte';
	import '$lib/styles/global.scss';
	import Header from '$lib/components/layouts/Header.svelte';

	let { children, data } = $props();

	untrack(() => {
		audience.init(data.audience);
		theme.init(data.theme);
	});
</script>

<a href="#main" class="skip-link">{m.skip_to_content()}</a>

<Header />
<main id="main" tabindex="-1">
	{@render children()}
</main>
<Contact />
<Footer />

<CalendlyModal open={calendlyModal.isOpen} onclose={() => calendlyModal.close()} />
<CookieBanner />
<ToastContainer />
