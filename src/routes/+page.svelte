<script lang="ts">
	import { enhance } from '$app/forms';
	import type { User } from '@prisma/client';
	import type { ActionData, PageData } from './$types';
	import TakeForm from './TakeForm.svelte';
	import SelectedUser from './SelectedUser.svelte';

	export let data: PageData;
	export let form: ActionData;

	let user: Partial<User> | null = null;

	const enchancer = () => {
		return async ({ result, update }) => {
			if (result.data.success) {
				user = result.data.user;
			}

			update();
		};
	};
</script>

{#if user}
	<p class="text-3xl text-primary my-4">{user.name}</p>
	{#if user?.taken_by}
		<SelectedUser name={user.taken_by?.name} />
	{/if}
	<TakeForm {user}></TakeForm>
{:else}
	<p class="max-w-md text-center mb-4 mt-6 text-secondary">
		Введи свой уникальный код, чтобы узнать, для кого ты будешь Тайным Сантой!
	</p>
	<form action="?/login" method="post" use:enhance={enchancer}>
		<div class="flex flex-col">
			<input
				placeholder="Твой код"
				class="px-4 pt-3 pb-1 bg-third bg-opacity-20 rounded-md text-center shadow-md border-2 border-secondary"
				type="text"
				name="code"
			/>
			<button
				class="bg-orange-500 text-white px-4 py-2 rounded-md mt-3 hover:bg-orange-400 transition-colors duration-200"
				type="submit">Узнать!</button
			>
		</div>
	</form>
{/if}
