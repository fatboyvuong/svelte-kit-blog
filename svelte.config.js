import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
	},
	vite: {
		define: {
			'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
		}
	}
	// kit: {
	// 	adapter: vercel({
	// 		edge: false,
	// 		external: [],
	// 		split: false
	// 	})
	// }
};

export default config;
