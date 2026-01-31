<script>
	import LogoFullText from '../icons/LogoFullText.svelte';
	import Button from '../ui/Button.svelte';
</script>

<footer>
	<div class="content">
		<div>
			<p>Seekode</p>
			<ul>
				<li>Seelearn - Formation</li>
				<!-- <li>Lancer mon projet</li> -->
				<!-- <li>Seekode - Présentation</li> -->
				<!-- <li>Nos réalisations</li> -->
			</ul>
		</div>
		<div>
			<p>Liens utiles</p>
			<ul>
				<li>Mentions légales</li>
				<li>Politique de confidentialité</li>
				<li>Gestion des cookies</li>
			</ul>
		</div>
		<div></div>
	</div>
	<div class="line"></div>
	<div class="credits">
		<LogoFullText />
		<p>© 2025 Seekode. All rights reserved.</p>
		<div>
			<Button link="https://seekode.dev" type="muted" square>
				<img src="assets/images/icons/tiktok.svg" alt="tiktok" />
			</Button>
			<Button link="https://seekode.dev" type="muted" square>
				<img src="assets/images/icons/instagram.svg" alt="tiktok" />
			</Button>
			<Button link="https://seekode.dev" type="muted" square>
				<img src="assets/images/icons/youtube.svg" alt="tiktok" />
			</Button>
			<Button link="https://seekode.dev" type="muted" square>
				<img src="assets/images/icons/linkedin.svg" alt="tiktok" />
			</Button>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		@include glass-effect;
		@include layout;
		padding: $spacing-10;
		display: flex;
		flex-direction: column;
		gap: $spacing-10;
		border-radius: $radius-2xl;

		.content {
			display: flex;
			justify-content: space-between;

			p {
				padding-bottom: $spacing-2;
				font-weight: $font-weight-medium;
			}

			ul {
				display: flex;
				flex-direction: column;
				gap: $spacing-2;

				li {
					font-size: $font-size-sm;
					color: var(--text-secondary);
					cursor: pointer;
					transition: $transition-slow;

					&:hover {
						color: var(--text-primary);
					}
				}
			}
		}

		.line {
			width: 100%;
			height: 1px;
			background-color: var(--text-secondary);
		}

		.credits {
			position: relative;
			display: flex;
			flex-direction: column-reverse;
			align-items: center;
			gap: $spacing-4;

			@include sm {
				padding-bottom: $spacing-10;
				flex-direction: row;
				justify-content: space-between;
			}

			@include lg {
				padding-bottom: 0;
			}

			p {
				text-align: center;

				@include sm {
					width: 100%;
					position: absolute;
					top: 100%;
					left: 50%;
					transform: translate(-50%, -100%);
				}

				@include lg {
					width: auto;
					position: initial;
					transform: translateX(0);
				}
			}

			div {
				display: flex;
				gap: $spacing-2;

				img {
					width: 1.3rem;
				}
			}
		}
	}
</style>
