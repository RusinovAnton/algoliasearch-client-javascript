var test = require('tape');

// this test will ensure we are implementing a particular API method
// If you had a new method, it will first fail, you will have to write a test
// for it
test('AlgoliaSearch.prototype.Index.prototype API spec', function(t) {
  t.plan(1);

  var AlgoliaSearch = require('algoliasearch');
  var filter = require('lodash-compat/collection/filter');
  var functions = require('lodash-compat/object/functions');

  var onlyPublicProperties = require('../utils/only-public-properties');

  var client = new AlgoliaSearch('test', 'methods');
  var index = client.initIndex('himethods');

  var actualMethods = filter(functions(index), onlyPublicProperties).sort();

  var expectedMethods = [
    'addObject',
    'addObjects',
    'addUserKey',
    'addUserKeyWithValidity',
    'browse',
    'clearCache',
    'clearIndex',
    'deleteObject',
    'deleteUserKey',
    'getObject',
    'getSettings',
    'getUserKeyACL',
    'listUserKeys',
    'partialUpdateObject',
    'partialUpdateObjects',
    'saveObject',
    'saveObjects',
    'search',
    'setSettings',
    'ttAdapter',
    'waitTask'
  ].sort();

  t.deepEqual(actualMethods, expectedMethods, 'We only implement what is tested');
});
