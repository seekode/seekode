<script lang="ts">
	import AudienceToggle from '$lib/components/ui/AudienceToggle.svelte';
	import Faq from '$lib/components/ui/faq/Faq.svelte';
	import type { FaqCardData } from '$lib/components/ui/faq/FaqCard.svelte';
	import JsonLd from '$lib/components/ui/JsonLd.svelte';
	import Title from '$lib/components/ui/Title.svelte';
	import * as m from '$lib/paraglide/messages';
	import { audience } from '$lib/stores/audience.svelte';
	import { reveal } from '$lib/utils/scroll';

	const content: FaqCardData[] = $derived([
		{
			title: audience.text(m.faq_q1_title, m.faq_q1_title_vibe),
			text: audience.text(m.faq_q1_text, m.faq_q1_text_vibe)
		},
		{
			title: audience.text(m.faq_q2_title, m.faq_q2_title_vibe),
			text: audience.text(m.faq_q2_text, m.faq_q2_text_vibe)
		},
		{
			title: audience.text(m.faq_q3_title, m.faq_q3_title_vibe),
			text: audience.text(m.faq_q3_text, m.faq_q3_text_vibe)
		},
		{ title: m.faq_q4_title(), text: m.faq_q4_text() },
		{ title: m.faq_q5_title(), text: m.faq_q5_text() },
		{
			title: audience.text(m.faq_q6_title, m.faq_q6_title_vibe),
			text: audience.text(m.faq_q6_text, m.faq_q6_text_vibe)
		},
		{
			title: audience.text(m.faq_q7_title, m.faq_q7_title_vibe),
			text: audience.text(m.faq_q7_text, m.faq_q7_text_vibe)
		},
		{ title: m.faq_q8_title(), text: m.faq_q8_text() },
		{ title: m.faq_q9_title(), text: m.faq_q9_text() }
	]);

	const faqSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: content.map((item) => ({
			'@type': 'Question',
			name: item.title,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.text
			}
		}))
	});
</script>

<JsonLd schema={faqSchema} />

<section>
	<div>
		<div class="header" use:reveal={{ animation: 'land' }}>
			<Title prefix={m.faq_prefix()} center tag="h2">{m.faq_title()}</Title>
			<AudienceToggle halo />
		</div>
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
			gap: $spacing-16;

			> .header {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: $spacing-16;
			}
		}
	}
</style>
