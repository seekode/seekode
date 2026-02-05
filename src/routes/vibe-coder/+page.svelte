<script lang="ts">
	import HomeCommunity from '$lib/components/pages/home/HomeCommunity.svelte';
	import HomeFaq from '$lib/components/pages/home/HomeFaq.svelte';
	import HomeHero from '$lib/components/pages/home/HomeHero.svelte';
	import HomeReview from '$lib/components/pages/home/HomeReview.svelte';
	import HomeSocialProof from '$lib/components/pages/home/HomeSocialProof.svelte';
	import HomeTechnoSlide from '$lib/components/pages/home/HomeTechnoSlide.svelte';
	import SeoHead from '$lib/components/ui/SeoHead.svelte';
	import * as m from '$lib/paraglide/messages';
	import { audience } from '$lib/stores/audience.svelte';

	audience.set('vibe');
</script>

<SeoHead title={m.vibe_coder_page_title()} description={m.vibe_coder_page_description()} />

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
