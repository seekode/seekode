<script lang="ts">
	import PaintBrush from '~icons/ion/paintbrush';
</script>

<section>
	<h2>Créations de site web</h2>
	<img src="/images/home/website.png" alt="" />
	<div class="pres">
		<div class="left">
			<span>
				<PaintBrush />
			</span>
			<div>
				<h3>test</h3>
				<p>test</p>
			</div>
		</div>
		<div class="center">
			<span>
				<PaintBrush />
			</span>
			<div>
				<h3>test</h3>
				<p>test</p>
			</div>
		</div>
		<div class="center">
			<span>
				<PaintBrush />
			</span>
			<div>
				<h3>test</h3>
				<p>test</p>
			</div>
		</div>
		<div class="right">
			<span>
				<PaintBrush />
			</span>
			<div>
				<h3>test</h3>
				<p>test</p>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		@include cards;
		margin: $margin;

		img {
			width: 100%;
			max-width: 25rem;
		}

		.pres {
			height: 25rem;
			width: 100%;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			gap: $padding;

			> div {
				@include cards;

				display: flex;
				flex-direction: column;
				align-items: center;
				gap: $padding;
				background: $background-card;

				:global(svg) {
					font-size: 2.5rem;
				}

				:global(svg *) {
					color: $primary;
				}

				div {
					display: flex;
					flex-direction: column;
				}

				&.left,
				&.right {
					width: 25%;
					height: 100%;
					justify-content: center;
					gap: 1rem;

					> div {
						gap: 3rem;
					}
				}

				&.center {
					width: calc(50% - $padding * 2);
					flex: 1;
					flex-direction: row;

					span {
						height: 100%;
						width: 7rem;
						display: flex;
						align-items: center;
						justify-content: center;
					}

					> div {
						height: 100%;
						gap: 2rem;
					}
				}
			}
		}
	}
</style>
