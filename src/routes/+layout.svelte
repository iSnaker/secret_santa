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
			<p class="font-mono text-white text-2xl font-black mb-4">#WEBteamABR</p>
			<p class="font-bold text-6xl text-primary">С Новым 2024 Годом, Котаны!</p>

			<p class="text-4xl mb-2 mt-6 text-secondary">Выбираем тайного Санту</p>
			<div class="max-w-lg flex"><Divider /></div>

			<slot />

			<div class="xl:fixed bottom-0 lg:left-[300px] w-64 md:w-[500px] left-0 h-auto">
				<Cat />
			</div>
		</div>
	</div>
</section>
