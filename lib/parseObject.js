/*
 {
 name: '',
 pattern: '',
 multiple: false, //or true... once it finds the first section of this it will stop looking if multiple is false
 model: [], //more of this pattern inside (nesting, store using name)
 process: function (processed, match) {
 return {match: match};
 },
 raw: [],
 found: false,
 processed: {}
 }
 */

/*
 {
 name: '',
 pattern: '',
 multiple: false,
 model: [],
 process: function (processed, match) {
 return {match: match};
 },
 raw: [],
 found: false,
 processed: {}
 }
 */

module.exports = [{
    name: 'header',
    pattern: /^-+ *MY HEALTHEVET PERSONAL INFORMATION REPORT *-+$/,
    multiple: false,
    model: [{
        name: 'bbversion',
        pattern: /(?:\(v)(.*)(?:\))/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {
                bbversion: match[1].trim()
            };
        },
        raw: [], found: false,
        processed: {}
    }, {
        name: 'requestdate',
        pattern: /^(\d{1,2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept?|Oct|Nov|Dec) \d{1,4}\ @ \d{4})$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {
                requestdate: match[1].trim()
            };
        },
        raw: [],
        processed: {}
    }, {
        name: 'requestname',
        pattern: /^(?:Name: )(.*)(?:Date of Birth:)(.*)$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {
                requestname: match[1].trim(),
                requestdob: match[2].trim()
            };
        },
        raw: [],
        processed: {}
    }],
    raw: [],
    processed: {}
}, {
    name: 'request_summary',
    pattern: /^-+ *DOWNLOAD REQUEST SUMMARY *-+$/,
    multiple: false,
    model: [{
        name: 'systemrequestdate',
        pattern: /^(?:System Request Date\/Time: *)(.*)$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {
                systemrequestdate: match[1].trim()
            };
        },
        raw: [],
        processed: {}
    }, {
        name: 'filename',
        pattern: /^(?:File Name: *)(.*)$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {
                filename: match[1].trim()
            };
        },
        raw: [],
        processed: {}
    }, {
        name: 'daterange',
        pattern: /^(?:Date Range Selected: *)(.*)$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {
                daterange: match[1].trim()
            };
        },
        raw: [],
        processed: {}
    }, {
        name: 'datatypes',
        pattern: /^(Data Types Selected:*)$/,
        multiple: false,
        model: [{
            name: 'datatypesobject',
            pattern: /^(.*)$/,
            multiple: true,
            model: [],
            process: function (processed, match) {
                if (processed.datatypes) {
                    processed.datatypes.push(match[1].trim());
                } else {
                    processed.datatypes = [match[1].trim()];
                }
                return {
                    datatypes: processed.datatypes
                };
            },
            raw: [],
            processed: {}
        }],
        process: function (processed, match) {
            return {
                datatypes: []
            };
        },
        raw: [],
        processed: {}
    }],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'account_summary',
    pattern: /^-+ *MY HEALTHEVET ACCOUNT SUMMARY *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_demographics',
    pattern: /^-+ *SELF REPORTED DEMOGRAPHICS *-+$/,
    multiple: false,
    model: [{
        name: 'genderdoborgan',
        pattern: /^(?:Gender: *)(.*)(?:Blood Type: *)(.*)(?:Organ Donor: *)(.*)$/, //Gender:  Male        Blood Type:  AB+    Organ Donor: Yes
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {
                gender: match[1].trim(),
                bloodtype: match[2].trim(),
                organdonor: match[3].trim()
            }
        },
        raw: [],
        found: false,
        processed: {}
    },{
        name: 'emergencycontactsstart',
        pattern: /^(EMERGENCY CONTACTS)$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {emergencycontacts: [{}]};
        },
        raw: [],
        found: false,
        processed: {}
    },{
        name: 'workphoneext',
        pattern: /^(?:Work Phone Number: *)(.*)(?:Extension: *)(.*)$/, //Work Phone Number:   000-555-1000  Extension:
        multiple: false,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            var phone = match[1].trim();
            var ext = match[2].trim();
            if (obj.emergencycontacts) {
                if (Object.keys(obj.emergencycontacts[obj.emergencycontacts.length-1]).indexOf('work_phone_number') > -1) {
                    obj.emergencycontacts.push({
                        work_phone_number: phone,
                        work_phone_ext: ext
                    });
                } else {
                    obj.emergencycontacts[obj.emergencycontacts.length-1]['work_phone_number'] = phone;
                    obj.emergencycontacts[obj.emergencycontacts.length-1]['work_phone_ext'] = ext;
                }
            } else {
                obj['work_phone_number'] = phone;
                obj['work_phone_ext'] = ext;
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'generic',
        pattern: /^(.*)(?:: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            var key = match[1].replace(/ /g, '_').toLowerCase();
            if (obj.emergencycontacts) {
                if (Object.keys(obj.emergencycontacts[obj.emergencycontacts.length-1]).indexOf(key) > -1) {
                    obj.emergencycontacts.push({});
                    obj.emergencycontacts[obj.emergencycontacts.length-1][key] = match[2].trim();
                } else {
                    obj.emergencycontacts[obj.emergencycontacts.length-1][key] = match[2].trim();
                }
            } else {
                obj[key] = match[2].trim();
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_demographics',
    pattern: /^-+ *VA DEMOGRAPHICS *-+$/,
    multiple: false,
    model: [{
        name: 'facility',
        pattern: /^={5,}$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.facilities) {
                obj.facilities.push({});
            } else {
                obj.facilities = [{}];
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'permanentaddressstart',
        pattern: /^(PERMANENT ADDRESS AND CONTACT INFORMATION)$/,
        multiple: true,
        model: [],
        process: function(processed, match) {
            var obj = processed;
            if (obj.facilities) {
                if (Object.keys(obj.facilities[obj.facilities.length - 1]).indexOf('permanentaddress') > -1) {
                    obj.facilities.push({
                        permanentaddress: {}
                    });
                } else {
                    obj.facilities[obj.facilities.length-1].permanentaddress = {};
                }
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'eligibilitystart',
        pattern: /^(ELIGIBILITY)$/,
        multiple: true,
        model: [],
        process: function(processed, match) {
            var obj = processed;
            if (obj.facilities) {
                if (Object.keys(obj.facilities[obj.facilities.length - 1]).indexOf('eligibility') > -1) {
                    obj.facilities.push({
                        eligibility: {}
                    });
                } else {
                    obj.facilities[obj.facilities.length-1].eligibility = {};
                }
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'employmentstart',
        pattern: /^(EMPLOYMENT)$/,
        multiple: true,
        model: [],
        process: function(processed, match) {
            var obj = processed;
            if (obj.facilities) {
                if (Object.keys(obj.facilities[obj.facilities.length - 1]).indexOf('employment') > -1) {
                    obj.facilities.push({
                        employment: {}
                    });
                } else {
                    obj.facilities[obj.facilities.length-1].employment = {};
                }
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'activeinsurancestart',
        pattern: /^(ACTIVE INSURANCE)$/,
        multiple: true,
        model: [],
        process: function(processed, match) {
            var obj = processed;
            if (obj.facilities) {
                if (Object.keys(obj.facilities[obj.facilities.length - 1]).indexOf('activeinsurance') > -1) {
                    obj.facilities.push({
                        activeinsurance: {}
                    });
                } else {
                    obj.facilities[obj.facilities.length-1].activeinsurance = {};
                }
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'primarynextofkinstart',
        pattern: /^(PRIMARY NEXT OF KIN)$/,
        multiple: true,
        model: [],
        process: function(processed, match) {
            var obj = processed;
            if (obj.facilities) {
                if (Object.keys(obj.facilities[obj.facilities.length - 1]).indexOf('primarynextofkin') > -1) {
                    obj.facilities.push({
                        primarynextofkin: {}
                    });
                } else {
                    obj.facilities[obj.facilities.length-1].primarynextofkin = {};
                }
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'emergencycontactstart',
        pattern: /^(EMERGENCY CONTACT)$/,
        multiple: true,
        model: [],
        process: function(processed, match) {
            var obj = processed;
            if (obj.facilities) {
                if (Object.keys(obj.facilities[obj.facilities.length - 1]).indexOf('emergencycontact') > -1) {
                    obj.facilities.push({
                        emergencycontact: {}
                    });
                } else {
                    obj.facilities[obj.facilities.length-1].emergencycontact = {};
                }
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'vaguardianstart',
        pattern: /^(VA GUARDIAN)$/,
        multiple: true,
        model: [],
        process: function(processed, match) {
            var obj = processed;
            if (obj.facilities) {
                if (Object.keys(obj.facilities[obj.facilities.length - 1]).indexOf('vaguardian') > -1) {
                    obj.facilities.push({
                        vaguardian: {}
                    });
                } else {
                    obj.facilities[obj.facilities.length-1].vaguardian = {};
                }
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'civilguardianstart',
        pattern: /^(CIVIL GUARDIAN)$/,
        multiple: true,
        model: [],
        process: function(processed, match) {
            var obj = processed;
            if (obj.facilities) {
                if (Object.keys(obj.facilities[obj.facilities.length - 1]).indexOf('civilguardian') > -1) {
                    obj.facilities.push({
                        civilguardian: {}
                    });
                } else {
                    obj.facilities[obj.facilities.length-1].civilguardian = {};
                }
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'generic',
        pattern: /^(.*)(?:: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            var key = match[1].replace(/ /g, '_').toLowerCase();
            if (obj.facilities) {
                if (obj.facilities[obj.facilities.length-1].civilguardian) {
                    obj.facilities[obj.facilities.length-1].civilguardian[key] = match[2].trim();
                } else if (obj.facilities[obj.facilities.length-1].vaguardian) {
                    obj.facilities[obj.facilities.length-1].vaguardian[key] = match[2].trim();
                } else if (obj.facilities[obj.facilities.length-1].emergencycontact) {
                    obj.facilities[obj.facilities.length-1].emergencycontact[key] = match[2].trim();
                } else if (obj.facilities[obj.facilities.length-1].primarynextofkin) {
                    obj.facilities[obj.facilities.length-1].primarynextofkin[key] = match[2].trim();
                } else if (obj.facilities[obj.facilities.length-1].activeinsurance) {
                    obj.facilities[obj.facilities.length-1].activeinsurance[key] = match[2].trim();
                } else if (obj.facilities[obj.facilities.length-1].employment) {
                    obj.facilities[obj.facilities.length-1].employment[key] = match[2].trim();
                } else if (obj.facilities[obj.facilities.length-1].eligibility) {
                    obj.facilities[obj.facilities.length-1].eligibility[key] = match[2].trim();
                } else if (obj.facilities[obj.facilities.length-1].permanentaddress) {
                    obj.facilities[obj.facilities.length-1].permanentaddress[key] = match[2].trim();
                } else {
                    obj.facilities[obj.facilities.length-1][key] = match[2].trim();
                }
            } else {
                obj[key] = match[2].trim();
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_providers',
    pattern: /^-+ *SELF REPORTED HEALTH CARE PROVIDERS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_facilities',
    pattern: /^-+ *SELF REPORTED TREATMENT FACILITIES *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_insurance',
    pattern: /^-+ *SELF REPORTED HEALTH INSURANCE *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_reminders',
    pattern: /^-+ *VA WELLNESS REMINDERS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_appointments',
    pattern: /^-+ *VA APPOINTMENTS *-+$/,
    multiple: false,
    model: [{
        name: 'pastappointments',
        pattern: /^(PAST APPOINTMENTS:)$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {pastappointments: [{}]};
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'generic',
        pattern: /^(.*)(?:: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            var key = match[1].replace(/ /g, '_').toLowerCase();
            if (obj.pastappointments) {
                if (Object.keys(obj.pastappointments[obj.pastappointments.length-1]).indexOf(key) > -1) {
                    obj.pastappointments.push({});
                    obj.pastappointments[obj.pastappointments.length-1][key] = match[2].trim();
                } else {
                    obj.pastappointments[obj.pastappointments.length-1][key] = match[2].trim();
                }
            } else {
                obj[key] = match[2].trim();
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_allergies',
    pattern: /^-+ *VA ALLERGIES *-+$/,
    multiple: false,
    model: [{
        name: 'allergyname',
        pattern: /^(?:Allergy Name: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.allergies) {
                obj.allergies.push({allergy_name: match[1]});
            } else {
                obj.allergies = [{allergy_name: match[1]}];
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'allergycomments',
        pattern: /^(?:Comments: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.allergies) {
                obj.allergies[obj.allergies.length - 1].comments = [match[1].trim()];
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'generic',
        pattern: /^(.*)(?:: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            var key = match[1].replace(/ /g, '_').toLowerCase();
            if (obj.allergies) {
                obj.allergies[obj.allergies.length-1][key] = match[2].trim();
            } else {
                obj[key] = match[2].trim();
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
            name: 'allergy comments',
            pattern: /^(.*)$/,
            multiple: true,
            model: [],
            process: function (processed, match) {
                var obj = processed;
                if (obj.allergies) {
                    if (obj.allergies[obj.allergies.length - 1].comments) {
                        obj.allergies[obj.allergies.length-1].comments.push(match[1].trim());
                    }
                }
                return obj;
            },
            raw: [],
            found: false,
            processed: {}
        }],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_allergies',
    pattern: /^-+ *SELF REPORTED ALLERGIES *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_medications',
    pattern: /^-+ *VA MEDICATION HISTORY *-+$/,
    multiple: false,
    model: [{
        name: 'medicationname',
        pattern: /^(?:Medication: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.medications) {
                obj.medications.push({medication_name: match[1]});
            } else {
                obj.medications = [{medication_name: match[1]}];
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'medication instructions',
        pattern: /^(?:Instructions: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.medications) {
                obj.medications[obj.medications.length - 1].instructions = [match[1].trim()];
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'generic',
        pattern: /^(.*)(?:: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            var key = match[1].replace(/ /g, '_').toLowerCase();
            if (obj.medications) {
                obj.medications[obj.medications.length-1][key] = match[2].trim();
            } else {
                obj[key] = match[2].trim();
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'medication instructions',
        pattern: /^(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.medications) {
                if (obj.medications[obj.medications.length - 1].instructions) {
                    obj.medications[obj.medications.length-1].instructions.push(match[1].trim());
                }
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_medications',
    pattern: /^-+ *SELF REPORTED MEDICATIONS AND SUPPLEMENTS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_problems',
    pattern: /^-+ *VA PROBLEM LIST *-+$/,
    multiple: false,
    model: [{
        name: 'problem',
        pattern: /^(?:Problem: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.problems) {
                obj.problems.push({problem: match[1]});
            } else {
                obj.problems = [{problem: match[1]}];
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'problemcomments',
        pattern: /^(?:Comments: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.problems) {
                obj.problems[obj.problems.length - 1].comments = [match[1].trim()];
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'generic',
        pattern: /^(.*)(?:: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            var key = match[1].replace(/ /g, '_').toLowerCase();
            if (obj.problems) {
                obj.problems[obj.problems.length-1][key] = match[2].trim();
            } else {
                obj[key] = match[2].trim();
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'problem comments',
        pattern: /^(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.problems) {
                if (obj.problems[obj.problems.length - 1].comments) {
                    obj.problems[obj.problems.length-1].comments.push(match[1].trim());
                }
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_admission_discharge',
    pattern: /^-+ *VA ADMISSIONS AND DISCHARGES *-+$/,
    multiple: false,
    model: [{
        name: 'admindischarge',
        pattern: /^={5,}$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.admindischarge) {
                obj.admindischarge.push({});
            } else {
                obj.admindischarge = [{}];
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'summarystart',
        pattern: /^-{5,}$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.admindischarge) {
                obj.admindischarge[obj.admindischarge.length-1].summary = [];
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'generic',
        pattern: /^(.*)(?:: *)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            var key = match[1].replace(/ /g, '_').toLowerCase();
            if (obj.admindischarge) {
                if (obj.admindischarge[obj.admindischarge.length-1].summary) {
                    obj.admindischarge[obj.admindischarge.length-1].summary.push(match[1] + ': '+match[2].trim());
                } else {
                    obj.admindischarge[obj.admindischarge.length-1][key] = match[2].trim();
                }
            } else {
                obj[key] = match[2].trim();
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'summary',
        pattern: /^(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.admindischarge) {
                if (obj.admindischarge[obj.admindischarge.length-1].summary) {
                    obj.admindischarge[obj.admindischarge.length-1].summary.push(match[1].trim());
                }
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_notes',
    pattern: /^-+ *VA NOTES *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_events',
    pattern: /^-+ *SELF REPORTED MEDICAL EVENTS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_immunizations',
    pattern: /^-+ *VA IMMUNIZATIONS *-+$/,
    multiple: false,
    model: [{
        name: 'immunizationname',
        pattern: /^(?:Immunization:)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.immunizations) {
                obj.immunizations.push({immunization_name: match[1].trim()});
            } else {
                obj.immunizations = [{immunization_name: match[1].trim()}];
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'summary',
        pattern: /(.*)(?: {2,})([01][0-9] Dec 2012 @ 1155*)/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            if (obj.summary) {
                obj.summary.push({immunization: match[1].trim(), date:match[2].trim()});
            } else {
                obj.summary = [{immunization: match[1].trim(), date:match[2].trim()}];
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'immunization',
        pattern: /(.*)(?::\*? {2,})(.*)/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            var key = match[1].replace(/ /g, '_').toLowerCase();
            var value = match[2].trim();
            if (value[0] === "*") {
                value = value.slice(1,value.length).trim();
            }
            if (obj.immunizations) {
                obj.immunizations[obj.immunizations.length-1][key] = value;
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }, {
        name: 'generic',
        pattern: /^(.*)(?::)(.*)$/,
        multiple: true,
        model: [],
        process: function (processed, match) {
            var obj = processed;
            var key = match[1].replace(/ /g, '_').toLowerCase();
            var value = match[2].trim();
            if (value[0] === "*") {
                value = value.slice(1,value.length).trim();
            }
            if (obj.immunizations) {
                obj.immunizations[obj.immunizations.length-1][key] = value;
            } else {
                obj[key] = value;
            }
            return obj;
        },
        raw: [],
        found: false,
        processed: {}
    }],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_immunizations',
    pattern: /^-+ *SELF REPORTED IMMUNIZATIONS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_labs',
    pattern: /^-+ *VA LABORATORY RESULTS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_pathology',
    pattern: /^-+ *VA PATHOLOGY REPORTS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_labs',
    pattern: /^-+ *SELF REPORTED LABS AND TESTS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_vitals',
    pattern: /^-+ *VA VITALS AND READINGS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_vitals',
    pattern: /^-+ *SELF REPORTED VITALS AND READINGS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_radiology',
    pattern: /^-+ *VA RADIOLOGY REPORTS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'va_ekg',
    pattern: /^-+ *VA ELECTROCARDIOGRAM (EKG) REPORTS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_family',
    pattern: /^-+ *SELF REPORTED FAMILY HEALTH HISTORY *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_military',
    pattern: /^-+ *SELF REPORTED MILITARY HEALTH HISTORY *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_activity',
    pattern: /^-+ *SELF REPORTED ACTIVITY JOURNAL *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_food',
    pattern: /^-+ *SELF REPORTED FOOD JOURNAL *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'dod_service',
    pattern: /^-+ *DoD Military Service Information *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_current_goals',
    pattern: /^-+ *SELF REPORTED MY GOALS: CURRENT GOALS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}, {
    name: 'self_completed_goals',
    pattern: /^-+ *SELF REPORTED MY GOALS: COMPLETED GOALS *-+$/,
    multiple: false,
    model: [],
    process: function (processed, match) {
        return {
            match: match
        };
    },
    raw: [],
    processed: {}
}];
