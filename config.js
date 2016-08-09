exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  onPrepare: function() {
    var helper = require('./protractorHelper');
    helper.provideChai();
 },

  specs: ['specs/cucumber/exampleSpec.feature'],

  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // relevant cucumber command line options
  cucumberOpts: {
    require: [
      'specs/cucumber/steps/*.js',
      'specs/cucumber/support/*.js'
    ],
    timeout: 10000,
    format: "pretty",
    tags: '@dev'
  }


};
