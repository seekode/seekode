<script lang="ts">
	import type { Snippet } from 'svelte';
	import * as m from '$lib/paraglide/messages';

	interface ModalProps {
		children: Snippet;
		footer?: Snippet;
		onclose?: () => void;
		open: boolean;
		noPaddings?: boolean;
		title: string;
	}

	let {
		children,
		footer,
		onclose,
		open = $bindable(false),
		noPaddings = false,
		title
	}: ModalProps = $props();

	let dialog: HTMLDialogElement;
	let closing = $state(false);

	$effect(() => {
		const header = document.getElementById('header');
		if (open) {
			closing = false;
			dialog?.showModal();
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			document.body.style.paddingRight = `${scrollbarWidth}px`;
			document.body.style.overflow = 'hidden';
			if (header) header.style.paddingRight = `calc(var(--header-padding) + ${scrollbarWidth}px)`;
		} else if (dialog?.open) {
			closing = true;
		}
	});

	const resetBodyStyles = () => {
		const header = document.getElementById('header');
		document.body.style.paddingRight = '';
		document.body.style.overflow = '';
		if (header) header.style.paddingRight = '';
	};

	const handleTransitionEnd = (e: TransitionEvent) => {
		if (closing && e.propertyName === 'opacity') {
			closing = false;
			dialog?.close();
			resetBodyStyles();
		}
	};

	const handleClose = () => {
		if (onclose) return onclose();
		open = false;
	};
</script>

<dialog
	bind:this={dialog}
	class:closing
	aria-modal="true"
	aria-labelledby="modal-title"
	onclick={(e) => {
		if (e.target === dialog) handleClose();
	}}
	oncancel={(e) => {
		e.preventDefault();
		handleClose();
	}}
	ontransitionend={handleTransitionEnd}
>
	<div class="modal">
		<div class="header">
			<h2 id="modal-title">{title}</h2>
			<button onclick={handleClose} aria-label={m.modal_close()}></button>
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
	</div>
</dialog>

<style lang="scss">
	dialog {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;
		max-width: 100vw;
		max-height: 100vh;
		margin: 0;
		padding: 0;
		border: none;
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		color: var(--text-primary);
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
		transition:
			opacity 0.5s ease,
			display 0.5s allow-discrete,
			overlay 0.5s allow-discrete;

		&:not([open]) {
			display: none;
		}

		&::backdrop {
			background: transparent;
		}

		&[open] {
			display: flex;
			opacity: 1;

			@starting-style {
				opacity: 0;
			}

			&.closing {
				opacity: 0;
			}
		}

		.modal {
			@include glass-effect;
			width: 40rem;
			max-width: calc(100vw - $spacing-8);
			border-radius: $radius-lg;
			display: flex;
			flex-direction: column;
			align-items: center;
			transform: scaleY(1);
			transition: transform $transition-slow ease;

			> div {
				width: 100%;
			}
		}

		&[open] .modal {
			@starting-style {
				transform: scaleY(0.5);
			}
		}

		&[open].closing .modal {
			transform: scaleY(0.5);
		}

		.header {
			padding: $spacing-4;
			position: relative;
			display: flex;
			justify-content: center;

			button {
				width: 2.75rem;
				height: 2.75rem;
				position: absolute;
				right: $spacing-2;
				top: $spacing-2;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: $radius-md;
				cursor: pointer;
				transition: background-color $transition-fast $transition-timing;

				&:hover {
					background-color: rgb(var(--hover) / 0.1);
				}

				&::before,
				&::after {
					content: '';
					width: 1rem;
					height: 1px;
					position: absolute;
					top: 50%;
					left: 50%;
					background: var(--text-primary);
				}

				&::before {
					transform: translate(-50%, -50%) rotate(45deg);
				}

				&::after {
					transform: translate(-50%, -50%) rotate(-45deg);
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
