module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testMatch: ['<rootDir>/**/*.test.(js|jsx)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
