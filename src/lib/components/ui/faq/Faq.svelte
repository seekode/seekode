<script lang="ts">
	import type { FaqCardData } from './FaqCard.svelte';
	import FaqCard from './FaqCard.svelte';

	interface FaqProps {
		content: FaqCardData[];
	}

	const { content }: FaqProps = $props();

	let open = $state(0);

	const left = $derived(content.filter((_, i) => i % 2 === 0));
	const right = $derived(content.filter((_, i) => i % 2 === 1));

	const handleClick = (i: number) => (open = open == i ? 0 : i);
</script>

<div class="content">
	<div class="content__column">
		{#each left as data, i (i)}
			<FaqCard {data} open={i + 1 == open} onclick={() => handleClick(i + 1)} />
		{/each}
	</div>
	<div class="content__column">
		{#each right as data, i (i)}
			<FaqCard {data} open={(i + 1) * -1 == open} onclick={() => handleClick((i + 1) * -1)} />
		{/each}
	</div>
</div>

<style lang="scss">
	.content {
		max-width: 1350px;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: $spacing-4;

		@include sm {
			flex-direction: row;
			justify-content: center;
			align-items: start;
		}

		&__column {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: $spacing-3;

			@include sm {
				width: calc(50% - ($spacing-3));
			}
		}
	}
</style>
