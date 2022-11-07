const path = require('path');
const fs = require('fs');

const importableFileExtensions = ['.js', '.jsx', '.ts', '.tsx'];

/**
 * @function getInternalImports
 * @description Get the internal import names to be used for import ordering in eslint
 *
 * @param {string} dirPath - path to get internal imports for
 * @param {string[]} ignoreImports - internal imports to ignore
 *
 * @returns {string} regex to be passed to 'import/internal-regex' setting in eslint
 */
function getInternalImports(dirPath, ignoreImports = []) {
  const internalImports = fs
    .readdirSync(dirPath)
    .map(name => {
      if (ignoreImports.includes(name)) {
        return;
      }

      const parsed = path.parse(name);

      // Directories
      if (!parsed.ext) {
        return parsed.name;
      }

      // Files
      if (importableFileExtensions.includes(parsed.ext)) {
        if (parsed.name === 'index') {
          return;
        }

        // Handle declaration files
        if (parsed.name.endsWith('.d')) {
          return path.parse(parsed.name).name;
        }

        return parsed.name;
      }
    })
    .filter(Boolean);

  // https://regex101.com/r/bWdapV/1
  return `^(${internalImports.join('|')})(\\/|$)`;
}

module.exports = {
  getInternalImports,
};
