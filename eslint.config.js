// eslint.config.js

import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier'; // Importa a config do Prettier

export default [
    {
        // 1. Arquivos a serem verificados
        files: ['**/*.{js,jsx,mjs,cjs}'],

        // 2. Configurações de Linguagem (ESM e JSX)
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser, // Variáveis globais do navegador (como window, document, etc.)
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true, // Habilita o suporte a JSX
                },
            },
        },

        // 3. Plugins
        plugins: {
            react,
            'react-hooks': reactHooks,
        },

        // 4. Regras (Combina as recomendações + Prettier + Customizações)
        rules: {
            // Regras Básicas
            ...js.configs.recommended.rules,

            // Regras Recomendadas do React
            ...react.configs.recommended.rules,

            // Regras Recomendadas de Hooks
            ...reactHooks.configs.recommended.rules,

            // Regras do Prettier (desativa conflitos)
            ...prettierConfig.rules, // Nota: A melhor prática é usar o 'eslint-config-prettier' aqui

            // Customizações (como discutido)
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off', // Mantenha off se usar TypeScript
        },

        // 5. Settings (Para o plugin do React saber a versão)
        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    // Array de ignores (opcional, mas recomendado para build do Vite)
    {
        ignores: ['dist', 'node_modules', '.vite/'],
    },
];
