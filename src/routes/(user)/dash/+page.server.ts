import type { Actions, PageServerLoad } from './$types';
import { getUserProfile, updateUserProfile } from '$db/User.db';
import { UserProfileZodSchema, type UserProfileSchema } from '$lib/schemas';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import type { ProfileType } from '@prisma/client';

// @ts-ignore
export const load: PageServerLoad = async ({ locals }) => {
	let userProfileForm = await superValidate(zod(UserProfileZodSchema));
	if (Object.keys(locals).length === 0) return { userProfileForm };
	const dbUserProfile = await getUserProfile(locals.session?.user.id!);
	userProfileForm = await superValidate(
		{
			name: dbUserProfile?.name,
			email: dbUserProfile?.email,
			mobile: dbUserProfile?.mobile || '',
			isNew: dbUserProfile?.isNew,
			type: dbUserProfile?.type as ProfileType,
			typeData: dbUserProfile?.typeData as UserProfileSchema['typeData']
		},
		zod(UserProfileZodSchema)
	);

	return {
		userProfileForm,
		profileData: dbUserProfile
	};
};

export const actions: Actions = {
	update: async ({ request, locals: { session, supabase, getSession } }) => {
		const userProfileForm = await superValidate(request, zod(UserProfileZodSchema));

		if (!userProfileForm.valid) {
			return { userProfileForm };
		}

		// const newProfileData = await updateUserProfile({
		// 	...userProfileForm.data,
		// 	isNew: false,
		// 	id: session?.user.id!
		// });

		// When the user updates their profile, we need to refresh the session
		// if (userProfileForm.data.isNew !== newProfileData.isNew) {
		// 	supabase.auth.refreshSession();
		// 	session = await getSession();
		// }
		// return {
		// 	userProfileForm,
		// 	profileData: newProfileData
		// };
	}
};
