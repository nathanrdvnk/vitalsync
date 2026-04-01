import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        process: "readonly",
        console: "readonly",
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        __dirname: "readonly",
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  },
  {
    files: ["test/**/*.js"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
      }
    }
  }
];