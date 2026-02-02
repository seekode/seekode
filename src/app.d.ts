// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { AudienceMode } from '$lib/stores/audience.svelte';
import type { ThemeMode } from '$lib/stores/theme.svelte';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			audience: AudienceMode;
			theme: ThemeMode;
		}
		interface PageData {
			audience: AudienceMode;
			theme: ThemeMode;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
