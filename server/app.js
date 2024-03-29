var express = require("express"),
    app     = express();

app.use(express.bodyParser());

app.get("/", function(req, res) {
  res.redirect("/index.html");
});

app.post('/postData', function(req, res){
    console.log(req.body);
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/static'));
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});

app.listen(4567);

console.log("Server running on http://localhost:4567");