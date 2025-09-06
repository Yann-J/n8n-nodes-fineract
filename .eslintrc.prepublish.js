module.exports = {
	root: true,
	extends: ['./.eslintrc.js'],
	rules: {
		// Stricter rules for publishing
		'no-console': 'error',
		'no-debugger': 'error',
		'no-alert': 'error',
		'no-unused-vars': 'error',
		'prefer-const': 'error',
		'no-var': 'error',
		// Additional strict rules for production
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'warn',
	},
	env: {
		node: true,
		es2022: true,
	},
};
