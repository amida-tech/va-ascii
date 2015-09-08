var _ = require('lodash');

function Organization() {
    this.resourceType = "Organization";
    this.text = {
        "status": "generated",
        "div": ""
    };
    this.identifier = [
        {
            "system": "", //e.g. "urn:ietf:rfc:3986",
            "value": "" //e.g. "2.16.840.1.113883.19.5"
        }
    ];
    this.name = ""; //e.g. "Good Health Clinic"
}

function Encounter() {
    this.resourceType = "Encounter";
    this.text = {
        "status": "generated",
        "div": ""
    };
    this.date = ""; //e.g. "2014-09-30T18:09:16.976+10:00"
    this.status = ""; //e.g. "in progress",
    this.class = ""; //e.g. "inpatient",
    this.subject = {
        "reference": "" //e.g. "Patient/example"
    };
    this.reason = {
        "text": ""
    };
    this.period = {
        "start": "",
        "end": ""
    };
}

function Reaction() {
    this.resourceType = "AdverseReaction";
    this.text = {
        "status": "generated",
        "div": "" //e.g. "<div>Anaphylaxis Reaction to a bee sting</div>"
    };
    this.date = ""; //e.g. "2012-09-17",
    this.subject = {
        "reference": "" //e.g. "Patient/example"
    };
    this.didNotOccurFlag = false;
    this.recorder = {
        "reference": "" //e.g. "Practitioner/example"
    };
    this.symptom = [{
        "code": {
            "coding": [{
                "system": "", //e.g. "http://hl7.org/fhir/sid/icd-10",
                "code": "", //e.g. "T78.2",
                "display": "" //e.g. "Anaphylactic shock, unspecified"
            }],
            "text": "" //e.g. "Anaphylaxis reaction"
        },
        "severity": "" //e.g. "moderate"
    }];
    this.exposure = [{
        "date": "", //e.g. "2012-09-17",
        "type": "", //e.g. "coincidental",
        "substance": {
            "reference": "" //e.g. "Substance/example"
        }
    }];
}

function Substance() {
    this.resourceType = "Substance";
    this.text = {
        "status": "generated",
        "div": ""
    };
    this.type = {
        "text": "",
        "coding": [{
            "system": "", //e.g. "http://snomed.info/sct",
            "code": "", //e.g. "3092008",
            "display": "" //e.g. "Staphylococcus Aureus"
        }]
    };
}

function Medication() {
    this.resourceType = "Medication";
    this.text = {
        "status": "generated",
        "div": ""
    };
    this.name = ""; //e.g. "Combivent",
    this.code = {
        "coding": [{
            "system": "", //e.g. "http://snomed.info/sct",
            "code": "", //e.g. "320442002",
            "display": "" //e.g. "Salbutamol+ipratropium bromide 100micrograms/20micrograms inhaler"
        }]
    };
    this.isBrand = true; //not sure what to set this as
    this.kind = "product"; //e.g. "product", //not sure what to keep this as
    this.product = {
        "form": {
            "coding": [{
                "system": "", //e.g. "http://snomed.info/sct",
                "code": "", //e.g. "420317006",
                "display": "" //e.g. "Inhaler (qualifier value)"
            }]
        },
        "ingredient": [{
            "item": {
                "reference": "", //e.g. "Medication/f001",
                "display": "" //e.g. "Combivent"
            },
            "amount": {
                "numerator": {
                    "value": 0, //e.g. 100,
                    "units": "", //e.g. "ml",
                    "system": "", //e.g. "http://unitsofmeasure.org",
                    "code": "" //e.g. "ml"
                },
                "denominator": {
                    "value": 1 //e.g. 1
                }
            }
        }]
    };
}

function Immunization() {
    this.resourceType = "Immunization";
    this.text = {
        "status": "generated",
        "div": "" //e.g. "<div>Authored by Joginder Madra</div>"
    };
    this.date = ""; //e.g. "2013-01-10";
    this.vaccineType = {
        "coding": [{
            "code": "" //e.g. "396427003"
        }]
    };
    this.subject = {
        "reference": "" //e.g. "Patient/example"
    };
    this.refusedIndicator = false;
    this.reported = false;
    this.performer = {
        "reference": "" //e.g. "Practitioner/example"
    };
    this.lotNumber = ""; //e.g. "AAJN11K",
    this.expirationDate = ""; //e.g. "2015-02-15"
}

