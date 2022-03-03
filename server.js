const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist/angular-app-test'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/angular-app-test/index.html'));
});

app.listen(process.env.PORT || 80);