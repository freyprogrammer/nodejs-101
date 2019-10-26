const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized Url
console.log(myUrl.href);

//Host (root domain)
console.log(myUrl.host);

//Hostname (without port)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized Query
console.log(myUrl.search);

//Parameter Object
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop throug params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));