Package.describe({
  name: "vulcan:i18n-hu-hu",
  summary: "Vulcan i18n package (hu_HU)",
  version: '1.0.0',
  git: "https://github.com/pal-pinter/vulcan-i18n-hu-hu.git"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'vulcan:core@1.3.2'
  ]);

  api.addFiles([
    'lib/hu_HU.js'
  ], ["client", "server"]);
});
