'use strict';

var Transform = require("stream").Transform;
var util = require("util");
var split = require('split');
var _ = require("underscore");

/** "Constants" */
var serial = 0;
var META_HEADER = serial++;
var META_BODY = serial++;
var SECTION_HEADER = serial++;
var SECTION_BODY = serial++;
var REQUEST_SUMMARY = serial++;
var ACCOUNT_SUMMARY = serial++;
var SELF_DEMOGRAPHICS = serial++;
var VA_DEMOGRAPHICS = serial++;
var SELF_PROVIDERS = serial++;
var SELF_FACILITIES = serial++;
var SELF_INSURANCE = serial++;
var VA_WELLNESS_REMINDERS = serial++;
var VA_APPOINTMENTS = serial++;
var VA_ALLERGIES = serial++;
var SELF_ALLERGIES = serial++;
var VA_MEDICATION_HISTORY = serial++;
var SELF_MEDICATIONS = serial++;
var VA_PROBLEM_LIST = serial++;
var VA_ADMISSIONS_AND_DISCHARGES = serial++;
var VA_NOTES = serial++;
var SELF_MEDICAL_EVENTS = serial++;
var VA_IMMUNIZATIONS = serial++;
var SELF_IMMUNIZATIONS = serial++;
var VA_LABORATORY_RESULTS = serial++;
var VA_PATHOLOGY_REPORTS = serial++;
var SELF_LABS_AND_TESTS = serial++;
var VA_VITALS_AND_READINGS = serial++;
var SELF_VITALS_AND_READINGS = serial++;
var VA_RADIOLOGY_REPORTS = serial++;
var VA_EKG_REPORTS = serial++;
var SELF_FAMILY_HISTORY = serial++;
var SELF_MILITARY_HISTORY = serial++;
var SELF_ACTIVITY_JOURNAL = serial++;
var SELF_FOOD_JOURNAL = serial++;
var DOD_MILITARY_SERVICE_INFO = serial++;
var SELF_CURRENT_GOALS = serial++;
var SELF_COMPLETED_GOALS = serial++;
var activeSection = '';
var sectionObject = {};

//Massage each section trying to restore a broken structure if any
function hook(cps, section) {
    /*
     var i, len;
     if (section["section header"] === "empty") {
     if (section["data"]) {
     // Guess it's a claim
     len = section["data"].length;
     for (i = 0; i < len; i++) {
     if (section["data"][i]["claim number"]) {
     section["section header"] = "claim summary";
     if (!section["claim number"]) {
     section["claim number"] = section["data"][i]["claim number"];
     }
     break;
     }
     }
     }
     }
     if (section["section header"] === "claim" || section["section header"] === "claim summary") {
     if (!section["claim number"]) {
     if (section["data"]) {

     len = section["data"].length;
     for (i = 0; i < len; i++) {
     if (section["data"][i]["claim number"]) {
     section["claim number"] = section["data"][i]["claim number"];
     break;
     }
     }

     }
     }
     }
     */
}

function CmsParserStream() {
    Transform.call(this, {
        "objectMode": true
    }); // invoke Transform's constructor, expected result is object
    this.rows = [];
    this.stack = [];
    this.stateStack = [META_HEADER];
    this.rowCount = 1;
    this.emptyRows = 0;
    this.error = null;
    this.serial = 1;
    this.postProcessSectionHook = hook;
}

util.inherits(CmsParserStream, Transform); // inherit Transform

/*
 Array matchers contains arrays of objects in a format
 {
 pattern: <regexp>,
 proc: functon( cps, match)
 }
 patern used for matching input string
 proc is a function which will be called in match detected
 Array matchers indexed by state - NONE, SECTION_START, etc...
 */
var matchers = []; // Filled a way below the current line

/**
 * @Function _transform
 * Define standart Transform Stream's function _transform
 * @param (String) line - input line
 * @param (String) encoding - encoding (not used now)
 * @param cb - callback to notify that we are done with a row
 */
