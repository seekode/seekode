<script lang="ts">
	import HomeCommunity from '$lib/components/pages/home/HomeCommunity.svelte';
	import HomeFaq from '$lib/components/pages/home/HomeFaq.svelte';
	import HomeHero from '$lib/components/pages/home/HomeHero.svelte';
	import HomeReview from '$lib/components/pages/home/HomeReview.svelte';
	import HomeSocialProof from '$lib/components/pages/home/HomeSocialProof.svelte';
	import HomeTechnoSlide from '$lib/components/pages/home/HomeTechnoSlide.svelte';
	import JsonLd from '$lib/components/ui/JsonLd.svelte';
	import SeoHead from '$lib/components/ui/SeoHead.svelte';
	import * as m from '$lib/paraglide/messages';

	const organizationSchema = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				name: 'Seekode',
				url: 'https://seekode.dev',
				logo: 'https://seekode.dev/assets/images/logo/full-text.svg',
				email: 'nicolas@seekode.dev',
				founder: {
					'@type': 'Person',
					name: 'Nicolas Texier'
				},
				sameAs: [
					'https://www.tiktok.com/@seekode',
					'https://www.instagram.com/seekode.dev/',
					'https://www.youtube.com/@_seekode',
					'https://www.linkedin.com/in/nicolas-texier-dev/'
				]
			},
			{
				'@type': 'WebSite',
				name: 'Seekode',
				url: 'https://seekode.dev'
			}
		]
	};
</script>

<SeoHead title={m.page_title()} description={m.page_description()} />
<JsonLd schema={organizationSchema} />

<div>
	<HomeHero />
	<HomeSocialProof />
	<HomeTechnoSlide />
</div>
<HomeCommunity />
<HomeReview />
<HomeFaq />

<style>
	div {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--bg-primary);
	}
</style>
