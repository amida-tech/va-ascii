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
    it('header should have the right keys', function (done) {
        expect(outputObj.header).to.exist;
        expect(outputObj.header).to.contain.all.keys(["bbversion", "requestdate", "requestname", "requestdob"]);
        done();
    });
    it('request_summary should have the right keys', function (done) {
        expect(outputObj.request_summary).to.exist;
        expect(outputObj.request_summary).to.contain.all.keys(["systemrequestdate", "filename", "daterange", "datatypes"]);
        done();
    });
    it('account_summary should have the right keys', function (done) {
        expect(outputObj.account_summary).to.exist;
        expect(outputObj.account_summary).to.be.empty;
        done();
    });
    it('self_demographics should have the right keys', function (done) {
        expect(outputObj.self_demographics).to.exist;
        expect(outputObj.self_demographics).to.contain.all.keys(["source", "first_name", "middle_initial", "last_name", "suffix", "alias", "relationship_to_va", "gender", "bloodtype", "organdonor", "date_of_birth", "marital_status", "current_occupation", "mailing_or_destination_address", "mailing_or_destination_address2", "mailing_or_destination_city", "mailing_or_destination_state", "mailing_or_destination_country", "mailing_or_destination_province", "mailing_or_destination_zip/postal_code", "home_phone_number", "work_phone_number", "pager_number", "cell_phone_number", "fax_number", "email_address", "preferred_method_of_contact", "emergencycontacts"]);
        done();
    });
    it('self_demographics should have two emergency contacts', function (done) {
        expect(outputObj.self_demographics.emergencycontacts).to.exist;
        expect(outputObj.self_demographics.emergencycontacts).to.have.length(2);
        expect(outputObj.self_demographics.emergencycontacts[1].contact_first_name).to.exist;
        expect(outputObj.self_demographics.emergencycontacts[1].contact_first_name).to.equal("Three");
        done();
    });
    it('va_demographics should have the right keys', function (done) {
        expect(outputObj.va_demographics).to.exist;
        expect(outputObj.va_demographics).to.contain.all.keys(["source", "last_updated", "sorted_by", "facilities"]);
        done();
    });
    it('va_demographics should have three facilities', function (done) {
        expect(outputObj.va_demographics.facilities).to.exist;
        expect(outputObj.va_demographics.facilities).to.have.length(3);
        expect(outputObj.va_demographics.facilities[0].va_treating_facility).to.exist;
        expect(outputObj.va_demographics.facilities[0].va_treating_facility).to.equal("VA SOUTHERN OREGON REHABILITATION CENTER CLINICS");
        done();
    });
    it('self_providers should have the right keys', function (done) {
        expect(outputObj.self_providers).to.exist;
        expect(outputObj.self_providers).to.be.empty;
        done();
    });
    it('self_facilities should have the right keys', function (done) {
        expect(outputObj.self_facilities).to.exist;
        expect(outputObj.self_facilities).to.be.empty;
        done();
    });
    it('self_insurance should have the right keys', function (done) {
        expect(outputObj.self_insurance).to.exist;
        expect(outputObj.self_insurance).to.be.empty;
        done();
    });
    it('va_reminders should have the right keys', function (done) {
        expect(outputObj.va_reminders).to.exist;
        expect(outputObj.va_reminders).to.be.empty;
        done();
    });
    it('va_appointments should have the right keys', function (done) {
        expect(outputObj.va_appointments).to.exist;
        expect(outputObj.va_appointments).to.contain.all.keys(["source", "last_updated", "sort_by", "pastappointments"]);
        done();
    });
    it('va_appointments should have the right history length', function (done) {
        expect(outputObj.va_appointments.pastappointments).to.exist;
        expect(outputObj.va_appointments.pastappointments).to.have.length(8);
        expect(outputObj.va_appointments.pastappointments[0].clinic).to.exist;
        expect(outputObj.va_appointments.pastappointments[0].clinic).to.equal("GEN SURG HERNIA-4A103");
        done();
    });
    it('va_allergies should have the right keys', function (done) {
        expect(outputObj.va_allergies).to.exist;
        expect(outputObj.va_allergies).to.contain.all.keys(["source", "last_updated", "allergies"]);
        done();
    });
    it('va_allergies should have the right length', function (done) {
        expect(outputObj.va_allergies.allergies).to.exist;
        expect(outputObj.va_allergies.allergies).to.have.length(6);
        expect(outputObj.va_allergies.allergies[2].comments).to.exist;
        expect(outputObj.va_allergies.allergies[2].comments).to.contain("might"); //tests that the newline comments were received/stored
        done();
    });
    it('self_allergies should have the right keys', function (done) {
        expect(outputObj.self_allergies).to.exist;
        expect(outputObj.self_allergies).to.contain.all.keys(["source", "allergies"]);
        done();
    });
    it('self_allergies should have the right length', function (done) {
        expect(outputObj.self_allergies.allergies).to.exist;
        expect(outputObj.self_allergies.allergies).to.have.length(2);
        done();
    });
    it('va_medications should have the right keys', function (done) {
        expect(outputObj.va_medications).to.exist;
        expect(outputObj.va_medications).to.contain.all.keys(["source", "last_updated", "sorted_by", "medications"]);
        done();
    });
    it('va_medications should have the right length', function (done) {
        expect(outputObj.va_medications.medications).to.exist;
        expect(outputObj.va_medications.medications).to.have.length(32);
        expect(outputObj.va_medications.medications[30].instructions).to.exist;
        expect(outputObj.va_medications.medications[30].instructions).to.have.length(3);
        done();
    });
    it('self_medications should have the right keys', function (done) {
        expect(outputObj.self_medications).to.exist;
        expect(outputObj.self_medications).to.contain.all.keys(["source", "medications"]);
        done();
    });
    it('self_medications should have the right length', function (done) {
        expect(outputObj.self_medications.medications).to.exist;
        expect(outputObj.self_medications.medications).to.have.length(2);
        done();
    });
    it('va_problems should have the right keys', function (done) {
        expect(outputObj.va_problems).to.exist;
        expect(outputObj.va_problems).to.contain.all.keys(["source", "last_updated", "sorted_by", "problems"]);
        done();
    });
    it('va_problems should have the right length', function (done) {
        expect(outputObj.va_problems.problems).to.exist;
        expect(outputObj.va_problems.problems).to.have.length(5);
        done();
    });
    it('va_admission_discharge should have the right keys', function (done) {
        expect(outputObj.va_admission_discharge).to.exist;
        expect(outputObj.va_admission_discharge).to.contain.all.keys(["source", "last_updated", "sorted_by", "admindischarge"]);
        done();
    });
    it('va_admission_discharge should have the right length', function (done) {
        expect(outputObj.va_admission_discharge.admindischarge).to.exist;
        expect(outputObj.va_admission_discharge.admindischarge).to.have.length(1);
        expect(outputObj.va_admission_discharge.admindischarge[0].summary).to.exist;
        expect(outputObj.va_admission_discharge.admindischarge[0].summary).to.have.length(44);
        done();
    });
    it('va_notes should have the right keys', function (done) {
        expect(outputObj.va_notes).to.exist;
        expect(outputObj.va_notes).to.contain.all.keys(["source", "last_updated", "sorted_by", "newnote", "notes"]);
        done();
    });
    it('va_notes should have the right length', function (done) {
        expect(outputObj.va_notes.notes).to.exist;
        expect(outputObj.va_notes.notes).to.have.length(12);
        done();
    });
    it('self_events should have the right keys', function (done) {
        expect(outputObj.self_events).to.exist;
        expect(outputObj.self_events).to.be.empty;
        done();
    });
    it('va_immunizations should have the right keys', function (done) {
        expect(outputObj.va_immunizations).to.exist;
        expect(outputObj.va_immunizations).to.contain.all.keys(["source", "last_updated", "sorted_by", "summary", "immunizations"]);
        done();
    });
    it('va_immunizations should have the right length', function (done) {
        expect(outputObj.va_immunizations.summary).to.exist;
        expect(outputObj.va_immunizations.summary).to.have.length(5);
        expect(outputObj.va_immunizations.immunizations).to.exist;
        expect(outputObj.va_immunizations.immunizations).to.have.length(5);
        done();
    });
    it('self_immunizations should have the right keys', function (done) {
        expect(outputObj.self_immunizations).to.exist;
        expect(outputObj.self_immunizations).to.contain.all.keys(["source", "lastkey", "immunizations"]);
        done();
    });
    it('self_immunizations should have the right length', function (done) {
        expect(outputObj.self_immunizations.immunizations).to.exist;
        expect(outputObj.self_immunizations.immunizations).to.have.length(2);
        done();
    });
    it('va_labs should have the right keys', function (done) {
        expect(outputObj.va_labs).to.exist;
        expect(outputObj.va_labs).to.contain.all.keys(["source", "lastkey", "last_updated", "sorted_by", "labs"]);
        done();
    });
    it('va_labs should have the right length', function (done) {
        expect(outputObj.va_labs.labs).to.exist;
        expect(outputObj.va_labs.labs).to.have.length(36);
        expect(outputObj.va_labs.labs[3].tests).to.exist;
        expect(outputObj.va_labs.labs[3].tests).to.have.length(6);
        done();
    });
    it('va_pathology should have the right keys', function (done) {
        expect(outputObj.va_pathology).to.exist;
        expect(outputObj.va_pathology).to.be.empty;
        done();
    });
    it('self_labs should have the right keys', function (done) {
        expect(outputObj.self_labs).to.exist;
        expect(outputObj.self_labs).to.contain.all.keys(["source", "tests"]);
        done();
    });
    it('self_labs should have the right length', function (done) {
        expect(outputObj.self_labs.tests).to.exist;
        expect(outputObj.self_labs.tests).to.have.length(3);
        expect(outputObj.self_labs.tests[2].results).to.exist;
        expect(outputObj.self_labs.tests[2].results).to.have.length(7);
        done();
    });
    it('va_vitals should have the right keys', function (done) {
        expect(outputObj.va_vitals).to.exist;
        expect(outputObj.va_vitals).to.contain.all.keys(["source", "last_updated", "summary", "sorted_by", "vitals"]);
        done();
    });
    it('va_vitals should have the right length', function (done) {
        expect(outputObj.va_vitals.summary).to.exist;
        expect(outputObj.va_vitals.summary).to.have.length(7);
        expect(outputObj.va_vitals.vitals).to.exist;
        expect(outputObj.va_vitals.vitals).to.have.length(26);
        done();
    });
    it('self_vitals should have the right keys', function (done) {
        expect(outputObj.self_vitals).to.exist;
        expect(outputObj.self_vitals).to.contain.all.keys(["source", "vitals"]);
        done();
    });
    it('self_vitals should have the right length', function (done) {
        expect(outputObj.self_vitals.vitals).to.exist;
        expect(outputObj.self_vitals.vitals).to.have.length(22);
        done();
    });
    it('va_radiology should have the right keys', function (done) {
        expect(outputObj.va_radiology).to.exist;
        expect(outputObj.va_radiology).to.be.empty;
        done();
    });
    it('va_ekg should have the right keys', function (done) {
        expect(outputObj.va_ekg).to.exist;
        expect(outputObj.va_ekg).to.be.empty;
        done();
    });
    it('self_family should have the right keys', function (done) {
        expect(outputObj.self_family).to.exist;
        expect(outputObj.self_family).to.be.empty;
        done();
    });
    it('self_military should have the right keys', function (done) {
        expect(outputObj.self_military).to.exist;
        expect(outputObj.self_military).to.be.empty;
        done();
    });
    it('self_activity should have the right keys', function (done) {
        expect(outputObj.self_activity).to.exist;
        expect(outputObj.self_activity).to.be.empty;
        done();
    });
    it('self_food should have the right keys', function (done) {
        expect(outputObj.self_food).to.exist;
        expect(outputObj.self_food).to.be.empty;
        done();
    });
    it('dod_service should have the right keys', function (done) {
        expect(outputObj.dod_service).to.exist;
        expect(outputObj.dod_service).to.be.empty;
        done();
    });
    it('self_current_goals should have the right keys', function (done) {
        expect(outputObj.self_current_goals).to.exist;
        expect(outputObj.self_current_goals).to.be.empty;
        done();
    });
    it('self_completed_goals should have the right keys', function (done) {
        expect(outputObj.self_completed_goals).to.exist;
        expect(outputObj.self_completed_goals).to.be.empty;
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
                //console.log(JSON.stringify(data, null, '    '));
            })
            .on('finish', function () {
                done();
            })
            .on('error', function (error) {
                done(error);
            });
    });
});
