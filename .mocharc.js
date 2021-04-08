'use strict'

module.exports = {
  colors: true,
  checkLeaks: true,
  require: [
    // You can uncomment this line to dogfood this module into this module's test run and have a CPU
    // profile generated, just for you 🤓
    // '.',
    'source-map-support/register',
    'test/bootstrap',
  ],
  exclude: [
    'node_modules/**',
  ],
}
