var protractor = require('protractor');

describe('QuickStart E2E Tests', function () {

  var expectedMsg = 'Hello Angular';

  beforeEach(function () {
    protractor.browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect('Hello Angular').toEqual(expectedMsg);
  });

});
