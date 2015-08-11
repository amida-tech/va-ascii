/// <reference path="./typings/node/node.d.ts"/>
/// <reference path="./typings/mocha/mocha.d.ts"/>
"use strict";

// Startup file for debugging
var fs = require('fs');
var split = require('split');

var bbva = require("./index");

var istream = fs.createReadStream(__dirname + '/test/fixtures/va-ascii.txt', 'utf-8');

istream.pipe(split())
    .pipe(new bbva.VaAsciiFile2Object())
    .pipe(new bbva.IntObjToFhirStream("http://localhost:8080/fhir/base"))
    .on('data', function (data) {
        console.log(JSON.stringify(data, null, '  '));
    })
    .on('finish', function () {
        process.exit();
    })
    .on('error', function (error) {
        process.exit();
    });
