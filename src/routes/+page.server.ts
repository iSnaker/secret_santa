import prismaClient from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    login: async ({ request, cookies }) => {
        const data = await request.formData()
        const code = data.get("code") as string

        const targetUser = await prismaClient.user.findFirst({
            where: { enter_code: code },
            include: {
                taken_by: {
                    include: { interests: true }
                }
            }
        })

        if (targetUser) {
            return {
                success: true,
                user: targetUser
            }
        }
    },
    take: async ({ request }) => {
        const data = await request.formData()
        const user_id = Number(data.get("id") as unknown as number)

        try {
            const users = await prismaClient.user.findMany({
                where: { NOT: { id: user_id } },
                include: {
                    interests: true
                }
            })

            const taken = users.map(user => user.taken_id)
            const available = users.filter(user => !taken.includes(user.id))

            const selectedId = Math.floor(Math.random() * available.length)
            const selected = available[selectedId]

            await prismaClient.user.update({ where: { id: user_id }, data: { taken_id: selected.id } })

            return {
                success: true,
                selected
            }
        } catch (e: any) {
            return fail(500, e.message)
        }

    }
};   