<script lang="ts">
	interface JsonLdProps {
		schema: Record<string, unknown>;
	}

	const { schema }: JsonLdProps = $props();
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html '<script type="application/ld+json">' + JSON.stringify(schema) + '</' + 'script>'}
</svelte:head>
