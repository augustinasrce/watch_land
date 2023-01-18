module.exports = {
     clearMocks: true,
     collectCoverage: true,
     coverageDirectory: "coverage",
     coverageProvider: "v8",
     testEnvironment: "jsdom",
     testMatch: [
          "**/__tests__/**/*.[jt]s?(x)",
          "**/?(*.)+(test).[tj]s?(x)"
        ],
}