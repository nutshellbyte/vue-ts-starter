import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
        rules: {
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
            'vue/multi-word-component-names': 'off',
            'vue/html-indent': ['error', 4],
            'vue/script-indent': ['error', 4, { baseIndent: 0 }],
            'vue/component-api-style': ['error', ['script-setup']],
            'vue/no-ref-object-reactivity-loss': 'error',
            'vue/prefer-define-options': 'error',
        },
    },

    globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended
);
