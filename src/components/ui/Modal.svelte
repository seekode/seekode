<script lang="ts">
	import { onMount, onDestroy, type Snippet } from 'svelte';

	interface Props {
		title?: String;
		triggerRef?: HTMLElement;
		children?: Snippet;
		actions?: Snippet<[() => void]>;
		display: boolean;
	}

	let { triggerRef, children, title, actions, display = $bindable(false) }: Props = $props();

	let dialog: HTMLDialogElement;
	let visible = $state(false);
	let moveTransition = $state(false);

	const moveModal = (origin: boolean = true) => {
		if (!dialog) return;

		if (origin) {
			if (triggerRef) {
				const rect = triggerRef.getBoundingClientRect();
				const style = window.getComputedStyle(triggerRef);

				dialog.style.top = `${rect.top}px`;
				dialog.style.left = `${rect.left}px`;
				dialog.style.width = `${rect.width}px`;
				dialog.style.maxHeight = `${rect.height}px`;
				dialog.style.borderRadius = `${style.borderRadius}`;
				dialog.style.background = `${style.background}`;
				dialog.style.transform = 'translate(0, 0)';
				dialog.style.boxShadow = '';
			} else {
				dialog.style.top = `50vh`;
				dialog.style.left = `50vw`;
				dialog.style.width = '0';
				dialog.style.maxHeight = '0';
				dialog.style.transform = 'translate(-50%, -50%)';
				dialog.style.boxShadow = '';
			}
		} else {
			dialog.style.top = '';
			dialog.style.left = '';
			dialog.style.width = '';
			dialog.style.maxHeight = '';
			dialog.style.borderRadius = '';
			dialog.style.background = '';
			dialog.style.transform = '';
			dialog.style.boxShadow = '0 0 0 200vw rgba(0, 0, 0, 0.5)';
		}
	};

	const open = () => {
		document.body.style.overflow = 'hidden';
		// show modal
		moveModal();
		dialog.showModal();
		visible = true;

		setTimeout(() => {
			if (triggerRef) {
				// hide trigger
				triggerRef.style.transition = 'none';
				triggerRef.style.opacity = '0';
			}

			// open modal
			moveTransition = true;
			moveModal(false);

			if (triggerRef) {
				setTimeout(() => {
					triggerRef.style.transition = '0.4s cubic-bezier(0.4, 0, 0.2, 1)';
				}, 400);
			}
		}, 150);
	};

	const close = () => {
		document.body.style.overflow = '';
		// close modal
		moveModal(true);
		visible = false;

		if (triggerRef) {
			// display trigger
			triggerRef.style.opacity = '';
			setTimeout(() => {
				triggerRef.style.transition = '';
			}, 400);
		}

		setTimeout(() => {
			moveTransition = false;

			// hide modal
			setTimeout(() => {
				if (dialog) dialog.close();
			}, 150);
		}, 400);
	};

	$effect(() => {
		if (display) {
			open();
		} else {
			close();
		}
	});

	onMount(() => {
		moveModal();
	});
</script>

<dialog bind:this={dialog} class:visible class:moveTransition onclick={() => (display = false)}>
	<button aria-label="Close modal" onclick={() => (display = false)}>
		<div></div>
	</button>
	<div onclick={(e) => e.stopPropagation()} role="presentation">
		{#if title}
			<h2>{title}</h2>
		{/if}
		<div class="content">
			{#if children}
				{@render children()}
			{/if}
		</div>
		{#if actions}
			<div class="actions">
				{@render actions(() => (display = false))}
			</div>
		{/if}
	</div>
</dialog>

<style lang="scss">
	dialog {
		@include backdrop;

		width: 50rem;
		max-height: calc(100vh - 2rem);
		border: none;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		flex-direction: column;
		transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
		opacity: 0;
		box-shadow: 0 0 0 200vw rgba(0, 0, 0, 0);

		&:focus {
			outline: none;
		}

		&::backdrop {
			background: transparent;
		}

		> * {
			opacity: 0;
			transition: $transition;
		}

		> button {
			width: 1.5rem;
			height: 1.5rem;
			padding: 0;
			position: absolute;
			z-index: 1;
			top: calc($padding - 0.5rem);
			right: calc($padding - 0.5rem);
			border-radius: 0;
			background: none;

			> div,
			> div::before {
				content: '';
				width: 1.5rem;
				height: 3px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%) rotate(45deg);
				border-radius: 5rem;
				background: $danger;
			}

			> div::before {
				transform: translate(-50%, -50%) rotate(-90deg);
			}
		}

		> div {
			> h2 {
				padding: 1rem;
				text-align: center;
				border-bottom: 1px solid $color;
			}

			> .content {
				width: 100%;
				flex: 1;
				padding: $padding;
				overflow-y: scroll;
				transition: $transition;
			}

			.actions {
				padding: 1rem $padding;
				border-top: 1px solid $color;
				display: flex;
				justify-content: flex-end;
			}
		}

		&.visible {
			display: flex;
			opacity: 1;
		}

		&.moveTransition {
			transition: $transition;

			> * {
				opacity: 1;
			}
		}
	}
</style>
