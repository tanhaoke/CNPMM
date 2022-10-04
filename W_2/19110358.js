const http = require("http");

const MSSV = ["19110358", "19110343", "19110337"];

const myGroup = [
  { id: "19110343", name: "Pham Nguyen Hai Duong" },
  { id: "19110358", name: "Nguyen Tan Hao" },
];

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200);
      res.end(JSON.stringify(myGroup));
    } else {
      let id = req.url.split("/")[2] || null;
      if (req.url.search("mssv") !== -1) {
        if (req.method === "GET") {
          const item = myGroup.find((item) => item.id === id);
          if (item) {
            res.writeHead(200);
            res.end(JSON.stringify(item));
          } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Not Valid" }));
          }
        } else if (req.method == "POST") {
          req.on("data", (data) => {
            const body = JSON.parse(data);
            if (
              MSSV.indexOf(body.id) !== -1 &&
              myGroup.indexOf(body.id) === -1
            ) {
              myGroup.push(body);
              res.writeHead(201);
              res.end(JSON.stringify(myGroup));
            } else {
              res.writeHead(404);
              res.end(JSON.stringify({ error: "Not Valid" }));
            }
          });
        }
      } else {
        if (req.method === "GET") {
          if (id) {
            const item = myGroup.find((item) => item.id === id);
            if (item) {
              res.end(
                ` <html><body><ul><li> ${item.name}</li></ul></body></html>`
              );
            } else {
              res.writeHead(404);
              res.end(JSON.stringify({ error: "Not Valid" }));
            }
          } else {
            let html = "";
            myGroup.forEach((item) => (html += ` <li>${item.name}</li>`));

            res.end(`<html><body><ul>${html} </ul></body></html>`);
          }
        }
      }
    }
  })
  .listen(5000, () => {
    console.log(`Server is listening at port ${5000}`);
  });
