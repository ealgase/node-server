readline=require('readline')
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));
rl.question('What port do you want to use?', (answer) => {
  app.listen(answer);
});
