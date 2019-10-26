//This syntax is used to connect to the person.js file
// const Person = require('./person');

// const person1 = new Person('Frey', 23, 'Hacker');
// person1.greeting();

//========================================

// const Logger = require('./logger');

// const log1 = new Logger();

// log1.on('message', (data) => console.log('Called listener: ', data));

// log1.log('This is the Message');
// log1.log('This is the 2nd Message');
// log1.log('Test 3rd Message');

//========================================

//SAMPLE WEB CREATE SERVER

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });

        
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