CmsParserStream.prototype._transform = function (line, encoding, cb) {

    if (line) {
        line = line.trim();
    }

    //Ignore the rest of input in case of error
    if (!this.error) {
        //Don't propagate empty rows, just count
        if ('' === line) {
            ++this.emptyRows;

        } else {
            //console.log(line);
            var match;
            //Get the state from the top of the stack
            var m = matchers[_.last(this.stateStack)];
            var i;
            var len = m.length;
            //Iterate over possible matches and execute proc if found
            for (i = 0; i < len; i++) {
                var matcher = m[i];
                match = matcher.pattern.exec(line);
                if (match) {
                    matcher.proc(this, match);
                    //console.log(activeSection + '- '+line);
                    if (activeSection !== '') {
                        if (sectionObject[activeSection]) {
                            sectionObject[activeSection].push(line);
                        } else {
                            sectionObject[activeSection] = []; //set up the list but skip the first line since it's the header
                        }
                    }
                    break;
                }
            }
            if (!match) { // Found something strange, can't digest
                this.error = {
                    error: 'parser error',
                    rowNum: this.rowCount,
                    row: line,
                    partialResult: this.stack[0],
                    stateStack: this.stateStack
                };
            }
            this.emptyRows = 0;
        }
        ++this.rowCount;
    }
    cb();
};

/**
 * @Function _flush
 * Define standart Transform Stream's function _flush
 * Normally in should push parsed result (or error) to a pipe
 * @param cb - callback to notify that we are done
 */
CmsParserStream.prototype._flush = function (cb) {
    if (this.error) {
        this.push(this.error);
    } else {
        console.log(JSON.stringify(sectionObject['account_summary'],null,4));
        processSectionObject();
        this.push(this.stack[0]); // EOF, push result to output
    }
    cb(); // Notify done
};

/**
 * @Function push2top
 * Utility function to support parsing
 * @param (String) name - name of property to be attached to an object on top of stack and moved to top of stack
 * @param (Integer) newState - put a new state on a top of state stack
 * @param (Object) extend - optional value(s) for object to be attached
 */
CmsParserStream.prototype.push2top = function (name, newState, extend) {
    var top = _.last(this.stack);
    //var meta;
    var meta = {};
    /*
     if (Array.isArray(top)) {
     meta = (extend) ? _.extend({}, extend) : {};
     top.push(meta);
     } else {
     meta = top[name] = (extend) ? _.extend({}, extend) : {};
     }
     */
    //meta = top[name] = (extend) ? _.extend({}, extend) : {};
    this.stack.push(meta);
    this.stateStack.push(newState);
};

/**
 * @Function move2state
 * Utility function to support parsing
 * @param (Integer) newState - value on top of state stack will be replaced to it
 */
CmsParserStream.prototype.move2state = function (newState) {
    this.stateStack.pop();
    this.stateStack.push(newState);
};

//TODO : remove
function streamToIntObj(istream, done, error) {
    var ps = new CmsParserStream();
    istream/*.pipe(split())*/.pipe(ps).on('finish', function () {
        done(ps.rows);
    }).on('error', function (e) {
        if (error) {
            error(e);
        }
    });
}

var commonPatterns = [
    /^(?:Source: *)(.*)$/
];

function processCommon(line, cb) {
    for (var i = 0; i < commonPatterns.length; i++) {
        var regex = commonPatterns[i];
        var match;
        match = regex.exec(line);
        if (match) {
            console.log("Source: "+match[1]);
            cb(match);
            break;
        }
    }
    cb();
}

function processSectionObject() {
    for (var i = 0; i < Object.keys(sectionObject).length; i++) {
        if (Object.keys(sectionObject)[i] !== '') {
            for (var j = 0; j < sectionObject[Object.keys(sectionObject)[i]].length; j++) {
                var line = sectionObject[Object.keys(sectionObject)[i]][j];
                processCommon(line,function(match){
                    switch(Object.keys(sectionObject)[i]) {
                        case 'request_summary':
                            break;
                        case 'account_summary':
                            break;
                        case 'self_demographics':
                            break;
                        case 'va_demographics':
                            break;
                        case 'self_providers':
                            break;
                        case 'self_facilities':
                            break;
                        case 'self_insurance':
                            break;
                        case 'va_reminders':
                            break;
                        case 'va_appointments':
                            break;
                        case 'va_allergies':
                            break;
                        case 'self_allergies':
                            break;
                        case 'va_medications':
                            break;
                        case 'self_medications':
                            break;
                        case 'va_problems':
                            break;
                        case 'va_admission_discharge':
                            break;
                        case 'va_notes':
                            break;
                        case 'self_events':
                            break;
                        case 'va_immunizations':
                            break;
                        case 'self_immunizations':
                            break;
                        case 'va_labs':
                            break;
                        case 'va_pathology':
                            break;
                        case 'self_labs':
                            break;
                        case 'va_vitals':
                            break;
                        case 'self_vitals':
                            break;
                        case 'va_radiology':
                            break;
                        case 'va_ekg':
                            break;
                        case 'self_family':
                            break;
                        case 'self_military':
                            break;
                        case 'self_activity':
                            break;
                        case 'self_food':
                            break;
                        case 'dod_service':
                            break;
                        case 'self_current_goals':
                            break;
                        case 'self_completed_goals':
                            break;
                        //default:
                    }
                });
            }
        }
    }
}

