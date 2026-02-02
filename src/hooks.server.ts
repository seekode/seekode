import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { paraglideMiddleware } from '$lib/paraglide/server';
import type { AudienceMode } from '$lib/stores/audience.svelte';

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		});
	});

const handleAudience: Handle = ({ event, resolve }) => {
	const audienceCookie = event.cookies.get('audience');
	const audience: AudienceMode =
		audienceCookie === 'dev' || audienceCookie === 'vibe' ? audienceCookie : 'dev';
	event.locals.audience = audience;
	return resolve(event);
};

export const handle: Handle = sequence(handleAudience, handleParaglide);
