<script>
	import Logo from '$components/ui/Logo.svelte';
</script>

<header>
	<div class="pres">
		<div class="pres__content">
			<div class="logo">
				<Logo />
			</div>
			<div>
				<p>asdas</p>
			</div>
		</div>
		<div class="pres__image">
			<img src="/images/home/header.png" alt="Présentation" />
		</div>
	</div>
</header>

<style lang="scss">
	header {
		width: calc(100% - 8rem);
		height: calc(100vh - 14rem);
		padding: $spacing * 2;

		.pres {
			width: 100%;
			aspect-ratio: 30/9;
			max-height: 50%;
			display: flex;
			gap: $spacing;

			&__content {
				width: 50%;
				height: 100%;
				display: flex;
				flex-direction: column;
				gap: $spacing;

				div {
					@include backdrop;

					height: 50%;
					border-radius: $border-radius;

					&.logo {
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}

			&__image {
				@include backdrop;

				width: 40%;
				height: calc(100% - $spacing * 4);
				padding: $padding;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: $border-radius;

				img {
					max-width: 100%;
					max-height: 100%;
				}
			}
		}
	}
</style>