/* Parse logic */
function sectionBody(cps, match, dataFieldName, body, bodyArray) {
    var top = _.last(cps.stack);

    if (cps.emptyRows >= 2) {
        if (cps.stateStack[cps.stateStack.length - 1] === (body || SECTION_BODY)) {
            var empty = {};
            if (cps.stateStack[cps.stateStack.length - 2] === (bodyArray)) {
                cps.stack.pop();
                cps.stateStack.pop();
                top = cps.stack[cps.stack.length - 1];

                top.push(empty);
                cps.stack.push(empty);
                cps.stateStack.push((body || SECTION_BODY));

            } else {
                var tmp = [empty];
                top[(dataFieldName || "data")] = tmp;
                cps.stack.push(tmp);
                cps.stateStack.push((bodyArray));
                cps.stack.push(empty);
                cps.stateStack.push((body || SECTION_BODY));
            }
            top = empty;
        }
        cps.serial = 1;
    }

    var field = match[1].toLowerCase();
    var orig = field;
    if (top.hasOwnProperty(orig) || (cps.serial !== 1)) {
        field = orig + ' ' + (cps.serial);
        while (top.hasOwnProperty(field)) {
            field = orig + ' ' + (++cps.serial);
        }
    }
    top[field] = match[2];

}

matchers[META_HEADER] = [{
    pattern: /^-+ *MY HEALTHEVET PERSONAL INFORMATION REPORT *-+$/,
    proc: function (cps, match) {
        // Meta. Shift state
        cps.stack.push([]); // initialize with empty object
        cps.move2state(META_BODY);

    }
}];

matchers[META_BODY] = [{
    name: 'confidential',
    pattern: /^\*+CONFIDENTIAL\*+$/,
    proc: function (cps, match) {
    }
}, {
    name: 'bbversion',
    pattern: /(?:\(v)(.*)(?:\))/,
    proc: function (cps, match) {
        var top = _.last(cps.stack);
        top["type"] = "va-ascii";
        top["version"] = match[1];
    }
}, {
    name: 'requestdate',
    pattern: /^(\d{1,2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept?|Oct|Nov|Dec) \d{1,4}\ @ \d{4})$/,
    proc: function (cps, match) {
        var top = _.last(cps.stack);
        top["timestamp"] = match[1];
    }
}, {
    name: 'namedob',
    pattern: /^(?:Name: )(.*)(?:Date of Birth: )(.*)$/,
    proc: function (cps, match) {
        var top = _.last(cps.stack);
        top["name"] = match[1].trim();
        top["dateofbirth"] = match[2];

        cps.stack.pop();
        cps.stateStack.pop();
        cps.move2state(SECTION_HEADER); // Section started immediately
    }
}, {
    pattern: /^.+/,
    proc: function (cps, match) {
        //ignore non-matches
    }
}];

