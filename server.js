const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist/photo-rc1'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/photo-rc1/index.html'));
});

app.listen(process.env.PORT || 80);