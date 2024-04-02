import { redirect } from '@sveltejs/kit';

export async function GET(event) {
	const {
		url,
		locals: { supabase }
	} = event;
	const code = url.searchParams.get('code') as string;
	const next = url.searchParams.get('next') ?? '/';
	const errorCode = url.searchParams.get('error') as string;

	if (errorCode) {
		throw redirect(303, '/');
	}
	if (code) {
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (!error) {
			throw redirect(303, `/${next.slice(1)}`);
		}
	}

	// return the user to an error page with instructions
	throw redirect(303, '/auth/error');
}
