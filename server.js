const http = require('http');
const fs = require('fs');
const config = require('./config');
http.createServer((req, res) => {
    let filename = config.folderName + req.url;
    // 默认展示index.html
    (req.url == '/')?filename = config.folderName + config.defaultFileName:filename;
    fs.readFile(filename, (err, data) => {
        data?res.write(data):res.write("file not found")
        res.end();
    })
}).listen(config.port)
