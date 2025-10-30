import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
    const data = await request.json();
    const code  = data.code as string;

    return await json({ compiled: code})
};