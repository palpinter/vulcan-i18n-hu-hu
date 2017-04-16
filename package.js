Package.describe({
  name: 'palpinter:nova-i18n-hu-hu',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use('ecmascript');
  api.mainModule('nova-i18n-hu-hu.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('palpinter:nova-i18n-hu-hu');
  api.mainModule('nova-i18n-hu-hu-tests.js');
});
