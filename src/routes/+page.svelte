<script>
	import HomeHeader from '$lib/components/pages/home/HomeHeader.svelte';
	import HomeSocialProof from '$lib/components/pages/home/HomeSocialProof.svelte';
</script>

<svelte:head>
	<title>Seekode - Formation</title>
	<meta name="description" content="Formation Seekode" />
</svelte:head>

<div>
	<HomeHeader />
	<HomeSocialProof />
</div>

<style>
	div {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(180deg, var(--bg-tertiary) 0%, var(--bg-primary) 80vh);
	}
</style>
