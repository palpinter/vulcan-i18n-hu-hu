// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by nova-i18n-hu-hu.js.
import { name as packageName } from "meteor/palpinter:nova-i18n-hu-hu";

// Write your tests here!
// Here is an example.
Tinytest.add('nova-i18n-hu-hu - example', function (test) {
  test.equal(packageName, "nova-i18n-hu-hu");
});
