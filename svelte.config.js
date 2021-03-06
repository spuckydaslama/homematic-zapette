import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build'
		}),
		trailingSlash: 'always',
		paths: {
			base: dev ? '' : '/ui/homematic-zapette'
		},
		prerender: {
			default: true
		}
	},
	experimental: {
		inspector: {
			toggleKeyCombo: 'control-shift',
			holdMode: true
		}
	}
};

export default config;
