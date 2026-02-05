import { locales, localizeHref } from '$lib/paraglide/runtime';
import type { RequestHandler } from './$types';

const SITE_URL = 'https://seekode.dev';

const pages = ['/', '/cookies', '/mentions-legales', '/politique-de-confidentialite', '/vibe-coder'];

export const GET: RequestHandler = () => {
	const urls = pages.flatMap((page) =>
		locales.map((locale) => {
			const loc = SITE_URL + localizeHref(page, { locale });
			const alternates = locales
				.map(
					(alt) =>
						`\t\t<xhtml:link rel="alternate" hreflang="${alt}" href="${SITE_URL + localizeHref(page, { locale: alt })}" />`
				)
				.join('\n');
			const xDefault = `\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL + localizeHref(page, { locale: 'fr' })}" />`;

			return `\t<url>
\t\t<loc>${loc}</loc>
\t\t<changefreq>monthly</changefreq>
${alternates}
${xDefault}
\t</url>`;
		})
	);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
