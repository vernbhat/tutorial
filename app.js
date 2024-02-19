// const os = require("os");
// console.log(os.userInfo());
// console.log(`The system uptime is ${os.uptime()} seconds`);

// const path = require("path");
// // console.log(path.sep);
// const filePath = path.join("/newFolder", "demo.txt");
// console.log(filePath);
// const base = path.basename(filePath);
// console.log(base);
// const absolute = path.resolve(__dirname, "newFolder", "demo.txt");
// console.log(absolute);

// const { readFileSync, writeFileSync, writeFile } = require("fs");
// const first = readFileSync("./newFolder/first.txt", "utf8");
// const second = readFileSync("./newFolder/second.txt", "utf8");
// // console.log(test, temp);
// writeFileSync(
//   "./newFolder/res-sync.txt",
//   `Here is the res: ${first} ${second} `,
//   { flag: "a" }
// );

// const { readFile } = require("fs");
// readFile("./newFolder/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   //   console.log(result);
//   const first = result;
//   readFile("./newFolder/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     writeFile(
//       "./newFolder/result-async.txt",
//       `Here is the res: ${first} ${second} `,
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(result);
//       }
//     );
//   });
// });

const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log(req);
  //   res.write("Welcome to our home page");
  //   res.end();
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("About the author?!");
  } else {
    res.end(`
    <h1>Page not found</h1>
    <p>We couldn't find the page you are looking for</p>
    <a href="/">Home</a>
    `);
  }
});
server.listen(2000);
