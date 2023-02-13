import { browser } from '$app/environment';
import { goto } from '$app/navigation';

export const load = function ({ params }) {
	const { id } = params;

	if (browser && id) {
		if(id === 'foo') {
			return goto('/foobar')
		}
	}

	return {};
};
