var _ = require('lodash');

module.exports = {
    patient: {
        "resourceType": "Patient",
        "proc": function (processed, va) {
            var outObj = processed;

            _.set(outObj, 'patient.birthDate', _.get(va, 'self_demographics.date_of_birth', ''));
            var address = {
                "use": "home",
                "line": [],
                "city": _.get(va, "self_demographics.mailing_or_destination_city",""),
                "state": _.get(va, "self_demographics.mailing_or_destination_state",""),
                "zip": _.get(va, "self_demographics.mailing_or_destination_zip/postal_code","")
            };
            if (_.has(va, "self_demographics.mailing_or_destination_address")) {
                address.line.push(_.get(va, "self_demographics.mailing_or_destination_address",""));
            }
            if (_.has(va, "self_demographics.mailing_or_destination_address2")) {
                address.line.push(_.get(va, "self_demographics.mailing_or_destination_address2",""));
            }
            outObj.patient.address.push(address);
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
        "contact": [{
            "relationship": [],
            "name": {
                "family": [],
                "_family": [],
                "given": []
            },
            "telecom": []
        }],
        "managingOrganization": {
            "reference": ""
        },
        "active": true
    }
};
/*
 module.exports = [{
 path: 'header.bbversion',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'header.requestdate',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'header.requestname',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'header.requestdob',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'request_summary.systemrequestdate',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'request_summary.filename',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'request_summary.daterange',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'request_summary.datatypes[0]',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(va, oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 if (newObj.patient) {
 //already contained a patient section
 } else {
 newObj.patient = {
 "resourceType": "Patient"
 };
 }
 }
 return newObj;
 }
 }, {
 /*
 path: 'self_demographics.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.first_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.middle_initial',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.last_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.suffix',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.alias',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.relationship_to_va',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.gender',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.bloodtype',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.organdonor',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.date_of_birth',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.marital_status',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.current_occupation',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.mailing_or_destination_address',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.mailing_or_destination_address2',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.mailing_or_destination_city',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.mailing_or_destination_state',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.mailing_or_destination_country',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.mailing_or_destination_province',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.mailing_or_destination_zip/postal_code',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.home_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.work_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.pager_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.cell_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.fax_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.email_address',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.preferred_method_of_contact',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].contact_first_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].contact_last_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].relationship',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].home_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].work_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].work_phone_ext',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].cell_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].address_line_1',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].address_line_2',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].city',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].state',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].country',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].province',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].zip/post_code',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_demographics.emergencycontacts[0].email_address',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 */ /*
 path: 'va_demographics.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.last_updated',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.sorted_by',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].va_treating_facility',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].first_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].middle_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].last_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].religion',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].ethnicity',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].date_of_birth',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].place_of_birth',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].age',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].gender',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].marital_status',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].permanentaddress.street_address',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].permanentaddress.street_address_2',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].permanentaddress.work_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].permanentaddress.city',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].permanentaddress.state',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].permanentaddress.zip_code',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].permanentaddress.county',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].permanentaddress.country',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].permanentaddress.home_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].permanentaddress.cell_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].permanentaddress.email_address',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].eligibility.primary_eligibility_code',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].eligibility.service_connected_percentage',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].employment.employment_status',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].employment.employer_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].activeinsurance.insurance_company',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].activeinsurance.effective_date',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].activeinsurance.expiration_date',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].activeinsurance.group_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].activeinsurance.group_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].activeinsurance.subscriber_id',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].activeinsurance.subscriber_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].activeinsurance.subscriber_relationship',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].primarynextofkin.name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].primarynextofkin.street_address',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].primarynextofkin.city',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].primarynextofkin.state',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].primarynextofkin.zip_code',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].primarynextofkin.home_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].primarynextofkin.work_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].emergencycontact.name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].emergencycontact.street_address',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].emergencycontact.city',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].emergencycontact.state',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].emergencycontact.zip_code',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].emergencycontact.home_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].emergencycontact.work_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].vaguardian.name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].vaguardian.street_address',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].vaguardian.city',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].vaguardian.state',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].vaguardian.zip_code',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].vaguardian.home_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].vaguardian.work_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].civilguardian.name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].civilguardian.street_address',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].civilguardian.city',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].civilguardian.state',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].civilguardian.zip_code',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].civilguardian.home_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_demographics.facilities[0].civilguardian.work_phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_appointments.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_appointments.last_updated',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_appointments.sort_by',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_appointments.pastappointments[0].date/time',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_appointments.pastappointments[0].location',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_appointments.pastappointments[0].status',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_appointments.pastappointments[0].clinic',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_appointments.pastappointments[0].phone_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_allergies.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_allergies.last_updated',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_allergies.allergies[0].allergy_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_allergies.allergies[0].location',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_allergies.allergies[0].date_entered',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_allergies.allergies[0].reaction',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_allergies.allergies[0].allergy_type',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_allergies.allergies[0].va_drug_class',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_allergies.allergies[0].observed/historical',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_allergies.allergies[0].comments[0]',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_allergies.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_allergies.allergies[0].allergy_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_allergies.allergies[0].date',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_allergies.allergies[0].severity',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_allergies.allergies[0].diagnosed',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_allergies.allergies[0].reaction',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_allergies.allergies[0].comments[0]',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.last_updated',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.sorted_by',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.medications[0].medication_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.medications[0].instructions[0]',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.medications[0].status',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.medications[0].refills_remaining',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.medications[0].last_filled_on',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.medications[0].initially_ordered_on',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.medications[0].quantity',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.medications[0].days_supply',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.medications[0].pharmacy',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_medications.medications[0].prescription_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.medications[0].medication_category',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.medications[0].drug_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.medications[0].prescription_number',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.medications[0].strength',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.medications[0].dose',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.medications[0].frequency',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.medications[0].start_date',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.medications[0].stop_date',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.medications[0].pharmacy_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.medications[0].pharmacy_phone',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.medications[0].reason_for_taking',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_medications.medications[0].comments',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_problems.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_problems.last_updated',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_problems.sorted_by',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_problems.problems[0].problem',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_problems.problems[0].date/time_entered',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_problems.problems[0].location',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_problems.problems[0].status',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_problems.problems[0].provider',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_problems.problems[0].comments[0]',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_admission_discharge.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_admission_discharge.last_updated',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_admission_discharge.sorted_by',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_admission_discharge.admindischarge[0].admission_date',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_admission_discharge.admindischarge[0].location',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_admission_discharge.admindischarge[0].admitting_physician',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_admission_discharge.admindischarge[0].discharge_date',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_admission_discharge.admindischarge[0].discharge_physician',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_admission_discharge.admindischarge[0].summary[0]',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_notes.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_notes.last_updated',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_notes.sorted_by',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_notes.newnote',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_notes.notes[0].date_time',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_notes.notes[0].note_title',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_notes.notes[0].location',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_notes.notes[0].signed_by',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_notes.notes[0].co-signed_by',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_notes.notes[0].date/time_signed',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_notes.notes[0].raw_note[0]',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_immunizations.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_immunizations.last_updated',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_immunizations.sorted_by',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_immunizations.summary[0].immunization',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_immunizations.summary[0].date',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_immunizations.immunizations[0].immunization_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_immunizations.immunizations[0].date_received:',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_immunizations.immunizations[0].location',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_immunizations.immunizations[0].reaction',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_immunizations.immunizations[0].comments',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_immunizations.immunizations[0].reaction_key',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_immunizations.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_immunizations.lastkey',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_immunizations.immunizations[0].immunization_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_immunizations.immunizations[0].other',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_immunizations.immunizations[0].method',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_immunizations.immunizations[0].date_received',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_immunizations.immunizations[0].reactions',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_immunizations.immunizations[0].comments',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.newtest',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.newlab',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.lastkey',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.last_updated',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.sorted_by',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.labs[0].lab_test',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.labs[0].lab_type',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.labs[0].ordering_provider',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.labs[0].ordering_location',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.labs[0].specimen',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.labs[0].date/time_collected',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.labs[0].collected_location',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.labs[0].tests[0]',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.labs[0].raw_lab[0]',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.labs[0].collection_sample',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.labs[0].performing_location',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_labs.labs[0].date/time_completed',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_labs.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_labs.tests[0].test_name',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_labs.tests[0].date',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_labs.tests[0].location_performed',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_labs.tests[0].provider',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_labs.tests[0].results[0]',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_labs.tests[0].comments',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_vitals.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_vitals.last_updated',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_vitals.summary[0].vital_sign',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_vitals.summary[0].reading',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_vitals.summary[0].date',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_vitals.sorted_by',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_vitals.vitals[0].vital_sign',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_vitals.vitals[0].measurement',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_vitals.vitals[0].comments',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_vitals.vitals[0].location',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'va_vitals.vitals[0].date/time_collected',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.source',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].measurement_type',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].date',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].time',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].systolic',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].diastolic',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].comments[0]',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].heart_rate',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].body_weight',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].measure',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].body_temperature',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].method',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].pain_level',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].blood_sugar_count',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].inr_value',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].target_range',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].location',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }, {
 path: 'self_vitals.vitals[0].provider',
 sourceIsArray: false,
 targetpath: null,
 targetIsArray: false,
 process: function(oldObj) {
 var newObj = {};
 if (oldObj) {
 newObj = oldObj;
 }
 return newObj;
 }
 }];
 */