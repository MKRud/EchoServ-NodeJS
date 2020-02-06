const express = require('express');
const app = express();

app.listen(80);

app.get('/*', function(req, res){
    res.send(req.url + ' hello ' + req.headers['user-agent'])
});