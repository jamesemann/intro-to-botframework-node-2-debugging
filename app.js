var restify = require('restify');
var builder = require('botbuilder');

// Bot Setup
var server = restify.createServer();
server.listen(3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
var connector = new builder.ChatConnector({
    appId: '80ed060b-2ea3-4db8-8c66-b091ee3fb987',
    appPassword: 'B02a0d3vUncniaJ9yfFynCU'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// Bots Dialogs
bot.dialog('/', function (session) {
    session.send("Hello from Azure");
});