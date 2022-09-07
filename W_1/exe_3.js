const readline = require("readline");

// define interface for read and log in cmd
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class SinhVien {
  constructor(name) {
    this.name = name;
  }

  learn(nameCourse) {
    this.course = nameCourse;
    console.log(`Recently student ${this.name} is learning course ${this.course}`)
  }
}

let sv1 = new SinhVien("Bello");
sv1.learn("Deep Learning")
process.exit(0);