function Vital() {
    this.resourceType = "Observation";
    this.text = {
        "status": "generated",
        "div": ""
    };
    this.name = {
        "coding": [
            {
                "system": "", //e.g. "http://snomed.info/sct",
                "code": "", //e.g. "415945006",
                "display": "" //e.g. "Oral temperature"
            },
            {
                "system": "", //e.g. "http://loinc.org",
                "code": "", //e.g. "8310-5",
                "display": "" //e.g. "Body temperature"
            }
        ],
        "text": "" //e.g. "Body temperature"
    };
    this.valueQuantity = {
        "value": 0, //e.g. 39,
        "units": "", //e.g. "degrees C",
        "system": "", //e.g. "http://snomed.info/sct",
        "code": "" //e.g. "258710007"
    };
    this.interpretation = {
        "coding": [
            {
                "system": "", //e.g. "http://hl7.org/fhir/v2/0078",
                "code": "" //e.g. "H"
            }
        ]
    };
    this.issued = ""; //e.g. "2013-04-04T13:27:00+01:00",
    this.status = ""; //e.g. "entered in error",
    this.reliability = ""; //e.g. "questionable",
    this.bodySite = {
        "coding": [
            {
                "system": "", //e.g. "http://snomed.info/sct",
                "code": "", //e.g. "38266002",
                "display": "" //e.g. "Entire body as a whole"
            }
        ]
    };
    this.method = {
        "coding": [
            {
                "system": "", //e.g. "http://snomed.info/sct",
                "code": "", //e.g. "89003005",
                "display": "" //e.g. "Oral temperature taking"
            }
        ]
    };
    this.subject = {
        "reference": "", //e.g. "Patient/f201",
        "display": "" //e.g. "Roel"
    };
    this.performer = [
        {
            "reference": "" //e.g. "Practitioner/f201"
        }
    ];
    this.referenceRange = [
        {
            "low": {
                "value": 0, //e.g. 37.5,
                "units": "" //e.g. "degrees C"
            }
        }
    ];
}

