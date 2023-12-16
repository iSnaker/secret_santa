<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';
	import type { User } from '@prisma/client';
	import SelectedUser from './SelectedUser.svelte';
	import Spinner from '$lib/frontend/Spinner.svelte';

	export let data: PageData;
	export let form: ActionData;
	export let user: User;
	let loading: boolean = false;

	let selected: Partial<User> | null = null;

	const enchancer = () => {
		loading = true;
		return async ({ result, update }) => {
			if (result.data?.success) {
				selected = result.data.selected;
			}

			loading = false;
			update();
		};
	};
</script>

{#if !user?.taken_id}
	{#if selected}
		<SelectedUser name={selected.name} interests={selected.interests} />
	{:else}
		<p class="text-secondary text-center">У тебя еще нет того, для кого ты - тайный Санта</p>
		<form action="?/take" method="post" use:enhance={enchancer}>
			{#if loading}
				<div class="flex items-center justify-center">
					<Spinner />
				</div>
			{:else}
				<input hidden type="text" name="code" value={user.enter_code} />
				<input hidden type="text" name="id" value={user.id} />
				<button class="bg-primary px-6 py-3 text-white rounded-lg mt-8">Узнать!</button>
			{/if}
		</form>
	{/if}
{/if}
