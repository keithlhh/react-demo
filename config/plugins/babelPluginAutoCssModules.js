const { extname } = require('path')


const CSS_EXTNAMES = ['.css', '.less', '.sass', '.scss', '.stylus', '.styl'];

module.exports = function () {
  return {
    visitor: {
      ImportDeclaration(
        path,
        { opts },
      ) {
        const {
          specifiers,
          source,
          source: { value },
        } = path.node;
        if (specifiers.length && CSS_EXTNAMES.includes(extname(value))) {
          source.value = `${value}?${opts.flag || 'modules'}`;
        }
      },
    }
  };
}