<script lang="ts">
	import Faq from '$lib/components/ui/faq/Faq.svelte';
	import type { FaqCardData } from '$lib/components/ui/faq/FaqCard.svelte';
	import Title from '$lib/components/ui/Title.svelte';

	const content: FaqCardData[] = [
		{
			title: 'Est-ce que cette formation est adaptée aux débutants complets ?',
			text: 'Oui. Elle est pensée pour des personnes de tous niveaux qui veulent progresser vite, même s’ils partent de zéro. Pas besoin d’avoir fait une école ou un bootcamp. Les modules sont pensée pour qu’il soit facile de déterminer ce que vous connaissait déjà et aller directement à l’essentiel pour vous'
		},
		{
			title: 'Est-ce que cette formation est adaptée aux débutants complets ?',
			text: 'Oui. Elle est pensée pour des personnes de tous niveaux qui veulent progresser vite, même s’ils partent de zéro. Pas besoin d’avoir fait une école ou un bootcamp. Les modules sont pensée pour qu’il soit facile de déterminer ce que vous connaissait déjà et aller directement à l’essentiel pour vous'
		},
		{
			title: 'Est-ce que cette formation est adaptée aux débutants complets ?',
			text: 'Oui. Elle est pensée pour des personnes de tous niveaux qui veulent progresser vite, même s’ils partent de zéro. Pas besoin d’avoir fait une école ou un bootcamp. Les modules sont pensée pour qu’il soit facile de déterminer ce que vous connaissait déjà et aller directement à l’essentiel pour vous'
		},
		{
			title: 'Est-ce que cette formation est adaptée aux débutants complets ?',
			text: 'Oui. Elle est pensée pour des personnes de tous niveaux qui veulent progresser vite, même s’ils partent de zéro. Pas besoin d’avoir fait une école ou un bootcamp. Les modules sont pensée pour qu’il soit facile de déterminer ce que vous connaissait déjà et aller directement à l’essentiel pour vous'
		},
		{
			title: 'Est-ce que cette formation est adaptée aux débutants complets ?',
			text: 'Oui. Elle est pensée pour des personnes de tous niveaux qui veulent progresser vite, même s’ils partent de zéro. Pas besoin d’avoir fait une école ou un bootcamp. Les modules sont pensée pour qu’il soit facile de déterminer ce que vous connaissait déjà et aller directement à l’essentiel pour vous'
		},
		{
			title: 'Est-ce que cette formation est adaptée aux débutants complets ?',
			text: 'Oui. Elle est pensée pour des personnes de tous niveaux qui veulent progresser vite, même s’ils partent de zéro. Pas besoin d’avoir fait une école ou un bootcamp. Les modules sont pensée pour qu’il soit facile de déterminer ce que vous connaissait déjà et aller directement à l’essentiel pour vous'
		},
		{
			title: 'Est-ce que cette formation est adaptée aux débutants complets ?',
			text: 'Oui. Elle est pensée pour des personnes de tous niveaux qui veulent progresser vite, même s’ils partent de zéro. Pas besoin d’avoir fait une école ou un bootcamp. Les modules sont pensée pour qu’il soit facile de déterminer ce que vous connaissait déjà et aller directement à l’essentiel pour vous'
		},
		{
			title: 'Est-ce que cette formation est adaptée aux débutants complets ?',
			text: 'Oui. Elle est pensée pour des personnes de tous niveaux qui veulent progresser vite, même s’ils partent de zéro. Pas besoin d’avoir fait une école ou un bootcamp. Les modules sont pensée pour qu’il soit facile de déterminer ce que vous connaissait déjà et aller directement à l’essentiel pour vous'
		},
		{
			title: 'Est-ce que cette formation est adaptée aux débutants complets ?',
			text: 'Oui. Elle est pensée pour des personnes de tous niveaux qui veulent progresser vite, même s’ils partent de zéro. Pas besoin d’avoir fait une école ou un bootcamp. Les modules sont pensée pour qu’il soit facile de déterminer ce que vous connaissait déjà et aller directement à l’essentiel pour vous'
		}
	];
</script>

<section>
	<div>
		<Title prefix="Nos questions fréquentes" center>Une question ? Seekode est là !</Title>
		<Faq {content} />
	</div>
</section>

<style lang="scss">
	section {
		@include container-gradient;

		> div {
			@include container;

			display: flex;
			flex-direction: column;
			align-items: center;
			gap: $spacing-32;
		}
	}
</style>
