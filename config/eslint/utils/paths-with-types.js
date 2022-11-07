const path = require('path');

/**
 * @function pathsWithTypes
 * Creates an array of file paths to be used in an eslint
 * override for the `files` property.
 *
 * Accepts an array of path prefixes and an array of file types.
 * Appends the file types to each of the path prefixes
 *
 * @example
 *   const files = pathsWithTypes(
 *     ['abc/*', 'def/*'],
 *     [Files.JS, Files.TS]
 *   );
 *
 *   files = ['abc/*.{js,ts}', 'def/*.{js,ts}']
 *
 * @param {string[]} pathPrefixes - paths that the override should match
 * @param {string[]} fileTypes - file types that the override should match
 * @returns {string[]}
 */
function pathsWithTypes(pathPrefixes, fileTypes) {
  const fileTypesStr = fileTypes
    .map(fileType => {
      const ext = path.extname(fileType);
      return ext.substring(1);
    })
    .join(',');

  return pathPrefixes.map(pathPrefix => `${pathPrefix}.{${fileTypesStr}}`);
}

module.exports = {
  pathsWithTypes,
};
