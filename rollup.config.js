import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;
const BASEURL = process.env.BASEURL || '';
const DATAURL = mode == 'production' ? 'https://raw.githubusercontent.com/cristianpb/analytics-google/data/data.csv' : 'data/data.csv';
const GITHUB_URL = mode == 'production' ? 'https://cristianpb.github.io/stats/github-visits.csv' : 'data/github-visits.csv';
const JEKYLL_URL = mode == 'production' ? 'https://cristianpb.github.io/api/github-pages.json' : 'data/github-pages.json';

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
			__BASEURL__: BASEURL,
			__DATAURL__: DATAURL,
      __GITHUB_URL__: GITHUB_URL,
      __JEKYLL_URL__: JEKYLL_URL
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		preserveEntrySignatures: false,
		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
        __BASEURL__: BASEURL,
        __DATAURL__: DATAURL,
        __GITHUB_URL__: GITHUB_URL,
        __JEKYLL_URL__: JEKYLL_URL
			}),
			svelte({
				generate: 'ssr',
				dev
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		preserveEntrySignatures: 'strict',
		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
        __BASEURL__: BASEURL,
        __DATAURL__: DATAURL,
        __GITHUB_URL__: GITHUB_URL,
        __JEKYLL_URL__: JEKYLL_URL
			}),
			commonjs(),
			!dev && terser()
		],

		preserveEntrySignatures: false,
		onwarn,
	}
};
