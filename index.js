const fs = require('fs');
let wf = require('word-freq');
const ObjectsToCsv = require('objects-to-csv');

let pathToText = 'input.txt';
let freqs = [];

importText(pathToText);
writeCSV(freqs);

async function importText(path) {
  let txt = fs.readFileSync(path, 'utf8');
  console.log(txt.toString());
  // return txt;
  count(txt);
}

function count(text) {
  let frequencies = wf.freq(text, false, false);
  // console.log(frequencies);
  for (const freq in frequencies) {
    let objStr = `{"word": "${freq}","freq": "${frequencies[freq]}"}`;
    console.log(objStr);
    let obj = JSON.parse(objStr);
    freqs.push(obj);
  }
  // console.log(freqs)
  return freqs;
}

function writeCSV(data) {
  (async () => {
    const csv = new ObjectsToCsv(data);

    // Save to CSV file:
    await csv.toDisk('./freqs.csv', {
      allColumns: true
    });

    // print CSV file as string and summary
    console.log(await csv.toString());
    console.log(`${data.length} word frequencies written in /freqs.csv`)
  })();

}
