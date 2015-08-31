var _ = require('lodash');

module.exports = {
    Patient: {
        "resourceType": "Patient",
        "self_demographics": function (proc, s_d) {
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
            outObj.name.push(name);

            //TODO: Reformat birthdate to "1974-12-25" format
            _.set(outObj, 'birthDate', _.get(s_d, 's_d.date_of_birth', ''));

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
            outObj.address.push(address);

            if (_.get(s_d, "home_phone_number", "") !== "") {
                outObj.telecom.push({
                    "system": "phone",
                    "value": _.get(s_d, "home_phone_number", ""),
                    "use": "home"
                });
            }

            if (_.get(s_d, "work_phone_number", "") !== "") {
                outObj.telecom.push({
                    "system": "phone",
                    "value": _.get(s_d, "work_phone_number", ""),
                    "use": "work"
                });
            }

            if (_.get(s_d, "cell_phone_number", "") !== "") {
                outObj.telecom.push({
                    "system": "phone",
                    "value": _.get(s_d, "cell_phone_number", ""),
                    "use": "cell"
                });
            }

            if (_.get(s_d, "fax_number", "") !== "") {
                outObj.telecom.push({
                    "system": "fax",
                    "value": _.get(s_d, "fax_number", ""),
                    "use": "fax"
                });
            }

            if (_.get(s_d, "pager_number", "") !== "") {
                outObj.telecom.push({
                    "system": "pager",
                    "value": _.get(s_d, "pager_number", ""),
                    "use": "pager"
                });
            }

            if (_.get(s_d, "home_phone_number", "") !== "") {
                outObj.telecom.push({
                    "system": "phone",
                    "value": _.get(s_d, "home_phone_number", ""),
                    "use": "home"
                });
            }

            if (_.get(s_d, "email_address", "") !== "") {
                outObj.telecom.push({
                    "system": "email",
                    "value": _.get(s_d, "email_address", ""),
                    "use": "email"
                });
            }

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
                outObj.contact.push(emer_contact);
            }
            //TODO: patient.text

            return outObj;
        },
        "va_demographics": function (proc, v_d) {
            var outObj = proc;
            if (v_d.facilities) {
                for (var i = 0; i < v_d.facilities.length; i++) {
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
                    outObj.name.push(name);

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
                    outObj.address.push(address);

                    if (_.get(v_d.facilities[i], "permanentaddress.home_phone_number", "--") !== "--") {
                        outObj.telecom.push({
                            "system": "phone",
                            "value": _.get(v_d.facilities[i], "permanentaddress.home_phone_number", "--"),
                            "use": "home"
                        });
                    }
                    if (_.get(v_d.facilities[i], "permanentaddress.work_phone_number", "--") !== "--") {
                        outObj.telecom.push({
                            "system": "phone",
                            "value": _.get(v_d.facilities[i], "permanentaddress.work_phone_number", "--"),
                            "use": "work"
                        });
                    }
                    if (_.get(v_d.facilities[i], "permanentaddress.cell_phone_number", "--") !== "--") {
                        outObj.telecom.push({
                            "system": "phone",
                            "value": _.get(v_d.facilities[i], "permanentaddress.cell_phone_number", "--"),
                            "use": "cell"
                        });
                    }
                    if (_.get(v_d.facilities[i], "permanentaddress.email_address", "") !== "") {
                        outObj.telecom.push({
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
                    outObj.contact.push(emer_contact);
                }
            }
            return outObj;
        },
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
    Encounters: {
        Encounters: [],
        va_appointments: function (proc, v_a) {
            var outObj = proc;
            if (v_a.pastappointments) {
                for (var i = 0; i < v_a.pastappointments.length; i++) {
                    var encounter = {
                        "resourceType": "Encounter",
                        "text": {
                            "status": "generated",
                            "div": ""
                        },
                        "date": "", //e.g. "2014-09-30T18:09:16.976+10:00",
                        "status": "", //e.g. "in progress",
                        "class": "", //e.g. "inpatient",
                        "subject": {
                            "reference": "" //e.g. "Patient/example"
                        }
                    };
                    if (_.get(v_a.pastappointments[i], "date/time", "") !== "") {
                        encounter.date = v_a.pastappointments[i]["date/time"];
                    }
                    if (_.get(v_a.pastappointments[i], "status", "") !== "") {
                        encounter.status = v_a.pastappointments[i].status;
                    }
                    outObj.Encounters.push(encounter);
                }
            }
            return outObj;
        }
    },
    AdverseReactionAllergies: {
        Allergies: [],
        Reactions: [],
        Substances: [],
        va_allergies: function (proc, v_a) {
            var outObj = proc;
            var allergy = {
                "resourceType": "AllergyIntolerance",
                "text": {
                    "status": "generated",
                    "div": ""
                },
                "criticality": "", //e.g. "fatal"
                "sensitivityType": "", //e.g. "allergy",
                "recordedDate": "", //e.g. "2012-09-17",
                "status": "", //e.g. "confirmed",
                "subject": {
                    "reference": "" //e.g. "Patient/example"
                },
                "recorder": {
                    "reference": "" //e.g. "Practitioner/example"
                },
                "substance": {
                    "reference": "" //e.g. "Substance/example"
                },
                "reaction": [{
                    "reference": "" //e.g. "AdverseReaction/example"
                }],
                "sensitivityTest": [{
                    "reference": "" //e.g. "Observation/example"
                }]
            };
            for (var i = 0; i < v_a.allergies.length; i++) {
                if (v_a.allergies[i].allergy_type) {
                    if (v_a.allergies[i].allergy_type.toLowerCase() === 'drug') {
                        var reaction = {
                            "resourceType": "AdverseReaction",
                            "text": {
                                "status": "generated",
                                "div": "" //e.g. "<div>Anaphylaxis Reaction to a bee sting</div>"
                            },
                            "date": "", //e.g. "2012-09-17",
                            "subject": {
                                "reference": "" //e.g. "Patient/example"
                            },
                            "didNotOccurFlag": false,
                            "recorder": {
                                "reference": "" //e.g. "Practitioner/example"
                            },
                            "symptom": [{
                                "code": {
                                    "coding": [{
                                        "system": "", //e.g. "http://hl7.org/fhir/sid/icd-10",
                                        "code": "", //e.g. "T78.2",
                                        "display": "" //e.g. "Anaphylactic shock, unspecified"
                                    }],
                                    "text": "" //e.g. "Anaphylaxis reaction"
                                },
                                "severity": "" //e.g. "moderate"
                            }],
                            "exposure": [{
                                "date": "", //e.g. "2012-09-17",
                                "type": "", //e.g. "coincidental",
                                "substance": {
                                    "reference": "" //e.g. "Substance/example"
                                }
                            }]
                        };
                        var substance = {
                            "resourceType": "Substance",
                            "text": {
                                "status": "generated",
                                "div": ""
                            },
                            "type": {
                                "text": "",
                                "coding": [
                                    {
                                        "system": "", //e.g. "http://snomed.info/sct",
                                        "code": "", //e.g. "3092008",
                                        "display": "" //e.g. "Staphylococcus Aureus"
                                    }
                                ]
                            }
                        };
                        //substance.type.coding[0].display = _.get(v_a.allergies[i],'allergy_name','');
                        substance.type.text = _.get(v_a.allergies[i],'allergy_name','');
                        outObj.Substances.push(substance);
                        //TODO: Reference substance in reaction
                        reaction.date = _.get(v_a.allergies[i],'date_entered','');
                        reaction.symptom[0].code.text = _.get(v_a.allergies[i],'reaction','');
                        outObj.Reactions.push(reaction);
                    } else {

                    }
                }
            }

            return outObj;
        },
        self_allergies: function (proc, s_a) {
            var outObj = proc;
            var allergy = {
                "resourceType": "AllergyIntolerance",
                "text": {
                    "status": "generated",
                    "div": ""
                },
                "criticality": "", //e.g. "fatal"
                "sensitivityType": "", //e.g. "allergy",
                "recordedDate": "", //e.g. "2012-09-17",
                "status": "", //e.g. "confirmed",
                "subject": {
                    "reference": "" //e.g. "Patient/example"
                },
                "recorder": {
                    "reference": "" //e.g. "Practitioner/example"
                },
                "substance": {
                    "reference": "" //e.g. "Substance/example"
                },
                "reaction": [{
                    "reference": "" //e.g. "AdverseReaction/example"
                }],
                "sensitivityTest": [{
                    "reference": "" //e.g. "Observation/example"
                }]
            };
            for (var i = 0; i < s_a.allergies.length; i++) {
                if (s_a.allergies[i].allergy_type) {
                    var reaction = {
                        "resourceType": "AdverseReaction",
                        "text": {
                            "status": "generated",
                            "div": "" //e.g. "<div>Anaphylaxis Reaction to a bee sting</div>"
                        },
                        "date": "", //e.g. "2012-09-17",
                        "subject": {
                            "reference": "" //e.g. "Patient/example"
                        },
                        "didNotOccurFlag": false,
                        "recorder": {
                            "reference": "" //e.g. "Practitioner/example"
                        },
                        "symptom": [{
                            "code": {
                                "coding": [{
                                    "system": "", //e.g. "http://hl7.org/fhir/sid/icd-10",
                                    "code": "", //e.g. "T78.2",
                                    "display": "" //e.g. "Anaphylactic shock, unspecified"
                                }],
                                "text": "" //e.g. "Anaphylaxis reaction"
                            },
                            "severity": "" //e.g. "moderate"
                        }],
                        "exposure": [{
                            "date": "", //e.g. "2012-09-17",
                            "type": "", //e.g. "coincidental",
                            "substance": {
                                "reference": "" //e.g. "Substance/example"
                            }
                        }]
                    };
                    var substance = {
                        "resourceType": "Substance",
                        "text": {
                            "status": "generated",
                            "div": ""
                        },
                        "type": {
                            "text": "",
                            "coding": [
                                {
                                    "system": "", //e.g. "http://snomed.info/sct",
                                    "code": "", //e.g. "3092008",
                                    "display": "" //e.g. "Staphylococcus Aureus"
                                }
                            ]
                        }
                    };
                    //substance.type.coding[0].display = _.get(v_a.allergies[i],'allergy_name','');
                    substance.type.text = _.get(s_a.allergies[i],'allergy_name','');
                    outObj.Substances.push(substance);
                    //TODO: Reference substance in reaction
                    reaction.date = _.get(s_a.allergies[i],'date','');
                    reaction.symptom[0].code.text = _.get(s_a.allergies[i],'reaction','');
                    outObj.Reactions.push(reaction);
                }
            }

            return outObj;
        }
    },
    Medication: {
        Medications: [],
        MedicationPrescriptions: [],
        va_medications: function (proc, v_a) {
            var outObj = proc;
            for (var i = 0; i < v_a.medications.length; i++) {
                var medicationprescription = {
                    "resourceType": "MedicationPrescription",
                    "text": {
                        "status": "generated",
                        "div": ""
                    },
                    "identifier": [
                        {
                            "use": "", //e.g. "official",
                            "system": "", //e.g. "http://www.bmc/portal/prescriptions",
                            "value": "" //e.g. "order9837293"
                        }
                    ],
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
                        "coding": [
                            {
                                "system": "", //e.g. "http://snomed.info/sct",
                                "code": "", //e.g. "13645005",
                                "display": "" //e.g. "Chronic obstructive pulmonary disease"
                            }
                        ]
                    },
                    "medication": {
                        "reference": "", //e.g. "Medication/f001",
                        "display": "" //e.g. "prescribed medication"
                    },
                    "dosageInstruction": [
                        {
                            "text": "", //e.g. "3 tot 4 maal daags 1 flacon",
                            "additionalInstructions": {
                                "text": "" //e.g. "for use during pregnancy, contact physician"
                            },
                            "timingSchedule": {
                                "event": [
                                    {
                                        "start": "", //e.g. "2013-08-04",
                                        "end": "" //e.g. "2013-11-05"
                                    }
                                ],
                                "repeat": {
                                    "frequency": 0, //e.g. 3,
                                    "duration": 1, //e.g. 1,
                                    "units": "" //e.g. "d"
                                }
                            },
                            "site": {
                                "coding": [
                                    {
                                        "system": "", //e.g. "http://snomed.info/sct",
                                        "code": "", //e.g. "181220002",
                                        "display": "" //e.g. "Entire oral cavity"
                                    }
                                ]
                            },
                            "route": {
                                "coding": [
                                    {
                                        "system": "", //e.g. "http://snomed.info/sct",
                                        "code": "", //e.g. "394899003",
                                        "display": "" //e.g. "oral administration of treatment"
                                    }
                                ]
                            },
                            "doseQuantity": {
                                "value": 0, //e.g. 10,
                                "units": "", //e.g. "ml",
                                "system": "", //e.g. "http://unitsofmeasure.org",
                                "code": "" //e.g. "ml"
                            }
                        }
                    ],
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
                            "units": "days", //e.g. "days",
                            "system": "urn:oid:2.16.840.1.113883.6.8", //e.g. "urn:oid:2.16.840.1.113883.6.8",
                            "code": "d" //e.g. "d"
                        }
                    }
                };

                //TODO: Reference medicationprescription in medication
                medicationprescription.medication.display = _.get(v_a.medications[i],'medication_name','');
                medicationprescription.status = _.get(v_a.medications[i],'status','').toLowerCase();
                medicationprescription.dispense.numberOfRepeatsAllowed = Number.parseInt(_.get(v_a.medications[i],'refills_remaining', 0));
                medicationprescription.dispense.expectedSupplyDuration.value = Number.parseInt(_.get(v_a.medications[i],'days_supply', 1));
                medicationprescription.dosageInstruction[0].text = _.get(v_a.medications[i],'instructions',['']).join(', ');
                medicationprescription.dispense.validityPeriod.start = _.get(v_a.medications[i],'initially_ordered_on','');
                outObj.MedicationPrescriptions.push(medicationprescription);

                var medication = {
                    "resourceType": "Medication",
                    "text": {
                        "status": "generated",
                        "div": ""
                    },
                    "name": "", //e.g. "Combivent",
                    "code": {
                        "coding": [{
                            "system": "", //e.g. "http://snomed.info/sct",
                            "code": "", //e.g. "320442002",
                            "display": "" //e.g. "Salbutamol+ipratropium bromide 100micrograms/20micrograms inhaler"
                        }]
                    },
                    "isBrand": true, //not sure what to set this as
                    "kind": "product", //e.g. "product", //not sure what to keep this as
                    "product": {
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
                    }
                };
                medication.name = _.get(v_a.medications[i],'medication_name','');

                outObj.Medications.push(medication);
            }

            return outObj;
        },
        self_medications: function (proc, s_a) {
            var outObj = proc;
            for (var i = 0; i < s_a.medications.length; i++) {
                var medicationprescription = {
                    "resourceType": "MedicationPrescription",
                    "text": {
                        "status": "generated",
                        "div": ""
                    },
                    "identifier": [
                        {
                            "use": "", //e.g. "official",
                            "system": "", //e.g. "http://www.bmc/portal/prescriptions",
                            "value": "" //e.g. "order9837293"
                        }
                    ],
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
                        "coding": [
                            {
                                "system": "", //e.g. "http://snomed.info/sct",
                                "code": "", //e.g. "13645005",
                                "display": "" //e.g. "Chronic obstructive pulmonary disease"
                            }
                        ]
                    },
                    "medication": {
                        "reference": "", //e.g. "Medication/f001",
                        "display": "" //e.g. "prescribed medication"
                    },
                    "dosageInstruction": [
                        {
                            "text": "", //e.g. "3 tot 4 maal daags 1 flacon",
                            "additionalInstructions": {
                                "text": "" //e.g. "for use during pregnancy, contact physician"
                            },
                            "timingSchedule": {
                                "event": [
                                    {
                                        "start": "", //e.g. "2013-08-04",
                                        "end": "" //e.g. "2013-11-05"
                                    }
                                ],
                                "repeat": {
                                    "frequency": 0, //e.g. 3,
                                    "duration": 1, //e.g. 1,
                                    "units": "" //e.g. "d"
                                }
                            },
                            "site": {
                                "coding": [
                                    {
                                        "system": "", //e.g. "http://snomed.info/sct",
                                        "code": "", //e.g. "181220002",
                                        "display": "" //e.g. "Entire oral cavity"
                                    }
                                ]
                            },
                            "route": {
                                "coding": [
                                    {
                                        "system": "", //e.g. "http://snomed.info/sct",
                                        "code": "", //e.g. "394899003",
                                        "display": "" //e.g. "oral administration of treatment"
                                    }
                                ]
                            },
                            "doseQuantity": {
                                "value": 0, //e.g. 10,
                                "units": "", //e.g. "ml",
                                "system": "", //e.g. "http://unitsofmeasure.org",
                                "code": "" //e.g. "ml"
                            }
                        }
                    ],
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
                            "units": "days", //e.g. "days",
                            "system": "urn:oid:2.16.840.1.113883.6.8", //e.g. "urn:oid:2.16.840.1.113883.6.8",
                            "code": "d" //e.g. "d"
                        }
                    }
                };

                //TODO: Reference medicationprescription in medication
                medicationprescription.medication.display = _.get(s_a.medications[i],'drug_name','');
                outObj.MedicationPrescriptions.push(medicationprescription);

                var medication = {
                    "resourceType": "Medication",
                    "text": {
                        "status": "generated",
                        "div": ""
                    },
                    "name": "", //e.g. "Combivent",
                    "code": {
                        "coding": [{
                            "system": "", //e.g. "http://snomed.info/sct",
                            "code": "", //e.g. "320442002",
                            "display": "" //e.g. "Salbutamol+ipratropium bromide 100micrograms/20micrograms inhaler"
                        }]
                    },
                    "isBrand": true, //not sure what to set this as
                    "kind": "product", //e.g. "product", //not sure what to keep this as
                    "product": {
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
                    }
                };
                medication.name = _.get(s_a.medications[i],'drug_name','');

                outObj.Medications.push(medication);
            }

            return outObj;
        }
    }
};