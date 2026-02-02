<script lang="ts">
	import HomeCommunity from '$lib/components/pages/home/HomeCommunity.svelte';
	import HomeFaq from '$lib/components/pages/home/HomeFaq.svelte';
	import HomeHeader from '$lib/components/pages/home/HomeHeader.svelte';
	import HomeReview from '$lib/components/pages/home/HomeReview.svelte';
	import HomeSocialProof from '$lib/components/pages/home/HomeSocialProof.svelte';
	import HomeTechnoSlide from '$lib/components/pages/home/HomeTechnoSlide.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.page_title()}</title>
	<meta name="description" content={m.page_description()} />
</svelte:head>

<div>
	<HomeHeader />
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
