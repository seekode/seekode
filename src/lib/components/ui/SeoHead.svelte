<script lang="ts">
	import { page } from '$app/state';
	import { locales, getLocale, localizeHref, deLocalizeHref } from '$lib/paraglide/runtime';

	const SITE_URL = 'https://seekode.dev';

	interface SeoHeadProps {
		title: string;
		description: string;
		image?: string;
		type?: string;
	}

	const { title, description, image = '/og-image.jpg', type = 'website' }: SeoHeadProps = $props();

	const basePath = $derived(deLocalizeHref(page.url.pathname));
	const canonicalUrl = $derived(SITE_URL + page.url.pathname);
	const imageUrl = $derived(SITE_URL + image);
	const currentLocale = $derived(getLocale());
	const ogLocale = $derived(currentLocale === 'fr' ? 'fr_FR' : 'en_US');

	const hreflangLinks = $derived(
		locales.map((locale) => ({
			locale,
			href: SITE_URL + localizeHref(basePath, { locale })
		}))
	);

	const defaultHref = $derived(SITE_URL + localizeHref(basePath, { locale: 'fr' }));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content={type} />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:site_name" content="Seekode" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	{#each hreflangLinks as { locale, href } (locale)}
		<link rel="alternate" hreflang={locale} {href} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={defaultHref} />
</svelte:head>
