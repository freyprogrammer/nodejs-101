//path is a core module so no need to create location
const paths = require('path');


//Base file name
console.log(paths.basename(__filename)); //result path_demo.js


//Directory name
console.log(paths.dirname(__filename));


//File extension
console.log(paths.extname(__filename));


//Create path object
console.log(paths.parse(__filename));


//Concatinate paths
console.log(paths.join(__dirname, 'test', 'hello.html'));