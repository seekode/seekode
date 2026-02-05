<script lang="ts">
	import SeoHead from '$lib/components/ui/SeoHead.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<SeoHead title="{m.legal_notice_title()} - Seekode" description={m.legal_notice_description()} />

<section class="legal">
	<div class="legal__container">
		<h1>{m.legal_notice_title()}</h1>

		<article>
			<h2>{m.legal_notice_editor_title()}</h2>
			{@html m.legal_notice_editor_content()}
		</article>

		<article>
			<h2>{m.legal_notice_host_title()}</h2>
			{@html m.legal_notice_host_content()}
		</article>

		<article>
			<h2>{m.legal_notice_ip_title()}</h2>
			{@html m.legal_notice_ip_content()}
		</article>

		<article>
			<h2>{m.legal_notice_liability_title()}</h2>
			{@html m.legal_notice_liability_content()}
		</article>
	</div>
</section>

<style lang="scss">
	.legal {
		min-height: 70vh;
		padding: $spacing-16 $spacing-4;
		@include header-offset;

		@include md {
			padding-inline: $spacing-8;
		}

		&__container {
			max-width: 800px;
			margin: 0 auto;
		}
	}

	h1 {
		font-size: $font-size-4xl;
		font-weight: $font-weight-medium;
		margin-bottom: $spacing-12;
	}

	article {
		margin-bottom: $spacing-10;

		h2 {
			font-size: $font-size-xl;
			font-weight: $font-weight-medium;
			margin-bottom: $spacing-4;
			color: $color-primary;
		}

		:global(a) {
			color: $color-primary;
			text-decoration: underline;
			text-underline-offset: 2px;

			&:hover {
				opacity: 0.8;
			}
		}
	}
</style>
