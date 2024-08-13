import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        setupFiles: ['./setupTests.ts'],
        environment: 'jsdom',
        coverage: {
            provider: 'v8',
        }
    },
});