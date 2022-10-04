const fs = require("fs");
const { parse } = require("csv-parse");

const tableStart = [];
const tableEnd = [];

const dateStart = process.argv[2];
const dateEnd = process.argv[3];
const country = process.argv[4];

let confirmedStart = 0;
let deathsStart = 0;
let recoveredStart = 0;
let confirmedEnd = 0;
let deathsEnd = 0;
let recoveredEnd = 0;

function replaceDate(date) {
  let regexp = /(\d{2})-(\d{2})-(\d{4})/;
  let newDate = date.replace(regexp, "$2-$1-$3.csv");
  return newDate;
}

function search(data) {
  return data["Country_Region"] === `${country}`; 
}

fs.createReadStream(`./data/${replaceDate(dateStart)}`)
  .pipe(
    parse({
      columns: true,
    })
  )
  .on("data", (data) => {
    if (search(data)) {
      tableStart.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    for (const element of tableStart) {
      if (element.Country_Region === `${country}`) {
        confirmedStart = confirmedStart + Number(element.Confirmed);
        deathsStart = deathsStart + Number(element.Deaths);
        recoveredStart = recoveredStart + Number(element.Recovered);
      }
    }
    console.log(tableStart.length);
  });

fs.createReadStream(`./data/${replaceDate(dateEnd)}`)
  .pipe(
    parse({
      columns: true,
    })
  )
  .on("data", (data2) => {
    if (search(data2)) {
      tableEnd.push(data2);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    for (const element of tableEnd) {
      if (element.Country_Region === `${country}`) {
        confirmedEnd = confirmedEnd + Number(element.Confirmed);
        deathsEnd = deathsEnd + Number(element.Deaths);
        recoveredEnd = recoveredEnd + Number(element.Recovered);
      }
    }
    console.log(tableEnd.length);
    console.log(
      `${confirmedEnd - confirmedStart} ${deathsEnd - deathsStart} ${
        recoveredEnd - recoveredStart
      }`
    );
  });
