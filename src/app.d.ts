// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { AudienceMode } from '$lib/stores/audience.svelte';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			audience: AudienceMode;
		}
		interface PageData {
			audience: AudienceMode;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
