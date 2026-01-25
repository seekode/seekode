<script>
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>Seekode - Formation</title>
	<meta name="description" content="Formation Seekode" />
</svelte:head>

<h1>sadasd</h1>
<h1>sadasd</h1>
<h1>sadasd</h1>
<h1>sadasd</h1>
<h1>sadasd</h1>
<h1>sadasd</h1>
<h1>sadasd</h1>
<h1>sadasd</h1>
<h1>sadasd</h1>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p>{m.hello_world({ name: 'User' })}</p>
<ul>
	{#each locales as locale (locale)}
		<li>
			<a href={localizeHref(page.url.pathname, { locale })} data-sveltekit-reload>
				{locale}
			</a>
		</li>
	{/each}
</ul>