module.exports = {
    FHIR: {
        "resourceType": "Bundle",
        "title": "FHIR Object",
        "id": "", //e.g. "urn:uuid:988fc332-b3a2-4c25-af3b-91b0171ec652",
        "link": [
            {
                "rel": "self",
                "href": "" //e.g. "http://www.hl7.org/fhir/observation-example-bloodpressure.xml"
            }
        ],
        "updated": "",
        "entry": []
    },
    Organization: [],
    Patient: {
        "resourceType": "Patient",
        "text": {
            "status": "generated",
            "div": ""
        },
        "identifier": [],
        "name": [],
        "telecom": [],
        "gender": {
            "coding": []
        },
        "birthDate": "",
        "deceasedBoolean": false,
        "address": [],
        "contact": [],
        "managingOrganization": {
            "reference": ""
        },
        "active": true
    },
    Proc: {
        Patient: {
            "self_demographics": function (proc, s_d) {
                var patient = {
                    "resourceType": "Patient",
                    "text": {
                        "status": "generated",
                        "div": ""
                    },
                    "identifier": [],
                    "name": [],
                    "telecom": [],
                    "gender": {
                        "coding": []
                    },
                    "birthDate": "",
                    "deceasedBoolean": false,
                    "address": [],
                    "contact": [],
                    "managingOrganization": {
                        "reference": ""
                    },
                    "active": true
                };
                var outObj = proc;

                var name = {
                    "use": "self",
                    "family": [],
                    "given": []
                };
                var last_name = _.get(s_d, "last_name", "");
                var split_last_name = last_name.split(' ');
                var i;
                for (i = 0; i < split_last_name.length; i++) {
                    name.family.push(split_last_name[i]);
                }
                var first_name = _.get(s_d, "first_name", "");
                var split_first_name = first_name.split(' ');
                for (i = 0; i < split_first_name.length; i++) {
                    name.given.push(split_first_name[i]);
                }
                patient.name.push(name);

                //TODO: Reformat birthdate to "1974-12-25" format
                _.set(patient, 'birthDate', _.get(s_d, 's_d.date_of_birth', ''));

                var address = {
                    "use": "home",
                    "line": [],
                    "city": _.get(s_d, "mailing_or_destination_city", ""),
                    "state": _.get(s_d, "mailing_or_destination_state", ""),
                    "zip": _.get(s_d, "mailing_or_destination_zip/postal_code", "")
                };
                if (_.has(s_d, "mailing_or_destination_address")) {
                    address.line.push(_.get(s_d, "mailing_or_destination_address", ""));
                }
                if (_.has(s_d, "mailing_or_destination_address2")) {
                    address.line.push(_.get(s_d, "mailing_or_destination_address2", ""));
                }
                patient.address.push(address);

                if (_.get(s_d, "home_phone_number", "") !== "") {
                    patient.telecom.push({
                        "system": "phone",
                        "value": _.get(s_d, "home_phone_number", ""),
                        "use": "home"
                    });
                }

                if (_.get(s_d, "work_phone_number", "") !== "") {
                    patient.telecom.push({
                        "system": "phone",
                        "value": _.get(s_d, "work_phone_number", ""),
                        "use": "work"
                    });
                }

                if (_.get(s_d, "cell_phone_number", "") !== "") {
                    patient.telecom.push({
                        "system": "phone",
                        "value": _.get(s_d, "cell_phone_number", ""),
                        "use": "cell"
                    });
                }

                if (_.get(s_d, "fax_number", "") !== "") {
                    patient.telecom.push({
                        "system": "fax",
                        "value": _.get(s_d, "fax_number", ""),
                        "use": "fax"
                    });
                }

                if (_.get(s_d, "pager_number", "") !== "") {
                    patient.telecom.push({
                        "system": "pager",
                        "value": _.get(s_d, "pager_number", ""),
                        "use": "pager"
                    });
                }

                if (_.get(s_d, "home_phone_number", "") !== "") {
                    patient.telecom.push({
                        "system": "phone",
                        "value": _.get(s_d, "home_phone_number", ""),
                        "use": "home"
                    });
                }

                if (_.get(s_d, "email_address", "") !== "") {
                    patient.telecom.push({
                        "system": "email",
                        "value": _.get(s_d, "email_address", ""),
                        "use": "email"
                    });
                }

                patient.gender.coding[0] = {
                    display: _.get(s_d, "gender", "")
                };

                //TODO: _family section of emergency contacts, not enough information from VA ASCII?
                //TODO: relationship section of emergency contacts, not enough information from VA ASCII?

                var emergency_contacts = _.get(s_d, "emergencycontacts", []);
                for (i = 0; i < emergency_contacts.length; i++) {
                    var emer_contact = {
                        relationship: [{
                            "coding": []
                        }],
                        name: {
                            family: [],
                            _family: [{
                                "extension": []
                            }],
                            given: []
                        },
                        telecom: []
                    };
                    var contact_split_last_name = _.get(emergency_contacts[i], "contact_last_name", '').split(' ');
                    var j;
                    for (j = 0; j < contact_split_last_name.length; j++) {
                        emer_contact.name.family.push(contact_split_last_name[j]);
                    }
                    var contact_split_first_name = _.get(emergency_contacts[i], "contact_first_name", '').split(' ');
                    for (j = 0; j < contact_split_first_name.length; j++) {
                        emer_contact.name.given.push(contact_split_first_name[j]);
                    }
                    if (_.get(emergency_contacts[i], "home_phone_number", "") !== "") {
                        emer_contact.telecom.push({
                            "system": "phone",
                            "value": _.get(emergency_contacts[i], "home_phone_number", ""),
                            "use": "home"
                        });
                    }
                    if (_.get(emergency_contacts[i], "work_phone_number", "") !== "") {
                        emer_contact.telecom.push({
                            "system": "phone",
                            "value": _.get(emergency_contacts[i], "work_phone_number", ""),
                            "use": "work"
                        });
                    }
                    if (_.get(emergency_contacts[i], "cell_phone_number", "") !== "") {
                        emer_contact.telecom.push({
                            "system": "phone",
                            "value": _.get(emergency_contacts[i], "cell_phone_number", ""),
                            "use": "cell"
                        });
                    }
                    patient.contact.push(emer_contact);
                }
                //TODO: patient.text
                outObj.Patient = patient;

                return outObj;
            },
            "va_demographics": function (proc, v_d) {
                var outObj = proc;
                if (v_d.facilities) {
                    for (var i = 0; i < v_d.facilities.length; i++) {
                        var org = new Organization();
                        org.name = _.get(v_d.facilities[i], 'va_treating_facility', '');
                        outObj.Organization.push(org);

                        var name = {
                            "use": v_d.facilities[i].va_treating_facility.replace(/ /g, '_'),
                            "family": [],
                            "given": []
                        };
                        var last_name = _.get(v_d.facilities[i], "last_name", "");
                        var split_last_name = last_name.split(' ');
                        var j;
                        for (j = 0; j < split_last_name.length; j++) {
                            name.family.push(split_last_name[j]);
                        }
                        var first_name = _.get(v_d.facilities[i], "first_name", "");
                        var split_first_name = first_name.split(' ');
                        for (j = 0; j < split_first_name.length; j++) {
                            name.given.push(split_first_name[j]);
                        }
                        outObj.Patient.name.push(name);

                        var address = {
                            "use": "home",
                            "line": [],
                            "city": _.get(v_d.facilities[i], "permanentaddress.city", ""),
                            "state": _.get(v_d.facilities[i], "permanentaddress.state", ""),
                            "zip": _.get(v_d.facilities[i], "permanentaddress.zip_code", "")
                        };
                        if (_.has(v_d.facilities[i], "permanentaddress.street_address")) {
                            address.line.push(_.get(v_d.facilities[i], "permanentaddress.street_address", ""));
                        }
                        if (_.has(v_d.facilities[i], "permanentaddress.street_address_2")) {
                            address.line.push(_.get(v_d.facilities[i], "permanentaddress.street_address_2", ""));
                        }
                        outObj.Patient.address.push(address);

                        if (_.get(v_d.facilities[i], "permanentaddress.home_phone_number", "--") !== "--") {
                            outObj.Patient.telecom.push({
                                "system": "phone",
                                "value": _.get(v_d.facilities[i], "permanentaddress.home_phone_number", "--"),
                                "use": "home"
                            });
                        }
                        if (_.get(v_d.facilities[i], "permanentaddress.work_phone_number", "--") !== "--") {
                            outObj.Patient.telecom.push({
                                "system": "phone",
                                "value": _.get(v_d.facilities[i], "permanentaddress.work_phone_number", "--"),
                                "use": "work"
                            });
                        }
                        if (_.get(v_d.facilities[i], "permanentaddress.cell_phone_number", "--") !== "--") {
                            outObj.Patient.telecom.push({
                                "system": "phone",
                                "value": _.get(v_d.facilities[i], "permanentaddress.cell_phone_number", "--"),
                                "use": "cell"
                            });
                        }
                        if (_.get(v_d.facilities[i], "permanentaddress.email_address", "") !== "") {
                            outObj.Patient.telecom.push({
                                "system": "email",
                                "value": _.get(v_d.facilities[i], "permanentaddress.email_address", ""),
                                "use": "email"
                            });
                        }
                        //"emergencycontact": {
                        //    "name": "MHVVETERAN, TWO",
                        //    "street_address": "123 Anywhere Road",
                        //    "city": "ANYWHERE",
                        //    "state": "DC",
                        //    "zip_code": "00000",
                        //    "home_phone_number": "000-444-1952",
                        //    "work_phone_number": "--"
                        //},
                        var emer_contact = {
                            relationship: [{
                                "coding": []
                            }],
                            name: {
                                family: [],
                                _family: [{
                                    "extension": []
                                }],
                                given: []
                            },
                            telecom: []
                        };
                        var contact_name_split = _.get(v_d.facilities[i], "emergencycontact.name", '').split(',');
                        var contact_name_split_last = contact_name_split[0].trim().split(' ');
                        for (j = 0; j < contact_name_split_last.length; j++) {
                            emer_contact.name.family.push(contact_name_split[j]);
                        }
                        if (contact_name_split.length > 1) {
                            for (j = 1; j < contact_name_split.length; j++) {
                                var contact_name_split_first = contact_name_split[j].trim().split(' ');
                                for (var k = 0; k < contact_name_split_first.length; k++) {
                                    emer_contact.name.given.push(contact_name_split_first[k]);
                                }
                            }
                        }

                        if (_.get(v_d.facilities[i], "emergencycontact.home_phone_number", "--") !== "--") {
                            emer_contact.telecom.push({
                                "system": "phone",
                                "value": _.get(v_d.facilities[i], "emergencycontact.home_phone_number", "--"),
                                "use": "home"
                            });
                        }
                        if (_.get(v_d.facilities[i], "emergencycontact.work_phone_number", "--") !== "--") {
                            emer_contact.telecom.push({
                                "system": "phone",
                                "value": _.get(v_d.facilities[i], "emergencycontact.work_phone_number", "--"),
                                "use": "work"
                            });
                        }
                        outObj.Patient.contact.push(emer_contact);
                    }
                }
                return outObj;
            }
        },
        Encounter: {
            va_appointments: function (proc, v_a) {
                var outObj = proc;
                if (v_a.pastappointments) {
                    for (var i = 0; i < v_a.pastappointments.length; i++) {
                        var org = new Organization();
                        org.name = _.get(v_a.pastappointments[i], 'location', '');
                        outObj.Organization.push(org);

                        var encounter = new Encounter();
                        if (_.get(v_a.pastappointments[i], "date/time", "") !== "") {
                            encounter.date = v_a.pastappointments[i]["date/time"];
                        }
                        if (_.get(v_a.pastappointments[i], "status", "") !== "") {
                            encounter.status = v_a.pastappointments[i].status;
                        }
                        outObj.Encounter.push(encounter);
                    }
                }
                return outObj;
            },
            va_admission_discharge: function (proc, v_a) {
                var outObj = proc;
                for (var i = 0; i < v_a.admindischarge.length; i++) {
                    var org = new Organization();
                    org.name = _.get(v_a.admindischarge[i], 'location', '');
                    outObj.Organization.push(org);

                    var encounter = new Encounter();
                    encounter.date = _.get(v_a.admindischarge[i], "admission_date", "");
                    encounter.period.start = _.get(v_a.admindischarge[i], "admission_date", "");
                    encounter.period.end = _.get(v_a.admindischarge[i], "discharge_date", "");
                    encounter.reason.text = _.get(v_a.admindischarge[i], 'summary', []).join(', ');
                    outObj.Encounter.push(encounter);
                }
                return outObj;
            }
        },
        AdverseReactionAllergies: {
            va_allergies: function (proc, v_a) {
                var outObj = proc;
                for (var i = 0; i < v_a.allergies.length; i++) {
                    var org = new Organization();
                    org.name = _.get(v_a.allergies[i], 'location', '');
                    outObj.Organization.push(org);
                    if (v_a.allergies[i].allergy_type) {
                        if (v_a.allergies[i].allergy_type.toLowerCase() === 'drug') {
                            var reaction = new Reaction();
                            var substance = new Substance();
                            //substance.type.coding[0].display = _.get(v_a.allergies[i],'allergy_name','');
                            substance.type.text = _.get(v_a.allergies[i], 'allergy_name', '');
                            outObj.Substance.push(substance);

                            //TODO: Reference substance in reaction
                            reaction.date = _.get(v_a.allergies[i], 'date_entered', '');
                            reaction.symptom[0].code.text = _.get(v_a.allergies[i], 'reaction', '');
                            outObj.Reaction.push(reaction);
                        } else {

                        }
                    }
                }

                return outObj;
            },
            self_allergies: function (proc, s_a) {
                var outObj = proc;
                for (var i = 0; i < s_a.allergies.length; i++) {
                    if (s_a.allergies[i].allergy_type) {
                        var reaction = new Reaction();
                        var substance = new Substance();
                        //substance.type.coding[0].display = _.get(v_a.allergies[i],'allergy_name','');
                        substance.type.text = _.get(s_a.allergies[i], 'allergy_name', '');
                        outObj.Substance.push(substance);

                        //TODO: Reference substance in reaction
                        reaction.date = _.get(s_a.allergies[i], 'date', '');
                        reaction.symptom[0].code.text = _.get(s_a.allergies[i], 'reaction', '');
                        outObj.Reaction.push(reaction);
                    }
                }

                return outObj;
            }
        },
        Medication: {
            va_medications: function (proc, v_a) {
                var outObj = proc;
                for (var i = 0; i < v_a.medications.length; i++) {
                    var medication = new Medication();
                    medication.name = _.get(v_a.medications[i], 'medication_name', '');
                    outObj.Medication.push(medication);

                    var medicationprescription = {
                        "resourceType": "MedicationPrescription",
                        "text": {
                            "status": "generated",
                            "div": ""
                        },
                        "identifier": [{
                            "use": "", //e.g. "official",
                            "system": "", //e.g. "http://www.bmc/portal/prescriptions",
                            "value": "" //e.g. "order9837293"
                        }],
                        "dateWritten": "", //e.g. "2013-05-25T19:32:52+01:00",
                        "status": "", //e.g. "active",
                        "patient": {
                            "reference": "", //e.g. "Patient/f001",
                            "display": "" //e.g. "P. van den Heuvel"
                        },
                        "prescriber": {
                            "reference": "", //e.g. "Practitioner/f006",
                            "display": "" //e.g. "R.A. van den Berk"
                        },
                        "encounter": {
                            "reference": "", //e.g. "Encounter/f001",
                            "display": "" //e.g. "visit who leads to this priscription"
                        },
                        "reasonCodeableConcept": {
                            "coding": [{
                                "system": "", //e.g. "http://snomed.info/sct",
                                "code": "", //e.g. "13645005",
                                "display": "" //e.g. "Chronic obstructive pulmonary disease"
                            }]
                        },
                        "medication": {
                            "reference": "", //e.g. "Medication/f001",
                            "display": "" //e.g. "prescribed medication"
                        },
                        "dosageInstruction": [{
                            "text": "", //e.g. "3 tot 4 maal daags 1 flacon",
                            "additionalInstructions": {
                                "text": "" //e.g. "for use during pregnancy, contact physician"
                            },
                            "timingSchedule": {
                                "event": [{
                                    "start": "", //e.g. "2013-08-04",
                                    "end": "" //e.g. "2013-11-05"
                                }],
                                "repeat": {
                                    "frequency": 0, //e.g. 3,
                                    "duration": 1, //e.g. 1,
                                    "units": "" //e.g. "d"
                                }
                            },
                            "site": {
                                "coding": [{
                                    "system": "", //e.g. "http://snomed.info/sct",
                                    "code": "", //e.g. "181220002",
                                    "display": "" //e.g. "Entire oral cavity"
                                }]
                            },
                            "route": {
                                "coding": [{
                                    "system": "", //e.g. "http://snomed.info/sct",
                                    "code": "", //e.g. "394899003",
                                    "display": "" //e.g. "oral administration of treatment"
                                }]
                            },
                            "doseQuantity": {
                                "value": 0, //e.g. 10,
                                "units": "", //e.g. "ml",
                                "system": "", //e.g. "http://unitsofmeasure.org",
                                "code": "" //e.g. "ml"
                            }
                        }],
                        "dispense": {
                            "validityPeriod": {
                                "start": "", //e.g. "2013-04-08",
                                "end": "" //e.g. "2013-05-30"
                            },
                            "numberOfRepeatsAllowed": 0, //e.g. 20,
                            "quantity": {
                                "value": 1, //e.g. 100,
                                "units": "", //e.g. "mcg",
                                "system": "", //e.g. "urn:oid:2.16.840.1.113883.6.8",
                                "code": "" //e.g. "ug"
                            },
                            "expectedSupplyDuration": {
                                "value": 0, //e.g. 40,
                                "units": "", //e.g. "days",
                                "system": "", //e.g. "urn:oid:2.16.840.1.113883.6.8",
                                "code": "" //e.g. "d"
                            }
                        }
                    };

                    //TODO: Reference medicationprescription in medication
                    medicationprescription.medication.display = _.get(v_a.medications[i], 'medication_name', '');
                    medicationprescription.status = _.get(v_a.medications[i], 'status', '').toLowerCase();
                    medicationprescription.dispense.numberOfRepeatsAllowed = Number.parseInt(_.get(v_a.medications[i], 'refills_remaining', 0));
                    medicationprescription.dispense.expectedSupplyDuration.value = Number.parseInt(_.get(v_a.medications[i], 'days_supply', 1));
                    medicationprescription.dosageInstruction[0].text = _.get(v_a.medications[i], 'instructions', ['']).join(', ');
                    medicationprescription.dispense.validityPeriod.start = _.get(v_a.medications[i], 'initially_ordered_on', '');
                    outObj.MedicationPrescription.push(medicationprescription);
                }

                return outObj;
            },
            self_medications: function (proc, s_a) {
                var outObj = proc;
                for (var i = 0; i < s_a.medications.length; i++) {
                    var medication = new Medication();
                    medication.name = _.get(s_a.medications[i], 'drug_name', '');
                    outObj.Medication.push(medication);
                    var medicationstatement = {
                        "resourceType": "MedicationStatement",
                        "text": {
                            "status": "generated",
                            "div": "" //e.g. "<div>\n      <p>Penicillin VK 10ml suspension administered by oral route at 14:30 on 1 June 2012</p>\n      <p>to patient ref: a23</p>\n    </div>"
                        },
                        "patient": {
                            "reference": "" //e.g. "Patient/example"
                        },
                        "whenGiven": {
                            "start": "", //e.g. "2012-06-01T14:30:00",
                            "end": "" //e.g. "2012-06-01T14:30:00"
                        },
                        "medication": {
                            "reference": "" //e.g. "Medication/example"
                        },
                        "dosage": [{
                            "route": {
                                "coding": [{
                                    "system": "", //e.g. "http://snomed.info/sct",
                                    "code": "", //e.g. "394899003",
                                    "display": "" //e.g. "oral administration of treatment"
                                }]
                            },
                            "quantity": {
                                "value": 1, //e.g. 10,
                                "units": "", //e.g. "ml",
                                "system": "", //e.g. "http://unitsofmeasure.org",
                                "code": "" //e.g. "ml"
                            }
                        }]
                    };

                    //TODO: Reference medicationprescription in medication
                    medicationstatement.whenGiven.start = _.get(s_a.medications[i], 'start_date', '');
                    medicationstatement.whenGiven.end = _.get(s_a.medications[i], 'stop_date', '');
                    outObj.MedicationStatement.push(medicationstatement);
                }

                return outObj;
            }
        },
        Immunization: {
            va_immunizations: function (proc, v_i) {
                var outObj = proc;
                for (var i = 0; i < v_i.immunizations.length; i++) {
                    var org = new Organization();
                    org.name = _.get(v_i.immunizations[i], 'location', '');
                    outObj.Organization.push(org);

                    var immunization = new Immunization();
                    immunization.date = _.get(v_i.immunizations[i], 'date_received', '');
                    immunization.vaccineType.coding[0].text = _.get(v_i.immunizations[i], '');
                    outObj.Immunization.push(immunization);
                }
                return outObj;
            },
            self_immunizations: function (proc, s_i) {
                var outObj = proc;
                for (var i = 0; i < s_i.immunizations.length; i++) {
                    var immunization = new Immunization();
                    immunization.date = _.get(s_i.immunizations[i], 'date_received', '');
                    immunization.vaccineType.coding[0].text = _.get(s_i.immunizations[i], '');
                    outObj.Immunization.push(immunization);
                }
                return outObj;
            }
        },
        Condition: {
            va_problems: function (proc, v_p) {
                var outObj = proc;
                for (var i = 0; i < v_p.problems.length; i++) {
                    var org = new Organization();
                    org.name = _.get(v_p.problems[i], 'location', '');
                    outObj.Organization.push(org);

                    var problem = {
                        "resourceType": "Condition",
                        "text": {
                            "status": "generated",
                            "div": ""
                        },
                        "subject": {
                            "reference": "", //e.g. "Patient/f201",
                            "display": "" //e.g. "Roel"
                        },
                        "encounter": {
                            "reference": "" //e.g. "Encounter/f201"
                        },
                        "asserter": {
                            "reference": "" //e.g. "Practitioner/f201"
                        },
                        "dateAsserted": "", //e.g. "2013-04-04",
                        "code": {
                            "coding": [{
                                "system": "", //e.g. "http://snomed.info/sct",
                                "code": "", //e.g. "386661006",
                                "display": "" //e.g. "Fever"
                            }]
                        },
                        "category": {
                            "coding": [{
                                "system": "http://snomed.info/sct",
                                "code": "55607006",
                                "display": "Problem"
                            }, {
                                "system": "http://hl7.org/fhir/condition-category",
                                "code": "condition"
                            }]
                        },
                        "status": "", //e.g. "confirmed",
                        "severity": {
                            "coding": [{
                                "system": "", //e.g. "http://snomed.info/sct",
                                "code": "", //e.g. "255604002",
                                "display": "" //e.g. "Mild"
                            }]
                        },
                        "onsetDate": "", //e.g. "2013-04-02",
                        "evidence": [{
                            "code": {
                                "coding": [{
                                    "system": "", //e.g. "http://snomed.info/sct",
                                    "code": "", //e.g. "258710007",
                                    "display": "" //e.g. "degrees C"
                                }]
                            },
                            "detail": [{
                                "reference": "", //e.g. "Observation/f202",
                                "display": "" //e.g. "Temperature"
                            }]
                        }],
                        "location": [{
                            "code": {
                                "coding": [{
                                    "system": "", //e.g. "http://snomed.info/sct",
                                    "code": "", //e.g. "38266002",
                                    "display": "" //e.g. "Entire body as a whole"
                                }]
                            }
                        }],
                        "relatedItem": [{
                            "type": "", //e.g. "due-to",
                            "target": {
                                "reference": "", //e.g. "Procedure/f201",
                                "display": "" //e.g. "TPF chemokuur"
                            }
                        }]
                    };
                    problem.dateAsserted = _.get(v_p.problems[i], 'date/time_entered', '');
                    problem.status = _.get(v_p.problems[i], 'status', '');
                    problem.code.coding[0].display = _.get(v_p.problems[i], 'problem', '');
                    outObj.Condition.push(problem);
                }
                return outObj;
            }
        },
        Observation: {
            va_vitals: function (proc, v_v) {
                var outObj = proc;
                for (var i = 0; i < v_v.vitals.length; i++) {
                    var org = new Organization();
                    org.name = _.get(v_v.vitals[i], 'location', '');
                    outObj.Organization.push(org);

                    var vital = new Vital();
                    vital.name.text = _.get(v_v.vitals[i], 'vital_sign', '');
                    vital.issued = _.get(v_v.vitals[i], 'date/time_collected', '');
                    outObj.Observation.push(vital);
                }
                return outObj;
            },
            self_vitals: function (proc, s_v) {
                var outObj = proc;
                for (var i = 0; i < s_v.vitals.length; i++) {
                    var org = new Organization();
                    org.name = _.get(s_v.vitals[i], 'location', '');
                    outObj.Organization.push(org);
                    var vital = new Vital();
                    vital.name.text = _.get(s_v.vitals[i], 'measurement_type', '');
                    vital.issued = _.get(s_v.vitals[i], 'date', '') + ' ' + _.get(s_v.vitals[i], 'time', '');
                    outObj.Observation.push(vital);
                }
                return outObj;
            }
        }
    },
    Encounter: [],
    Allergy: [],
    Reaction: [],
    Substance: [],
    Medication: [],
    MedicationPrescription: [],
    MedicationStatement: [],
    Immunization: [],
    Condition: [],
    Observation: []
};
