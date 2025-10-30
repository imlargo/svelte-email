import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { render } from 'svelte/server';

export const POST: RequestHandler = async ({ request }) => {
    const data = await request.json();
    const code = data.code as string;

    const rendered = await render(code)

    return await json({ compiled: rendered })
};