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

            return outObj;
        }
    }
};