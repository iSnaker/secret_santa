<script lang="ts">
	import type { Interest } from '@prisma/client';
	import InterestItem from '$lib/frontend/InterestItem.svelte';

	export let name: string = '';
	export let interests: Interest[] = [];
</script>

<p class="text-secondary text-center">Поздравляем! Ты будешь тайным Сантой для:</p>
<p class="text-4xl xl:text-5xl font-bold text-primary mt-4 text-center">{name}</p>
<p class="mt-8 mb-10 text-secondary underline">Идеи для подарка:</p>

<div class="grid grid-cols-1 gap-4 max-w-lg">
	{#each interests as interest}
		<InterestItem {interest} />
	{/each}
</div>
