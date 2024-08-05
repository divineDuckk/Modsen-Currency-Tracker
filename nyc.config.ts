module.exports = {
  'report-dir': 'coverage',
  all: true,
  include: ['src/**/*.ts', 'src/**/*.tsx'],
  exclude: [
    'src/**/*.test.ts',
    'src/**/*.test.tsx',
    'node_modules',
    'node_modules/*',
  ],
  reporter: ['text', 'html'],
}
