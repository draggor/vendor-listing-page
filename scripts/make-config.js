const fs = require("fs");
const path = require("path");

const TOML = require("@iarna/toml");

const basePath = path.resolve(__dirname, "..");
const tomlPath = path.resolve(basePath, "config.toml");
const configJsPath = path.resolve(basePath, "src", "config.js");

const configToml = fs.readFileSync(tomlPath, { encoding: "utf8" });

const config = TOML.parse(configToml);

const configStr = `module.exports = ${JSON.stringify(config, null, 2)};\n`;

fs.writeFileSync(configJsPath, configStr);
