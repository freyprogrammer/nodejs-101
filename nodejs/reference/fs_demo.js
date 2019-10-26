//fs or file system is a core module so no need to create location
const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), err => {
//     if (err) throw err;
//     console.log('Folder Created...')
// });

//Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World! ', err => {
//     if (err) throw err;
//     console.log('file created and written...')

//     //Append file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'By FREY! ', err => {
//         if (err) throw err;
//         console.log('file appended...')
//     });
// });

//Read file
//* note utf8 is needed to get the actual file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//             if (err) throw err;
//             console.log(data)
//         });

//Rename file
    fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'frey.text'), err => {
        if (err) throw err;
        console.log('rename file');
    });


