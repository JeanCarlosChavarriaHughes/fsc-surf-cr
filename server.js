//# Requires
var express = require('express')
var app = express()

//# Constant Parameters
var PORT = process.env.PORT || 8020

//# Main Server
app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(PORT, function(){
 console.log('fsc-surf-cr app listening to the port ' + PORT);
});
