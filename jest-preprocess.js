/*
 * Project SmartGatsby
 * Copyright (c) Alessio Saltarin 2021
 * Licensed under MIT license
 */

const babelOptions = {
	presets: ["babel-preset-gatsby", "@babel/preset-typescript"]
};

module.exports = require("babel-jest").createTransformer(babelOptions);
