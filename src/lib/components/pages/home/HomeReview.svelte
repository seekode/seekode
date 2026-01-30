<script lang="ts">
	import Title from '$lib/components/ui/Title.svelte';
	import type { HomeReviewCardProps } from './HomeReviewCard.svelte';
	import HomeReviewCard from './HomeReviewCard.svelte';

	const reviews: HomeReviewCardProps[] = [
		{
			content:
				'Nicolas a été mon formateur à La Manu, et j’ai énormément appris grâce à lui. Même en dehors des heures de cours, <span>il prenait le temps de m’expliquer et de me guider</span>. Grâce à ses conseils et son accompagnement, <span>j’ai progressé très rapidement</span> et j’ai pu effectuer ma reconversion professionnelle avec succès en tant que développeur web. Avant cela, j’étais freelance monteur truquiste, et son enseignement a vraiment fait la différence.',
			img: 'djason',
			name: 'Djason',
			work: 'DÉVELOPPEUR FREELANCE'
		},
		{
			content:
				'Nicolas a été mon formateur à La Manu, et j’ai énormément appris grâce à lui. Même en dehors des heures de cours, <span>il prenait le temps de m’expliquer et de me guider</span>. Grâce à ses conseils et son accompagnement, <span>j’ai progressé très rapidement</span> et j’ai pu effectuer ma reconversion professionnelle avec succès en tant que développeur web. Avant cela, j’étais freelance monteur truquiste, et son enseignement a vraiment fait la différence.',
			img: 'djason',
			name: 'Djason',
			work: 'DÉVELOPPEUR FREELANCE'
		},
		{
			content:
				'Nicolas a été mon formateur à La Manu, et j’ai énormément appris grâce à lui. Même en dehors des heures de cours, <span>il prenait le temps de m’expliquer et de me guider</span>. Grâce à ses conseils et son accompagnement, <span>j’ai progressé très rapidement</span> et j’ai pu effectuer ma reconversion professionnelle avec succès en tant que développeur web. Avant cela, j’étais freelance monteur truquiste, et son enseignement a vraiment fait la différence.',
			img: 'djason',
			name: 'Djason',
			work: 'DÉVELOPPEUR FREELANCE'
		}
	];
</script>

<section>
	<div>
		<Title prefix="Nos avis" center>100% de satisfaction à ce jour !</Title>

		<div>
			{#each reviews as { content, img, name, work }, i (i)}
				<HomeReviewCard {content} {img} {name} {work} />
			{/each}
		</div>
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

			> div {
				display: flex;
				justify-content: center;
				gap: $spacing-4;
				flex-wrap: wrap;
			}
		}
	}
</style>
