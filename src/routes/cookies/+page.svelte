<script lang="ts">
	import SeoHead from '$lib/components/ui/SeoHead.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<SeoHead title="{m.cookies_title()} - Seekode" description={m.cookies_description()} />

<section class="legal">
	<div class="legal__container">
		<h1>{m.cookies_title()}</h1>

		<article>
			<h2>{m.cookies_what_title()}</h2>
			{@html m.cookies_what_content()}
		</article>

		<article>
			<h2>{m.cookies_used_title()}</h2>
			{@html m.cookies_used_content()}

			<div class="table-wrapper">
				<table>
					<thead>
						<tr>
							<th>{m.cookies_table_name()}</th>
							<th>{m.cookies_table_purpose()}</th>
							<th>{m.cookies_table_duration()}</th>
							<th>{m.cookies_table_type()}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><code>theme</code></td>
							<td>{m.cookies_theme_purpose()}</td>
							<td>{m.cookies_one_year()}</td>
							<td>{m.cookies_functional()}</td>
						</tr>
						<tr>
							<td><code>audience</code></td>
							<td>{m.cookies_audience_purpose()}</td>
							<td>{m.cookies_one_year()}</td>
							<td>{m.cookies_functional()}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</article>

		<article>
			<h2>{m.cookies_local_storage_title()}</h2>
			{@html m.cookies_local_storage_content()}
		</article>

		<article>
			<h2>{m.cookies_third_party_title()}</h2>
			{@html m.cookies_third_party_content()}
		</article>

		<article>
			<h2>{m.cookies_manage_title()}</h2>
			{@html m.cookies_manage_content()}
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

	.table-wrapper {
		margin-top: $spacing-6;
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		font-size: $font-size-sm;

		th,
		td {
			padding: $spacing-3 $spacing-4;
			text-align: left;
			border-bottom: 1px solid var(--text-muted);
		}

		th {
			font-weight: $font-weight-medium;
			color: var(--text-primary);
		}

		td {
			color: var(--text-secondary);
		}

		code {
			padding: $spacing-1 $spacing-2;
			background-color: var(--bg-tertiary);
			border-radius: $radius-sm;
			font-size: $font-size-xs;
		}
	}
</style>
