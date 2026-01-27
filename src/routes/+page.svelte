<script>
	import HomeHeader from '$lib/components/pages/home/HomeHeader.svelte';
</script>

<svelte:head>
	<title>Seekode - Formation</title>
	<meta name="description" content="Formation Seekode" />
</svelte:head>

<div>
	<HomeHeader />
</div>

<style>
	div {
		min-height: 100vh;
		background: linear-gradient(180deg, var(--bg-tertiary) 0%, var(--bg-primary) 80vh);
	}
</style>
