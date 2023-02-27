"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    setupFiles: ["<rootDir>/.jest/setup-env.ts"],
    moduleFileExtensions: ["ts", "tsx", "js"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testMatch: ["**/__tests__/*.+(ts|tsx|js)"],
};
exports.default = config;
