module.exports = {
  plugins: ['lodash'],
  rules: {
    'lodash/callback-binding': 'error', // Prevents improperly binding `this` in lodash callbacks
    'lodash/chaining': 'error', // Prevents lodash chaining
    'lodash/import-scope': ['error', 'member'], // Requires importing named functions
    'lodash/matches-prop-shorthand': ['error', 'never'], // Requires using a callback function for functions that can accept a filter property shorthand via a string or array
    'lodash/matches-shorthand': ['error', 'never'], // Requires using a callback function for functions than can accept a filter property shorthand via an object
    'lodash/path-style': ['error', 'array'], // Requires using an array shorthand in functions that accept a path to an inner value (namely `has`, `get` and `set`)
    'lodash/prefer-immutable-method': 'error', // Prefer using lodash methods that don't mutate the value
    'lodash/preferred-alias': 'error', // Prefer using the original method over any of its aliases
    'lodash/prop-shorthand': ['error', 'never'], // Requires using a callback function functions that can accept a property shorthand via a string or array
    'lodash/prefer-noop': 'error', // Prefer using `noop` for empty functions
    'lodash/prefer-times': 'error', // Prefer using `times` to create a static constant array
  },
};
