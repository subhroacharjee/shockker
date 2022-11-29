module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: 'standard-with-typescript',
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json'
	},
	rules: {
		'no-tabs': 0,
		indent: 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		semi: [
			'error',
			'always'
		],
		'@typescript-eslint/consistent-type-assertions': 'off'
	}
};
