

describe('TestMyBot Sample Conversation Test Suite', function() {
  var bot = require('testmybot');

  beforeAll(function(done) {
    bot.beforeAll().then(done);
  }, 120000); //lots of timeout, first docker build could take pretty long

  beforeEach(function(done) {
    bot.beforeEach().then(done);
  }, 60000);

  afterEach(function(done) {
    bot.afterEach().then(done);
  }, 60000);
  
  afterAll(function(done) {
    bot.afterAll().then(done);
  }, 60000);

  it('should answer to uptime', function(done) {
    
    bot.hears('uptime');
    
    bot.says().then((msg) => {
      expect(msg.messageText).toMatch(/I have been running for/);
      done();
    });
  });

});