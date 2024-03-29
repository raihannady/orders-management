export default {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(png|jpg|ttf|woff|woff2|css|less|scss)$': 'identity-obj-proxy',
    '@config/(.*)': '<rootDir>/config/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@containers/(.*)': '<rootDir>/src/containers/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@languages/(.*)': '<rootDir>/src/languages/$1',
    '@layouts/(.*)': '<rootDir>/src/layouts/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@routes/(.*)': '<rootDir>/src/routes/$1',
    '@static/(.*)': '<rootDir>/src/static/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@store': '<rootDir>/src/configureStore',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coveragePathIgnorePatterns: ['/src/.*/(saga|constants|actions|reducer|api|selectors|constants)\\.js$'],
};
