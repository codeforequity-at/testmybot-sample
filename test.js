'use strict';

const testmybot = require('testmybot');



testmybot.beforeAll()
.then(() => testmybot.beforeEach())
.then(() => {

  console.log('up and running, you may talk now');

  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', function (chunk) {
    chunk = chunk.trim();
    
    if (!chunk) return;
    
    if (chunk === 'exit') {
      testmybot.afterEach().then(() => testmybot.afterAll()).then(() => process.exit(0)).catch((err) => console.log(err));
      return;
    }
    
    testmybot.hears(chunk);
    
    testmybot.says().then((msg) => console.log(msg)).catch((err) => console.log(err));
  });
})
.catch((err) => console.log(err));

