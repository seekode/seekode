<script lang="ts">
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Modal from '$lib/components/ui/Modal.svelte';
	import { setContext, type Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	interface Props {
		children: Snippet;
		data: { url: string };
	}

	const { children, data }: Props = $props();

	// gestion url
	const urls = ['/', '/creation-of-website', '/training', '/our-creations'];

	let activeLink = $state('/');
	let previousUrl = $state('/');

	let next = $state(false);

	$effect.pre(() => {
		const url = data.url.replace('/en', '');
		const currentUrl = url === '' ? '/' : url;

		if (previousUrl !== currentUrl) {
			next = urls.indexOf(previousUrl) < urls.indexOf(currentUrl);
			activeLink = currentUrl;
			previousUrl = currentUrl;
		}
	});

	// contact modal
	let contactModal = $state(false);
	let triggerRef = $state<HTMLElement | undefined>(undefined);

	const openModal = (ref?: HTMLElement) => {
		triggerRef = ref ?? undefined;
		contactModal = true;
	};

	setContext('contactModal', { openModal });
</script>

<NavBar {activeLink} />
{#key data.url}
	<div
		in:fly={{ x: next ? 200 : -200, duration: 1000, delay: 300 }}
		out:fly={{ x: next ? -200 : 200, duration: 1000 }}
	>
		{@render children()}
	</div>
{/key}
<Modal title="Contact" {triggerRef} bind:display={contactModal}></Modal>

<style lang="scss">
	div {
		width: 100%;
		max-width: 1920px;
		min-height: 100dvh;
		padding-top: calc($margin + 4rem);
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	@media screen and (max-width: 800px) {
		div {
			padding-top: 0;
			padding-bottom: calc($margin + 4rem);
		}
	}
</style>
