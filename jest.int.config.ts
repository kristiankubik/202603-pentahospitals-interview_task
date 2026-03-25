export default {
    testEnvironment: 'node',
    testMatch: ['**/*.int-spec.ts'],
    setupFiles: ['./test/integration/jest.setup.ts'],
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
        '^.+\\.ts$': [
            '@swc/jest',
            {
                sourceMaps: 'inline',
                module: {
                    type: 'es6',
                },
                jsc: {
                    target: 'es2023',
                    parser: {
                        syntax: 'typescript',
                        decorators: true,
                    },
                    transform: {
                        legacyDecorator: true,
                        decoratorMetadata: true,
                    },
                },
            },
        ],
    },
    moduleFileExtensions: ['ts', 'js', 'mjs'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
};
