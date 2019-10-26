//Create a sample web server
const http = require('http');

//Create Server Object
http.createServer((req, res) => {
    //Write response
    res.write('Hello Guys');
    res.end();
}).listen(5000, () => console.log('Server is Running...'));