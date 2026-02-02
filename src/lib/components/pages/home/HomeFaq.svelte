<script lang="ts">
	import Faq from '$lib/components/ui/faq/Faq.svelte';
	import type { FaqCardData } from '$lib/components/ui/faq/FaqCard.svelte';
	import Title from '$lib/components/ui/Title.svelte';
	import * as m from '$lib/paraglide/messages';

	const content: FaqCardData[] = [
		{ title: m.faq_q1_title(), text: m.faq_q1_text() },
		{ title: m.faq_q2_title(), text: m.faq_q2_text() },
		{ title: m.faq_q3_title(), text: m.faq_q3_text() },
		{ title: m.faq_q4_title(), text: m.faq_q4_text() },
		{ title: m.faq_q5_title(), text: m.faq_q5_text() },
		{ title: m.faq_q6_title(), text: m.faq_q6_text() },
		{ title: m.faq_q7_title(), text: m.faq_q7_text() },
		{ title: m.faq_q8_title(), text: m.faq_q8_text() },
		{ title: m.faq_q9_title(), text: m.faq_q9_text() }
	];
</script>

<section>
	<div>
		<Title prefix={m.faq_prefix()} center>{m.faq_title()}</Title>
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
