import { factory } from '@zzxming/eslint-config';

export default factory({
  overrides: [
    {
      rules: {
        'sort-imports': 'off',
        'vue/valid-attribute-name': 'off',
        'vue/no-mutating-props': 'off',
        'ts/no-use-before-define': 'off',
      },
    },
  ],
});
