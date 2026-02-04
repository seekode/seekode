<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:head>
	<title>{m.privacy_title()} - Seekode</title>
</svelte:head>

<section class="legal">
	<div class="legal__container">
		<h1>{m.privacy_title()}</h1>
		<p class="updated">{m.privacy_last_updated()}</p>

		<article>
			<h2>{m.privacy_controller_title()}</h2>
			{@html m.privacy_controller_content()}
		</article>

		<article>
			<h2>{m.privacy_data_collected_title()}</h2>
			{@html m.privacy_data_collected_content()}
		</article>

		<article>
			<h2>{m.privacy_purpose_title()}</h2>
			{@html m.privacy_purpose_content()}
		</article>

		<article>
			<h2>{m.privacy_recipients_title()}</h2>
			{@html m.privacy_recipients_content()}
		</article>

		<article>
			<h2>{m.privacy_retention_title()}</h2>
			{@html m.privacy_retention_content()}
		</article>

		<article>
			<h2>{m.privacy_rights_title()}</h2>
			{@html m.privacy_rights_content()}
		</article>

		<article>
			<h2>{m.privacy_cookies_title()}</h2>
			{@html m.privacy_cookies_content()}
		</article>

		<article>
			<h2>{m.privacy_third_party_title()}</h2>
			{@html m.privacy_third_party_content()}
		</article>
	</div>
</section>

<style lang="scss">
	.legal {
		min-height: 70vh;
		padding: $spacing-16 $spacing-4;
		@include nav-offset;

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
		margin-bottom: $spacing-2;
	}

	.updated {
		color: var(--text-secondary);
		font-size: $font-size-sm;
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