matchers[SECTION_HEADER] = [{
    name: 'requestsummary',
    pattern: /^-+ *DOWNLOAD REQUEST SUMMARY *-+$/,
    proc: function (cps, match) {
        //activeSection = 'request_summary';
        activeSection = '';
    }
}, {
    name: 'accountsummary',
    pattern: /^-+ *MY HEALTHEVET ACCOUNT SUMMARY *-+$/,
    proc: function (cps, match) {
        activeSection = 'account_summary';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    name: 'self-demo',
    pattern: /^-+ *SELF REPORTED DEMOGRAPHICS *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_demographics';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    name: 'va-demo',
    pattern: /^-+ *VA DEMOGRAPHICS *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_demographics';
        // Meta. Shift state
        /*
        cps.push2top("meta", META_HEADER, {
            "section header": "meta"
        });
        */
    }
}, {
    pattern: /^-+ *SELF REPORTED HEALTH CARE PROVIDERS *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_providers';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED TREATMENT FACILITIES *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_facilities';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED HEALTH INSURANCE *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_insurance';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *VA WELLNESS REMINDERS *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_reminders';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *VA APPOINTMENTS *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_appointments';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *VA ALLERGIES *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_allergies';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED ALLERGIES *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_allergies';
        // Meta. Shift state
        /*
        cps.push2top("meta", META_HEADER, {
            "section header": "meta"
        });
        */
    }
}, {
    pattern: /^-+ *VA MEDICATION HISTORY *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_medications';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED MEDICATIONS AND SUPPLEMENTS *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_medications';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *VA PROBLEM LIST *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_problems';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *VA ADMISSIONS AND DISCHARGES *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_admission_discharge';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *VA NOTES *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_notes';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED MEDICAL EVENTS *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_events';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *VA IMMUNIZATIONS *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_immunizations';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED IMMUNIZATIONS *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_immunizations';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *VA LABORATORY RESULTS *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_labs';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *VA PATHOLOGY REPORTS *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_pathology';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED LABS AND TESTS *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_labs';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *VA VITALS AND READINGS *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_vitals';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED VITALS AND READINGS *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_vitals';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *VA RADIOLOGY REPORTS *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_radiology';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *VA ELECTROCARDIOGRAM (EKG) REPORTS *-+$/,
    proc: function (cps, match) {
        activeSection = 'va_ekg';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED FAMILY HEALTH HISTORY *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_family';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED MILITARY HEALTH HISTORY *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_military';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED ACTIVITY JOURNAL *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_activity';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED FOOD JOURNAL *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_food';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *DoD Military Service Information *-+$/,
    proc: function (cps, match) {
        activeSection = 'dod_service';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED MY GOALS: CURRENT GOALS *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_current_goals';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *SELF REPORTED MY GOALS: COMPLETED GOALS *-+$/,
    proc: function (cps, match) {
        activeSection = 'self_completed_goals';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^-+ *END OF MY HEALTHEVET PERSONAL INFORMATION REPORT *-+$/,
    proc: function (cps, match) {
        activeSection = '';
        // Meta. Shift state
        /*
         cps.push2top("meta", META_HEADER, {
         "section header": "meta"
         });
         */
    }
}, {
    pattern: /^.+/,
    proc: function (cps, match) {
        //since we're in SECTION START this should skip anything until the next section?
    }
}
    /*
     pattern: /^Claim Summary$/,
     proc: function (cps, match) {
     cps.push2top(match[0].toLowerCase(), SECTION_HEADER, {
     "section header": match[0].toLowerCase()
     });
     }
     }, {
     pattern: /^Claim Lines for Claim Number:\s*(.*)$/,
     proc: function (cps, match) {
     cps.push2top("claim number " + match[1], SECTION_HEADER, {
     "section header": "claim",
     "claim number": match[1]
     });
     }
     }, {
     pattern: /^([^-]+)$/,
     proc: function (cps, match) {
     cps.push2top(match[1].toLowerCase(), SECTION_HEADER, {
     "section header": match[1].toLowerCase()
     });
     }
     }, {
     pattern: /^(-+)$/,
     proc: function (cps, match) {
     cps.push2top("empty", SECTION_HEADER, {
     "section header": "empty"
     });
     cps.move2state(SECTION_BODY);
     }
     }
     */
];

/*
matchers[SECTION_HEADER] = [{
    pattern: /^-+$/,
    proc: function (cps, match) {
        if (cps.emptyRows === 3) {
            cps.move2state(SECTION_HEADER); // Strange case, reset to header
        } else {
            cps.move2state(SECTION_BODY);
        }
        cps.serial = 1; // Drop serial
    }
}];
*/

matchers[SECTION_BODY] = [{
    pattern: /^([^:]+):\s*(.*)$/,
    proc: sectionBody
}, {
    pattern: /^-+$/,
    proc: function (cps, match) {
        /*
        var section = cps.stack.pop();
        cps.stateStack.pop();

        if (_.last(cps.stateStack) === SECTION_BODY_ARRAY) {
            cps.stack.pop();
            cps.stateStack.pop();

            section = cps.stack.pop();
            cps.stateStack.pop();
        }
        */
        cps.move2state(SECTION_HEADER);
/*
        if (cps.postProcessSectionHook) {
            cps.postProcessSectionHook(cps, section);
        }
        */
    }
}];

module.exports.streamToIntObj = streamToIntObj;
module.exports.CmsFile2Object = CmsParserStream;
