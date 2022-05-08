/**
 * @Helper
 * import your remote and added in module.exports
 * Ex.:
 *
 * const mfe = require('./mfe');
 *
 * module.exports = {
 *  mfe: mfe.remote,
 * }
 */

const mfe1 = require('./mfe1');
const mfe2 = require('./mfe2');

module.exports = {
  mfe1: mfe1.remote,
  mfe2: mfe2.remote,
};
