<script lang="ts">
	import Button from '../ui/Button.svelte';
	import Field from '../ui/Field.svelte';
	import Title from '../ui/Title.svelte';
	import * as m from '$lib/paraglide/messages';
	import { toast } from '$lib/stores/toast.svelte';

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let phone = $state('');
	let consent = $state(false);
	let loading = $state(false);
	let success = $state('');

	let touched = $state({
		firstName: false,
		lastName: false,
		email: false,
		phone: false,
		consent: false
	});

	// formatters
	const capitalize = (value: string) =>
		value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

	const formatPhone = (value: string) => {
		const digits = value.replace(/\D/g, '').slice(0, 10);
		return digits.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
	};

	// auto format
	$effect(() => {
		if (firstName && firstName !== capitalize(firstName)) {
			firstName = capitalize(firstName);
		}
	});

	$effect(() => {
		if (lastName && lastName !== capitalize(lastName)) {
			lastName = capitalize(lastName);
		}
	});

	$effect(() => {
		const formatted = formatPhone(phone);
		if (phone !== formatted) {
			phone = formatted;
		}
	});

	// error handlers
	const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

	const firstNameError = $derived(
		touched.firstName && firstName.trim().length < 2 ? m.error_min_length({ min: '2' }) : undefined
	);

	const lastNameError = $derived(
		touched.lastName && lastName.trim().length < 2 ? m.error_min_length({ min: '2' }) : undefined
	);

	const emailError = $derived.by(() => {
		if (!touched.email) return undefined;
		if (!email.trim()) return m.error_required();
		if (!isValidEmail(email)) return m.error_email_invalid();
		return undefined;
	});

	const phoneError = $derived.by(() => {
		if (!touched.phone) return undefined;
		if (!phone.trim()) return m.error_required();
		if (phone.replace(/\s/g, '').length < 10) return m.error_phone_invalid();
		return undefined;
	});

	const consentError = $derived(
		touched.consent && !consent ? m.error_consent_required() : undefined
	);

	const isFormValid = $derived(
		firstName.trim().length >= 2 &&
			lastName.trim().length >= 2 &&
			isValidEmail(email) &&
			phone.replace(/\s/g, '').length >= 10 &&
			consent
	);

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		touched = { firstName: true, lastName: true, email: true, phone: true, consent: true };

		if (!isFormValid) return;

		loading = true;

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ firstName, lastName, email, phone, consent })
			});

			const result = await response.json();

			if (result.success) {
				toast.success('Message envoyé !');
				success = 'message envoyé';
				firstName = '';
				lastName = '';
				email = '';
				phone = '';
				consent = false;
				touched = { firstName: false, lastName: false, email: false, phone: false, consent: false };
			} else {
				toast.error("Erreur lors de l'envoi");
			}
		} catch {
			toast.error("Erreur lors de l'envoi");
		} finally {
			loading = false;
		}
	};
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
	<form onsubmit={handleSubmit}>
		<div>
			<Field
				id="prenom"
				placeholder="John"
				bind:value={firstName}
				error={firstNameError}
				onfocus={() => (touched.firstName = true)}
			>
				{m.contact_first_name()}
			</Field>
			<Field
				id="nom"
				placeholder="Doe"
				bind:value={lastName}
				error={lastNameError}
				onfocus={() => (touched.lastName = true)}
			>
				{m.contact_last_name()}
			</Field>
		</div>
		<Field
			id="email"
			placeholder="john.doe@gmail.com"
			type="email"
			bind:value={email}
			error={emailError}
			onfocus={() => (touched.email = true)}
		>
			{m.contact_email()}
		</Field>
		<Field
			id="num"
			placeholder="06 12 34 56 78"
			type="tel"
			bind:value={phone}
			error={phoneError}
			onfocus={() => (touched.phone = true)}
		>
			{m.contact_phone()}
		</Field>
		<!-- eslint-disable svelte/no-at-html-tags -->
		<div class="consent" class:consent--error={consentError}>
			<label>
				<input type="checkbox" bind:checked={consent} onchange={() => (touched.consent = true)} />
				<span>{@html m.contact_consent()}</span>
			</label>
			{#if consentError}
				<span class="consent__error">{consentError}</span>
			{/if}
		</div>
		<div class="action">
			<Button type="secondary" thin rounded {loading} {success} shimmer>
				{m.contact_submit()}
			</Button>
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
			background: linear-gradient(57deg, rgba(34, 167, 145, 1) 0, rgba(17, 17, 17, 0.1) 100%);
			:global([data-theme='light']) & {
				opacity: 0.4;
			}
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

			:global([data-theme='light']) & {
				opacity: 0.2;
			}
		}

		> div {
			max-width: 35rem;
			display: flex;
			flex-direction: column;
			gap: $spacing-8;
		}

		form {
			width: 25rem;

			.consent {
				width: 100%;
				margin-bottom: $spacing-10;
				position: relative;

				label {
					display: flex;
					align-items: flex-start;
					gap: $spacing-3;
					cursor: pointer;
					font-size: $font-size-xs;
					color: var(--text-secondary);
					line-height: $line-height-normal;

					input[type='checkbox'] {
						flex-shrink: 0;
						margin-top: 2px;
						accent-color: $color-primary;
						cursor: pointer;
					}

					:global(a) {
						color: $color-primary;
						text-decoration: underline;
						text-underline-offset: 2px;

						&:hover {
							opacity: 0.8;
						}
					}
				}

				&__error {
					padding-left: calc(1rem + $spacing-3);
					position: absolute;
					top: calc(100% + $spacing-2);
					z-index: 10;
					font-size: $font-size-xs;
					color: $color-error;
					animation: appear 0.3s ease-out;
				}

				&--error label {
					color: $color-error;
				}
			}
		}
	}
</style>
