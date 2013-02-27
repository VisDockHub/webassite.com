var express = require('express'),
    tweets = require('./routes/tweets');

/*
var httpProxy = require('http-proxy');


var options = {
  router: {
    'webassite.com/util/twitter-api/REST': '127.0.0.1:3000'
  }
};

var proxyServer = httpProxy.createServer(options);
proxyServer.listen(80);
*/

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/tweets', tweets.findAll);
app.get('/tweets/id/:id', tweets.findById);
app.get('/tweets/hashtag/:hashtag', tweets.findByHashtag);

app.listen(3000);

//var interval_id = setInterval(function(){ tweets.fetch(); }, 5000);

tweets.fetch();
//console.log('interval_id: ');
//console.dir(interval_id);

console.log('Listening on port 3000...');