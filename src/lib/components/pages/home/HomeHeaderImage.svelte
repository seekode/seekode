<script lang="ts">
	import { Folder, FolderOpen, File, Search, SquarePen } from '@lucide/svelte';
</script>

<div class="anytype" aria-hidden="true" inert>
	<div class="anytype__panel">
		<div class="anytype__panel__space">
			<div class="anytype__panel__space__picture">
				<img src="favicon.svg" alt="icon" />
			</div>
			<div class="anytype__panel__space__text">
				<span class="anytype__panel__space__text__title">Seelearn</span>
				<span class="anytype__panel__space__text__members">2 members</span>
			</div>
		</div>
		<div class="anytype__panel__container">
			<div class="anytype__panel__container__line">
				<SquarePen size="17" />
				<span>Create</span>
			</div>
			<div class="anytype__panel__container__line">
				<Search size="17" />
				<span>Search</span>
			</div>
		</div>
		<div class="anytype__panel__with-title">
			<span>∨ Pinned</span>
			<div class="anytype__panel__container">
				<div class="anytype__panel__container__line">
					<span class="icon big">📱</span>
					<span>Réseaux</span>
				</div>
			</div>
			<div class="anytype__panel__container">
				<div class="anytype__panel__container__line">
					<span class="icon big">🗒️</span>
					<span>Sommaire</span>
				</div>
			</div>
			<div class="anytype__panel__container">
				<div class="anytype__panel__container__line">
					<span class="icon big">📖</span>
					<span>Cours</span>
				</div>
			</div>
			<div class="anytype__panel__container">
				<div class="anytype__panel__container__line">
					<span class="icon big">🏋️</span>
					<span>Exercices</span>
				</div>
			</div>
		</div>
		<div class="anytype__panel__with-title">
			<span>∨ Objects</span>
			<div class="anytype__panel__container">
				<div class="anytype__panel__container__line">
					<span class="icon">📱</span>
					<span>Réseaux</span>
				</div>
				<div class="anytype__panel__container__line">
					<span class="icon">🗒️</span>
					<span>Page</span>
				</div>
				<div class="anytype__panel__container__line">
					<span class="icon">🖼️</span>
					<span>Images</span>
				</div>
				<div class="anytype__panel__container__line">
					<span class="icon">💬</span>
					<span>Chats</span>
				</div>
			</div>
		</div>
		<div class="anytype__panel__with-title">
			<span>∨ Recently edited</span>
			<div class="anytype__panel__container">
				<div class="anytype__panel__container__line">
					<span class="icon">📱</span>
					<span>Réseaux</span>
				</div>
				<div class="anytype__panel__container__line">
					<span class="icon">📈</span>
					<span>Commercial</span>
				</div>
				<div class="anytype__panel__container__line">
					<span class="icon">🗒️</span>
					<span>Sommaire</span>
				</div>
				<div class="anytype__panel__container__line">
					<span class="icon">💬</span>
					<span>Chats</span>
				</div>
				<div class="anytype__panel__container__line">
					<span class="icon">📖</span>
					<span>Cours</span>
				</div>
				<div class="anytype__panel__container__line">
					<span class="icon">🏋️</span>
					<span>Exercices</span>
				</div>
				<div class="anytype__panel__container__line">
					<span class="icon">🎼</span>
					<span>Audio</span>
				</div>
				<div class="anytype__panel__container__line">
					<span class="icon">🔖</span>
					<span>Bookmarks</span>
				</div>
				<div class="anytype__panel__container__line">
					<span class="icon">🗃️</span>
					<span>Collections</span>
				</div>
			</div>
		</div>
		<div class="anytype__panel__container">
			<div class="anytype__panel__container__line">
				<span class="icon">🗑️</span>
				<span>Bin</span>
			</div>
		</div>
	</div>
	<div class="anytype__content">
		<div class="anytype__content__top">
			<div class="anytype__content__top__left">
				<div class="anytype__content__top__left__sync"></div>
				<div class="anytype__content__top__left__arrow">
					<div><span></span></div>
					<div><span class="reverse"></span></div>
				</div>
			</div>
			<div class="anytype__content__top__mid">
				<span>🎓 Formation</span>
			</div>
			<div class="anytype__content__top__right"></div>
		</div>
	</div>
	<div class="zed">
		<div class="zed__title-bar">
			<div class="zed__title-bar__left">
				<div class="zed__title-bar__left__icon">
					<div></div>
				</div>
				<p class="zed__title-bar__left__project-name">seekode</p>
				<p class="zed__title-bar__left__project-branch">master</p>
			</div>
			<div class="zed__title-bar__right">
				<img src="favicon.svg" alt="logo" />
			</div>
		</div>
		<div class="zed__app">
			<div class="zed__app__dock">
				<div class="zed__app__dock__line zed__app__dock__line--update">
					<FolderOpen size="16" />
					<span>seekode</span>
				</div>
				<div class="zed__app__dock__folder">
					<div class="zed__app__dock__line zed__app__dock__line--add">
						<Folder size="16" />
						<span>.claude</span>
					</div>
					<div class="zed__app__dock__line zed__app__dock__line--ignore">
						<Folder size="16" />
						<span>.svelte-kit</span>
					</div>
					<div class="zed__app__dock__line">
						<Folder size="16" />
						<span>e2e</span>
					</div>
					<div class="zed__app__dock__line">
						<Folder size="16" />
						<span>messages</span>
					</div>
					<div class="zed__app__dock__line">
						<Folder size="16" />
						<span>project.inlang</span>
					</div>
					<div class="zed__app__dock__line zed__app__dock__line--update">
						<FolderOpen size="16" />
						<span>src</span>
					</div>
					<div class="zed__app__dock__folder">
						<div class="zed__app__dock__line zed__app__dock__line--update">
							<FolderOpen size="16" />
							<span>lib</span>
						</div>
						<div class="zed__app__dock__folder">
							<div class="zed__app__dock__line zed__app__dock__line--update">
								<FolderOpen size="16" />
								<span>components</span>
							</div>
							<div class="zed__app__dock__folder">
								<div class="zed__app__dock__line">
									<Folder size="16" />
									<span>icons</span>
								</div>
								<div class="zed__app__dock__line zed__app__dock__line--update">
									<Folder size="16" />
									<span>layouts</span>
								</div>
								<div class="zed__app__dock__line zed__app__dock__line--update">
									<Folder size="16" />
									<span>pages</span>
								</div>
								<div class="zed__app__dock__line zed__app__dock__line--update">
									<Folder size="16" />
									<span>ui</span>
								</div>
							</div>
							<div class="zed__app__dock__line">
								<Folder size="16" />
								<span>paraglide</span>
							</div>
							<div class="zed__app__dock__line zed__app__dock__line--update">
								<Folder size="16" />
								<span>styles</span>
							</div>
							<div class="zed__app__dock__folder">
								<div class="zed__app__dock__line zed__app__dock__line--update">
									<FolderOpen size="16" />
									<span>abstracts</span>
								</div>
								<div class="zed__app__dock__line zed__app__dock__line--update">
									<File size="16" />
									<span>_reset.scss</span>
								</div>
								<div class="zed__app__dock__line zed__app__dock__line--update">
									<File size="16" />
									<span>global.scss</span>
								</div>
							</div>
						</div>
						<div class="zed__app__dock__line zed__app__dock__line--update">
							<FolderOpen size="16" />
							<span>routes</span>
						</div>
						<div class="zed__app__dock__line zed__app__dock__line--update">
							<File size="16" />
							<span>app.html</span>
						</div>
						<div class="zed__app__dock__line">
							<File size="16" />
							<span>app.d.ts</span>
						</div>
						<div class="zed__app__dock__line">
							<File size="16" />
							<span>hook.ts</span>
						</div>
						<div class="zed__app__dock__line">
							<File size="16" />
							<span>hook.server.ts</span>
						</div>
					</div>
					<div class="zed__app__dock__line">
						<Folder size="16" />
						<span>static</span>
					</div>
					<div class="zed__app__dock__line">
						<File size="16" />
						<span>.gitignore</span>
					</div>
					<div class="zed__app__dock__line">
						<File size="16" />
						<span>.mcp.json</span>
					</div>
					<div class="zed__app__dock__line">
						<File size="16" />
						<span>.npmrc</span>
					</div>
					<div class="zed__app__dock__line">
						<File size="16" />
						<span>.prettierrc</span>
					</div>
					<div class="zed__app__dock__line">
						<File size="16" />
						<span>bun.lock</span>
					</div>
					<div class="zed__app__dock__line zed__app__dock__line--add">
						<File size="16" />
						<span>CLAUDE.md</span>
					</div>
					<div class="zed__app__dock__line">
						<File size="16" />
						<span>eslint.config.js</span>
					</div>
					<div class="zed__app__dock__line">
						<File size="16" />
						<span>LICENSE</span>
					</div>
					<div class="zed__app__dock__line">
						<File size="16" />
						<span>package.json</span>
					</div>
					<div class="zed__app__dock__line">
						<File size="16" />
						<span>playwright.config.ts</span>
					</div>
					<div class="zed__app__dock__line zed__app__dock__line--add">
						<File size="16" />
						<span>README.md</span>
					</div>
					<div class="zed__app__dock__line">
						<File size="16" />
						<span>svelte.config.js</span>
					</div>
					<div class="zed__app__dock__line">
						<File size="16" />
						<span>tsconfig.json</span>
					</div>
					<div class="zed__app__dock__line">
						<File size="16" />
						<span>vite.config.ts</span>
					</div>
				</div>
			</div>
			<div class="zed__app__workspace">
				<div class="tab-bar">
					<div class="tab-bar__tab">
						<File size="16" />
						README.md
					</div>
					<div class="tab-bar__space"></div>
				</div>
				<div class="zed__app__workspace__editor">
					<div class="zed__app__workspace__editor__path">
						<span>README.md</span>
						<span class="icon">></span>
						<span class="title"># Sommaire de la formation</span>
					</div>
					<div class="code">
						<div class="code__line code__line--light">
							<span class="code__line__num">1</span>
							<span class="title"># 🚀 Sommaire de la formation -- Seelearn</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">2</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">3</span>
							<span class="title">## 🎬 INTRODUCTION</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">4</span>
							<span>- 👋 I.1 ─ Bienvenue dans la formation</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">5</span>
							<span>- 👋 I.1 ─ Bienvenue dans la formation</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">6</span>
							<span>- 👋 I.1 ─ Bienvenue dans la formation</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">7</span>
							<span></span>
						</div>
						<div class="code__line">
							<span class="code__line__num">8</span>
							<span class="title">## ⚙️ MODULE 0 ─ Comment sa fonctionne ?</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">9</span>
							<span
								>- 🗺️ 0.1 ─ Écosystème & architecture (types de machines, interface, logique,
								connexion) Interprété vs compilé</span
							>
						</div>
						<div class="code__line">
							<span class="code__line__num">10</span>
							<span>- 🚀 0.2 ─ Par où commencer ?</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">11</span>
							<span></span>
						</div>
						<div class="code__line">
							<span class="code__line__num">12</span>
							<span class="title">## 🎨 MODULE 1 ─ Interface</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">13</span>
							<span>- 👨‍💻 1.1 ─ HTML</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">14</span>
							<span>- 🎨 1.2 ─ CSS</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">15</span>
							<span>- 📏 1.3 ─ Positionnés des éléments</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">16</span>
							<span>- 👨‍💻 1.4 ─ Responsive</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">17</span>
							<span>- 🖼️ 1.5 ─ Projet : portfolio responsive</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">18</span>
							<span></span>
						</div>
						<div class="code__line">
							<span class="code__line__num">19</span>
							<span class="title">## 👨‍💻 MODULE 2 ─ Algorithme</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">20</span>
							<span>- 😢 2.1 ─ La doc ne vous aideras pas</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">21</span>
							<span>- 🔣 2.2 ─ Les variables</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">22</span>
							<span>- 📑 2.3 ─ Bloque de code (conditions, boucles, fonctions, try_catch)</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">23</span>
							<span>- 🔀 2.4 ─ Alternatives & syntaxes supplémentaires</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">24</span>
							<span>
								- 🥳 2.5 ─ Félicitations ! La doc est de nouveau utile + vous pouvez déjà presque
								tous coder
							</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">25</span>
							<span>- 🗒️ 2.6 ─ Bonus : regex</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">26</span>
							<span
								>- 🧠 2.7 ─ Bonus : Comment coder efficacement ? (représenter les données, étape par
								étape, méthode canard, penser puzzle plutôt que lecture linéaire)</span
							>
						</div>
						<div class="code__line">
							<span class="code__line__num">27</span>
							<span>- 🐞 2.8 ─ Bonus : Devtools & Debug (breakpoints, erreurs navigateur)</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">28</span>
							<span>- ✅ 2.9 ─ Bonus : Tester son code simplement (tests manuels/unitaires)</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">29</span>
							<span></span>
						</div>
						<div class="code__line">
							<span class="code__line__num">30</span>
							<span class="title">## 💡 MODULE 3 ─ Javascript</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">31</span>
							<span>- 🤖 3.1 ─ Utiliser la console</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">32</span>
							<span>- 🔣 3.1 ─ Trouver le plus grand nombre</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">33</span>
							<span>- 📑 3.1 ─ Compter un mot</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">34</span>
							<span>- 🔀 3.1 ─ Reformer un objet depuis un tableau</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">35</span>
							<span>- 🌡️ 3.1 ─ Convertisseur Celsius ⇄ Fahrenheit</span>
						</div>
						<div class="code__line">
							<span class="code__line__num">36</span>
							<span>- 🎲 3.1 ─ Générateur de nombre aléatoire</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.anytype {
		--bg: #171717;
		--on-bg: #1e1e1e;
		--text: #f8f8f8;
		--text-muted: #aba69f;
		:global([data-theme='light']) & {
			--bg: white;
			--on-bg: #f7f7f7;
			--text: #171717;
		}

		color: var(--text);
		font-size: 13px;

		width: 1720px;
		height: 1080px;
		position: absolute;
		top: -20rem;
		left: -30rem;
		transform: scale(0.4);
		display: flex;
		background-color: var(--bg);
		border-radius: 15px;
		overflow: hidden;

		@media (min-width: 362px) {
			top: -20rem;
			left: -32rem;
			transform: scale(0.4);
		}

		@include sm {
			top: -6.5rem;
			left: -10rem;
			transform: scale(0.8);
		}

		@include md {
			top: 0;
			left: 0;
			transform: scale(1);
		}

		&__panel {
			width: 20rem;
			height: 100%;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			background-color: var(--bg);
			box-shadow: 5px 0 15px -10px black;

			:global([data-theme='light']) & {
				border-right: 1px solid lightgray;
				box-shadow: none;
			}

			&__space {
				margin-bottom: 1rem;
				display: flex;
				gap: 0.8rem;

				&__picture {
					height: 3rem;
					width: 3rem;
					display: flex;
					justify-content: center;
					align-items: center;
					background: black;
					border-radius: 30rem;

					img {
						transform: scale(1.3);
					}
				}

				&__text {
					display: flex;
					flex-direction: column;
					justify-content: center;

					&__title {
						font-size: 1rem;
						font-weight: 500;
					}

					&__members {
						color: var(--text-muted);
					}
				}
			}

			&__with-title {
				padding-top: 0.5rem;
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				> span {
					padding-left: 0.5rem;
					font-weight: 400;
					color: var(--text-muted);
				}
			}

			&__container {
				padding: 0.8rem 1rem;
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
				background: var(--on-bg);
				border-radius: 15px;

				&__line {
					display: flex;
					align-items: center;
					gap: 0.8rem;
					font-weight: 500;
					color: var(--text-muted);

					span {
						color: var(--text);

						&.icon {
							transform: scale(1.2);

							&.big {
								transform: scale(1.4);
							}
						}
					}
				}
			}
		}

		&__content {
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;

			&__top {
				height: 3rem;
				padding: 0 2rem;
				display: flex;
				justify-content: space-between;
				align-items: center;

				&__left {
					display: flex;
					align-items: center;
					gap: 1rem;

					&__sync {
						width: 0.5rem;
						height: 0.5rem;
						border-radius: 5rem;
						background-color: #87d041;
					}

					&__arrow {
						display: flex;
						align-items: center;
						gap: 0.5rem;

						> div {
							width: 0.8rem;
							height: 0.8rem;
							display: flex;
							align-items: center;
							justify-content: center;

							span {
								width: 0.6rem;
								height: 0.6rem;
								border-left: 2px solid var(--text-muted);
								border-bottom: 2px solid var(--text-muted);
								transform: rotate(45deg);

								&.reverse {
									transform: rotate(-135deg);
									border-color: #595959;
								}
							}
						}
					}
				}
			}
		}

		.zed {
			--bg: #3b414d;
			--bg-app: #2f343e;
			--bg-editor: #282c33;
			--border: #464b57;
			--font: #e5e5e5;
			--font-muted: #a5a6aa;
			--icon: #464961;

			:global([data-theme='light']) & {
				--bg: #dcdcdd;
				--bg-app: #ebebec;
				--bg-editor: #fafafa;
				--border: #d0d0d1;
				--font: #5f656f;
				--font-muted: #888b98;
				--icon: #565970;
			}

			--border-size: 1px;

			color: var(--font);

			height: calc(100% - 8rem);
			width: calc(100% - 16rem);
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			flex-direction: column;
			border-radius: 15px;
			overflow: hidden;
			background-color: var(--bg);

			&__title-bar {
				font-size: 11px;

				height: 2rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 1rem;

				div {
					display: flex;
					align-items: center;
					gap: 0.8rem;
				}

				&__left {
					&__icon {
						width: 0.7rem;
						height: 0.8rem;
						display: flex;
						justify-content: center;
						align-items: center;

						div {
							width: 100%;
							height: 0.07rem;
							position: relative;
							background: var(--font);

							&::before,
							&::after {
								content: '';
								width: 100%;
								height: 100%;
								position: absolute;
								background: var(--font);
							}

							&::before {
								bottom: 300%;
							}

							&::after {
								top: 300%;
							}
						}
					}

					&__project-branch {
						color: var(--font-muted);
					}
				}

				&__right img {
					height: 0.8rem;
				}
			}

			&__app {
				flex: 1;
				border-top: var(--border-size) solid var(--border);
				border-bottom: var(--border-size) solid var(--border);
				display: flex;
				background-color: var(--bg-app);

				&__dock {
					width: 15rem;
					padding: 0.5rem 0.8rem;
					border-right: var(--border-size) solid var(--border);
					display: flex;
					flex-direction: column;
					gap: 0.5rem;
					color: var(--icon);

					&__line {
						height: 1rem;
						display: flex;
						align-items: center;
						gap: 0.4rem;

						span {
							color: var(--font-muted);
						}

						&--add {
							color: #82b37d;
							:global([data-theme='light']) & {
								color: #7ea985;
							}
							span {
								color: #82b37d;
								:global([data-theme='light']) & {
									color: #7ea985;
								}
							}
						}

						&--update {
							color: #c9b77a;
							:global([data-theme='light']) & {
								color: #ac9145;
							}
							span {
								color: #c9b77a;

								:global([data-theme='light']) & {
									color: #ac9145;
								}
							}
						}

						&--ignore {
							color: #464961;
							:global([data-theme='light']) & {
								color: #8b92a4;
							}
							span {
								color: #464961;
								:global([data-theme='light']) & {
									color: #8b92a4;
								}
							}
						}
					}

					&__folder {
						width: 15rem;
						padding-left: 0.8rem;
						margin-left: 0.4rem;
						border-left: var(--border-size) solid var(--icon);
						display: flex;
						flex-direction: column;
						gap: 0.5rem;
					}
				}

				&__workspace {
					flex: 1;
					display: flex;
					flex-direction: column;

					.tab-bar {
						height: 2rem;
						display: flex;

						&__tab {
							width: 10rem;
							border-right: var(--border-size) solid var(--border);
							display: flex;
							justify-content: center;
							align-items: center;
							gap: 0.5rem;
							background-color: var(--bg-editor);
						}

						&__space {
							flex: 1;
							border-bottom: var(--border-size) solid var(--border);
						}
					}

					&__editor {
						--title: #c95a4e;

						flex: 1;
						display: flex;
						flex-direction: column;
						background-color: var(--bg-editor);

						.title {
							color: var(--title);
						}

						&__path {
							height: 2rem;
							padding-left: 0.5rem;
							border-bottom: var(--border-size) solid var(--border);
							display: flex;
							align-items: center;
							gap: 0.2rem;
							color: var(--font-muted);

							.icon {
								color: var(--icon);
							}
						}

						.code {
							flex: 1;
							display: flex;
							flex-direction: column;
							font-family:
								ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas,
								'DejaVu Sans Mono', monospace;
							color: var(--font-muted);

							&__line {
								height: 1.5rem;
								display: flex;
								align-items: center;
								gap: 1.5rem;

								&--light {
									background-color: #2d323b;
									:global([data-theme='light']) & {
										background-color: #efeff0;
									}
								}

								&__num {
									width: 2.5rem;
									display: flex;
									justify-content: flex-end;
									color: #4d595d;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
