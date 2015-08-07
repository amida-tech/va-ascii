Below is sample output... will update this with each commit:

```
[{
    "name": "header",
    "pattern": {},
    "multiple": false,
    "model": [{
        "name": "bbversion",
        "pattern": {},
        "multiple": false,
        "model": [],
        "raw": ["Produced by the VA Blue Button (v12.10)"],
        "found": true,
        "processed": {}
    }, {
        "name": "requestdate",
        "pattern": {},
        "multiple": false,
        "model": [],
        "raw": ["05 Nov 2014 @ 0827"],
        "processed": {},
        "found": true
    }, {
        "name": "requestname",
        "pattern": {},
        "multiple": false,
        "model": [],
        "raw": ["Name: MHVTESTVETERAN, ONE A         Date of Birth: 01 Mar 1948"],
        "processed": {},
        "found": true
    }],
    "raw": ["--------------- MY HEALTHEVET PERSONAL INFORMATION REPORT ---------------"],
    "processed": {
        "match": ["(v12.10)", "12.10"],
        "requestdate": "05 Nov 2014 @ 0827",
        "requestname": "MHVTESTVETERAN, ONE A         ",
        "requestdob": " 01 Mar 1948"
    },
    "found": true
}, {
    "name": "request_summary",
    "pattern": {},
    "multiple": false,
    "model": [{
        "name": "systemrequestdate",
        "pattern": {},
        "multiple": false,
        "model": [],
        "raw": ["System Request Date/Time:  05 Nov 2014 @ 0827"],
        "processed": {},
        "found": true
    }, {
        "name": "filename",
        "pattern": {},
        "multiple": false,
        "model": [],
        "raw": ["File Name:                 mhv_MHVTESTVETERAN_20141105_0827.txt"],
        "processed": {},
        "found": true
    }, {
        "name": "daterange",
        "pattern": {},
        "multiple": false,
        "model": [],
        "raw": ["Date Range Selected:       05 Nov 2009 to 05 Nov 2014"],
        "processed": {},
        "found": true
    }, {
        "name": "datatypes",
        "pattern": {},
        "multiple": false,
        "model": [{
            "name": "datatypesobject",
            "pattern": {},
            "multiple": true,
            "model": [],
            "raw": ["My HealtheVet Account Summary", "Self Reported Demographics", "VA Demographics", "Self Reported Health Care Providers", "Self Reported Treatment Facilities", "Self Reported Health Insurance", "VA Wellness Reminders", "VA Appointments (Future)", "VA Appointments (Limited to past 2 years)", "VA Allergies", "Self Reported Allergies", "VA Medication History", "Self Reported Medications and Supplements", "VA Problem List", "VA Admissions and Discharges", "VA Notes", "Self Reported Medical Events", "VA Immunizations", "Self Reported Immunizations", "VA Laboratory Results: Chemistry/Hematology/Microbiology", "VA Pathology Reports: Surgical Pathology/Cytology/Electron Microscopy", "Self Reported Labs and Tests", "VA Vitals and Readings", "Self Reported Vitals and Readings", "VA Radiology Reports", "VA Electrocardiogram (EKG) Reports", "Self Reported Family Health History", "Self Reported Military Health History", "Self Reported Activity Journal", "Self Reported Food Journal", "DoD Military Service Information", "Self Reported My Goals Current", "Self Reported My Goals Completed"],
            "processed": {},
            "found": true
        }],
        "raw": ["Data Types Selected:"],
        "processed": {
            "datatypes": ["My HealtheVet Account Summary", "Self Reported Demographics", "VA Demographics", "Self Reported Health Care Providers", "Self Reported Treatment Facilities", "Self Reported Health Insurance", "VA Wellness Reminders", "VA Appointments (Future)", "VA Appointments (Limited to past 2 years)", "VA Allergies", "Self Reported Allergies", "VA Medication History", "Self Reported Medications and Supplements", "VA Problem List", "VA Admissions and Discharges", "VA Notes", "Self Reported Medical Events", "VA Immunizations", "Self Reported Immunizations", "VA Laboratory Results: Chemistry/Hematology/Microbiology", "VA Pathology Reports: Surgical Pathology/Cytology/Electron Microscopy", "Self Reported Labs and Tests", "VA Vitals and Readings", "Self Reported Vitals and Readings", "VA Radiology Reports", "VA Electrocardiogram (EKG) Reports", "Self Reported Family Health History", "Self Reported Military Health History", "Self Reported Activity Journal", "Self Reported Food Journal", "DoD Military Service Information", "Self Reported My Goals Current", "Self Reported My Goals Completed"]
        },
        "found": true
    }],
    "raw": ["------------------------ DOWNLOAD REQUEST SUMMARY -----------------------"],
    "processed": {
        "systemrequestdate": "05 Nov 2014 @ 0827",
        "filename": "mhv_MHVTESTVETERAN_20141105_0827.txt",
        "daterange": "05 Nov 2009 to 05 Nov 2014",
        "datatypes": []
    },
    "found": true
}, {
    "name": "account_summary",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["--------------------- MY HEALTHEVET ACCOUNT SUMMARY ---------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_demographics",
    "pattern": {},
    "multiple": false,
    "model": [{
        "name": "genderdoborgan",
        "pattern": {},
        "multiple": false,
        "model": [],
        "raw": ["Gender:  Male        Blood Type:  AB+    Organ Donor: Yes"],
        "found": true,
        "processed": {}
    }, {
        "name": "emergencycontactsstart",
        "pattern": {},
        "multiple": false,
        "model": [],
        "raw": ["EMERGENCY CONTACTS"],
        "found": true,
        "processed": {}
    }, {
        "name": "generic",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Source:  Self-Entered", "First Name:          ONE", "Middle Initial:      A", "Last Name:           MHVTESTVETERAN", "Suffix:", "Alias:               MHVVET", "Relationship to VA:  Patient, Veteran", "Date of Birth:       01 Mar 1948", "Marital Status:      Married", "Current Occupation:  Truck Driver", "Mailing or Destination Address:          123 Anywhere Road", "Mailing or Destination Address2:         Apt. 123", "Mailing or Destination City:             Anywhere", "Mailing or Destination State:            DC", "Mailing or Destination Country:          United States", "Mailing or Destination Province:", "Mailing or Destination Zip/Postal Code:  00000", "Home Phone Number:  000-555-2123", "Work Phone Number:  000-555-4100", "Pager Number:       000-555-2020", "Cell Phone Number:  000-555-0303", "FAX Number:         000-555-4110", "Email Address:                mhvveteran@emailaddress.com", "Preferred Method of Contact:  Email", "Contact First Name:  Two", "Contact Last Name:   MHVVeteran", "Relationship:", "Home Phone Number:   000-555-2121", "Work Phone Number:   000-555-1000  Extension:", "Cell Phone Number:   000-555-1855", "Address Line 1:      123 Anywhere Road", "Address Line 2:      Apt 123", "City:                Anywhere", "State:               DC", "Country:             United States", "Province:", "Zip/Post Code:       00000", "Email Address:       mhvveterantwo@emailaddress.com", "Contact First Name:  Three", "Contact Last Name:   MHVVeteran", "Relationship:", "Home Phone Number:   000-555-2339", "Work Phone Number:   000-555-5000  Extension:", "Cell Phone Number:   000-555-1458", "Address Line 1:      123 Anwhere Road", "Address Line 2:      Apt 123", "City:                Anywhere", "State:               DC", "Country:             United States", "Province:", "Zip/Post Code:       00000", "Email Address:       mhvveteranthree@emailaddress.com"],
        "found": true,
        "processed": {}
    }],
    "raw": ["---------------------- SELF REPORTED DEMOGRAPHICS -----------------------"],
    "processed": {
        "source": "Self-Entered",
        "first_name": "ONE",
        "middle_initial": "A",
        "last_name": "MHVTESTVETERAN",
        "suffix": "",
        "alias": "MHVVET",
        "relationship_to_va": "Patient, Veteran",
        "gender": "Male",
        "bloodtype": "AB+",
        "organdonor": "Yes",
        "date_of_birth": "01 Mar 1948",
        "marital_status": "Married",
        "current_occupation": "Truck Driver",
        "mailing_or_destination_address": "123 Anywhere Road",
        "mailing_or_destination_address2": "Apt. 123",
        "mailing_or_destination_city": "Anywhere",
        "mailing_or_destination_state": "DC",
        "mailing_or_destination_country": "United States",
        "mailing_or_destination_province": "",
        "mailing_or_destination_zip/postal_code": "00000",
        "home_phone_number": "000-555-2123",
        "work_phone_number": "000-555-4100",
        "pager_number": "000-555-2020",
        "cell_phone_number": "000-555-0303",
        "fax_number": "000-555-4110",
        "email_address": "mhvveteran@emailaddress.com",
        "preferred_method_of_contact": "Email",
        "emergencycontacts": [{
            "contact_first_name": "Two",
            "contact_last_name": "MHVVeteran",
            "relationship": "",
            "home_phone_number": "000-555-2121",
            "work_phone_number:___000-555-1000__extension": "",
            "cell_phone_number": "000-555-1855",
            "address_line_1": "123 Anywhere Road",
            "address_line_2": "Apt 123",
            "city": "Anywhere",
            "state": "DC",
            "country": "United States",
            "province": "",
            "zip/post_code": "00000",
            "email_address": "mhvveterantwo@emailaddress.com"
        }, {
            "contact_first_name": "Three",
            "contact_last_name": "MHVVeteran",
            "relationship": "",
            "home_phone_number": "000-555-2339",
            "work_phone_number:___000-555-5000__extension": "",
            "cell_phone_number": "000-555-1458",
            "address_line_1": "123 Anwhere Road",
            "address_line_2": "Apt 123",
            "city": "Anywhere",
            "state": "DC",
            "country": "United States",
            "province": "",
            "zip/post_code": "00000",
            "email_address": "mhvveteranthree@emailaddress.com"
        }]
    },
    "found": true
}, {
    "name": "va_demographics",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["---------------------------- VA DEMOGRAPHICS ----------------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_providers",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["------------------ SELF REPORTED HEALTH CARE PROVIDERS ------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_facilities",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["------------------ SELF REPORTED TREATMENT FACILITIES--------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_insurance",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["------------------- SELF REPORTED HEALTH INSURANCE ----------------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_reminders",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["--------------------------- VA WELLNESS REMINDERS -----------------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_appointments",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["--------------------------- VA APPOINTMENTS -----------------------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_allergies",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["----------------------------- VA ALLERGIES ------------------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_allergies",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["-------------------------- SELF REPORTED ALLERGIES --------------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_medications",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["-------------------------- VA MEDICATION HISTORY ----------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_medications",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["----------------- SELF REPORTED MEDICATIONS AND SUPPLEMENTS -------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_problems",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["---------------------------- VA PROBLEM LIST ----------------------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_admission_discharge",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["--------------------- VA ADMISSIONS AND DISCHARGES ----------------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_notes",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["------------------------------- VA NOTES --------------------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_events",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["--------------------- SELF REPORTED MEDICAL EVENTS ----------------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_immunizations",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["----------------------------- VA IMMUNIZATIONS --------------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_immunizations",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["-------------------- SELF REPORTED IMMUNIZATIONS ------------------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_labs",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["------------------------- VA LABORATORY RESULTS -------------------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_pathology",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["------------------------- VA PATHOLOGY REPORTS --------------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_labs",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["-------------------- SELF REPORTED LABS AND TESTS -----------------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_vitals",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["------------------------ VA VITALS AND READINGS -------------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_vitals",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["-------------------- SELF REPORTED VITALS AND READINGS ------------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_radiology",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["-------------------------- VA RADIOLOGY REPORTS -------------------------"],
    "processed": {},
    "found": true
}, {
    "name": "va_ekg",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": [],
    "processed": {}
}, {
    "name": "self_family",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["------------------ SELF REPORTED FAMILY HEALTH HISTORY ------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_military",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["------------------ SELF REPORTED MILITARY HEALTH HISTORY ----------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_activity",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["-------------------- SELF REPORTED ACTIVITY JOURNAL ---------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_food",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["----------------------- SELF REPORTED FOOD JOURNAL ----------------------"],
    "processed": {},
    "found": true
}, {
    "name": "dod_service",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["-------------------- DoD Military Service Information -------------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_current_goals",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["-------------------- SELF REPORTED MY GOALS: CURRENT GOALS ---------------"],
    "processed": {},
    "found": true
}, {
    "name": "self_completed_goals",
    "pattern": {},
    "multiple": false,
    "model": [],
    "raw": ["---------------- SELF REPORTED MY GOALS: COMPLETED GOALS --------------"],
    "processed": {},
    "found": true
}]
```