<script lang="ts">
	import type { Interest } from '@prisma/client';

	export let interest: Interest;

	let shortened = interest.url;

	if (shortened && shortened.length > 40) {
		shortened = shortened.slice(0, 40) + '...';
	}
</script>

<div
	class="h-32 bg-white shadow-xl shadow-primary flex flex-col items-center text-center justify-between p-5 rounded-md"
>
	<p class="text-secondary">{interest.name}</p>
	{#if interest.url}
		<a
			target="_blank"
			class="font-mono w-full whitespace-break-spaces break-words text-blue-700 hover:text-blue-400 text-xs"
			href={interest.url}>{shortened}</a
		>
	{/if}
</div>
