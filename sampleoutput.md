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
        "bbversion": "12.10",
        "requestdate": "05 Nov 2014 @ 0827",
        "requestname": "MHVTESTVETERAN, ONE A",
        "requestdob": "01 Mar 1948"
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
        "name": "workphoneext",
        "pattern": {},
        "multiple": false,
        "model": [],
        "raw": ["Work Phone Number:   000-555-1000  Extension:"],
        "found": true,
        "processed": {}
    }, {
        "name": "generic",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Source:  Self-Entered", "First Name:          ONE", "Middle Initial:      A", "Last Name:           MHVTESTVETERAN", "Suffix:", "Alias:               MHVVET", "Relationship to VA:  Patient, Veteran", "Date of Birth:       01 Mar 1948", "Marital Status:      Married", "Current Occupation:  Truck Driver", "Mailing or Destination Address:          123 Anywhere Road", "Mailing or Destination Address2:         Apt. 123", "Mailing or Destination City:             Anywhere", "Mailing or Destination State:            DC", "Mailing or Destination Country:          United States", "Mailing or Destination Province:", "Mailing or Destination Zip/Postal Code:  00000", "Home Phone Number:  000-555-2123", "Work Phone Number:  000-555-4100", "Pager Number:       000-555-2020", "Cell Phone Number:  000-555-0303", "FAX Number:         000-555-4110", "Email Address:                mhvveteran@emailaddress.com", "Preferred Method of Contact:  Email", "Contact First Name:  Two", "Contact Last Name:   MHVVeteran", "Relationship:", "Home Phone Number:   000-555-2121", "Cell Phone Number:   000-555-1855", "Address Line 1:      123 Anywhere Road", "Address Line 2:      Apt 123", "City:                Anywhere", "State:               DC", "Country:             United States", "Province:", "Zip/Post Code:       00000", "Email Address:       mhvveterantwo@emailaddress.com", "Contact First Name:  Three", "Contact Last Name:   MHVVeteran", "Relationship:", "Home Phone Number:   000-555-2339", "Work Phone Number:   000-555-5000  Extension:", "Cell Phone Number:   000-555-1458", "Address Line 1:      123 Anwhere Road", "Address Line 2:      Apt 123", "City:                Anywhere", "State:               DC", "Country:             United States", "Province:", "Zip/Post Code:       00000", "Email Address:       mhvveteranthree@emailaddress.com"],
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
            "work_phone_number": "000-555-1000",
            "work_phone_ext": "",
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
    "model": [{
        "name": "facility",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["=========================================================================", "=========================================================================", "========================================================================="],
        "found": true,
        "processed": {}
    }, {
        "name": "permanentaddressstart",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["PERMANENT ADDRESS AND CONTACT INFORMATION", "PERMANENT ADDRESS AND CONTACT INFORMATION", "PERMANENT ADDRESS AND CONTACT INFORMATION"],
        "found": true,
        "processed": {}
    }, {
        "name": "eligibilitystart",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["ELIGIBILITY", "ELIGIBILITY", "ELIGIBILITY"],
        "found": true,
        "processed": {}
    }, {
        "name": "employmentstart",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["EMPLOYMENT", "EMPLOYMENT", "EMPLOYMENT"],
        "found": true,
        "processed": {}
    }, {
        "name": "activeinsurancestart",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["ACTIVE INSURANCE", "ACTIVE INSURANCE", "ACTIVE INSURANCE"],
        "found": true,
        "processed": {}
    }, {
        "name": "primarynextofkinstart",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["PRIMARY NEXT OF KIN", "PRIMARY NEXT OF KIN", "PRIMARY NEXT OF KIN"],
        "found": true,
        "processed": {}
    }, {
        "name": "emergencycontactstart",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["EMERGENCY CONTACT", "EMERGENCY CONTACT", "EMERGENCY CONTACT"],
        "found": true,
        "processed": {}
    }, {
        "name": "vaguardianstart",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["VA GUARDIAN", "VA GUARDIAN", "VA GUARDIAN"],
        "found": true,
        "processed": {}
    }, {
        "name": "civilguardianstart",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["CIVIL GUARDIAN", "CIVIL GUARDIAN", "CIVIL GUARDIAN"],
        "found": true,
        "processed": {}
    }, {
        "name": "generic",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Source:        VA", "Last Updated:  05 Nov 2014 @ 0813", "Sorted By:     VA Treating Facility", "VA Treating Facility: VA SOUTHERN OREGON REHABILITATION CENTER CLINICS", "First Name:          ONE", "Middle Name:         A", "Last Name:           MHVTESTVETERAN", "Religion:            --", "Ethnicity:           --", "Date of Birth:       01 Mar 1948", "Place of Birth:      WASHINGTON, DISTRICT OF COLUMBIA", "Age:                 66", "Gender:              Male", "Marital Status:      DIVORCED", "Street Address:     123 ANYWHERE RD", "Street Address 2:   APT 123", "Work Phone Number:  --", "City:               WASHINGTON", "State:              DISTRICT OF COLUMBIA", "Zip Code:           00000", "County:             001", "Country:            USA", "Home Phone Number:  --", "Work Phone Number:  --", "Cell Phone Number:  --", "Email Address:      MHVVETERAN@EMAILADDRESS.COM", "Primary Eligibility Code:      --", "Service Connected Percentage:  70", "Employment Status: NOT EMPLOYED", "Employer Name:     --", "Insurance Company:        --", "Effective Date:           --", "Expiration Date:          --", "Group Name:               --", "Group Number:             --", "Subscriber ID:            --", "Subscriber Name:          --", "Subscriber Relationship:  --", "Name:               MHVVETERAN, TWO", "Street Address:     123 Anywhere Road", "City:               ANYWHERE", "State:              DC", "Zip Code:           00000", "Home Phone Number:  000-444-1952", "Work Phone Number:  --", "Name:               MHVVETERAN, TWO", "Street Address:     123 Anywhere Road", "City:               ANYWHERE", "State:              DC", "Zip Code:           00000", "Home Phone Number:  000-444-1952", "Work Phone Number:  --", "Name:               --", "Street Address:     --", "City:               --", "State:              --", "Zip Code:           --", "Home Phone Number:  --", "Work Phone Number:  --", "Name:               --", "Street Address:     --", "City:               --", "State:              --", "Zip Code:           --", "Home Phone Number:  --", "Work Phone Number:  --", "VA Treating Facility: SPOKANE VAMC", "First Name:          ONE", "Middle Name:         A", "Last Name:           MHVTESTVETERAN", "Religion:            --", "Ethnicity:           --", "Date of Birth:       01 Mar 1948", "Place of Birth:      WASHINGTON, DISTRICT OF COLUMBIA", "Age:                 66", "Gender:              Male", "Marital Status:      DIVORCED", "Street Address:     123 ANYWHERE RD", "Street Address 2:   APT 123", "Work Phone Number:  --", "City:               WASHINGTON", "State:              DISTRICT OF COLUMBIA", "Zip Code:           00000", "County:             001", "Country:            USA", "Home Phone Number:  --", "Work Phone Number:  --", "Cell Phone Number:  --", "Email Address:      MHVVETERAN@EMAILADDRESS.COM", "Primary Eligibility Code:      --", "Service Connected Percentage:  70", "Employment Status: NOT EMPLOYED", "Employer Name:     --", "Insurance Company:        --", "Effective Date:           --", "Expiration Date:          --", "Group Name:               --", "Group Number:             --", "Subscriber ID:            --", "Subscriber Name:          --", "Subscriber Relationship:  --", "Name:               MHVVETERAN, TWO", "Street Address:     123 Anywhere Road", "City:               ANYWHERE", "State:              DC", "Zip Code:           00000", "Home Phone Number:  000-444-1952", "Work Phone Number:  --", "Name:               MHVVETERAN, TWO", "Street Address:     123 Anywhere Road", "City:               ANYWHERE", "State:              DC", "Zip Code:           00000", "Home Phone Number:  000-444-1952", "Work Phone Number:  --", "Name:               --", "Street Address:     --", "City:               --", "State:              --", "Zip Code:           --", "Home Phone Number:  --", "Work Phone Number:  --", "Name:               --", "Street Address:     --", "City:               --", "State:              --", "Zip Code:           --", "Home Phone Number:  --", "Work Phone Number:  --", "VA Treating Facility: PORTLAND, OREGON VA MEDICAL CENTER", "First Name:          ONE", "Middle Name:         A", "Last Name:           MHVTESTVETERAN", "Religion:            --", "Ethnicity:           --", "Date of Birth:       01 Mar 1948", "Place of Birth:      WASHINGTON, DISTRICT OF COLUMBIA", "Age:                 66", "Gender:              Male", "Marital Status:      DIVORCED", "Street Address:     123 ANYWHERE RD", "Street Address 2:   APT 123", "Work Phone Number:  --", "City:               WASHINGTON", "State:              DISTRICT OF COLUMBIA", "Zip Code:           00000", "County:             001", "Country:            USA", "Home Phone Number:  --", "Work Phone Number:  --", "Cell Phone Number:  --", "Email Address:      MHVVETERAN@EMAILADDRESS.COM", "Primary Eligibility Code:      --", "Service Connected Percentage:  0", "Employment Status: NOT EMPLOYED", "Employer Name:     --", "Insurance Company:        --", "Effective Date:           --", "Expiration Date:          --", "Group Name:               --", "Group Number:             --", "Subscriber ID:            --", "Subscriber Name:          --", "Subscriber Relationship:  --", "Name:               MHVVETERAN, TWO", "Street Address:     123 Anywhere Road", "City:               ANYWHERE", "State:              DC", "Zip Code:           00000", "Home Phone Number:  000-444-1952", "Work Phone Number:  --", "Name:               MHVVETERAN,TWO", "Street Address:     123 Anywhere Road", "City:               ANYWHERE", "State:              DC", "Zip Code:           00000", "Home Phone Number:  000-444-1952", "Work Phone Number:  --", "Name:               --", "Street Address:     --", "City:               --", "State:              --", "Zip Code:           --", "Home Phone Number:  --", "Work Phone Number:  --", "Name:               --", "Street Address:     --", "City:               --", "State:              --", "Zip Code:           --", "Home Phone Number:  --", "Work Phone Number:  --"],
        "found": true,
        "processed": {}
    }],
    "raw": ["---------------------------- VA DEMOGRAPHICS ----------------------------"],
    "processed": {
        "source": "VA",
        "last_updated": "05 Nov 2014 @ 0813",
        "sorted_by": "VA Treating Facility",
        "facilities": [{
            "va_treating_facility": "VA SOUTHERN OREGON REHABILITATION CENTER CLINICS",
            "first_name": "ONE",
            "middle_name": "A",
            "last_name": "MHVTESTVETERAN",
            "religion": "--",
            "ethnicity": "--",
            "date_of_birth": "01 Mar 1948",
            "place_of_birth": "WASHINGTON, DISTRICT OF COLUMBIA",
            "age": "66",
            "gender": "Male",
            "marital_status": "DIVORCED",
            "permanentaddress": {
                "street_address": "123 ANYWHERE RD",
                "street_address_2": "APT 123",
                "work_phone_number": "--",
                "city": "WASHINGTON",
                "state": "DISTRICT OF COLUMBIA",
                "zip_code": "00000",
                "county": "001",
                "country": "USA",
                "home_phone_number": "--",
                "cell_phone_number": "--",
                "email_address": "MHVVETERAN@EMAILADDRESS.COM"
            },
            "eligibility": {
                "primary_eligibility_code": "--",
                "service_connected_percentage": "70"
            },
            "employment": {
                "employment_status": "NOT EMPLOYED",
                "employer_name": "--"
            },
            "activeinsurance": {
                "insurance_company": "--",
                "effective_date": "--",
                "expiration_date": "--",
                "group_name": "--",
                "group_number": "--",
                "subscriber_id": "--",
                "subscriber_name": "--",
                "subscriber_relationship": "--"
            },
            "primarynextofkin": {
                "name": "MHVVETERAN, TWO",
                "street_address": "123 Anywhere Road",
                "city": "ANYWHERE",
                "state": "DC",
                "zip_code": "00000",
                "home_phone_number": "000-444-1952",
                "work_phone_number": "--"
            },
            "emergencycontact": {
                "name": "MHVVETERAN, TWO",
                "street_address": "123 Anywhere Road",
                "city": "ANYWHERE",
                "state": "DC",
                "zip_code": "00000",
                "home_phone_number": "000-444-1952",
                "work_phone_number": "--"
            },
            "vaguardian": {
                "name": "--",
                "street_address": "--",
                "city": "--",
                "state": "--",
                "zip_code": "--",
                "home_phone_number": "--",
                "work_phone_number": "--"
            },
            "civilguardian": {
                "name": "--",
                "street_address": "--",
                "city": "--",
                "state": "--",
                "zip_code": "--",
                "home_phone_number": "--",
                "work_phone_number": "--"
            }
        }, {
            "va_treating_facility": "SPOKANE VAMC",
            "first_name": "ONE",
            "middle_name": "A",
            "last_name": "MHVTESTVETERAN",
            "religion": "--",
            "ethnicity": "--",
            "date_of_birth": "01 Mar 1948",
            "place_of_birth": "WASHINGTON, DISTRICT OF COLUMBIA",
            "age": "66",
            "gender": "Male",
            "marital_status": "DIVORCED",
            "permanentaddress": {
                "street_address": "123 ANYWHERE RD",
                "street_address_2": "APT 123",
                "work_phone_number": "--",
                "city": "WASHINGTON",
                "state": "DISTRICT OF COLUMBIA",
                "zip_code": "00000",
                "county": "001",
                "country": "USA",
                "home_phone_number": "--",
                "cell_phone_number": "--",
                "email_address": "MHVVETERAN@EMAILADDRESS.COM"
            },
            "eligibility": {
                "primary_eligibility_code": "--",
                "service_connected_percentage": "70"
            },
            "employment": {
                "employment_status": "NOT EMPLOYED",
                "employer_name": "--"
            },
            "activeinsurance": {
                "insurance_company": "--",
                "effective_date": "--",
                "expiration_date": "--",
                "group_name": "--",
                "group_number": "--",
                "subscriber_id": "--",
                "subscriber_name": "--",
                "subscriber_relationship": "--"
            },
            "primarynextofkin": {
                "name": "MHVVETERAN, TWO",
                "street_address": "123 Anywhere Road",
                "city": "ANYWHERE",
                "state": "DC",
                "zip_code": "00000",
                "home_phone_number": "000-444-1952",
                "work_phone_number": "--"
            },
            "emergencycontact": {
                "name": "MHVVETERAN, TWO",
                "street_address": "123 Anywhere Road",
                "city": "ANYWHERE",
                "state": "DC",
                "zip_code": "00000",
                "home_phone_number": "000-444-1952",
                "work_phone_number": "--"
            },
            "vaguardian": {
                "name": "--",
                "street_address": "--",
                "city": "--",
                "state": "--",
                "zip_code": "--",
                "home_phone_number": "--",
                "work_phone_number": "--"
            },
            "civilguardian": {
                "name": "--",
                "street_address": "--",
                "city": "--",
                "state": "--",
                "zip_code": "--",
                "home_phone_number": "--",
                "work_phone_number": "--"
            }
        }, {
            "va_treating_facility": "PORTLAND, OREGON VA MEDICAL CENTER",
            "first_name": "ONE",
            "middle_name": "A",
            "last_name": "MHVTESTVETERAN",
            "religion": "--",
            "ethnicity": "--",
            "date_of_birth": "01 Mar 1948",
            "place_of_birth": "WASHINGTON, DISTRICT OF COLUMBIA",
            "age": "66",
            "gender": "Male",
            "marital_status": "DIVORCED",
            "permanentaddress": {
                "street_address": "123 ANYWHERE RD",
                "street_address_2": "APT 123",
                "work_phone_number": "--",
                "city": "WASHINGTON",
                "state": "DISTRICT OF COLUMBIA",
                "zip_code": "00000",
                "county": "001",
                "country": "USA",
                "home_phone_number": "--",
                "cell_phone_number": "--",
                "email_address": "MHVVETERAN@EMAILADDRESS.COM"
            },
            "eligibility": {
                "primary_eligibility_code": "--",
                "service_connected_percentage": "0"
            },
            "employment": {
                "employment_status": "NOT EMPLOYED",
                "employer_name": "--"
            },
            "activeinsurance": {
                "insurance_company": "--",
                "effective_date": "--",
                "expiration_date": "--",
                "group_name": "--",
                "group_number": "--",
                "subscriber_id": "--",
                "subscriber_name": "--",
                "subscriber_relationship": "--"
            },
            "primarynextofkin": {
                "name": "MHVVETERAN, TWO",
                "street_address": "123 Anywhere Road",
                "city": "ANYWHERE",
                "state": "DC",
                "zip_code": "00000",
                "home_phone_number": "000-444-1952",
                "work_phone_number": "--"
            },
            "emergencycontact": {
                "name": "MHVVETERAN,TWO",
                "street_address": "123 Anywhere Road",
                "city": "ANYWHERE",
                "state": "DC",
                "zip_code": "00000",
                "home_phone_number": "000-444-1952",
                "work_phone_number": "--"
            },
            "vaguardian": {
                "name": "--",
                "street_address": "--",
                "city": "--",
                "state": "--",
                "zip_code": "--",
                "home_phone_number": "--",
                "work_phone_number": "--"
            },
            "civilguardian": {
                "name": "--",
                "street_address": "--",
                "city": "--",
                "state": "--",
                "zip_code": "--",
                "home_phone_number": "--",
                "work_phone_number": "--"
            }
        }]
    },
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
    "model": [{
        "name": "pastappointments",
        "pattern": {},
        "multiple": false,
        "model": [],
        "raw": ["PAST APPOINTMENTS:"],
        "found": true,
        "processed": {}
    }, {
        "name": "generic",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Source: VA", "Last Updated: 05 Nov 2014 @ 0813", "Sort By: Date (Descending)", "Date/Time:      08 Oct 2014 @ 1330", "Location:       PORTLAND", "Status:         CANCELLED", "Clinic:         GEN SURG HERNIA-4A103", "Phone Number:   5456", "Date/Time:      08 Sep 2014 @ 1215", "Location:       PORTLAND", "Status:         CANCELLED", "Clinic:         DEMENTIA NEW-BLDG 104", "Phone Number:   50820", "Date/Time:      29 Jul 2014 @ 0900", "Location:       PORTLAND", "Status:         APPOINTMENT NOT KEPT", "Clinic:         MH1,D P2 Bldg 104", "Phone Number:   5-5187", "Date/Time:      09 Dec 2013 @ 0800", "Location:       PORTLAND", "Status:         APPOINTMENT NOT KEPT", "Clinic:         MH1,D P2 Bldg 104", "Phone Number:   5-5187", "Date/Time:      05 Aug 2013 @ 0800", "Location:       BEND", "Status:         CANCELLED", "Clinic:         DEMENTIA BEND CVT", "Phone Number:   5-1440", "Date/Time:      08 Jul 2013 @ 0800", "Location:       PORTLAND", "Status:         APPOINTMENT NOT KEPT", "Clinic:         MH1,D P2 Bldg 104", "Phone Number:   5-5187", "Date/Time:      16 May 2013 @ 0800", "Location:       PORTLAND", "Status:         CANCELLED", "Clinic:         MH1I DOUGLAS,D P2 Bldg 104", "Phone Number:   5-5187", "Date/Time:      07 Jan 2013 @ 0800", "Location:       PORTLAND", "Status:         APPOINTMENT NOT KEPT", "Clinic:         MH1,D P2 Bldg 104", "Phone Number:   5-5187"],
        "found": true,
        "processed": {}
    }],
    "raw": ["--------------------------- VA APPOINTMENTS -----------------------------"],
    "processed": {
        "source": "VA",
        "last_updated": "05 Nov 2014 @ 0813",
        "sort_by": "Date (Descending)",
        "pastappointments": [{
            "date/time": "08 Oct 2014 @ 1330",
            "location": "PORTLAND",
            "status": "CANCELLED",
            "clinic": "GEN SURG HERNIA-4A103",
            "phone_number": "5456"
        }, {
            "date/time": "08 Sep 2014 @ 1215",
            "location": "PORTLAND",
            "status": "CANCELLED",
            "clinic": "DEMENTIA NEW-BLDG 104",
            "phone_number": "50820"
        }, {
            "date/time": "29 Jul 2014 @ 0900",
            "location": "PORTLAND",
            "status": "APPOINTMENT NOT KEPT",
            "clinic": "MH1,D P2 Bldg 104",
            "phone_number": "5-5187"
        }, {
            "date/time": "09 Dec 2013 @ 0800",
            "location": "PORTLAND",
            "status": "APPOINTMENT NOT KEPT",
            "clinic": "MH1,D P2 Bldg 104",
            "phone_number": "5-5187"
        }, {
            "date/time": "05 Aug 2013 @ 0800",
            "location": "BEND",
            "status": "CANCELLED",
            "clinic": "DEMENTIA BEND CVT",
            "phone_number": "5-1440"
        }, {
            "date/time": "08 Jul 2013 @ 0800",
            "location": "PORTLAND",
            "status": "APPOINTMENT NOT KEPT",
            "clinic": "MH1,D P2 Bldg 104",
            "phone_number": "5-5187"
        }, {
            "date/time": "16 May 2013 @ 0800",
            "location": "PORTLAND",
            "status": "CANCELLED",
            "clinic": "MH1I DOUGLAS,D P2 Bldg 104",
            "phone_number": "5-5187"
        }, {
            "date/time": "07 Jan 2013 @ 0800",
            "location": "PORTLAND",
            "status": "APPOINTMENT NOT KEPT",
            "clinic": "MH1,D P2 Bldg 104",
            "phone_number": "5-5187"
        }]
    },
    "found": true
}, {
    "name": "va_allergies",
    "pattern": {},
    "multiple": false,
    "model": [{
        "name": "allergyname",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Allergy Name:        IMIPRAMINE", "Allergy Name:        TRIMETHOPRIM", "Allergy Name:        TRAMADOL", "Allergy Name:        TERAZOSIN", "Allergy Name:        BACTRIM", "Allergy Name:        METHOCARBAMOL"],
        "found": true,
        "processed": {}
    }, {
        "name": "allergycomments",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Comments:            severe", "Comments:            the reaction to this allergy was MILD (NO SQUELAE)", "Comments:            gradually worsening difficulty emptying bladder --", "Comments:            --", "Comments:            Causes Swelling of the Extremities", "Comments:            Drowsiness and hallucinations while on methocarbamol"],
        "found": true,
        "processed": {}
    }, {
        "name": "generic",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Source: VA", "Last Updated: 05 Nov 2014 @ 0812", "Location:            PORTLAND, OREGON VA MEDICAL CENTER", "Date Entered:        07 Dec 2012", "Reaction:            ANAPHYLAXIS", "Allergy Type:        DRUG", "VA Drug Class:       TRICYCLIC ANTIDEPRESSANTS", "Observed/Historical: OBSERVED", "Location:            PORTLAND, OREGON VA MEDICAL CENTER", "Date Entered:        03 Jun 2011", "Reaction:            --", "Allergy Type:        DRUG", "VA Drug Class:       ANTI-INFECTIVES,OTHER", "Observed/Historical: HISTORICAL", "Location:            PORTLAND, OREGON VA MEDICAL CENTER", "Date Entered:        03 Jun 2011", "Reaction:            RETENTION OF URINE", "Allergy Type:        DRUG", "VA Drug Class:       NON-OPIOID ANALGESICS", "Observed/Historical: HISTORICAL", "Location:            PORTLAND, OREGON VA MEDICAL CENTER", "Date Entered:        03 Jun 2011", "Reaction:            DIZZINESS", "Allergy Type:        DRUG", "VA Drug Class:       ALPHA BLOCKERS/RELATED", "Observed/Historical: HISTORICAL", "Location:            PORTLAND, OREGON VA MEDICAL CENTER", "Date Entered:        03 Jun 2011", "Reaction:            --", "Allergy Type:        DRUG", "VA Drug Class:       SULFONAMIDE/RELATED ANTIMICROBIALS", "Observed/Historical: HISTORICAL", "Location:            PORTLAND, OREGON VA MEDICAL CENTER", "Date Entered:        03 Jun 2011", "Reaction:            DELIRIUM, DROWSY", "Allergy Type:        DRUG", "VA Drug Class:       SKELETAL MUSCLE RELAXANTS", "Observed/Historical: OBSERVED"],
        "found": true,
        "processed": {}
    }, {
        "name": "allergy comments",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Remember to share all information about your allergies with your health", "care team.  If you have any questions about your information please visit", "the FAQs or contact your VA health care team.", "might", "try tramadol again cautiously because pt. reported", "pain", "relief", "plus", "carbamazepine and other sedatives", "Remember to share all information about your allergies with your health", "care team.  If you have any questions about your information please visit", "the FAQs or contact your VA health care team.", "Allergy information."],
        "found": true,
        "processed": {}
    }],
    "raw": ["----------------------------- VA ALLERGIES ------------------------------"],
    "processed": {
        "source": "VA",
        "last_updated": "05 Nov 2014 @ 0812",
        "allergies": [{
            "allergy_name": "IMIPRAMINE",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date_entered": "07 Dec 2012",
            "reaction": "ANAPHYLAXIS",
            "allergy_type": "DRUG",
            "va_drug_class": "TRICYCLIC ANTIDEPRESSANTS",
            "observed/historical": "OBSERVED",
            "comments": "severe"
        }, {
            "allergy_name": "TRIMETHOPRIM",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date_entered": "03 Jun 2011",
            "reaction": "--",
            "allergy_type": "DRUG",
            "va_drug_class": "ANTI-INFECTIVES,OTHER",
            "observed/historical": "HISTORICAL",
            "comments": "the reaction to this allergy was MILD (NO SQUELAE)"
        }, {
            "allergy_name": "TRAMADOL",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date_entered": "03 Jun 2011",
            "reaction": "RETENTION OF URINE",
            "allergy_type": "DRUG",
            "va_drug_class": "NON-OPIOID ANALGESICS",
            "observed/historical": "HISTORICAL",
            "comments": "gradually worsening difficulty emptying bladder -- might try tramadol again cautiously because pt. reported pain relief"
        }, {
            "allergy_name": "TERAZOSIN",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date_entered": "03 Jun 2011",
            "reaction": "DIZZINESS",
            "allergy_type": "DRUG",
            "va_drug_class": "ALPHA BLOCKERS/RELATED",
            "observed/historical": "HISTORICAL",
            "comments": "--"
        }, {
            "allergy_name": "BACTRIM",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date_entered": "03 Jun 2011",
            "reaction": "--",
            "allergy_type": "DRUG",
            "va_drug_class": "SULFONAMIDE/RELATED ANTIMICROBIALS",
            "observed/historical": "HISTORICAL",
            "comments": "Causes Swelling of the Extremities"
        }, {
            "allergy_name": "METHOCARBAMOL",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date_entered": "03 Jun 2011",
            "reaction": "DELIRIUM, DROWSY",
            "allergy_type": "DRUG",
            "va_drug_class": "SKELETAL MUSCLE RELAXANTS",
            "observed/historical": "OBSERVED",
            "comments": "Drowsiness and hallucinations while on methocarbamol plus carbamazepine and other sedatives Remember to share all information about your allergies with your health care team.  If you have any questions about your information please visit the FAQs or contact your VA health care team. Allergy information."
        }]
    },
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
    "model": [{
        "name": "medicationname",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Medication: ASPIRIN 81MG EC TAB", "Medication: ASPIRIN 325MG EC TAB", "Medication: AMLODIPINE BESYLATE 5MG TAB", "Medication: DONEPEZIL HCL 5MG TAB", "Medication: HCTZ 25/TRIAMTERENE 37.5MG TAB", "Medication: FLUOXETINE HCL 10MG CAP", "Medication: AMLODIPINE BESYLATE 10MG TAB", "Medication: COLON ELECTROLYTE LAVAGE PWD FOR SOLN", "Medication: ACCU-CHEK AVIVA (GLUCOSE) TEST STRIP #50", "Medication: SODIUM CHLORIDE 0.65% SOLN NASAL", "Medication: SIMVASTATIN 40MG TAB", "Medication: NAPROXEN 500MG TAB", "Medication: METFORMIN HCL 1000MG TAB", "Medication: LISINOPRIL 10MG TAB", "Medication: INSULIN,GLARGINE 100U/ML INJ 10ML VIAL", "Medication: INSULIN NPH HUMAN 100 UNIT/ML NOVOLIN N", "Medication: IBUPROFEN 600MG TAB", "Medication: DEXAMETHASONE 4MG TAB", "Medication: BACITRACIN OINTMENT 1 OZ", "Medication: AMLODIPINE BESYLATE 10MG TAB", "Medication: IBUPROFEN 600MG TAB", "Medication: ACCU-CHEK AVIVA (GLUCOSE) TEST STRIP #50", "Medication: INSULIN,GLARGINE 100U/ML INJ 10ML VIAL", "Medication: INSULIN NOVOLIN NPH 100U/ML INJ 10ML VL", "Medication: SODIUM CHLORIDE 0.65% SOLN NASAL", "Medication: METFORMIN HCL 1000MG TAB", "Medication: NAPROXEN 500MG TAB", "Medication: DEXAMETHASONE 4MG TAB", "Medication: BACITRACIN OINTMENT 1 OZ", "Medication: LISINOPRIL 10MG TAB", "Medication: SIMVASTATIN 40MG TAB", "Medication: COLONIC LAVAGE SOLUTION (4 LITER)"],
        "found": true,
        "processed": {}
    }, {
        "name": "medication instructions",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Instructions: TAKE ONE TABLET BY MOUTH EVERY DAY", "Instructions: TAKE ONE TABLET BY MOUTH EVERY DAY", "Instructions: TAKE ONE-HALF TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE", "Instructions: TAKE ONE TABLET BY MOUTH EVERY MORNING", "Instructions: TAKE ONE-HALF TABLET (12.5/18.75 MG) BY MOUTH EVERY DAY", "Instructions: TAKE ONE CAPSULE BY MOUTH EVERY MORNING", "Instructions: TAKE ONE-HALF TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE --", "Instructions: MIX 1 GALLON IN WATER AND DRINK AS DIRECTED FOR 1 DAY DISSOLVE 1", "Instructions: USE 1 STRIP FOR BLOOD GLUCOSE TESTING AS DIRECTED", "Instructions: SPRAY 2 SPRAYS MOUTH MINUTE FOR 30 DAYS", "Instructions: TAKE ONE-HALF TABLET BY MOUTH AT BEDTIME TO LOWER YOUR", "Instructions: TAKE ONE TABLET BY MOUTH TWICE A DAY -- TAKE WITH FOOD IF GI", "Instructions: TAKE ONE TABLET BY MOUTH TWICE DAILY WITH MEALS FOR DIABETES.", "Instructions: TAKE ONE TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE", "Instructions: INJECT 25 UNITS SUBCUTANEOUSLY AT BEDTIME * DO NOT MIX OTHER", "Instructions: INJECT 16 UNITS SUBCUTANEOUSLY EVERY MORNING AND INJECT 18 UNITS", "Instructions: TAKE ONE TABLET BY MOUTH FOUR TIMES DAILY WITH MEALS AS NEEDED", "Instructions: TAKE TWO TABLETS BY MOUTH HOUR FOR 2 DAYS -- TAKE WITH FOOD --", "Instructions: APPLY SMALL AMOUNT TOPICALLY TO AFFECTED AREA TWICE A DAY TO", "Instructions: TAKE ONE-HALF TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE --", "Instructions: TAKE ONE TABLET BY MOUTH FOUR TIMES DAILY WITH MEALS AS NEEDED", "Instructions: USE 1 STRIP FOR BLOOD GLUCOSE TESTING AS DIRECTED", "Instructions: INJECT 25 UNITS SUBCUTANEOUSLY AT BEDTIME * DO NOT MIX OTHER", "Instructions: INJECT 16 UNITS SUBCUTANEOUSLY EVERY MORNING AND INJECT 18 UNITS", "Instructions: SPRAY 2 SPRAYS MOUTH MINUTE FOR 30 DAYS", "Instructions: TAKE ONE TABLET BY MOUTH TWICE DAILY WITH MEALS FOR DIABETES.", "Instructions: TAKE ONE TABLET BY MOUTH TWICE A DAY -- TAKE WITH FOOD IF GI", "Instructions: TAKE TWO TABLETS BY MOUTH HOUR FOR 2 DAYS -- TAKE WITH FOOD --", "Instructions: APPLY SMALL AMOUNT TOPICALLY TO AFFECTED AREA TWICE A DAY TO", "Instructions: TAKE ONE TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE", "Instructions: TAKE ONE-HALF TABLET BY MOUTH AT BEDTIME TO LOWER YOUR", "Instructions: MIX 1 GALLON IN WATER AND DRINK AS DIRECTED FOR 1 DAY DISSOLVE 1"],
        "found": true,
        "processed": {}
    }, {
        "name": "generic",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Source: VA", "Last Updated: 28 Oct 2014 @ 1026", "Sorted By: Last Filled On (Descending)", "Status: Active", "Refills Remaining: 3", "Last Filled On: 14 Oct 2014", "Initially Ordered On: 14 Oct 2014", "Quantity: 30", "Days Supply: 30", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11936697", "Status: Active", "Refills Remaining: 11", "Last Filled On: 24 Sep 2014", "Initially Ordered On: 25 Aug 2014", "Quantity: 1", "Days Supply: 1", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11925371", "Status: Expired", "Refills Remaining: 2", "Last Filled On: 01 Mar 2013", "Initially Ordered On: 10 Dec 2012", "Quantity: 45", "Days Supply: 90", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11532047", "Status: Expired", "Refills Remaining: 10", "Last Filled On: 16 Feb 2013", "Initially Ordered On: 10 Dec 2012", "Quantity: 30", "Days Supply: 30", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11532048", "Status: Expired", "Refills Remaining: 3", "Last Filled On: 11 Dec 2012", "Initially Ordered On: 10 Dec 2012", "Quantity: 45", "Days Supply: 90", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11532051", "Status: Expired", "Refills Remaining: 3", "Last Filled On: 11 Dec 2012", "Initially Ordered On: 10 Dec 2012", "Quantity: 90", "Days Supply: 90", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11532050", "Status: Discontinued", "Refills Remaining: 3", "Last Filled On: 15 Jul 2012", "Initially Ordered On: 15 Jul 2012", "Quantity: 45", "Days Supply: 90", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181487A", "Status: Discontinued", "Refills Remaining: 0", "Last Filled On: 15 Jul 2012", "Initially Ordered On: 13 Jul 2012", "Quantity: 1", "Days Supply: 2", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11461309", "Status: Discontinued", "Refills Remaining: 2", "Last Filled On: 09 Jul 2012", "Initially Ordered On: 06 Jul 2012", "Quantity: 200", "Days Supply: 50", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181484A", "Status: Discontinued", "Refills Remaining: 3", "Last Filled On: 09 Jul 2012", "Initially Ordered On: 06 Jul 2012", "Quantity: 10", "Days Supply: 30", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181532A", "Status: Discontinued", "Refills Remaining: 2", "Last Filled On: 09 Jul 2012", "Initially Ordered On: 06 Jul 2012", "Quantity: 45", "Days Supply: 90", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181502A", "Status: Discontinued", "Refills Remaining: 3", "Last Filled On: 09 Jul 2012", "Initially Ordered On: 06 Jul 2012", "Quantity: 60", "Days Supply: 90", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181531A", "Status: Discontinued", "Refills Remaining: 2", "Last Filled On: 09 Jul 2012", "Initially Ordered On: 06 Jul 2012", "Quantity: 180", "Days Supply: 90", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181499A", "Status: Discontinued", "Refills Remaining: 3", "Last Filled On: 09 Jul 2012", "Initially Ordered On: 06 Jul 2012", "Quantity: 30", "Days Supply: 30", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181497A", "Status: Discontinued", "Refills Remaining: 2", "Last Filled On: 09 Jul 2012", "Initially Ordered On: 06 Jul 2012", "Quantity: 3", "Days Supply: 30", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181494A", "Status: Discontinued", "Refills Remaining: 1", "Last Filled On: 09 Jul 2012", "Initially Ordered On: 06 Jul 2012", "Quantity: 3", "Days Supply: 30", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181492A", "Status: Discontinued", "Refills Remaining: 3", "Last Filled On: 09 Jul 2012", "Initially Ordered On: 06 Jul 2012", "Quantity: 240", "Days Supply: 60", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181491A", "Status: Discontinued", "Refills Remaining: 2", "Last Filled On: 09 Jul 2012", "Initially Ordered On: 06 Jul 2012", "Quantity: 96", "Days Supply: 30", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181530A", "Status: Discontinued", "Refills Remaining: 1", "Last Filled On: 09 Jul 2012", "Initially Ordered On: 06 Jul 2012", "Quantity: 10", "Days Supply: 45", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181529A", "Status: Expired", "Refills Remaining: 2", "Last Filled On: 17 May 2012", "Initially Ordered On: 03 Jun 2011", "Quantity: 45", "Days Supply: 90", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181487", "Status: Expired", "Refills Remaining: 2", "Last Filled On: 17 Feb 2012", "Initially Ordered On: 03 Jun 2011", "Quantity: 240", "Days Supply: 60", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181491", "Status: Expired", "Refills Remaining: 1", "Last Filled On: 05 Dec 2011", "Initially Ordered On: 03 Jun 2011", "Quantity: 200", "Days Supply: 50", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181484", "Status: Expired", "Refills Remaining: 2", "Last Filled On: 03 Jun 2011", "Initially Ordered On: 03 Jun 2011", "Quantity: 3", "Days Supply: 30", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181494", "Status: Expired", "Refills Remaining: 1", "Last Filled On: 03 Jun 2011", "Initially Ordered On: 03 Jun 2011", "Quantity: 3", "Days Supply: 30", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181492", "Status: Expired", "Refills Remaining: 3", "Last Filled On: 03 Jun 2011", "Initially Ordered On: 03 Dec 2010", "Quantity: 10", "Days Supply: 30", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181532", "Status: Expired", "Refills Remaining: 2", "Last Filled On: 03 Jun 2011", "Initially Ordered On: 03 Jun 2011", "Quantity: 180", "Days Supply: 90", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181499", "Status: Expired", "Refills Remaining: 3", "Last Filled On: 03 Jun 2011", "Initially Ordered On: 03 Dec 2010", "Quantity: 60", "Days Supply: 90", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181531", "Status: Expired", "Refills Remaining: 2", "Last Filled On: 03 Jun 2011", "Initially Ordered On: 03 Dec 2010", "Quantity: 96", "Days Supply: 30", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181530", "Status: Expired", "Refills Remaining: 1", "Last Filled On: 03 Jun 2011", "Initially Ordered On: 03 Dec 2010", "Quantity: 10", "Days Supply: 45", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181529", "Status: Expired", "Refills Remaining: 3", "Last Filled On: 03 Jun 2011", "Initially Ordered On: 03 Dec 2010", "Quantity: 30", "Days Supply: 30", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181497", "Status: Expired", "Refills Remaining: 2", "Last Filled On: 03 Jun 2011", "Initially Ordered On: 03 Jun 2011", "Quantity: 45", "Days Supply: 90", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181502", "Status: Expired", "Refills Remaining: 0", "Last Filled On: 03 Jun 2011", "Initially Ordered On: 03 Jun 2011", "Quantity: 1", "Days Supply: 2", "Pharmacy: PORTLAND PHARMACY", "Prescription Number: 11181488"],
        "found": true,
        "processed": {}
    }, {
        "name": "medication instructions",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Remember to share all information about your medications or updates with", "your VA health care team. Also, check information in your VA Allergies", "and your Self Reported Allergies. This may let you know if you had a", "reaction to a medication you received. If you have any questions about", "your information please visit the FAQs or contact your VA health care", "team.", "AVOID GRAPEFRUIT JUICE --", "BOTTLE", "CHOLESTEROL. AVOID CONSUMING GRAPEFRUIT PRODUCTS.  CALL YOUR PROVIDER IF YOU", "HAVE UNEXPLAINED MUSCLE PAIN, TENDERNESS OR  WEAKNESS.", "INSULINS IN SAME SYRINGE AS GLARGINE. DISCARD VIAL 28 DAYS AFTER OPENING.  EACH", "VIAL EXPIRES 28 DAYS AFTER FIRST OPENING.", "AT BEDTIME EACH VIAL EXPIRES 30 DAYS AFTER FIRST OPENING.", "FOR PAIN", "THREE TIMES A DAY FOR 30 DAYS", "AVOID GRAPEFRUIT JUICE --", "FOR PAIN", "INSULINS IN SAME SYRINGE AS GLARGINE. DISCARD VIAL 28 DAYS AFTER OPENING.  EACH", "VIAL EXPIRES 28 DAYS AFTER FIRST OPENING.", "AT BEDTIME EACH VIAL EXPIRES 30 DAYS AFTER FIRST OPENING.", "THREE TIMES A DAY FOR 30 DAYS", "CHOLESTEROL. AVOID CONSUMING GRAPEFRUIT PRODUCTS.  CALL YOUR PROVIDER IF YOU", "HAVE UNEXPLAINED MUSCLE PAIN, TENDERNESS OR  WEAKNESS.", "BOTTLE"],
        "found": true,
        "processed": {}
    }],
    "raw": ["-------------------------- VA MEDICATION HISTORY ----------------------"],
    "processed": {
        "source": "VA",
        "last_updated": "28 Oct 2014 @ 1026",
        "sorted_by": "Last Filled On (Descending)",
        "medications": [{
            "medication_name": "ASPIRIN 81MG EC TAB",
            "instructions": "TAKE ONE TABLET BY MOUTH EVERY DAY",
            "status": "Active",
            "refills_remaining": "3",
            "last_filled_on": "14 Oct 2014",
            "initially_ordered_on": "14 Oct 2014",
            "quantity": "30",
            "days_supply": "30",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11936697"
        }, {
            "medication_name": "ASPIRIN 325MG EC TAB",
            "instructions": "TAKE ONE TABLET BY MOUTH EVERY DAY",
            "status": "Active",
            "refills_remaining": "11",
            "last_filled_on": "24 Sep 2014",
            "initially_ordered_on": "25 Aug 2014",
            "quantity": "1",
            "days_supply": "1",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11925371"
        }, {
            "medication_name": "AMLODIPINE BESYLATE 5MG TAB",
            "instructions": "TAKE ONE-HALF TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE",
            "status": "Expired",
            "refills_remaining": "2",
            "last_filled_on": "01 Mar 2013",
            "initially_ordered_on": "10 Dec 2012",
            "quantity": "45",
            "days_supply": "90",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11532047"
        }, {
            "medication_name": "DONEPEZIL HCL 5MG TAB",
            "instructions": "TAKE ONE TABLET BY MOUTH EVERY MORNING",
            "status": "Expired",
            "refills_remaining": "10",
            "last_filled_on": "16 Feb 2013",
            "initially_ordered_on": "10 Dec 2012",
            "quantity": "30",
            "days_supply": "30",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11532048"
        }, {
            "medication_name": "HCTZ 25/TRIAMTERENE 37.5MG TAB",
            "instructions": "TAKE ONE-HALF TABLET (12.5/18.75 MG) BY MOUTH EVERY DAY",
            "status": "Expired",
            "refills_remaining": "3",
            "last_filled_on": "11 Dec 2012",
            "initially_ordered_on": "10 Dec 2012",
            "quantity": "45",
            "days_supply": "90",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11532051"
        }, {
            "medication_name": "FLUOXETINE HCL 10MG CAP",
            "instructions": "TAKE ONE CAPSULE BY MOUTH EVERY MORNING",
            "status": "Expired",
            "refills_remaining": "3",
            "last_filled_on": "11 Dec 2012",
            "initially_ordered_on": "10 Dec 2012",
            "quantity": "90",
            "days_supply": "90",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11532050"
        }, {
            "medication_name": "AMLODIPINE BESYLATE 10MG TAB",
            "instructions": "TAKE ONE-HALF TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE -- AVOID GRAPEFRUIT JUICE --",
            "status": "Discontinued",
            "refills_remaining": "3",
            "last_filled_on": "15 Jul 2012",
            "initially_ordered_on": "15 Jul 2012",
            "quantity": "45",
            "days_supply": "90",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181487A"
        }, {
            "medication_name": "COLON ELECTROLYTE LAVAGE PWD FOR SOLN",
            "instructions": "MIX 1 GALLON IN WATER AND DRINK AS DIRECTED FOR 1 DAY DISSOLVE 1 BOTTLE",
            "status": "Discontinued",
            "refills_remaining": "0",
            "last_filled_on": "15 Jul 2012",
            "initially_ordered_on": "13 Jul 2012",
            "quantity": "1",
            "days_supply": "2",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11461309"
        }, {
            "medication_name": "ACCU-CHEK AVIVA (GLUCOSE) TEST STRIP #50",
            "instructions": "USE 1 STRIP FOR BLOOD GLUCOSE TESTING AS DIRECTED",
            "status": "Discontinued",
            "refills_remaining": "2",
            "last_filled_on": "09 Jul 2012",
            "initially_ordered_on": "06 Jul 2012",
            "quantity": "200",
            "days_supply": "50",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181484A"
        }, {
            "medication_name": "SODIUM CHLORIDE 0.65% SOLN NASAL",
            "instructions": "SPRAY 2 SPRAYS MOUTH MINUTE FOR 30 DAYS",
            "status": "Discontinued",
            "refills_remaining": "3",
            "last_filled_on": "09 Jul 2012",
            "initially_ordered_on": "06 Jul 2012",
            "quantity": "10",
            "days_supply": "30",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181532A"
        }, {
            "medication_name": "SIMVASTATIN 40MG TAB",
            "instructions": "TAKE ONE-HALF TABLET BY MOUTH AT BEDTIME TO LOWER YOUR CHOLESTEROL. AVOID CONSUMING GRAPEFRUIT PRODUCTS.  CALL YOUR PROVIDER IF YOU HAVE UNEXPLAINED MUSCLE PAIN, TENDERNESS OR  WEAKNESS.",
            "status": "Discontinued",
            "refills_remaining": "2",
            "last_filled_on": "09 Jul 2012",
            "initially_ordered_on": "06 Jul 2012",
            "quantity": "45",
            "days_supply": "90",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181502A"
        }, {
            "medication_name": "NAPROXEN 500MG TAB",
            "instructions": "TAKE ONE TABLET BY MOUTH TWICE A DAY -- TAKE WITH FOOD IF GI",
            "status": "Discontinued",
            "refills_remaining": "3",
            "last_filled_on": "09 Jul 2012",
            "initially_ordered_on": "06 Jul 2012",
            "quantity": "60",
            "days_supply": "90",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181531A"
        }, {
            "medication_name": "METFORMIN HCL 1000MG TAB",
            "instructions": "TAKE ONE TABLET BY MOUTH TWICE DAILY WITH MEALS FOR DIABETES.",
            "status": "Discontinued",
            "refills_remaining": "2",
            "last_filled_on": "09 Jul 2012",
            "initially_ordered_on": "06 Jul 2012",
            "quantity": "180",
            "days_supply": "90",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181499A"
        }, {
            "medication_name": "LISINOPRIL 10MG TAB",
            "instructions": "TAKE ONE TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE",
            "status": "Discontinued",
            "refills_remaining": "3",
            "last_filled_on": "09 Jul 2012",
            "initially_ordered_on": "06 Jul 2012",
            "quantity": "30",
            "days_supply": "30",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181497A"
        }, {
            "medication_name": "INSULIN,GLARGINE 100U/ML INJ 10ML VIAL",
            "instructions": "INJECT 25 UNITS SUBCUTANEOUSLY AT BEDTIME * DO NOT MIX OTHER INSULINS IN SAME SYRINGE AS GLARGINE. DISCARD VIAL 28 DAYS AFTER OPENING.  EACH VIAL EXPIRES 28 DAYS AFTER FIRST OPENING.",
            "status": "Discontinued",
            "refills_remaining": "2",
            "last_filled_on": "09 Jul 2012",
            "initially_ordered_on": "06 Jul 2012",
            "quantity": "3",
            "days_supply": "30",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181494A"
        }, {
            "medication_name": "INSULIN NPH HUMAN 100 UNIT/ML NOVOLIN N",
            "instructions": "INJECT 16 UNITS SUBCUTANEOUSLY EVERY MORNING AND INJECT 18 UNITS AT BEDTIME EACH VIAL EXPIRES 30 DAYS AFTER FIRST OPENING.",
            "status": "Discontinued",
            "refills_remaining": "1",
            "last_filled_on": "09 Jul 2012",
            "initially_ordered_on": "06 Jul 2012",
            "quantity": "3",
            "days_supply": "30",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181492A"
        }, {
            "medication_name": "IBUPROFEN 600MG TAB",
            "instructions": "TAKE ONE TABLET BY MOUTH FOUR TIMES DAILY WITH MEALS AS NEEDED FOR PAIN",
            "status": "Discontinued",
            "refills_remaining": "3",
            "last_filled_on": "09 Jul 2012",
            "initially_ordered_on": "06 Jul 2012",
            "quantity": "240",
            "days_supply": "60",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181491A"
        }, {
            "medication_name": "DEXAMETHASONE 4MG TAB",
            "instructions": "TAKE TWO TABLETS BY MOUTH HOUR FOR 2 DAYS -- TAKE WITH FOOD --",
            "status": "Discontinued",
            "refills_remaining": "2",
            "last_filled_on": "09 Jul 2012",
            "initially_ordered_on": "06 Jul 2012",
            "quantity": "96",
            "days_supply": "30",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181530A"
        }, {
            "medication_name": "BACITRACIN OINTMENT 1 OZ",
            "instructions": "APPLY SMALL AMOUNT TOPICALLY TO AFFECTED AREA TWICE A DAY TO THREE TIMES A DAY FOR 30 DAYS",
            "status": "Discontinued",
            "refills_remaining": "1",
            "last_filled_on": "09 Jul 2012",
            "initially_ordered_on": "06 Jul 2012",
            "quantity": "10",
            "days_supply": "45",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181529A"
        }, {
            "medication_name": "AMLODIPINE BESYLATE 10MG TAB",
            "instructions": "TAKE ONE-HALF TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE -- AVOID GRAPEFRUIT JUICE --",
            "status": "Expired",
            "refills_remaining": "2",
            "last_filled_on": "17 May 2012",
            "initially_ordered_on": "03 Jun 2011",
            "quantity": "45",
            "days_supply": "90",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181487"
        }, {
            "medication_name": "IBUPROFEN 600MG TAB",
            "instructions": "TAKE ONE TABLET BY MOUTH FOUR TIMES DAILY WITH MEALS AS NEEDED FOR PAIN",
            "status": "Expired",
            "refills_remaining": "2",
            "last_filled_on": "17 Feb 2012",
            "initially_ordered_on": "03 Jun 2011",
            "quantity": "240",
            "days_supply": "60",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181491"
        }, {
            "medication_name": "ACCU-CHEK AVIVA (GLUCOSE) TEST STRIP #50",
            "instructions": "USE 1 STRIP FOR BLOOD GLUCOSE TESTING AS DIRECTED",
            "status": "Expired",
            "refills_remaining": "1",
            "last_filled_on": "05 Dec 2011",
            "initially_ordered_on": "03 Jun 2011",
            "quantity": "200",
            "days_supply": "50",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181484"
        }, {
            "medication_name": "INSULIN,GLARGINE 100U/ML INJ 10ML VIAL",
            "instructions": "INJECT 25 UNITS SUBCUTANEOUSLY AT BEDTIME * DO NOT MIX OTHER INSULINS IN SAME SYRINGE AS GLARGINE. DISCARD VIAL 28 DAYS AFTER OPENING.  EACH VIAL EXPIRES 28 DAYS AFTER FIRST OPENING.",
            "status": "Expired",
            "refills_remaining": "2",
            "last_filled_on": "03 Jun 2011",
            "initially_ordered_on": "03 Jun 2011",
            "quantity": "3",
            "days_supply": "30",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181494"
        }, {
            "medication_name": "INSULIN NOVOLIN NPH 100U/ML INJ 10ML VL",
            "instructions": "INJECT 16 UNITS SUBCUTANEOUSLY EVERY MORNING AND INJECT 18 UNITS AT BEDTIME EACH VIAL EXPIRES 30 DAYS AFTER FIRST OPENING.",
            "status": "Expired",
            "refills_remaining": "1",
            "last_filled_on": "03 Jun 2011",
            "initially_ordered_on": "03 Jun 2011",
            "quantity": "3",
            "days_supply": "30",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181492"
        }, {
            "medication_name": "SODIUM CHLORIDE 0.65% SOLN NASAL",
            "instructions": "SPRAY 2 SPRAYS MOUTH MINUTE FOR 30 DAYS",
            "status": "Expired",
            "refills_remaining": "3",
            "last_filled_on": "03 Jun 2011",
            "initially_ordered_on": "03 Dec 2010",
            "quantity": "10",
            "days_supply": "30",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181532"
        }, {
            "medication_name": "METFORMIN HCL 1000MG TAB",
            "instructions": "TAKE ONE TABLET BY MOUTH TWICE DAILY WITH MEALS FOR DIABETES.",
            "status": "Expired",
            "refills_remaining": "2",
            "last_filled_on": "03 Jun 2011",
            "initially_ordered_on": "03 Jun 2011",
            "quantity": "180",
            "days_supply": "90",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181499"
        }, {
            "medication_name": "NAPROXEN 500MG TAB",
            "instructions": "TAKE ONE TABLET BY MOUTH TWICE A DAY -- TAKE WITH FOOD IF GI",
            "status": "Expired",
            "refills_remaining": "3",
            "last_filled_on": "03 Jun 2011",
            "initially_ordered_on": "03 Dec 2010",
            "quantity": "60",
            "days_supply": "90",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181531"
        }, {
            "medication_name": "DEXAMETHASONE 4MG TAB",
            "instructions": "TAKE TWO TABLETS BY MOUTH HOUR FOR 2 DAYS -- TAKE WITH FOOD --",
            "status": "Expired",
            "refills_remaining": "2",
            "last_filled_on": "03 Jun 2011",
            "initially_ordered_on": "03 Dec 2010",
            "quantity": "96",
            "days_supply": "30",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181530"
        }, {
            "medication_name": "BACITRACIN OINTMENT 1 OZ",
            "instructions": "APPLY SMALL AMOUNT TOPICALLY TO AFFECTED AREA TWICE A DAY TO THREE TIMES A DAY FOR 30 DAYS",
            "status": "Expired",
            "refills_remaining": "1",
            "last_filled_on": "03 Jun 2011",
            "initially_ordered_on": "03 Dec 2010",
            "quantity": "10",
            "days_supply": "45",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181529"
        }, {
            "medication_name": "LISINOPRIL 10MG TAB",
            "instructions": "TAKE ONE TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE",
            "status": "Expired",
            "refills_remaining": "3",
            "last_filled_on": "03 Jun 2011",
            "initially_ordered_on": "03 Dec 2010",
            "quantity": "30",
            "days_supply": "30",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181497"
        }, {
            "medication_name": "SIMVASTATIN 40MG TAB",
            "instructions": "TAKE ONE-HALF TABLET BY MOUTH AT BEDTIME TO LOWER YOUR CHOLESTEROL. AVOID CONSUMING GRAPEFRUIT PRODUCTS.  CALL YOUR PROVIDER IF YOU HAVE UNEXPLAINED MUSCLE PAIN, TENDERNESS OR  WEAKNESS.",
            "status": "Expired",
            "refills_remaining": "2",
            "last_filled_on": "03 Jun 2011",
            "initially_ordered_on": "03 Jun 2011",
            "quantity": "45",
            "days_supply": "90",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181502"
        }, {
            "medication_name": "COLONIC LAVAGE SOLUTION (4 LITER)",
            "instructions": "MIX 1 GALLON IN WATER AND DRINK AS DIRECTED FOR 1 DAY DISSOLVE 1 BOTTLE",
            "status": "Expired",
            "refills_remaining": "0",
            "last_filled_on": "03 Jun 2011",
            "initially_ordered_on": "03 Jun 2011",
            "quantity": "1",
            "days_supply": "2",
            "pharmacy": "PORTLAND PHARMACY",
            "prescription_number": "11181488"
        }]
    },
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