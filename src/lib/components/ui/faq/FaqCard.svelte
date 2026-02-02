<script lang="ts">
	export interface FaqCardData {
		title: string;
		text: string;
	}

	interface FaqCardProps {
		data: FaqCardData;
		open: boolean;
		onclick: () => void;
	}

	const { data, open, onclick }: FaqCardProps = $props();
</script>

<button class="card" class:open {onclick}>
	<span class="card__icon" aria-hidden="true"></span>
	<h3>{data.title}</h3>
	<div class="card__content">
		<div class="card__content__inner">
			<div></div>
			<p>{data.text}</p>
		</div>
	</div>
</button>

<style lang="scss">
	.card {
		padding: 0 $spacing-10 0 $spacing-5;
		border: 1px solid $color-primary;
		position: relative;
		overflow-y: hidden;
		border-radius: $radius-xl;
		opacity: 0.5;
		cursor: pointer;
		transition: $transition-slow;
		text-align: start;
		color: $dark-text-primary;

		:global([data-theme='light']) & {
			opacity: 1;
		}

		&:hover {
			opacity: 1;
		}

		&__icon {
			height: 0.2rem;
			width: 1rem;
			position: absolute;
			top: 2rem;
			right: $spacing-5;
			transform: translateY(-50%);
			background-color: $color-primary;
			transition: $transition-slow;

			&::before {
				content: '';
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				transform: rotate(90deg);
				background-color: $color-primary;
				transition: $transition-slow;
			}
		}

		h3 {
			padding: $spacing-5 0;
			font-size: $font-size-sm;
			font-weight: $font-weight-regular;
			display: flex;
			align-items: center;
			color: $color-primary;
		}

		&__content {
			display: grid;
			grid-template-rows: 0fr;
			transition: grid-template-rows $transition-slow;

			&__inner {
				overflow: hidden;

				div {
					width: 100%;
					height: 1px;
					background: $dark-text-primary;
				}

				p {
					padding: $spacing-4 0;
				}
			}
		}

		&.open {
			opacity: 1;
			background-color: $color-primary;

			.card__icon {
				background-color: $dark-text-primary;
				&::before {
					transform: rotate(0deg);
					background-color: $dark-text-primary;
				}
			}

			h3 {
				color: $dark-text-primary;
			}

			.card__content {
				grid-template-rows: 1fr;
			}
		}
	}
</style>
