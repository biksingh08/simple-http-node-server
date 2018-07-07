const http = require('http');
var fs = require('fs');
const port = 3000;

const requestHandler = (request, response) => {

  console.log(request);

  fs.writeFileSync('hello-world.txt', 'Hello to this great world', 'utf8');

  fs.readFileSync('hello-world.txt');

  console.log(fs.readFileSync('hello-world.txt'));

  response.end("check");

}
console.log(requestHandler());

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err){
    return ("something bad has happened", err)
  }
  console.log(`server is listening on port ${port}`)
})
