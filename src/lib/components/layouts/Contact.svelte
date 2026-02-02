<script lang="ts">
	import Button from '../ui/Button.svelte';
	import Field from '../ui/Field.svelte';
	import Title from '../ui/Title.svelte';
	import * as m from '$lib/paraglide/messages';
</script>

<section>
	<video autoplay loop muted playsinline aria-hidden="true">
		<source src="assets/images/bg-contact.webm" type="video/webm" />
	</video>
	<div>
		<Title prefix={m.contact_prefix()} reduce>
			{m.contact_title()}
		</Title>
		<p>
			{m.contact_description()}
		</p>
	</div>
	<form>
		<div>
			<Field id="prenom" placeholder="John">{m.contact_first_name()}</Field>
			<Field id="nom" placeholder="Doe">{m.contact_last_name()}</Field>
		</div>
		<Field id="email" placeholder="john.doe@gmail.com">{m.contact_email()}</Field>
		<Field id="num" placeholder="0621240684">{m.contact_phone()}</Field>
		<div class="action">
			<Button type="secondary" thin rounded>{m.contact_submit()}</Button>
		</div>
	</form>
</section>

<style lang="scss">
	section {
		@include layout;
		padding: $spacing-16 $spacing-8;
		border: 1px solid $color-primary;
		position: relative;
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: $spacing-16;
		flex-wrap: wrap;
		border-radius: $radius-2xl;
		overflow: hidden;

		@include sm {
			padding: $spacing-24 $spacing-8;
		}

		@include xl {
			gap: $spacing-32;
		}

		&::before {
			content: '';
			position: absolute;
			z-index: -2;
			inset: 0;
			border-radius: $radius-2xl;
			opacity: 0.1;
			pointer-events: none;
			background: linear-gradient(57deg, rgba(34, 167, 145, 5) 0, rgba(17, 17, 17, 0.1) 100%);
		}

		> video {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: left center;
			opacity: 0.12;
			z-index: -1;
			pointer-events: none;
		}

		> div {
			max-width: 35rem;
			display: flex;
			flex-direction: column;
			gap: $spacing-8;
		}

		form {
			width: 25rem;
		}
	}
</style>
