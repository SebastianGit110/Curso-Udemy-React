module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
};

/*.js puede ser CommonJS o ESM dependiendo del archivo package.json:
Si esta "type": "module", entonces los .js se tratan como ES Modules, entonces toca usar .cjs (CommonJS Script) para que Node lo interprete correctamente.
Si no esta "type": "module", entonces .js se trata como CommonJS.*/
