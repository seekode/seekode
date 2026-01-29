<script>
	import HomeComunity from '$lib/components/pages/home/HomeComunity.svelte';
	import HomeHeader from '$lib/components/pages/home/HomeHeader.svelte';
	import HomeSocialProof from '$lib/components/pages/home/HomeSocialProof.svelte';
	import HomeTechnoSlide from '$lib/components/pages/home/HomeTechnoSlide.svelte';
</script>

<svelte:head>
	<title>Seekode - Formation</title>
	<meta name="description" content="Formation Seekode" />
</svelte:head>

<div>
	<HomeHeader />
	<HomeSocialProof />
	<HomeTechnoSlide />
</div>
<HomeComunity />

<style>
	div {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--bg-primary);
	}
</style>
