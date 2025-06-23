const http = require("http");
const fs = require("fs");
const _=require("lodash"); 

const server = http.createServer((req, res) => {


    // lodash 

const num=_.random(0, 20);
console.log(num);  

const great=_.once(()=>{
    console.log("dddd");}
);

  
great();
great();

  // set header
  res.setHeader("Content-Type", "text/html");

  let path = "./vues/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200; // OK
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200; // OK

      break;

        case "/about-me":

       res.statusCode = 301; // OK
       res.setHeader("Location", "/about");
       res.end();

      break;

    default:
      path += "404.html";
      res.statusCode = 404;

      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listenening for request on port 3000");
});
