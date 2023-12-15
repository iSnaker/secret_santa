<script>
	import Cat from '$lib/frontend/Cat.svelte';
	import Divider from '$lib/frontend/Divider.svelte';
	import '../app.css';
</script>

<section id="main" class="font-unlimitedpie flex flex-1 h-screen">
	<div class="container flex flex-col flex-1 py-32">
		<div
			class="flex flex-col flex-1 items-center justify-between md:justify-center px-24 md:px-auto"
		>
			<div
				class="relative z-10 flex flex-col flex-1 items-center justify-between md:justify-center"
			>
				<p class="font-mono text-white text-2xl font-black mb-4">#WEBteamABR</p>
				<p class="font-bold text-6xl text-center text-primary">С Новым 2024 Годом, Котаны!</p>

				<p class="text-4xl mb-2 mt-6 text-secondary text-center">Выбираем тайного Санту</p>
				<div class="max-w-lg flex"><Divider /></div>

				<slot />
			</div>

			<div
				class="relative z-0 xl:fixed bottom-0 left-0 lg:left-[3%] xl:left-[10%] w-64 md:w-[500px] h-auto"
			>
				<Cat />
			</div>
		</div>
	</div>
</section>
