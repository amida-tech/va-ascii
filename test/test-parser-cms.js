/// <reference path="../typings/node/node.d.ts"/>
/// <reference path="../typings/mocha/mocha.d.ts"/>
"use strict";

var expect = require('chai').expect;
var fs = require('fs');
var split = require('split');

var bbva = require("../index");

describe('VA ASCII to Intermediate Object', function () {
    var outputObj;
    it('should convert to Int Obj', function (done) {
        var istream = fs.createReadStream(__dirname + '/fixtures/va-ascii.txt', 'ascii');

        expect(istream).to.exist;

        istream.pipe(split()).pipe(new bbva.VaAsciiFile2Object())
            .on('data', function (data) {
                expect(data).to.not.be.empty;
                outputObj = data;
            })
            .on('finish', function () {
                done();
            })
            .on('error', function (error) {
                done(error);
            });
    });
    it('should have the right sections', function (done) {
        expect(outputObj).to.contain.all.keys(['header', 'request_summary', 'account_summary', 'self_demographics', 'va_demographics', 'self_providers', 'self_facilities', 'self_insurance', 'va_reminders', 'va_appointments', 'va_allergies', 'self_allergies', 'va_medications', 'self_medications', 'va_problems', 'va_admission_discharge', 'va_notes', 'self_events', 'va_immunizations', 'self_immunizations', 'va_labs', 'va_pathology', 'self_labs', 'va_vitals', 'self_vitals', 'va_radiology', 'va_ekg', 'self_family', 'self_military', 'self_activity', 'self_food', 'dod_service', 'self_current_goals', 'self_completed_goals']);
        done();
    });
});

describe('Intermediate Object to FHIR', function () {
    it('CMS parser/converter test', function (done) {
        var istream = fs.createReadStream(__dirname + '/fixtures/va-ascii.txt', 'ascii');

        expect(istream).to.exist;

        istream.pipe(split())
            .pipe(new bbva.VaAsciiFile2Object())
            .pipe(new bbva.IntObjToFhirStream())
            .on('data', function (data) {
                console.log(JSON.stringify(data, null, '    '));
            })
            .on('finish', function () {
                done();
            })
            .on('error', function (error) {
                done(error);
            });
    });
});
