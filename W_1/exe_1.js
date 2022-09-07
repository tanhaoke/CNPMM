const readline = require("readline");

// define interface for read and log in cmd
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter operation (+, -, *, /): ", (operate) => {
  rl.question("Enter number 1: ", (num1) => {
    rl.question("Enter number 2: ", (num2) => {
        switch (operate) {
          case "+":
            console.log(` Result: ${num1} + ${num2} = ${num1 + num2}`);
            break;
          case "-":
            console.log(` Result: ${num1} - ${num2} = ${num1 - num2}`);
            break;
          case "*":
            console.log(` Result: ${num1} x ${num2} = ${num1 * num2}`);
            break;
          case "/":
            if (num2 === '0') {
              console.error("Error: Number 2 equal 0");
            } else {
              console.log(` Result: ${num1} / ${num2} = ${num1 / num2}`);
            }
            break;
          default:
            console.warn("OPERATION WRONG. RERUN AND TRY AGAIN")
            break;
        }
        rl.close();
    });
  });
});

rl.on("close", () => {
  process.exit(0);
});
