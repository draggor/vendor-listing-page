const fs = require("fs");
const path = require("path");

const parse = require("csv-parse/lib/sync");

const {
  csv: { delimiter, escape },
  data: { filename, tag_separator },
} = require("../src/config");

const parseOptions = {
  columns: true,
  skip_empty_lines: true,
  delimiter,
  escape,
};

const basePath = path.resolve(__dirname, "..");
const csvPath = path.resolve(basePath, "data", filename);
const dataJsPath = path.resolve(basePath, "src", "data.js");

const dealersCsv = fs.readFileSync(csvPath, { encoding: "utf8" });

const dealers = parse(dealersCsv, parseOptions);
dealers.forEach((item) => {
  if (item.tags) {
    const tags = item.tags
      .split(tag_separator)
      .map((sp) => sp.trim())
      .filter((sp) => sp.length > 0);
    item.tags = tags;
  } else {
    item.tags = [];
  }
});

const dataStr = `module.exports = ${JSON.stringify(dealers, null, 2)};\n`;

fs.writeFileSync(dataJsPath, dataStr);
