const bot = require('testmybot');
  
describe('TestMyBot Sample Conversation Test Suite', function() {

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
    
    bot.hears('uptime')
      .then(() => bot.says())
      .then((msg) => {
        expect(msg.messageText).toMatch(/I have been running for/);
        done();
      })
      .catch((err) => fail(err));
  });  
  
  bot.setupTestSuite(
    (testcaseName, testcaseFunction) => {
      it(testcaseName, testcaseFunction, 60000);
    },
    (response, tomatch) => {
      expect(response).toMatch(tomatch);
    },
    (err) => fail(err)
  )
});
 