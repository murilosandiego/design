const componentStylesFormat = require("./flutter/component-styles-dart");
const libraryClassFormat = require("./flutter/library-class-dart");
const packageDartFormat = require("./flutter/package-dart");
const pubspecYamlFormat = require("./flutter/pubspec-yaml");
const textThemeFormat = require("./flutter/text-theme");

const formats = [
  componentStylesFormat,
  libraryClassFormat,
  packageDartFormat,
  pubspecYamlFormat,
  textThemeFormat,
];

const registerFormats = (styleDictionary) => {
  formats.forEach((format) => {
    styleDictionary.registerFormat(format);
  });
};

module.exports = {
  formats,
  registerFormats,
};