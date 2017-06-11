const bot = require('testmybot');
const botHelper = require('testmybot/helper/jasmine');

describe('TestMyBot Sample Conversation Test Suite', function() {

  beforeAll(function(done) {
    bot.beforeAll().then(done);
  }, 180000); //lots of timeout, first docker build could take pretty long

  beforeEach(function(done) {
    bot.beforeEach().then(done);
  }, 180000);

  afterEach(function(done) {
    bot.afterEach().then(done);
  }, 180000);
  
  afterAll(function(done) {
    bot.afterAll().then(done);
  }, 180000);

  it('should answer to uptime', function(done) {
    
    bot.hears('uptime')
      .then(() => bot.says())
      .then((msg) => {
        expect(msg.messageText).toMatch(/I have been running for/);
        done();
      })
      .catch((err) => fail(err));
  }, 60000);
  
  botHelper.setupJasmineTestSuite(60000);
});
