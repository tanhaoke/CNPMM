const readline = require("readline");
const fs = require("fs")

// define interface for read and log in cmd
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter file name or dir (include extension .txt): ", (fileName) => {
   try {
     const data = fs.readFileSync(fileName, "utf8");
     console.log(data);
   } catch (err) {
     console.error(err);
   }
   rl.close()
});

rl.on("close", () => {
  process.exit(0);
});
