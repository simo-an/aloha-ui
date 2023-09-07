import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  compilerOptions: { 
    customElement: true 
  },
  onwarn: (warning, handler) => {
		const { code, frame } = warning;

		const _warning = [
			'a11y-invalid-attribute',
			'css-unused-selector',
			'a11y-label-has-associated-control',
			'unused-export-let',
			'a11y-missing-attribute',
			'a11y-missing-content',
			'a11y-mouse-events-have-key-events',
      "a11y-no-static-element-interactions"
		]
		if (_warning.includes(code))
			return;

		handler(warning);
	},
}
