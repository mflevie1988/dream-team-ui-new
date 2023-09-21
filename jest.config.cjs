module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    '\\.svg$': '<rootDir>/src/__mocks__/svg.ts',
    '\\.svg\\?url': '<rootDir>/src/__mocks__/svgUrl.ts'
  },
  moduleDirectories: [
    'node_modules',
    __dirname,
  ],
  setupFilesAfterEnv: [
    "./jest.setup.ts"
  ],
  transform: {
    "^.+\\.(j|t)sx?$": "ts-jest"
  }
};
