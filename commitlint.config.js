module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-min-length': [2, 'always', 10],
    'header-max-length': [2, 'always', 120],
    'type-enum': [2, 'always', [
      'feature',
      'fix',
      'docs',
      'style',
      'lint',
      'refactor',
      'test',
      'revert',
      'bump',
    ]],
  },
};
