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
 processed: {}
 }
 */

module.exports = [
    {
        name: 'header',
        pattern: /^-+ *MY HEALTHEVET PERSONAL INFORMATION REPORT *-+$/,
        multiple: false,
        model: [{
            name: 'bbversion',
            pattern: /(?:\(v)(.*)(?:\))/,
            multiple: false,
            model: [],
            process: function (processed, match) {
                return {match: match};
            },
            raw: [],
            processed: {}
        }, {
            name: 'requestdate',
            pattern: /^(\d{1,2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept?|Oct|Nov|Dec) \d{1,4}\ @ \d{4})$/,
            multiple: false,
            model: [],
            process: function (processed, match) {
                return {requestdate: match[1]};
            },
            raw: [],
            processed: {}
        }, {
            name: 'requestname',
            pattern: /^(?:Name: )(.*)(?:Date of Birth:)(.*)$/,
            multiple: false,
            model: [],
            process: function (processed, match) {
                return {requestname: match[1], requestdob: match[2]};
            },
            raw: [],
            processed: {}
        }],
        raw: [],
        processed: {}
    },
    {
        name: 'request_summary',
        pattern: /^-+ *DOWNLOAD REQUEST SUMMARY *-+$/,
        multiple: false,
        model: [{
            name: 'systemrequestdate',
            pattern: /^(?:System Request Date\/Time: *)(.*)$/,
            multiple: false,
            model: [],
            process: function (processed, match) {
                return {systemrequestdate: match[1]};
            },
            raw: [],
            processed: {}
        },{
            name: 'filename',
            pattern: /^(?:File Name: *)(.*)$/,
            multiple: false,
            model: [],
            process: function (processed, match) {
                console.log(match[1]);
                return {filename: match[1]};
            },
            raw: [],
            processed: {}
        },{
            name: 'daterange',
            pattern: /^(?:Date Range Selected: *)(.*)$/,
            multiple: false,
            model: [],
            process: function (processed, match) {
                console.log(match[1]);
                return {daterange: match[1]};
            },
            raw: [],
            processed: {}
        },{
            name: 'datatypes',
            pattern: /^(Data Types Selected:*)$/,
            multiple: false,
            model: [{
                name: 'datatypesobject',
                pattern: /^(.*)$/,
                multiple: false,
                model: [],
                process: function (processed, match) {
                    if (processed.datatypes) {
                        processed.datatypes.push(match[1]);
                    } else {
                        processed.datatypes = [match[1]];
                    }
                    return {datatypes: processed.datatypes};
                },
                raw: [],
                processed: {}
            }],
            process: function (processed, match) {
                console.log("here");
                return {datatypes: []};
            },
            raw: [],
            processed: {}
        }],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'account_summary',
        pattern: /^-+ *MY HEALTHEVET ACCOUNT SUMMARY *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_demographics',
        pattern: /^-+ *SELF REPORTED DEMOGRAPHICS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_demographics',
        pattern: /^-+ *VA DEMOGRAPHICS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_providers',
        pattern: /^-+ *SELF REPORTED HEALTH CARE PROVIDERS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_facilities',
        pattern: /^-+ *SELF REPORTED TREATMENT FACILITIES *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_insurance',
        pattern: /^-+ *SELF REPORTED HEALTH INSURANCE *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_reminders',
        pattern: /^-+ *VA WELLNESS REMINDERS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_appointments',
        pattern: /^-+ *VA APPOINTMENTS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_allergies',
        pattern: /^-+ *VA ALLERGIES *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_allergies',
        pattern: /^-+ *SELF REPORTED ALLERGIES *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_medications',
        pattern: /^-+ *VA MEDICATION HISTORY *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_medications',
        pattern: /^-+ *SELF REPORTED MEDICATIONS AND SUPPLEMENTS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_problems',
        pattern: /^-+ *VA PROBLEM LIST *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_admission_discharge',
        pattern: /^-+ *VA ADMISSIONS AND DISCHARGES *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_notes',
        pattern: /^-+ *VA NOTES *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_events',
        pattern: /^-+ *SELF REPORTED MEDICAL EVENTS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_immunizations',
        pattern: /^-+ *VA IMMUNIZATIONS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_immunizations',
        pattern: /^-+ *SELF REPORTED IMMUNIZATIONS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_labs',
        pattern: /^-+ *VA LABORATORY RESULTS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_pathology',
        pattern: /^-+ *VA PATHOLOGY REPORTS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_labs',
        pattern: /^-+ *SELF REPORTED LABS AND TESTS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_vitals',
        pattern: /^-+ *VA VITALS AND READINGS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_vitals',
        pattern: /^-+ *SELF REPORTED VITALS AND READINGS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_radiology',
        pattern: /^-+ *VA RADIOLOGY REPORTS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'va_ekg',
        pattern: /^-+ *VA ELECTROCARDIOGRAM (EKG) REPORTS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_family',
        pattern: /^-+ *SELF REPORTED FAMILY HEALTH HISTORY *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_military',
        pattern: /^-+ *SELF REPORTED MILITARY HEALTH HISTORY *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_activity',
        pattern: /^-+ *SELF REPORTED ACTIVITY JOURNAL *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_food',
        pattern: /^-+ *SELF REPORTED FOOD JOURNAL *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'dod_service',
        pattern: /^-+ *DoD Military Service Information *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_current_goals',
        pattern: /^-+ *SELF REPORTED MY GOALS: CURRENT GOALS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    },
    {
        name: 'self_completed_goals',
        pattern: /^-+ *SELF REPORTED MY GOALS: COMPLETED GOALS *-+$/,
        multiple: false,
        model: [],
        process: function (processed, match) {
            return {match: match};
        },
        raw: [],
        processed: {}
    }
];