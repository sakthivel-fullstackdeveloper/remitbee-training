const http = require('http');
const os = require("os");
const EventEmitter = require("events");
const { exit } = require('process');
const { clear } = require('console');
const { fork } = require('child_process');
const m = require('./child2');

const event = new EventEmitter();

event.on("start", () => {
  console.log("started");
});

process.on("exit", () => {
  console.log("Program Ended");
});
pr

const server = http.createServer((req, res) => {
  const route = req.url;
  switch (route) {

    case '/':
      res.end('Home');
      clear();
      break;

    case '/fetch/serverDetails':
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json")
      res.end(JSON.stringify(
        {
          hosting_port: 3000,
          os_platform: os.version(),
          free_Memory: Math.floor(os.freemem() / (1024 * 1024)) + "mb",
          host_Name: os.hostname(),
          total_memory: os.totalmem() / (1024 * 1024 * 1024) + " GB"
        }
      ));
      break;

    case '/startParent':

      console.log()
      console.log("Main Parent execution ")
      console.log()
      const start = Number((Math.random() * 100).toFixed(0));
      const end = start + 10;
      for (let i = start; i <= end; i++) {
        console.log("id : " + process.pid + " parent : " + i);
      }

      res.end("Main parent exucution ");
      break;

    case '/startChild':
      fork('./child.js');
      res.end('child executed')
      break;

    case '/sameParent':
      m();
      res.end('same parent executed')
      break;

    default:
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "404 page not found" }));
  }
});

server.listen(3000, () => {
  event.emit("start");
});