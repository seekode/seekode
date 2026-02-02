<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ModalProps {
		children: Snippet;
		footer?: Snippet;
		onclose?: () => void;
		open: boolean;
		noPaddings?: boolean;
	}

	let {
		children,
		footer,
		onclose,
		open = $bindable(false),
		noPaddings = false
	}: ModalProps = $props();

	let dialog: HTMLDialogElement;

	$effect(() => {
		const nav = document.getElementById('nav');
		if (open) {
			dialog?.showModal();
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			document.body.style.paddingRight = `${scrollbarWidth}px`;
			document.body.style.overflow = 'hidden';
			if (nav) nav.style.paddingRight = `calc(var(--nav-padding) + ${scrollbarWidth}px)`;
		} else {
			dialog?.close();
			document.body.style.paddingRight = '';
			document.body.style.overflow = '';
			if (nav) nav.style.paddingRight = '';
		}
	});

	const handleClose = () => {
		if (onclose) return onclose();
		open = false;
	};
</script>

<dialog
	bind:this={dialog}
	onclick={(e) => {
		if (e.target === dialog) handleClose();
	}}
>
	<div class="header">
		<h2>Titre de la modal</h2>
		<button onclick={handleClose} aria-label="Ferme le menu"></button>
	</div>
	<div class="content">
		<div class="content__scroll" class:no-paddings={noPaddings}>
			{@render children()}
		</div>
	</div>
	{#if footer}
		<div class="footer">
			{@render footer()}
		</div>
	{/if}
</dialog>

<style lang="scss">
	dialog {
		@include glass-effect;
		width: 40rem;
		max-width: calc(100vw - $spacing-8);
		border: none;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scaleY(0.5);
		opacity: 0;
		flex-direction: column;
		align-items: center;
		color: var(--text-primary);
		border-radius: $radius-lg;
		transition:
			transform $transition-slow ease,
			opacity $transition-slow ease,
			display $transition-slow allow-discrete,
			overlay $transition-slow allow-discrete;

		&:not([open]) {
			display: none;
		}

		&::backdrop {
			background: rgba(0, 0, 0, 0.3);
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
			opacity: 0;
			transition: opacity $transition-slow ease;
		}

		&[open] {
			display: flex;
			opacity: 1;
			transform: translate(-50%, -50%) scaleY(1);
			@starting-style {
				opacity: 0;
				transform: translate(-50%, -50%) scaleY(0.5);
			}

			&::backdrop {
				opacity: 1;
				overscroll-behavior: contain;

				@starting-style {
					opacity: 0;
				}
			}
		}

		> div {
			width: 100%;
		}

		.header {
			padding: $spacing-4;
			position: relative;
			display: flex;
			justify-content: center;

			button {
				width: 1rem;
				height: 1rem;
				position: absolute;
				right: $spacing-4;
				top: $spacing-4;

				&::before,
				&::after {
					content: '';
					width: 100%;
					height: 1px;
					position: absolute;
					top: 50%;
					left: 0;
					background: var(--text-primary);
				}

				&::before {
					transform: translateY(-50%) rotate(45deg);
				}

				&::after {
					transform: translateY(-50%) rotate(-45deg);
				}
			}
		}

		.content {
			position: relative;

			&__scroll {
				max-height: 60vh;
				padding: $spacing-8 $spacing-4;
				display: flex;
				flex-direction: column;
				align-items: center;
				overflow-y: auto;
				mask-image: linear-gradient(
					to bottom,
					transparent 0%,
					black $spacing-16,
					black calc(100% - $spacing-16),
					transparent 100%
				);
				-webkit-mask-image: linear-gradient(
					to bottom,
					transparent 0%,
					black $spacing-8,
					black calc(100% - $spacing-8),
					transparent 100%
				);

				&.no-paddings {
					padding: $spacing-2 $spacing-4;
				}
			}
		}

		.footer {
			padding: $spacing-4;
			display: flex;
			justify-content: flex-end;
			gap: $spacing-2;
		}
	}
</style>
