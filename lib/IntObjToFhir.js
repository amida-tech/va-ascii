'use strict';
// jshint elision: true

var Transform = require("stream").Transform;
var util = require("util");
var _ = require("lodash");
var guid = require("node-uuid");
var fhirObject = require('./fhirObject');
var async = require('async');

function Entry() {
    var date = new Date();
    this.title = ""; //e.g. "Blood Pressure Observation",
    this.id = "";// id": "", //e.g. "http://acme.org/ehr/observations/34252345234",
    this.updated = date.toISOString(); //e.g. "2014-01-30T22:35:23+11:00",
    this.author = [{
        name: "Amida-Tech DRE"
    }];
    this.content = {};
}

/**
 * @class
 * @param {string} [baseUrl] - creates entites for transaction bundle
 */
function Factory(baseUrl) {
    this.serial = 0;
    this.baseUrl = baseUrl;
}

function IntObjToFhirStream(baseUrl) {
    Transform.call(this, {
        "objectMode": true
    }); // invoke Transform's constructor, expected result is object
    this.factory = new Factory(baseUrl);
}

util.inherits(IntObjToFhirStream, Transform); // inherit Transform

var mapper = {};

IntObjToFhirStream.prototype._transform = function (va, encoding, cb) {
    var fhirKeys = Object.keys(fhirObject.Proc);
    var self = this;
    async.eachSeries(fhirKeys, function (fhirRow, cb1) {
        async.series([function (cb2) {
            if (fhirObject.Proc[fhirRow].self_demographics) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].self_demographics(fhirObject, va.self_demographics);
                cb2();
            } else {
                cb2();
            }
        }, function (cb2) {
            if (fhirObject.Proc[fhirRow].va_demographics) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].va_demographics(fhirObject, va.va_demographics);
                cb2();
            } else {
                cb2();
            }
        }, function (cb2) {
            if (fhirObject.Proc[fhirRow].va_appointments) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].va_appointments(fhirObject, va.va_appointments);
                cb2();
            } else {
                cb2();
            }
        }, function (cb2) {
            if (fhirObject.Proc[fhirRow].self_allergies) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].self_allergies(fhirObject, va.self_allergies);
                cb2();
            } else {
                cb2();
            }
        }, function (cb2) {
            if (fhirObject.Proc[fhirRow].va_allergies) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].va_allergies(fhirObject, va.va_allergies);
                cb2();
            } else {
                cb2();
            }
        }, function (cb2) {
            if (fhirObject.Proc[fhirRow].va_medications) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].va_medications(fhirObject, va.va_medications);
                cb2();
            } else {
                cb2();
            }
        }, function (cb2) {
            if (fhirObject.Proc[fhirRow].self_medications) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].self_medications(fhirObject, va.self_medications);
                cb2();
            } else {
                cb2();
            }
        }, function (cb2) {
            if (fhirObject.Proc[fhirRow].va_immunizations) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].va_immunizations(fhirObject, va.va_immunizations);
                cb2();
            } else {
                cb2();
            }
        }, function (cb2) {
            if (fhirObject.Proc[fhirRow].self_immunizations) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].self_immunizations(fhirObject, va.self_immunizations);
                cb2();
            } else {
                cb2();
            }
        }, function (cb2) {
            if (fhirObject.Proc[fhirRow].va_problems) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].va_problems(fhirObject, va.va_problems);
                cb2();
            } else {
                cb2();
            }
        }, function (cb2) {
            if (fhirObject.Proc[fhirRow].va_admission_discharge) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].va_admission_discharge(fhirObject, va.va_admission_discharge);
                cb2();
            } else {
                cb2();
            }
        }, function (cb2) {
            if (fhirObject.Proc[fhirRow].va_vitals) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].va_vitals(fhirObject, va.va_vitals);
                cb2();
            } else {
                cb2();
            }
        }, function (cb2) {
            if (fhirObject.Proc[fhirRow].self_vitals) {
                fhirObject.Proc[fhirRow] = fhirObject.Proc[fhirRow].self_vitals(fhirObject, va.self_vitals);
                cb2();
            } else {
                cb2();
            }
        }], function () {
            cb1();
        });
    }, function () {
        var outObj = _.cloneDeep(fhirObject.FHIR);
        var data = _.cloneDeep(fhirObject);
        delete data.Post;
        delete data.Proc;
        delete data.FHIR;
        delete data.Patient;
        var patientEntry = new Entry();
        patientEntry.title = "Patient";
        patientEntry.content = fhirObject.Patient;
        outObj.entry.push(patientEntry);
        async.eachSeries(Object.keys(data), function (dataKey, cb3) {
            var entry = new Entry();
            entry.title = dataKey;
            entry.content = data[dataKey];
            outObj.entry.push(entry);
            cb3();
        }, function () {
            var date = new Date();
            outObj.updated = date.toISOString();
            if (self.factory.baseUrl) {
                outObj['type'] = "transaction";
                outObj['base'] = self.factory.baseUrl;
            }
            //console.log(JSON.stringify(outObj));
            self.push(outObj);
            cb();
        });
    });
};

module.exports.IntObjToFhirStream = IntObjToFhirStream;