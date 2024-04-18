const path = require('path');
const fs = require('fs');

const importableFileExtensions = ['.js', '.jsx', '.ts', '.tsx'];

/**
 * @typedef GetInternalImportsOptions
 * @property {string} [prefix] - a prefix for the import path
 * @property {string[]} [ignoreImports] - a list if files or directories that
 * should not be included int he internal imports list
 *
 * @function getInternalImports
 * @description Get the internal import names to be used for import ordering in eslint
 *
 * @param {string} dirPath - path to get internal imports for
 * @param {GetInternalImportsOptions} [options]
 *
 * @returns {string} regex to be passed to 'import/internal-regex' setting in eslint
 */
function getInternalImports(dirPath, options = {}) {
  const internalImports = fs.readdirSync(dirPath).reduce((acc, name) => {
    if (options.ignoreImports?.includes(name)) {
      return acc;
    }

    let importName;
    const parsed = path.parse(name);

    // Directories
    if (!parsed.ext) {
      importName = parsed.name;
    } else if (importableFileExtensions.includes(parsed.ext)) {
      if (parsed.name === 'index') {
        return acc;
      }

      // Handle declaration files
      if (parsed.name.endsWith('.d')) {
        importName = path.parse(parsed.name).name;
      } else {
        importName = parsed.name;
      }
    }

    if (importName) {
      acc.push(importName);
    }

    return acc;
  }, []);

  // https://regex101.com/r/bWdapV/1
  return `^(${internalImports.join('|')})(\\/|$)`;
}

module.exports = {
  getInternalImports,
};
