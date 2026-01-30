<script lang="ts">
	import Title from '$lib/components/ui/Title.svelte';
	import type { HomeCommunityCardProps } from './HomeCommunityCard.svelte';
	import HomeCommunityCard from './HomeCommunityCard.svelte';

	const cards: HomeCommunityCardProps[] = [
		{
			action: 'https://www.youtube.com/@_seekode',
			icon: 'skool',
			title: 'Des tutoriels détaillés',
			text: 'Toute la communauté Seelearn est là pour vous accueillir et vous aider, quelque soit votre problème.',
			actionName: 'Voir notre chaine YouTube'
		},
		{
			action: 'https://www.youtube.com/@_seekode',
			icon: 'live',
			title: 'Des tutoriels détaillés1',
			text: 'Toutes les semaines, Seelearn vous propose des lives exclusifs dans lesquels vous pourrez vous former davantage.',
			actionName: 'Voir notre chaine YouTube'
		},
		{
			action: 'https://www.youtube.com/@_seekode',
			icon: 'tiktok',
			title: 'Des tutoriels détaillés2',
			text: 'Notre plateforme TikTok vous permet d’accéder à des extraits de lives, tutoriels ou d’extraits gratuits de notre formation.',
			actionName: 'Voir notre chaine YouTube'
		},
		{
			action: 'https://www.youtube.com/@_seekode',
			icon: 'youtube',
			title: 'Des tutoriels détaillés3',
			text: 'Notre chaîne YouTube vous donne accès à des extraits gratuits de notre formation Seelarn ainsi que les rediffusions de lives.',
			actionName: 'Voir notre chaine YouTube'
		}
	];
</script>

<section>
	<div>
		<Title prefix="Notre communauté" center>Seelearn, c'est aussi une communauté !</Title>
		<p>
			En rejoignant Seelearn, vous ne serez jamais seul. Vous bénéficiez d’un suivi personnalisé
			gratuit, de lives privés pour poser toutes vos questions, et d’une communauté active prête à
			vous aider dès que vous êtes bloqué.
			<br />
			<br />
			On se motive entre membres, on partage ses réussites, et on trouve même des partenaires pour lancer
			des projets ensemble.
		</p>
		<div class="line"></div>
		<div class="cards">
			{#each cards as { title, text, action, actionName, icon } (title)}
				<HomeCommunityCard {title} {text} {action} {actionName} {icon} />
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
			gap: $spacing-12;

			> p {
				max-width: 46rem;
				text-align: center;
			}

			> .line {
				max-width: 65rem;
				width: 100%;
				height: 1px;
				margin: $spacing-10 0;
				background: var(--text-muted);
			}

			> .cards {
				display: flex;
				justify-content: center;
				gap: $spacing-4;
				flex-wrap: wrap;
			}
		}
	}
</style>
