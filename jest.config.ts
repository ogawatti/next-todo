// https://nextjs.org/docs/app/building-your-application/testing/jest
import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts', '<rootDir>/tests/singleton.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/tests/**/*.test.ts?(x)'],
  moduleNameMapper: {
    '@src/(.*)$': '<rootDir>/src/$1',
    '@/src/(.*)$': '<rootDir>/src/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
