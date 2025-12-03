import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
        extends: [pluginVue.configs['flat/essential'], vueTsConfigs.recommended],
        rules: {
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            indent: ['error', 4, { SwitchCase: 1 }],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
            'vue/html-indent': ['error', 4],
            'vue/script-indent': ['error', 4, { baseIndent: 0 }],
            'vue/component-api-style': ['error', ['script-setup']],
            'vue/no-ref-object-reactivity-loss': 'error',
            'vue/prefer-define-options': 'error',
            'vue/multi-word-component-names': 'off',
        },
    },
    globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**'])
);
