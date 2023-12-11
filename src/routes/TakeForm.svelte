<script lang="ts">
	import { enhance } from '$app/forms';
	import type { User } from '@prisma/client';

	import type { ActionData, PageData } from './$types';

	export let data: PageData;

	export let form: ActionData;

	export let user: User;

	let selected: Partial<User> | null = null;

	const enchancer = () => {
		return async ({ result, update }) => {
			if (result.data.success) {
				selected = result.data.selected;
			}

			update();
		};
	};
</script>

{#if !user?.taken_id}
	{#if selected}

	{:else}
		<p>У тебя еще нет того, для кого ты - тайный Санта</p>
		<form action="?/take" method="post" use:enhance={enchancer}>
			<input hidden type="text" name="code" value={user.enter_code} />
			<input hidden type="text" name="id" value={user.id} />
			<button>Получить</button>
		</form>
	{/if}
{/if}
