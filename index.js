let http = require('http');
let url =  require('url');

http.createServer( (req,res) => {
   
  if(req.url == '/') {
    
    res.end('Welcome to Alien! Home page');
  }else if (req.url == '/About') {
     
    res.end("Welcome to  Alien About Page!");
  }else if (req.url =='/contact') {
  
    res.end('Welcome to Alien Contact page');
  }
  else  {
    res.writeHead(404, {"content-type" : "text/html" });
    res.end('<h6> Error 404 <br> Page Not Found! </h6>');
  
  }
   
  // res.write( " hello alien!!");
  // res.end();

}).listen(9000, "127.0.0.1", () => {
  console.log('Listening to the port no 9000');
});

// let http = require('http');
// let url = require('url');
 
// http.createServer((req, res) => {
//   if (req.url == '/') {
//     res.write("I'm alien's home page!!");
//     res.end();

//   }else if (req.url == 'about') {
//     res.end("welcom to about us page");
//   }else if (req.url == 'contact') {
//     res.end("welcome to contact us page");
//   }
//   else{
//     res.writeHead(404, {"content-type" : 'text/html'});

//   }
//})