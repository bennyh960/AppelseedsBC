const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer(function (request, response) {
    console.log("request ", request.url);

    if (request.method !== "GET") {
      return response.end(http.STATUS_CODES[400]);
    }

    let filePath = "." + request.url;
    if (filePath == "./") {
      filePath = "./public/index.html";
      console.log("==============");
      console.log(request.url);
    } else if (filePath == "./style.css") {
      //*its already call that func later
      filePath = "./public/style.css";
      // response.write(fs.readFileSync(".public/style.css"));
      // response.end();
    } else if (filePath == "./app2.js") {
      filePath = "./app2.js";
      // response.write(fs.readFileSync("./app2.js"));
    } else if (filePath == "./raw-html") {
      response.write("<h1>Welcome</h1>");
      // console.log("yyyyyyyyyy");
      response.end();
      // console.log("xxxxxxxxx");
    } else if (filePath == "./users") {
      // response.write(fs.readFileSync("./pokemon.json").toString());
      filePath = "./pokemon.json";
      // response.end();
    }
    // } else if (filePath == "./pokemon.json") {
    //   response.write(fs.readFileSync("./pokemon.json").toString());
    //   response.end();
    // }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".wav": "audio/wav",
      ".mp4": "video/mp4",
      ".woff": "application/font-woff",
      ".ttf": "application/font-ttf",
      ".eot": "application/vnd.ms-fontobject",
      ".otf": "application/font-otf",
      ".wasm": "application/wasm",
    };

    const contentType = mimeTypes[extname] || "application/octet-stream";
    console.log("contentType;", contentType, extname);
    // console.log(__dirname);
    // console.log(__filename);
    fs.readFile(filePath, function (error, content) {
      if (error) {
        if (error.code == "ENOENT") {
          fs.readFile("./404.html", function (error, content) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end(content, "utf-8");
          });
        } else {
          response.writeHead(500);
          response.end("Sorry, check with the site admin for error: " + error.code + " ..\n");
        }
      } else {
        response.writeHead(200, { "Content-Type": contentType });
        // response.end(content, "utf-8");
        response.end(content, "utf-8");
        // console.log(content.toString());
      }
    });
  })
  .listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
