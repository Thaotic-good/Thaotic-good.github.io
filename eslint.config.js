// import js from '@eslint/js'
// import tseslint from 'typescript-eslint'
// import react from 'eslint-plugin-react'
// import reactHooks from 'eslint-plugin-react-hooks'
// import a11y from 'eslint-plugin-jsx-a11y'
//
// export default tseslint.config(
//     js.configs.recommended,
//     ...tseslint.configs.recommendedTypeChecked,
//     {
//         files: ['**/*.{ts,tsx}'],
//         languageOptions: {
//             parserOptions: { project: './tsconfig.json' },
//         },
//         plugins: { react, 'react-hooks': reactHooks, 'jsx-a11y': a11y },
//         settings: { react: { version: 'detect' } },
//         rules: {
//             'react/react-in-jsx-scope': 'off',
//             'react-hooks/rules-of-hooks': 'error',
//             'react-hooks/exhaustive-deps': 'warn',
//         },
//     }
// )