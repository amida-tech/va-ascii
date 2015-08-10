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
            "comments": ["severe"]
        }, {
            "allergy_name": "TRIMETHOPRIM",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date_entered": "03 Jun 2011",
            "reaction": "--",
            "allergy_type": "DRUG",
            "va_drug_class": "ANTI-INFECTIVES,OTHER",
            "observed/historical": "HISTORICAL",
            "comments": ["the reaction to this allergy was MILD (NO SQUELAE)"]
        }, {
            "allergy_name": "TRAMADOL",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date_entered": "03 Jun 2011",
            "reaction": "RETENTION OF URINE",
            "allergy_type": "DRUG",
            "va_drug_class": "NON-OPIOID ANALGESICS",
            "observed/historical": "HISTORICAL",
            "comments": ["gradually worsening difficulty emptying bladder --", "might", "try tramadol again cautiously because pt. reported", "pain", "relief"]
        }, {
            "allergy_name": "TERAZOSIN",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date_entered": "03 Jun 2011",
            "reaction": "DIZZINESS",
            "allergy_type": "DRUG",
            "va_drug_class": "ALPHA BLOCKERS/RELATED",
            "observed/historical": "HISTORICAL",
            "comments": ["--"]
        }, {
            "allergy_name": "BACTRIM",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date_entered": "03 Jun 2011",
            "reaction": "--",
            "allergy_type": "DRUG",
            "va_drug_class": "SULFONAMIDE/RELATED ANTIMICROBIALS",
            "observed/historical": "HISTORICAL",
            "comments": ["Causes Swelling of the Extremities"]
        }, {
            "allergy_name": "METHOCARBAMOL",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date_entered": "03 Jun 2011",
            "reaction": "DELIRIUM, DROWSY",
            "allergy_type": "DRUG",
            "va_drug_class": "SKELETAL MUSCLE RELAXANTS",
            "observed/historical": "OBSERVED",
            "comments": ["Drowsiness and hallucinations while on methocarbamol", "plus", "carbamazepine and other sedatives", "Remember to share all information about your allergies with your health", "care team.  If you have any questions about your information please visit", "the FAQs or contact your VA health care team.", "Allergy information."]
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
            "instructions": ["TAKE ONE TABLET BY MOUTH EVERY DAY"],
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
            "instructions": ["TAKE ONE TABLET BY MOUTH EVERY DAY"],
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
            "instructions": ["TAKE ONE-HALF TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE"],
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
            "instructions": ["TAKE ONE TABLET BY MOUTH EVERY MORNING"],
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
            "instructions": ["TAKE ONE-HALF TABLET (12.5/18.75 MG) BY MOUTH EVERY DAY"],
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
            "instructions": ["TAKE ONE CAPSULE BY MOUTH EVERY MORNING"],
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
            "instructions": ["TAKE ONE-HALF TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE --", "AVOID GRAPEFRUIT JUICE --"],
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
            "instructions": ["MIX 1 GALLON IN WATER AND DRINK AS DIRECTED FOR 1 DAY DISSOLVE 1", "BOTTLE"],
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
            "instructions": ["USE 1 STRIP FOR BLOOD GLUCOSE TESTING AS DIRECTED"],
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
            "instructions": ["SPRAY 2 SPRAYS MOUTH MINUTE FOR 30 DAYS"],
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
            "instructions": ["TAKE ONE-HALF TABLET BY MOUTH AT BEDTIME TO LOWER YOUR", "CHOLESTEROL. AVOID CONSUMING GRAPEFRUIT PRODUCTS.  CALL YOUR PROVIDER IF YOU", "HAVE UNEXPLAINED MUSCLE PAIN, TENDERNESS OR  WEAKNESS."],
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
            "instructions": ["TAKE ONE TABLET BY MOUTH TWICE A DAY -- TAKE WITH FOOD IF GI"],
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
            "instructions": ["TAKE ONE TABLET BY MOUTH TWICE DAILY WITH MEALS FOR DIABETES."],
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
            "instructions": ["TAKE ONE TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE"],
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
            "instructions": ["INJECT 25 UNITS SUBCUTANEOUSLY AT BEDTIME * DO NOT MIX OTHER", "INSULINS IN SAME SYRINGE AS GLARGINE. DISCARD VIAL 28 DAYS AFTER OPENING.  EACH", "VIAL EXPIRES 28 DAYS AFTER FIRST OPENING."],
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
            "instructions": ["INJECT 16 UNITS SUBCUTANEOUSLY EVERY MORNING AND INJECT 18 UNITS", "AT BEDTIME EACH VIAL EXPIRES 30 DAYS AFTER FIRST OPENING."],
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
            "instructions": ["TAKE ONE TABLET BY MOUTH FOUR TIMES DAILY WITH MEALS AS NEEDED", "FOR PAIN"],
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
            "instructions": ["TAKE TWO TABLETS BY MOUTH HOUR FOR 2 DAYS -- TAKE WITH FOOD --"],
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
            "instructions": ["APPLY SMALL AMOUNT TOPICALLY TO AFFECTED AREA TWICE A DAY TO", "THREE TIMES A DAY FOR 30 DAYS"],
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
            "instructions": ["TAKE ONE-HALF TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE --", "AVOID GRAPEFRUIT JUICE --"],
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
            "instructions": ["TAKE ONE TABLET BY MOUTH FOUR TIMES DAILY WITH MEALS AS NEEDED", "FOR PAIN"],
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
            "instructions": ["USE 1 STRIP FOR BLOOD GLUCOSE TESTING AS DIRECTED"],
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
            "instructions": ["INJECT 25 UNITS SUBCUTANEOUSLY AT BEDTIME * DO NOT MIX OTHER", "INSULINS IN SAME SYRINGE AS GLARGINE. DISCARD VIAL 28 DAYS AFTER OPENING.  EACH", "VIAL EXPIRES 28 DAYS AFTER FIRST OPENING."],
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
            "instructions": ["INJECT 16 UNITS SUBCUTANEOUSLY EVERY MORNING AND INJECT 18 UNITS", "AT BEDTIME EACH VIAL EXPIRES 30 DAYS AFTER FIRST OPENING."],
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
            "instructions": ["SPRAY 2 SPRAYS MOUTH MINUTE FOR 30 DAYS"],
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
            "instructions": ["TAKE ONE TABLET BY MOUTH TWICE DAILY WITH MEALS FOR DIABETES."],
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
            "instructions": ["TAKE ONE TABLET BY MOUTH TWICE A DAY -- TAKE WITH FOOD IF GI"],
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
            "instructions": ["TAKE TWO TABLETS BY MOUTH HOUR FOR 2 DAYS -- TAKE WITH FOOD --"],
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
            "instructions": ["APPLY SMALL AMOUNT TOPICALLY TO AFFECTED AREA TWICE A DAY TO", "THREE TIMES A DAY FOR 30 DAYS"],
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
            "instructions": ["TAKE ONE TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE"],
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
            "instructions": ["TAKE ONE-HALF TABLET BY MOUTH AT BEDTIME TO LOWER YOUR", "CHOLESTEROL. AVOID CONSUMING GRAPEFRUIT PRODUCTS.  CALL YOUR PROVIDER IF YOU", "HAVE UNEXPLAINED MUSCLE PAIN, TENDERNESS OR  WEAKNESS."],
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
            "instructions": ["MIX 1 GALLON IN WATER AND DRINK AS DIRECTED FOR 1 DAY DISSOLVE 1", "BOTTLE"],
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
    "model": [{
        "name": "problem",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Problem:            Posttraumatic Stress Disorder (ICD-9-CM 309.81)", "Problem:            MILD COGNITIVE IMPAIRMENT (ICD-9-CM 799.9)", "Problem:            Diabetes with neurological Manifestations, type i [Juvenile type], not stated as (ICD-9-CM 250.61)", "Problem:            Hyperlipidemia (ICD-9-CM 272.4)", "Problem:            TRAUMATIC BRAIN INJURY (ICD-9-CM 799.9)"],
        "found": true,
        "processed": {}
    }, {
        "name": "problemcomments",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Comments:           AWAITING A COMP AND PEN EXAM", "Comments:           this is only a test", "Comments:           --", "Comments:           --", "Comments:           --"],
        "found": true,
        "processed": {}
    }, {
        "name": "generic",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Source: VA", "Last Updated: 05 Nov 2014 @ 0813", "Sorted By: Date/Time Entered (Descending) then alphabetically by Problem", "Date/Time Entered:  11 Feb 2013 @ 1200", "Location:           PORTLAND, OREGON VA MEDICAL CENTER", "Status:             ACTIVE", "Provider:           PROVIDER, ONE", "Date/Time Entered:  16 Jan 2013 @ 1200", "Location:           PORTLAND, OREGON VA MEDICAL CENTER", "Status:             ACTIVE", "Provider:           PROVIDER, ONE", "Date/Time Entered:  07 Dec 2012 @ 1200", "Location:           PORTLAND, OREGON VA MEDICAL CENTER", "Status:             ACTIVE", "Provider:           PROVIDER, ONE", "Date/Time Entered:  07 Dec 2012 @ 1200", "Location:           PORTLAND, OREGON VA MEDICAL CENTER", "Status:             ACTIVE", "Provider:           PROVIDER, ONE", "Date/Time Entered:  07 Dec 2012 @ 1200", "Location:           PORTLAND, OREGON VA MEDICAL CENTER", "Status:             ACTIVE", "Provider:           PROVIDER, ONE"],
        "found": true,
        "processed": {}
    }, {
        "name": "problem comments",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Your VA Problem List contains active health problems your VA providers", "are helping you to manage.  This information is available 3 calendar days", "after it has been entered.  It may not contain active problems managed by", "non-VA health care providers.  If you have any questions about your", "information, visit the FAQs or contact your VA health care team.", "comment #1", "Comment #2", "comment #3", "INDEPENDENT IN ADLs AND IADLs"],
        "found": true,
        "processed": {}
    }],
    "raw": ["---------------------------- VA PROBLEM LIST ----------------------------"],
    "processed": {
        "source": "VA",
        "last_updated": "05 Nov 2014 @ 0813",
        "sorted_by": "Date/Time Entered (Descending) then alphabetically by Problem",
        "problems": [{
            "problem": "Posttraumatic Stress Disorder (ICD-9-CM 309.81)",
            "date/time_entered": "11 Feb 2013 @ 1200",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "status": "ACTIVE",
            "provider": "PROVIDER, ONE",
            "comments": ["AWAITING A COMP AND PEN EXAM", "comment #1", "Comment #2", "comment #3"]
        }, {
            "problem": "MILD COGNITIVE IMPAIRMENT (ICD-9-CM 799.9)",
            "date/time_entered": "16 Jan 2013 @ 1200",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "status": "ACTIVE",
            "provider": "PROVIDER, ONE",
            "comments": ["this is only a test", "INDEPENDENT IN ADLs AND IADLs"]
        }, {
            "problem": "Diabetes with neurological Manifestations, type i [Juvenile type], not stated as (ICD-9-CM 250.61)",
            "date/time_entered": "07 Dec 2012 @ 1200",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "status": "ACTIVE",
            "provider": "PROVIDER, ONE",
            "comments": ["--"]
        }, {
            "problem": "Hyperlipidemia (ICD-9-CM 272.4)",
            "date/time_entered": "07 Dec 2012 @ 1200",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "status": "ACTIVE",
            "provider": "PROVIDER, ONE",
            "comments": ["--"]
        }, {
            "problem": "TRAUMATIC BRAIN INJURY (ICD-9-CM 799.9)",
            "date/time_entered": "07 Dec 2012 @ 1200",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "status": "ACTIVE",
            "provider": "PROVIDER, ONE",
            "comments": ["--"]
        }]
    },
    "found": true
}, {
    "name": "va_admission_discharge",
    "pattern": {},
    "multiple": false,
    "model": [{
        "name": "admindischarge",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["========================================================================="],
        "found": true,
        "processed": {}
    }, {
        "name": "summarystart",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["-----------------------------------------------------------------------------"],
        "found": true,
        "processed": {}
    }, {
        "name": "generic",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Source: VA", "Last Updated: 05 Nov 2014 @ 0813", "Sorted By: Admission Date/Time (Descending)", "Admission Date:       10 Dec 2012 @ 0935", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Admitting Physician:  PROVIDER, ONE", "Discharge Date:       11 Dec 2012 @ 1134", "Discharge Physician:  PROVIDER, ONE", "LOCAL TITLE: Discharge Summary", "STANDARD TITLE: DISCHARGE SUMMARY", "DICT DATE: DEC 10, 2012@10:40     ENTRY DATE: DEC 10, 2012@10:41:06", "DICTATED BY: PROVIDER, ONE          ATTENDING: PROVIDER, ONE", "URGENCY: routine                    STATUS: COMPLETED", "ATTENDING PHYSICIAN:", "PRIMARY CARE PROVIDER AND FACILIITY:", "PRINCIPAL DIAGNOSIS:", "OTHER DIAGNOSES TREATED OR IMPACTING TREATMENT THIS ADMISSION:", "PROCEDURES PERFORMED AT THIS HOSPITAL DURING CURRENT ADMISSION:", "SUMMARY:", "HOSPITAL COURSE:", "FUNCTIONAL STATUS:", "DISCHARGE MEDICATIONS:", "MEDICATIONS THAT HAVE BEEN DISCONTINUED:", "CLINICAL ISSUES REQUIRING FOLLOW UP DURING PC PHONE APT:", "ADDITIONAL FOLLOW UP APPOINTMENTS:", "FOLLOW UP LABS INCLUDING PATHOLOGY & MICROBIOLOGY:", "FOLLOW UP IMAGING AND PROCEDURES:", "Signed: 12/10/2012 16:15"],
        "found": true,
        "processed": {}
    }, {
        "name": "summary",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Discharge summaries are available 3 calendar days after they are", "completed. If you have any questions about your information please visit", "the FAQs or contact your VA health care team.", "DISCHARGE SUMMARY", "THIS IS ONLY A TEST", "(ABBREVIATED HPI, PE, AND PERTINENT LABS)", "(MAY INCLUDE ACTIVITY LEVEL, WORK RESTRICTIONS, OR DIET)", "(INDICATE ADDITIONS OR CHANGES WITH AN ASTERISK)", "1.", "2.", "3.", "SPECIALTY               EXPECTED DATE   SCHEDULED(Y/N)  POINT OF CONTACT", "1.", "2.", "3.", "TEST                    ORDERED(Y/N)    EXPECTED DATE IF NOT ORDERED", "1.", "2.", "3.", "PROCEDURE               ORDERED(Y/N)    EXPECTED DATE IF NOT ORDERED", "1.", "2.", "3.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "for TWO PROVIDER MD", "INTERNAL MEDICINE RESIDENT"],
        "found": true,
        "processed": {}
    }],
    "raw": ["--------------------- VA ADMISSIONS AND DISCHARGES ----------------------"],
    "processed": {
        "source": "VA",
        "last_updated": "05 Nov 2014 @ 0813",
        "sorted_by": "Admission Date/Time (Descending)",
        "admindischarge": [{
            "admission_date": "10 Dec 2012 @ 0935",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "admitting_physician": "PROVIDER, ONE",
            "discharge_date": "11 Dec 2012 @ 1134",
            "discharge_physician": "PROVIDER, ONE",
            "summary": ["DISCHARGE SUMMARY", "LOCAL TITLE: Discharge Summary", "STANDARD TITLE: DISCHARGE SUMMARY", "DICT DATE: DEC 10, 2012@10:40     ENTRY DATE: DEC 10, 2012@10:41: 06", "DICTATED BY: PROVIDER, ONE          ATTENDING: PROVIDER, ONE", "URGENCY: routine                    STATUS: COMPLETED", "THIS IS ONLY A TEST", "ATTENDING PHYSICIAN: ", "PRIMARY CARE PROVIDER AND FACILIITY: ", "PRINCIPAL DIAGNOSIS: ", "OTHER DIAGNOSES TREATED OR IMPACTING TREATMENT THIS ADMISSION: ", "PROCEDURES PERFORMED AT THIS HOSPITAL DURING CURRENT ADMISSION: ", "SUMMARY: ", "(ABBREVIATED HPI, PE, AND PERTINENT LABS)", "HOSPITAL COURSE: ", "FUNCTIONAL STATUS: ", "(MAY INCLUDE ACTIVITY LEVEL, WORK RESTRICTIONS, OR DIET)", "DISCHARGE MEDICATIONS: ", "(INDICATE ADDITIONS OR CHANGES WITH AN ASTERISK)", "MEDICATIONS THAT HAVE BEEN DISCONTINUED: ", "CLINICAL ISSUES REQUIRING FOLLOW UP DURING PC PHONE APT: ", "1.", "2.", "3.", "ADDITIONAL FOLLOW UP APPOINTMENTS: ", "SPECIALTY               EXPECTED DATE   SCHEDULED(Y/N)  POINT OF CONTACT", "1.", "2.", "3.", "FOLLOW UP LABS INCLUDING PATHOLOGY & MICROBIOLOGY: ", "TEST                    ORDERED(Y/N)    EXPECTED DATE IF NOT ORDERED", "1.", "2.", "3.", "FOLLOW UP IMAGING AND PROCEDURES: ", "PROCEDURE               ORDERED(Y/N)    EXPECTED DATE IF NOT ORDERED", "1.", "2.", "3.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 12/10/2012 16: 15", "for TWO PROVIDER MD", "INTERNAL MEDICINE RESIDENT"]
        }]
    },
    "found": true
}, {
    "name": "va_notes",
    "pattern": {},
    "multiple": false,
    "model": [{
        "name": "note start",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["=========================================================================", "=========================================================================", "=========================================================================", "=========================================================================", "=========================================================================", "=========================================================================", "=========================================================================", "=========================================================================", "=========================================================================", "=========================================================================", "=========================================================================", "=========================================================================", "=========================================================================", "========================================================================="],
        "found": true,
        "processed": {}
    }, {
        "name": "note datetime",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Date/Time:               23 Jul 2014 @ 0932", "Date/Time:               25 Jan 2013 @ 0701", "Date/Time:               25 Jan 2013 @ 0655", "Date/Time:               24 Jan 2013 @ 1437", "Date/Time:               24 Jan 2013 @ 1436", "Date/Time:               24 Jan 2013 @ 1435", "Date/Time:               24 Jan 2013 @ 1433", "Date/Time:               24 Jan 2013 @ 1431", "Date/Time:               24 Jan 2013 @ 1430", "Date/Time:               08 Jan 2013 @ 1145", "Date/Time:               07 Jan 2013 @ 1428", "Date/Time:               07 Jan 2013 @ 1427"],
        "found": true,
        "processed": {}
    }, {
        "name": "note section",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "------ : ------ : ------ 150 H     N/A  -----  N/A    SEGS:  N/A", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "------ : ------ : ------ N/A", "N/A  --------  N/A    SEGS  N/A", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------", "-------------------------------------------------------------------------"],
        "found": true,
        "processed": {}
    }, {
        "name": "generic",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Source: VA", "Last Updated: 05 Nov 2014 @ 0813", "Sorted By: Date/Time (Descending)", "Note Title:              AUDIOLOGY - GENERAL", "Location:                PORTLAND, OREGON VA MEDICAL CENTER", "Signed By:               PROVIDER, ONE", "Co-signed By:            PROVIDER, ONE", "Date/Time Signed:        23 Jul 2014 @ 0933", "LOCAL TITLE: AUDIOLOGY - GENERAL", "STANDARD TITLE: AUDIOLOGY NOTE", "DATE OF NOTE: JUL 23, 2014@09:32     ENTRY DATE: JUL 23, 2014@09:32:57", "AUTHOR: PROVIDER, ONE          EXP COSIGNER:", "URGENCY:                            STATUS: COMPLETED", "Signed: 07/23/2014 09:33", "Note Title:              CARDIOLOGY - FOLLOW-UP", "Location:                PORTLAND, OREGON VA MEDICAL CENTER", "Signed By:               PROVIDER, ONE", "Co-signed By:            PROVIDER, ONE", "Date/Time Signed:        25 Jan 2013 @ 0707", "LOCAL TITLE: CARDIOLOGY - FOLLOW-UP", "STANDARD TITLE: CARDIOLOGY OUTPATIENT NOTE", "DATE OF NOTE: JAN 25, 2013@07:01     ENTRY DATE: JAN 25, 2013@07:02:25", "AUTHOR: PROVIDER, TWO  EXP COSIGNER: PROVIDER, ONE", "URGENCY:                            STATUS: COMPLETED", "Past Cardiology History:Patient family history of cardiac stess and disease", "SUBJECTIVE:", "OBJECTIVE:", "Active Medications:", "Physical Exam:", "Vitals:", "98.5 F [36.9 C] (12/10/2012 09:24)", "190/70 (01/07/2013 15:27)", "88 (12/10/2012 09:24)", "BSA   : 2.569 sq. meters on  12/10/2012 09:24", "DEC 10, 2012@09:24:38   46.7", "Lab Studies:", "145 H :  102   :   25 H /             \\ N/A  /       MCV:", "6.5 H*:   25   :  1.2   \\             / N/A  \\       BANDS:", "ASSESSMENT/PLAN:", "IMPRESSION:", "PLAN:Order a series of test to include a stress test and a series of cardiac lab", "FELLOW SUPERVISION: Staffed with Dr. Provider who agrees with my assessment and", "Signed: 01/25/2013 07:07", "Cosigned: 02/11/2013 07:55", "Note Title:              INPAT - MED - MS - PROGRESS", "Location:                PORTLAND, OREGON VA MEDICAL CENTER", "Signed By:               PROVIDER, TWO", "Co-signed By:            PROVIDER, TWO", "Date/Time Signed:        25 Jan 2013 @ 0700", "LOCAL TITLE: INPAT - MED - MS - PROGRESS", "STANDARD TITLE: STUDENT INPATIENT NOTE", "DATE OF NOTE: JAN 25, 2013@06:55     ENTRY DATE: JAN 25, 2013@06:56:26", "AUTHOR: PROVIDER, TWO          EXP COSIGNER: PROVIDER, ONE", "URGENCY:                            STATUS: COMPLETED", "Patient presented and discussed at multi-disciplinary rounds today: Yes", "Signed: 01/25/2013 07:00", "Cosigned: 02/11/2013 07:55", "01/25/2013 ADDENDUM                      STATUS: COMPLETED", "Signed: 01/25/2013 11:48", "Note Title:              PHYSICAL THERAPY - INPATIENT NOTE", "Location:                PORTLAND, OREGON VA MEDICAL CENTER", "Signed By:               PROVIDER, ONE", "Co-signed By:            PROVIDER, ONE", "Date/Time Signed:        24 Jan 2013 @ 1438", "LOCAL TITLE: PHYSICAL THERAPY - INPATIENT NOTE", "STANDARD TITLE: PHYSICAL THERAPY INPATIENT NOTE", "DATE OF NOTE: JAN 24, 2013@14:37     ENTRY DATE: JAN 24, 2013@14:38", "AUTHOR: PROVIDER, ONE        EXP COSIGNER:", "URGENCY:                            STATUS: COMPLETED", "S:", "Pain level:", "Pain location:", "O:", "A: (progress toward goals)", "P:", "Signed: 01/24/2013 14:38", "Note Title:              INPAT - CT SURG - ADMIT", "Location:                PORTLAND, OREGON VA MEDICAL CENTER", "Signed By:               PROVIDER, ONE", "Co-signed By:            PROVIDER, ONE", "Date/Time Signed:        24 Jan 2013 @ 1437", "LOCAL TITLE: INPAT - CT SURG - ADMIT", "STANDARD TITLE: THORACIC SURGERY INPATIENT NOTE", "DATE OF NOTE: JAN 24, 2013@14:36     ENTRY DATE: JAN 24, 2013@14:37:02", "AUTHOR: PROVIDER, ONE        EXP COSIGNER:", "URGENCY:                            STATUS: COMPLETED", "Patient Name: MHVTESTVETERAN,ONE A", "S:  THIS IS ONLY A TEST", "O:   POD#   s/p:", "I/O:", "Last CHEM 7 After 0500 JAN 24, 2013:", "N/A    :  N/A   :  N/A  /", "N/A    :  N/A   :  N/A  \\", "Last CBC w/Diff After 0500 JAN 24, 2013:", "Active Medications:", "Neuro: AAO", "Pulm: CTAB", "CV: NRRR", "Abd: soft, NT, +BS", "Ext:", "A:", "P:", "Signed: 01/24/2013 14:37", "Note Title:              SPECIALTY CLINIC PROGRESS NOTE", "Location:                PORTLAND, OREGON VA MEDICAL CENTER", "Signed By:               PROVIDER, ONE", "Co-signed By:            PROVIDER, ONE", "Date/Time Signed:        24 Jan 2013 @ 1435", "LOCAL TITLE: SPECIALTY CLINIC PROGRESS NOTE", "STANDARD TITLE: NURSING NOTE", "DATE OF NOTE: JAN 24, 2013@14:35     ENTRY DATE: JAN 24, 2013@14:35:11", "AUTHOR: PROVIDER, ONE        EXP COSIGNER:", "URGENCY:                            STATUS: COMPLETED", "Signed: 01/24/2013 14:35", "Note Title:              DAILY PERIPHERAL LINE - MAINTENANCE", "Location:                PORTLAND, OREGON VA MEDICAL CENTER", "Signed By:               PROVIDER, ONE", "Co-signed By:            PROVIDER, ONE", "Date/Time Signed:        24 Jan 2013 @ 1434", "LOCAL TITLE: DAILY PERIPHERAL LINE - MAINTENANCE", "STANDARD TITLE: TEAM NOTE", "DATE OF NOTE: JAN 24, 2013@14:33     ENTRY DATE: JAN 24, 2013@14:33:56", "AUTHOR: PROVIDER, ONE        EXP COSIGNER:", "URGENCY:                            STATUS: COMPLETED", "Maintenance done: Jan 25,2013@07:00", "IV Type:Peripheral", "Location: Right hand", "Dressing: Dry and Intact", "Phlebitis (REQUIRED):", "Signed: 01/24/2013 14:34", "01/25/2013 ADDENDUM                      STATUS: COMPLETED", "Appearance/Behavior:", "Thought Processing:", "Thought Content:", "Signed: 01/25/2013 11:48", "Note Title:              GEN SURG - ATTENDING", "Location:                PORTLAND, OREGON VA MEDICAL CENTER", "Signed By:               PROVIDER, ONE", "Co-signed By:            PROVIDER, ONE", "Date/Time Signed:        24 Jan 2013 @ 1432", "LOCAL TITLE: GEN SURG - ATTENDING", "STANDARD TITLE: SURGERY ATTENDING NOTE", "DATE OF NOTE: JAN 24, 2013@14:31     ENTRY DATE: JAN 24, 2013@14:32:05", "AUTHOR: PROVIDER, ONE        EXP COSIGNER:", "URGENCY:                            STATUS: COMPLETED", "Signed: 01/24/2013 14:32", "01/25/2013 ADDENDUM                      STATUS: COMPLETED", "ID:  ONE A MHVTESTVETERAN is a 64 y/o WHITEMALE who", "Source:", "CC:\" \"", "HPI:", "Past Medical History:", "Previous Cognitive Testing:", "DEM: SLUMS SCORE                                12/10/2012", "Medications:  Active Medications:", "Habits:", "Family History:", "Social History:", "Mood:", "Sleep:", "Energy:", "Appetite:", "Concentration:", "Obsessive Thoughts:", "Compulsions:", "Hallucinations:", "Delusions:", "Anxiety:", "Level of Consciousness:", "Orientation:  /12", "Attention:  ()Passed Screen  or /8", "Language Comprehension:  ()Passed Screen or /6", "Language Repetition:  ()Passed Screen or /12", "Naming:  ()Passed Screen or /8", "Construction:  ()Passed Screen or /6", "Memory:  /12", "Calculation:  ()Passed Screen or /4", "Similarities:  ()Passed Screen or /8", "Judgment:  ()Passed Screen or /6", "Station and Gait:", "Cranial Nerves:", "Motor Exam:", "Sensory Exam:", "Reflexes:", "Coordination:", "Signed: 01/25/2013 11:47", "Note Title:              PDHC - NEW PCP", "Location:                PORTLAND, OREGON VA MEDICAL CENTER", "Signed By:               PROVIDER, ONE", "Co-signed By:            PROVIDER, ONE", "Date/Time Signed:        24 Jan 2013 @ 1431", "LOCAL TITLE: PDHC - NEW PCP", "STANDARD TITLE: OEF/OIF NOTE", "DATE OF NOTE: JAN 24, 2013@14:30     ENTRY DATE: JAN 24, 2013@14:31:16", "AUTHOR: PROVIDER, ONE        EXP COSIGNER:", "URGENCY:                            STATUS: COMPLETED", "Signed: 01/24/2013 14:31", "01/25/2013 ADDENDUM                      STATUS: COMPLETED", "Signed: 01/25/2013 11:47", "Note Title:              10-10M", "Location:                VA SOUTHERN OREGON REHABILITATION CENTER CLINICS", "Signed By:               PROVIDER, THREE", "Co-signed By:            PROVIDER, THREE", "Date/Time Signed:        08 Jan 2013 @ 1146", "LOCAL TITLE: 10-10M", "STANDARD TITLE: PHYSICIAN NOTE", "DATE OF NOTE: JAN 08, 2013@11:45     ENTRY DATE: JAN 08, 2013@11:45:58", "AUTHOR: PROVIDER, THREE      EXP COSIGNER:", "URGENCY:                            STATUS: COMPLETED", "Signed: 01/08/2013 11:46", "Note Title:              SECURE MESSAGING", "Location:                PORTLAND, OREGON VA MEDICAL CENTER", "Signed By:               PROVIDER, ONE", "Co-signed By:            PROVIDER, ONE", "Date/Time Signed:        07 Jan 2013 @ 1429", "LOCAL TITLE: SECURE MESSAGING", "STANDARD TITLE: MHV DIALOG NOTE", "DATE OF NOTE: JAN 07, 2013@14:28     ENTRY DATE: JAN 07, 2013@14:28:52", "AUTHOR: PROVIDER, ONE        EXP COSIGNER:", "URGENCY:                            STATUS: COMPLETED", "Signed: 01/07/2013 14:29", "01/07/2013 ADDENDUM                      STATUS: COMPLETED", "*Annual OTC/Non-VA Med Review:", "DM NEPHROPATHY SCREENING:", "Comment: test patient", "Eval of Positive Depression Screen:", "ASSESSMENT: Suicide risk screen is negative.", "evaluation, the following disposition plan will be implemented:", "Comment: test patient", "*Influenza Reminder:", "Influenza Dose: 0.5 ml", "Route/Site: IM Left Deltoid", "Lot Number: 1225 1P  Exp. Date:  May 31, 2013 (Manufacturer:", "Given by: Staff Nurse", "pain, fever) and given the following instructions:", "*Nurse/MA BP&gt;=140/90:", "Repeat BP:", "*Diabetes Foot Exam:", "Diabetic Visual Foot Exam:", "Pedal Pulse Foot Exam:", "Sensory Foot Exam by Monofilament:", "*Vitals:", "Pain:", "rest and comfort:", "Elevated Pain Score:", "Latest pain score reported by patient: 8 (12/10/2012 09:24).", "*Diabetes-Retinal Exam:", "Result: No Retinopathy", "Verify month and year: January 2, 2013", "Results: outside hospital", "CHF ACE/ARB Review:", "Diabetes or CVD Elevated LDL:", "Comment: test patient", "Eval Positive AUDIT-C Screen:", "HTN/DM BP&gt;140/90:", "Repeat BP:", "Comment: test patient", "Comment: test patient", "Evaluation of + Depression Screen:", "ASSESSMENT: Suicide risk screen is negative.", "evaluation, the following disposition plan will be implemented:", "Comment: test patient", "Evaluation of + PTSD Screen:", "ASSESSMENT: Suicide risk screen is negative.", "PROVIDER EVALUATION: The results of the PTSD screen have been", "evaluation, the following disposition plan will be implemented:", "Comment: test patient", "Signed: 01/07/2013 15:31", "Note Title:              MHD - INDIVIDUAL NOTE", "Location:                PORTLAND, OREGON VA MEDICAL CENTER", "Signed By:               PROVIDER, ONE", "Co-signed By:            PROVIDER, ONE", "Date/Time Signed:        07 Jan 2013 @ 1428", "LOCAL TITLE: MHD - INDIVIDUAL NOTE", "STANDARD TITLE: MENTAL HEALTH OUTPATIENT NOTE", "DATE OF NOTE: JAN 07, 2013@14:27     ENTRY DATE: JAN 07, 2013@14:28:02", "AUTHOR: PROVIDER, ONE        EXP COSIGNER:", "URGENCY:                            STATUS: COMPLETED", "Signed: 01/07/2013 14:28", "Cosigned: 05/03/2013 09:43"],
        "found": true,
        "processed": {}
    }, {
        "name": "raw note",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["VA Notes from January 1, 2013 forward are available 3 calendar days after", "they have been completed and signed by all required members of your VA", "health care team. If you have any questions about your information please", "visit the FAQs or contact your VA health care team.", "THIS IS ONLY A TEST.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Mr. ONE A MHVTESTVETERAN is a 64 yo M with a PMHx as below who", "presents in routine follow-up.", "(uncle and older brother) all with diabetes.", "1) Amlodipine besylate 5mg tab take one-half tablet by", "mouth every day for blood pressure", "2) Donepezil hcl 5mg tab take one tablet by mouth every", "morning", "3) Fluoxetine hcl 10mg cap take one capsule by mouth", "every morning", "4) Hctz 25/triamterene 37.5mg tab take one-half tablet", "(12.5/18.75 mg) by mouth every day", "active non-va medications                              status", "1) Non-va fish oil cap/tab 1 cap/tab mouth every day", "2) Non-va ginkgo biloba small amount mouth every day", "3) Non-va kava cap/tab 1 cap/tab mouth every day", "4) Non-va lisinopril 5mg tab 2.5mg mouth every day", "8 total medications)", "No assessments on file.", "BODY MASS INDEX", "GEN -", "NECK -", "CV -", "PULM -", "EXT -", "Mixed dates for most recent tests of this panel", "No CBC in last year", "N/A", "N/A", "Mr. ONE A MHVTESTVETERAN is a 64 yo M with a PMHx as above who", "presents in routine follow-up.", "1.", "2.", "3.", "4.", "panels.  Will also review patient's current medication history and revise", "accordingly.", "plan.", "/es/ TWO PROVIDER, MD", "Chief of  Clinical Appl Coord", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "*** INPAT - MED - MS - PROGRESS Has ADDENDA ***", "during patient interview&lt; ia sked Mr. MHV if his family had a history of", "cardiac issues and diabetes, he replied that yes there was a history of both", "with his uncle and older brother.  This new line of questioning was in response", "to a comment he made earlier to his RN. Plan to follow up with Dr. Provider, the", "resident which is providing care for Mr. MHV.", "The patient was staffed with Dr. Provider who agrees with my assessment and plan.", "/es/ TWO PROVIDER", "Chief of  Clinical Appl Coord", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "this is only a test of making an addendum", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "THIS IS ONLY A TEST", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "I have seen and discussed the patient with my supervising", "practitioner, Dr. Two Provider, and Dr. Three Provider", "who is in agreement with the assesment and plan.", "No vitals data available in last 24 hours.", "\\   N/A   /        MCV   N/A", "/   N/A   \\        BANDS N/A", "Incision intact", "No hematoma", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "This is only a test.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "*** DAILY PERIPHERAL LINE - MAINTENANCE Has ADDENDA ***", "Site flushed  with Saline   Patent", "0 = No symptoms.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "This is a well developed and well nourished Caucasian MALE seated in no", "apparent distress.", "Speech is regular rate and rhythm, normal volume with no thought disorder.", "Patient thoughts marked by no evidence of psychotic symptoms, no evidence of SI", "or HI.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "*** GEN SURG - ATTENDING Has ADDENDA ***", "THIS IS ONLY A TEST", "/es/ PROVIDER ONE MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "is", "referred for Dementia Clinic Evaluation.", "DEMENTIA EVALUATIONS", "28", "1) Amlodipine besylate 5mg tab take one-half tablet by", "mouth every day for blood pressure", "2) Donepezil hcl 5mg tab take one tablet by mouth every", "morning", "3) Fluoxetine hcl 10mg cap take one capsule by mouth", "every morning", "4) Hctz 25/triamterene 37.5mg tab take one-half tablet", "(12.5/18.75 mg) by mouth every day", "active non-va medications                              status", "1) Non-va fish oil cap/tab 1 cap/tab mouth every day", "2) Non-va ginkgo biloba small amount mouth every day", "3) Non-va kava cap/tab 1 cap/tab mouth every day", "4) Non-va lisinopril 5mg tab 2.5mg mouth every day", "8 total medications)", "METHOCARBAMOL, TERAZOSIN, BACTRIM, TRAMADOL, TRIMETHOPRIM, IMIPRAMINE", "REVIEW OF SYSTEMS", "ST LOUIS MENTAL STATUS EXAMINATION", "ACTIVITIES OF DAILY LIVING SCORE", "INSTRUMENTAL ACTIVITIES OF DAILY LIVING SCORE", "NEUROBEHAVIORAL COGNITIVE STATUS EXAM", "NEUROLOGICAL EXAM", "MENTAL STATUS EXAM", "Appearance/Behavior", "Thought Processing", "Thought Content", "Mood/Affect", "Sensorium/Intellect", "Insight/Judgment", "IMAGING STUDIES", "LABORATORY STUDIES", "DIAGNOSTIC FORMULATION", "DSM IV DIAGNOSIS", "Axis I", "Axis II", "Axis III", "Axis IV", "Axis V", "TREATMENT PLAN", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "*** PDHC - NEW PCP Has ADDENDA ***", "This is only a test.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "this is only a test", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Testing for national and VISN for Open Notes project", "/es/ THREE PROVIDER MD", "PACT", "*** SECURE MESSAGING Has ADDENDA ***", "THIS IS A TEST", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "CLINICAL REMINDER ACTIVITY", "Reviewed medication list with patient.  New OTC/Non-VA medications to", "be added to list.", "Angiotensin II receptor blocker therapy is contraindicated.", "Rescreen with PHQ-2 if most recent previous screen is &gt; 1 day old.", "A PHQ-2 screen was performed. The score was 0 which is a negative", "screen for depression.", "1. Little interest or pleasure in doing things", "Not at all", "2. Feeling down, depressed, or hopeless", "Not at all", "Are you feeling hopeless about the present or future?  NO", "Have you had thoughts recently about taking your life?   NO", "PROVIDER EVALUATION The results of the PHQ depression screen have been", "reviewed. I have personally evaluated the patient including inquiry", "about feelings of hopelessness, suicidal thoughts, suicide plan if", "thoughts are present, and prior suicide attempts. Based on the", "No mental health condition requiring further intervention.", "Patient was given influenza vaccination today for flu prevention.", "Novartis)", "Patient was given a copy of 2012-2013 Vaccine Information Statement", "for Influenza and verbalized an understanding of the document.", "Patient has been advised of possible side effects", "(rash, hives, nausea, difficulty breathing, redness, unusual", "*Notify the nurse immediately if any side effects are experienced.", "*If any urgent or emergent problems are experienced after leaving", "the clinical area report to the nearest emergency room or call", "911.", "190/70", "Visual foot exam is normal.", "Pedal pulse foot exam is normal.", "Monofilament sensory foot exam is normal.", "3", "What does your pain level need to be for you to experience", "Retinal exam done within the past year at an outside location.", "Retinal exam done within the past year at an outside location.", "Medications reviewed for ACE inhibitor/Angiotensin II receptor blocker", "therapy.", "Current medications include ACE inhibitor/Angiotensin receptor blocker", "therapy.", "No lipid treatment change is needed based on patient's current status.", "SCREEN FOR ALCOHOL (AUDIT-C)", "An alcohol screening test (AUDIT-C) was negative (score=0).", "1. How often did you have a drink containing alcohol in the past", "year?", "Never", "2. How many drinks containing alcohol did you have on a typical day", "when you were drinking in the past year?", "Response not required due to responses to other questions.", "3. How often did you have six or more drinks on one occasion in the", "past year?", "Response not required due to responses to other questions.", "The patient reports drinking below the recommended limits.", "The patient was advised to continue to drink within recommended", "limits, which were reviewed with patient.  The medical risks of", "alcohol and the risks of drinking over the safe limits were", "reviewed.  This issue will be addressed at the next yearly", "screening.", "190/70", "The patient's blood pressure is usually adequately controlled.  No", "medication changes are indicated at this time.", "Based on the patient's comorbidities and condition, no education to", "improve BP control is warranted at this time.", "Are you feeling hopeless about the present or future?  NO", "Have you had thoughts recently about taking your life?   NO", "PROVIDER EVALUATION The results of the PHQ depression screen have been", "reviewed. I have personally evaluated the patient including inquiry", "about feelings of hopelessness, suicidal thoughts, suicide plan if", "thoughts are present, and prior suicide attempts. Based on the", "No mental health condition requiring further intervention.", "Are you feeling hopeless about the present or future?  NO", "Have you had thoughts recently about taking your life?   NO", "reviewed. I have personally evaluated the patient including inquiry", "about feelings of hopelessness, suicidal thoughts, suicide plan if", "thoughts are present, and prior suicide attempts. Based on the", "No mental health condition requiring further intervention.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "THIS IS A TEST.  THIS IS ONLY A TEST", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "for"],
        "found": true,
        "processed": {}
    }],
    "raw": ["------------------------------- VA NOTES --------------------------------"],
    "processed": {
        "source": "VA",
        "last_updated": "05 Nov 2014 @ 0813",
        "sorted_by": "Date/Time (Descending)",
        "newnote": false,
        "notes": [{
            "date_time": "23 Jul 2014 @ 0932",
            "note_title": "AUDIOLOGY - GENERAL",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "signed_by": "PROVIDER, ONE",
            "co-signed_by": "PROVIDER, ONE",
            "date/time_signed": "23 Jul 2014 @ 0933",
            "raw_note": ["LOCAL TITLE: AUDIOLOGY - GENERAL", "STANDARD TITLE: AUDIOLOGY NOTE", "DATE OF NOTE: JUL 23, 2014@09:32     ENTRY DATE: JUL 23, 2014@09:32: 57", "AUTHOR: PROVIDER, ONE          EXP COSIGNER: ", "URGENCY:                            STATUS: COMPLETED", "THIS IS ONLY A TEST.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 07/23/2014 09: 33"]
        }, {
            "date_time": "25 Jan 2013 @ 0701",
            "note_title": "CARDIOLOGY - FOLLOW-UP",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "signed_by": "PROVIDER, ONE",
            "co-signed_by": "PROVIDER, ONE",
            "date/time_signed": "25 Jan 2013 @ 0707",
            "raw_note": ["LOCAL TITLE: CARDIOLOGY - FOLLOW-UP", "STANDARD TITLE: CARDIOLOGY OUTPATIENT NOTE", "DATE OF NOTE: JAN 25, 2013@07:01     ENTRY DATE: JAN 25, 2013@07:02: 25", "AUTHOR: PROVIDER, TWO  EXP COSIGNER: PROVIDER, ONE", "URGENCY:                            STATUS: COMPLETED", "Mr. ONE A MHVTESTVETERAN is a 64 yo M with a PMHx as below who", "presents in routine follow-up.", "Past Cardiology History: Patient family history of cardiac stess and disease", "(uncle and older brother) all with diabetes.", "SUBJECTIVE: ", "OBJECTIVE: ", "Active Medications: ", "1) Amlodipine besylate 5mg tab take one-half tablet by", "mouth every day for blood pressure", "2) Donepezil hcl 5mg tab take one tablet by mouth every", "morning", "3) Fluoxetine hcl 10mg cap take one capsule by mouth", "every morning", "4) Hctz 25/triamterene 37.5mg tab take one-half tablet", "(12.5/18.75 mg) by mouth every day", "active non-va medications                              status", "1) Non-va fish oil cap/tab 1 cap/tab mouth every day", "2) Non-va ginkgo biloba small amount mouth every day", "3) Non-va kava cap/tab 1 cap/tab mouth every day", "4) Non-va lisinopril 5mg tab 2.5mg mouth every day", "8 total medications)", "Physical Exam: ", "Vitals: ", "98.5 F [36.9 C] (12/10/2012 09: 24)", "190/70 (01/07/2013 15: 27)", "88 (12/10/2012 09: 24)", "No assessments on file.", "BSA   : 2.569 sq. meters on  12/10/2012 09: 24", "BODY MASS INDEX", "DEC 10, 2012@09:24: 38   46.7", "GEN -", "NECK -", "CV -", "PULM -", "EXT -", "Lab Studies: ", "Mixed dates for most recent tests of this panel", "No CBC in last year", "145 H :  102   :   25 H /             \\ N/A  /       MCV: ", "N/A", "6.5 H*:   25   :  1.2   \\             / N/A  \\       BANDS: ", "N/A", "ASSESSMENT/PLAN: ", "Mr. ONE A MHVTESTVETERAN is a 64 yo M with a PMHx as above who", "presents in routine follow-up.", "IMPRESSION: ", "1.", "2.", "3.", "4.", "PLAN: Order a series of test to include a stress test and a series of cardiac lab", "panels.  Will also review patient's current medication history and revise", "accordingly.", "FELLOW SUPERVISION: Staffed with Dr. Provider who agrees with my assessment and", "plan.", "/es/ TWO PROVIDER, MD", "Chief of  Clinical Appl Coord", "Signed: 01/25/2013 07: 07", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Cosigned: 02/11/2013 07: 55"]
        }, {
            "date_time": "25 Jan 2013 @ 0655",
            "note_title": "INPAT - MED - MS - PROGRESS",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "signed_by": "PROVIDER, TWO",
            "co-signed_by": "PROVIDER, TWO",
            "date/time_signed": "25 Jan 2013 @ 0700",
            "raw_note": ["LOCAL TITLE: INPAT - MED - MS - PROGRESS", "STANDARD TITLE: STUDENT INPATIENT NOTE", "DATE OF NOTE: JAN 25, 2013@06:55     ENTRY DATE: JAN 25, 2013@06:56: 26", "AUTHOR: PROVIDER, TWO          EXP COSIGNER: PROVIDER, ONE", "URGENCY:                            STATUS: COMPLETED", "*** INPAT - MED - MS - PROGRESS Has ADDENDA ***", "Patient presented and discussed at multi-disciplinary rounds today: Yes", "during patient interview&lt; ia sked Mr. MHV if his family had a history of", "cardiac issues and diabetes, he replied that yes there was a history of both", "with his uncle and older brother.  This new line of questioning was in response", "to a comment he made earlier to his RN. Plan to follow up with Dr. Provider, the", "resident which is providing care for Mr. MHV.", "The patient was staffed with Dr. Provider who agrees with my assessment and plan.", "/es/ TWO PROVIDER", "Chief of  Clinical Appl Coord", "Signed: 01/25/2013 07: 00", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Cosigned: 02/11/2013 07: 55", "01/25/2013 ADDENDUM                      STATUS: COMPLETED", "this is only a test of making an addendum", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/25/2013 11: 48"]
        }, {
            "date_time": "24 Jan 2013 @ 1437",
            "note_title": "PHYSICAL THERAPY - INPATIENT NOTE",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "signed_by": "PROVIDER, ONE",
            "co-signed_by": "PROVIDER, ONE",
            "date/time_signed": "24 Jan 2013 @ 1438",
            "raw_note": ["LOCAL TITLE: PHYSICAL THERAPY - INPATIENT NOTE", "STANDARD TITLE: PHYSICAL THERAPY INPATIENT NOTE", "DATE OF NOTE: JAN 24, 2013@14:37     ENTRY DATE: JAN 24, 2013@14: 38", "AUTHOR: PROVIDER, ONE        EXP COSIGNER: ", "URGENCY:                            STATUS: COMPLETED", "S: ", "Pain level: ", "Pain location: ", "O: ", "A: (progress toward goals)", "P: ", "THIS IS ONLY A TEST", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/24/2013 14: 38"]
        }, {
            "date_time": "24 Jan 2013 @ 1436",
            "note_title": "INPAT - CT SURG - ADMIT",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "signed_by": "PROVIDER, ONE",
            "co-signed_by": "PROVIDER, ONE",
            "date/time_signed": "24 Jan 2013 @ 1437",
            "raw_note": ["LOCAL TITLE: INPAT - CT SURG - ADMIT", "STANDARD TITLE: THORACIC SURGERY INPATIENT NOTE", "DATE OF NOTE: JAN 24, 2013@14:36     ENTRY DATE: JAN 24, 2013@14:37: 02", "AUTHOR: PROVIDER, ONE        EXP COSIGNER: ", "URGENCY:                            STATUS: COMPLETED", "I have seen and discussed the patient with my supervising", "practitioner, Dr. Two Provider, and Dr. Three Provider", "who is in agreement with the assesment and plan.", "Patient Name: MHVTESTVETERAN,ONE A", "S: THIS IS ONLY A TEST", "O:   POD#   s/p: ", "No vitals data available in last 24 hours.", "I/O: ", "Last CHEM 7 After 0500 JAN 24, 2013: ", "N/A    :  N/A   : N/A  /", "N/A    :  N/A   : N/A  \\", "Last CBC w/Diff After 0500 JAN 24, 2013: ", "\\   N/A   /        MCV   N/A", "/   N/A   \\        BANDS N/A", "Active Medications: ", "Neuro: AAO", "Pulm: CTAB", "CV: NRRR", "Abd: soft, NT, +BS", "Ext: ", "Incision intact", "No hematoma", "A: ", "P: ", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/24/2013 14: 37"]
        }, {
            "date_time": "24 Jan 2013 @ 1435",
            "note_title": "SPECIALTY CLINIC PROGRESS NOTE",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "signed_by": "PROVIDER, ONE",
            "co-signed_by": "PROVIDER, ONE",
            "date/time_signed": "24 Jan 2013 @ 1435",
            "raw_note": ["LOCAL TITLE: SPECIALTY CLINIC PROGRESS NOTE", "STANDARD TITLE: NURSING NOTE", "DATE OF NOTE: JAN 24, 2013@14:35     ENTRY DATE: JAN 24, 2013@14:35: 11", "AUTHOR: PROVIDER, ONE        EXP COSIGNER: ", "URGENCY:                            STATUS: COMPLETED", "This is only a test.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/24/2013 14: 35"]
        }, {
            "date_time": "24 Jan 2013 @ 1433",
            "note_title": "DAILY PERIPHERAL LINE - MAINTENANCE",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "signed_by": "PROVIDER, ONE",
            "co-signed_by": "PROVIDER, ONE",
            "date/time_signed": "24 Jan 2013 @ 1434",
            "raw_note": ["LOCAL TITLE: DAILY PERIPHERAL LINE - MAINTENANCE", "STANDARD TITLE: TEAM NOTE", "DATE OF NOTE: JAN 24, 2013@14:33     ENTRY DATE: JAN 24, 2013@14:33: 56", "AUTHOR: PROVIDER, ONE        EXP COSIGNER: ", "URGENCY:                            STATUS: COMPLETED", "*** DAILY PERIPHERAL LINE - MAINTENANCE Has ADDENDA ***", "Maintenance done: Jan 25,2013@07: 00", "IV Type: Peripheral", "Location: Right hand", "Site flushed  with Saline   Patent", "Dressing: Dry and Intact", "Phlebitis (REQUIRED): ", "0 = No symptoms.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/24/2013 14: 34", "01/25/2013 ADDENDUM                      STATUS: COMPLETED", "Appearance/Behavior: ", "This is a well developed and well nourished Caucasian MALE seated in no", "apparent distress.", "Thought Processing: ", "Speech is regular rate and rhythm, normal volume with no thought disorder.", "Thought Content: ", "Patient thoughts marked by no evidence of psychotic symptoms, no evidence of SI", "or HI.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/25/2013 11: 48"]
        }, {
            "date_time": "24 Jan 2013 @ 1431",
            "note_title": "GEN SURG - ATTENDING",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "signed_by": "PROVIDER, ONE",
            "co-signed_by": "PROVIDER, ONE",
            "date/time_signed": "24 Jan 2013 @ 1432",
            "raw_note": ["LOCAL TITLE: GEN SURG - ATTENDING", "STANDARD TITLE: SURGERY ATTENDING NOTE", "DATE OF NOTE: JAN 24, 2013@14:31     ENTRY DATE: JAN 24, 2013@14:32: 05", "AUTHOR: PROVIDER, ONE        EXP COSIGNER: ", "URGENCY:                            STATUS: COMPLETED", "*** GEN SURG - ATTENDING Has ADDENDA ***", "THIS IS ONLY A TEST", "/es/ PROVIDER ONE MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/24/2013 14: 32", "01/25/2013 ADDENDUM                      STATUS: COMPLETED", "ID: ONE A MHVTESTVETERAN is a 64 y/o WHITEMALE who", "is", "referred for Dementia Clinic Evaluation.", "Source: ", "CC: \" \"", "HPI: ", "Past Medical History: ", "Previous Cognitive Testing: ", "DEMENTIA EVALUATIONS", "DEM: SLUMS SCORE                                12/10/2012", "28", "Medications:  Active Medications: ", "1) Amlodipine besylate 5mg tab take one-half tablet by", "mouth every day for blood pressure", "2) Donepezil hcl 5mg tab take one tablet by mouth every", "morning", "3) Fluoxetine hcl 10mg cap take one capsule by mouth", "every morning", "4) Hctz 25/triamterene 37.5mg tab take one-half tablet", "(12.5/18.75 mg) by mouth every day", "active non-va medications                              status", "1) Non-va fish oil cap/tab 1 cap/tab mouth every day", "2) Non-va ginkgo biloba small amount mouth every day", "3) Non-va kava cap/tab 1 cap/tab mouth every day", "4) Non-va lisinopril 5mg tab 2.5mg mouth every day", "8 total medications)", "METHOCARBAMOL, TERAZOSIN, BACTRIM, TRAMADOL, TRIMETHOPRIM, IMIPRAMINE", "Habits: ", "Family History: ", "Social History: ", "REVIEW OF SYSTEMS", "Mood: ", "Sleep: ", "Energy: ", "Appetite: ", "Concentration: ", "Obsessive Thoughts: ", "Compulsions: ", "Hallucinations: ", "Delusions: ", "Anxiety: ", "ST LOUIS MENTAL STATUS EXAMINATION", "ACTIVITIES OF DAILY LIVING SCORE", "INSTRUMENTAL ACTIVITIES OF DAILY LIVING SCORE", "NEUROBEHAVIORAL COGNITIVE STATUS EXAM", "Level of Consciousness: ", "Orientation: /12", "Attention: ()Passed Screen  or /8", "Language Comprehension: ()Passed Screen or /6", "Language Repetition: ()Passed Screen or /12", "Naming: ()Passed Screen or /8", "Construction: ()Passed Screen or /6", "Memory: /12", "Calculation: ()Passed Screen or /4", "Similarities: ()Passed Screen or /8", "Judgment: ()Passed Screen or /6", "NEUROLOGICAL EXAM", "Station and Gait: ", "Cranial Nerves: ", "Motor Exam: ", "Sensory Exam: ", "Reflexes: ", "Coordination: ", "MENTAL STATUS EXAM", "Appearance/Behavior", "Thought Processing", "Thought Content", "Mood/Affect", "Sensorium/Intellect", "Insight/Judgment", "IMAGING STUDIES", "LABORATORY STUDIES", "DIAGNOSTIC FORMULATION", "DSM IV DIAGNOSIS", "Axis I", "Axis II", "Axis III", "Axis IV", "Axis V", "TREATMENT PLAN", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/25/2013 11: 47"]
        }, {
            "date_time": "24 Jan 2013 @ 1430",
            "note_title": "PDHC - NEW PCP",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "signed_by": "PROVIDER, ONE",
            "co-signed_by": "PROVIDER, ONE",
            "date/time_signed": "24 Jan 2013 @ 1431",
            "raw_note": ["LOCAL TITLE: PDHC - NEW PCP", "STANDARD TITLE: OEF/OIF NOTE", "DATE OF NOTE: JAN 24, 2013@14:30     ENTRY DATE: JAN 24, 2013@14:31: 16", "AUTHOR: PROVIDER, ONE        EXP COSIGNER: ", "URGENCY:                            STATUS: COMPLETED", "*** PDHC - NEW PCP Has ADDENDA ***", "This is only a test.", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/24/2013 14: 31", "01/25/2013 ADDENDUM                      STATUS: COMPLETED", "this is only a test", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/25/2013 11: 47"]
        }, {
            "date_time": "08 Jan 2013 @ 1145",
            "note_title": "10-10M",
            "location": "VA SOUTHERN OREGON REHABILITATION CENTER CLINICS",
            "signed_by": "PROVIDER, THREE",
            "co-signed_by": "PROVIDER, THREE",
            "date/time_signed": "08 Jan 2013 @ 1146",
            "raw_note": ["LOCAL TITLE: 10-10M", "STANDARD TITLE: PHYSICIAN NOTE", "DATE OF NOTE: JAN 08, 2013@11:45     ENTRY DATE: JAN 08, 2013@11:45: 58", "AUTHOR: PROVIDER, THREE      EXP COSIGNER: ", "URGENCY:                            STATUS: COMPLETED", "Testing for national and VISN for Open Notes project", "/es/ THREE PROVIDER MD", "PACT", "Signed: 01/08/2013 11: 46"]
        }, {
            "date_time": "07 Jan 2013 @ 1428",
            "note_title": "SECURE MESSAGING",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "signed_by": "PROVIDER, ONE",
            "co-signed_by": "PROVIDER, ONE",
            "date/time_signed": "07 Jan 2013 @ 1429",
            "raw_note": ["LOCAL TITLE: SECURE MESSAGING", "STANDARD TITLE: MHV DIALOG NOTE", "DATE OF NOTE: JAN 07, 2013@14:28     ENTRY DATE: JAN 07, 2013@14:28: 52", "AUTHOR: PROVIDER, ONE        EXP COSIGNER: ", "URGENCY:                            STATUS: COMPLETED", "*** SECURE MESSAGING Has ADDENDA ***", "THIS IS A TEST", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/07/2013 14: 29", "01/07/2013 ADDENDUM                      STATUS: COMPLETED", "CLINICAL REMINDER ACTIVITY", "*Annual OTC/Non-VA Med Review: ", "Reviewed medication list with patient.  New OTC/Non-VA medications to", "be added to list.", "DM NEPHROPATHY SCREENING: ", "Angiotensin II receptor blocker therapy is contraindicated.", "Comment: test patient", "Eval of Positive Depression Screen: ", "Rescreen with PHQ-2 if most recent previous screen is &gt; 1 day old.", "A PHQ-2 screen was performed. The score was 0 which is a negative", "screen for depression.", "1. Little interest or pleasure in doing things", "Not at all", "2. Feeling down, depressed, or hopeless", "Not at all", "Are you feeling hopeless about the present or future?  NO", "Have you had thoughts recently about taking your life?   NO", "ASSESSMENT: Suicide risk screen is negative.", "PROVIDER EVALUATION The results of the PHQ depression screen have been", "reviewed. I have personally evaluated the patient including inquiry", "about feelings of hopelessness, suicidal thoughts, suicide plan if", "thoughts are present, and prior suicide attempts. Based on the", "evaluation, the following disposition plan will be implemented: ", "No mental health condition requiring further intervention.", "Comment: test patient", "*Influenza Reminder: ", "Patient was given influenza vaccination today for flu prevention.", "Influenza Dose: 0.5 ml", "Route/Site: IM Left Deltoid", "Lot Number: 1225 1P  Exp. Date:  May 31, 2013 (Manufacturer: ", "Novartis)", "Given by: Staff Nurse", "Patient was given a copy of 2012-2013 Vaccine Information Statement", "for Influenza and verbalized an understanding of the document.", "Patient has been advised of possible side effects", "(rash, hives, nausea, difficulty breathing, redness, unusual", "pain, fever) and given the following instructions: ", "*Notify the nurse immediately if any side effects are experienced.", "*If any urgent or emergent problems are experienced after leaving", "the clinical area report to the nearest emergency room or call", "911.", "*Nurse/MA BP&gt;=140/90: ", "Repeat BP: ", "190/70", "*Diabetes Foot Exam: ", "Diabetic Visual Foot Exam: ", "Visual foot exam is normal.", "Pedal Pulse Foot Exam: ", "Pedal pulse foot exam is normal.", "Sensory Foot Exam by Monofilament: ", "Monofilament sensory foot exam is normal.", "*Vitals: ", "Pain: ", "3", "What does your pain level need to be for you to experience", "rest and comfort: ", "Elevated Pain Score: ", "Latest pain score reported by patient: 8 (12/10/2012 09: 24).", "*Diabetes-Retinal Exam: ", "Retinal exam done within the past year at an outside location.", "Retinal exam done within the past year at an outside location.", "Result: No Retinopathy", "Verify month and year: January 2, 2013", "Results: outside hospital", "CHF ACE/ARB Review: ", "Medications reviewed for ACE inhibitor/Angiotensin II receptor blocker", "therapy.", "Current medications include ACE inhibitor/Angiotensin receptor blocker", "therapy.", "Diabetes or CVD Elevated LDL: ", "No lipid treatment change is needed based on patient's current status.", "Comment: test patient", "Eval Positive AUDIT-C Screen: ", "SCREEN FOR ALCOHOL (AUDIT-C)", "An alcohol screening test (AUDIT-C) was negative (score=0).", "1. How often did you have a drink containing alcohol in the past", "year?", "Never", "2. How many drinks containing alcohol did you have on a typical day", "when you were drinking in the past year?", "Response not required due to responses to other questions.", "3. How often did you have six or more drinks on one occasion in the", "past year?", "Response not required due to responses to other questions.", "The patient reports drinking below the recommended limits.", "The patient was advised to continue to drink within recommended", "limits, which were reviewed with patient.  The medical risks of", "alcohol and the risks of drinking over the safe limits were", "reviewed.  This issue will be addressed at the next yearly", "screening.", "HTN/DM BP&gt;140/90: ", "Repeat BP: ", "190/70", "The patient's blood pressure is usually adequately controlled.  No", "medication changes are indicated at this time.", "Comment: test patient", "Based on the patient's comorbidities and condition, no education to", "improve BP control is warranted at this time.", "Comment: test patient", "Evaluation of + Depression Screen: ", "Are you feeling hopeless about the present or future?  NO", "Have you had thoughts recently about taking your life?   NO", "ASSESSMENT: Suicide risk screen is negative.", "PROVIDER EVALUATION The results of the PHQ depression screen have been", "reviewed. I have personally evaluated the patient including inquiry", "about feelings of hopelessness, suicidal thoughts, suicide plan if", "thoughts are present, and prior suicide attempts. Based on the", "evaluation, the following disposition plan will be implemented: ", "No mental health condition requiring further intervention.", "Comment: test patient", "Evaluation of + PTSD Screen: ", "Are you feeling hopeless about the present or future?  NO", "Have you had thoughts recently about taking your life?   NO", "ASSESSMENT: Suicide risk screen is negative.", "PROVIDER EVALUATION: The results of the PTSD screen have been", "reviewed. I have personally evaluated the patient including inquiry", "about feelings of hopelessness, suicidal thoughts, suicide plan if", "thoughts are present, and prior suicide attempts. Based on the", "evaluation, the following disposition plan will be implemented: ", "No mental health condition requiring further intervention.", "Comment: test patient", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/07/2013 15: 31"]
        }, {
            "date_time": "07 Jan 2013 @ 1427",
            "note_title": "MHD - INDIVIDUAL NOTE",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "signed_by": "PROVIDER, ONE",
            "co-signed_by": "PROVIDER, ONE",
            "date/time_signed": "07 Jan 2013 @ 1428",
            "raw_note": ["LOCAL TITLE: MHD - INDIVIDUAL NOTE", "STANDARD TITLE: MENTAL HEALTH OUTPATIENT NOTE", "DATE OF NOTE: JAN 07, 2013@14:27     ENTRY DATE: JAN 07, 2013@14:28: 02", "AUTHOR: PROVIDER, ONE        EXP COSIGNER: ", "URGENCY:                            STATUS: COMPLETED", "THIS IS A TEST.  THIS IS ONLY A TEST", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Signed: 01/07/2013 14: 28", "/es/ ONE PROVIDER MD", "CHIEF HEALTH INFORMATICS OFFICER/ATTENDING PSYCHIATRIST", "Cosigned: 05/03/2013 09: 43", "for"]
        }]
    },
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
    "model": [{
        "name": "immunizationname",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Immunization:   INFLUENZA-H1N1-09, NOVEL (PANDEMIC)", "Immunization:   INFLUENZA-H1N1-09, NOVEL (PANDEMIC)", "Immunization:   PNEUMOCOCCAL", "Immunization:   PNEUMOVAX POLYSACCHARIDE PPSV23", "Immunization:   TETANUS DIPTHERIA (TD-ADULT)"],
        "found": true,
        "processed": {}
    }, {
        "name": "summary",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["INFLUENZA-H1N1-09, NOVEL (PANDEMIC)                    07 Dec 2012 @ 1155", "TETANUS DIPTHERIA (TD-ADULT)                           07 Dec 2012 @ 1155", "INFLUENZA-H1N1-09, NOVEL (PANDEMIC)                    01 Oct 2012 @ 1200", "PNEUMOCOCCAL                                           06 Mar 2011 @ 0900", "PNEUMOVAX POLYSACCHARIDE PPSV23                        06 Mar 2011 @ 0900", "Date Received:  07 Dec 2012 @ 1155", "Date Received:  01 Oct 2012 @ 1200", "Date Received:  06 Mar 2011 @ 0900", "Date Received:  06 Mar 2011 @ 0900", "Date Received:  07 Dec 2012 @ 1155"],
        "found": true,
        "processed": {}
    }, {
        "name": "immunization",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Location:       PORTLAND (OR) VAMC", "Reaction:*      None Reported", "Comments:       Novartis;#10127605;Feb 2010", "Location:       PORTLAND (OR) VAMC", "Reaction:*      None Reported", "Comments:       --", "Location:       PORTLAND (OR) VAMC", "Reaction:*      None Reported", "Comments:       Inj type: IM, Site:Lt Deltoid", "Location:       PORTLAND (OR) VAMC", "Reaction:*      None Reported", "Comments:       Inj type: IM, Site:Lt Deltoid", "Location:       PORTLAND (OR) VAMC", "Reaction:*      None Reported", "Comments:       1234567"],
        "found": true,
        "processed": {}
    }, {
        "name": "generic",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Source: VA", "Last Updated: 05 Nov 2014 @ 0813", "Sorted By: Date Received(Descending)", "Sorted By: Immunization Name, then Date (Descending)", "Reaction Key: * = Check information in your VA Allergies and Adverse Reactions"],
        "found": true,
        "processed": {}
    }],
    "raw": ["----------------------------- VA IMMUNIZATIONS --------------------------"],
    "processed": {
        "source": "VA",
        "last_updated": "05 Nov 2014 @ 0813",
        "sorted_by": "Immunization Name, then Date (Descending)",
        "summary": [{
            "immunization": "INFLUENZA-H1N1-09, NOVEL (PANDEMIC)",
            "date": "07 Dec 2012 @ 1155"
        }, {
            "immunization": "TETANUS DIPTHERIA (TD-ADULT)",
            "date": "07 Dec 2012 @ 1155"
        }, {
            "immunization": "INFLUENZA-H1N1-09, NOVEL (PANDEMIC)",
            "date": "01 Oct 2012 @ 1200"
        }, {
            "immunization": "PNEUMOCOCCAL",
            "date": "06 Mar 2011 @ 0900"
        }, {
            "immunization": "PNEUMOVAX POLYSACCHARIDE PPSV23",
            "date": "06 Mar 2011 @ 0900"
        }, {
            "immunization": "Date Received:",
            "date": "07 Dec 2012 @ 1155"
        }, {
            "immunization": "Date Received:",
            "date": "01 Oct 2012 @ 1200"
        }, {
            "immunization": "Date Received:",
            "date": "06 Mar 2011 @ 0900"
        }, {
            "immunization": "Date Received:",
            "date": "06 Mar 2011 @ 0900"
        }, {
            "immunization": "Date Received:",
            "date": "07 Dec 2012 @ 1155"
        }],
        "immunizations": [{
            "immunization_name": "INFLUENZA-H1N1-09, NOVEL (PANDEMIC)",
            "location": "PORTLAND (OR) VAMC",
            "reaction": "None Reported",
            "comments": "Novartis;#10127605;Feb 2010"
        }, {
            "immunization_name": "INFLUENZA-H1N1-09, NOVEL (PANDEMIC)",
            "location": "PORTLAND (OR) VAMC",
            "reaction": "None Reported",
            "comments": "--"
        }, {
            "immunization_name": "PNEUMOCOCCAL",
            "location": "PORTLAND (OR) VAMC",
            "reaction": "None Reported",
            "comments": "Inj type: IM, Site:Lt Deltoid"
        }, {
            "immunization_name": "PNEUMOVAX POLYSACCHARIDE PPSV23",
            "location": "PORTLAND (OR) VAMC",
            "reaction": "None Reported",
            "comments": "Inj type: IM, Site:Lt Deltoid"
        }, {
            "immunization_name": "TETANUS DIPTHERIA (TD-ADULT)",
            "location": "PORTLAND (OR) VAMC",
            "reaction": "None Reported",
            "comments": "1234567",
            "reaction_key": "= Check information in your VA Allergies and Adverse Reactions"
        }]
    },
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
    "model": [{
        "name": "vitalname",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Vital Sign:           Blood Pressure", "Vital Sign:           Blood Pressure", "Vital Sign:           Blood Pressure", "Vital Sign:           Blood Pressure", "Vital Sign:           Blood Pressure", "Vital Sign:           Temperature", "Vital Sign:           Temperature", "Vital Sign:           Circumference/Girth", "Vital Sign:           Height", "Vital Sign:           Height", "Vital Sign:           Height", "Vital Sign:           Height", "Vital Sign:           Pain Level", "Vital Sign:           Pain Level", "Vital Sign:           Pain Level", "Vital Sign:           Pain Level", "Vital Sign:           Pain Level", "Vital Sign:           Pulse Oximetry", "Vital Sign:           Pulse Rate", "Vital Sign:           Pulse Rate", "Vital Sign:           Respiration", "Vital Sign:           Respiration", "Vital Sign:           Weight", "Vital Sign:           Weight", "Vital Sign:           Weight", "Vital Sign:           Weight"],
        "found": true,
        "processed": {}
    }, {
        "name": "summary",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Blood Pressure                 190/70 mm[Hg]          07 Jan 2013 @ 1527", "Pulse Rate                     88 /min                10 Dec 2012 @ 0924", "Respiration                    16 /min                10 Dec 2012 @ 0924", "Temperature                    98.5 F                 10 Dec 2012 @ 0924", "Pain Level                     3                      07 Jan 2013 @ 1527", "Height                         70 in                  10 Dec 2012 @ 0924", "Weight                         325 lb                 10 Dec 2012 @ 0924"],
        "found": true,
        "processed": {}
    }, {
        "name": "generic",
        "pattern": {},
        "multiple": true,
        "model": [],
        "raw": ["Source: VA", "Last Updated: 05 Nov 2014 @ 0813", "Sorted By: Type of Vital Sign or Health Reading, then Date/Time", "Measurement:          190/70 mm[Hg]", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  07 Jan 2013 @ 1527", "Measurement:          200/120 mm[Hg]", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  10 Dec 2012 @ 0924", "Measurement:          190/120 mm[Hg]", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  07 Dec 2012 @ 1201", "Measurement:          150/70 mm[Hg]", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  11 Nov 2012 @ 0900", "Measurement:          155/92 mm[Hg]", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  06 Jun 2011 @ 1247", "Measurement:          98.5 F", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  10 Dec 2012 @ 0924", "Measurement:          101.3 F", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  11 Nov 2012 @ 0900", "Measurement:          50 in", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  10 Dec 2012 @ 0924", "Measurement:          70 in", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  10 Dec 2012 @ 0924", "Measurement:          70 in", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  07 Dec 2012 @ 1201", "Measurement:          70 in", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  11 Nov 2012 @ 0900", "Measurement:          64 in", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  06 Jun 2011 @ 1237", "Measurement:          3", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  07 Jan 2013 @ 1527", "Measurement:          8", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  10 Dec 2012 @ 0924", "Measurement:          7", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  07 Dec 2012 @ 1201", "Measurement:          6", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  11 Nov 2012 @ 0900", "Measurement:          1", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  06 Jun 2011 @ 1247", "Measurement:          98 %", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  10 Dec 2012 @ 0924", "Measurement:          88 /min", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  10 Dec 2012 @ 0924", "Measurement:          120 /min", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  11 Nov 2012 @ 0900", "Measurement:          16 /min", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  10 Dec 2012 @ 0924", "Measurement:          20 /min", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  11 Nov 2012 @ 0900", "Measurement:          325 lb", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  10 Dec 2012 @ 0924", "Measurement:          350 lb", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  07 Dec 2012 @ 1201", "Measurement:          310 lb", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  11 Nov 2012 @ 0900", "Measurement:          301 lb", "Comments:             --", "Location:             PORTLAND, OREGON VA MEDICAL CENTER", "Date/Time Collected:  06 Jun 2011 @ 1237"],
        "found": true,
        "processed": {}
    }],
    "raw": ["------------------------ VA VITALS AND READINGS -------------------------"],
    "processed": {
        "source": "VA",
        "last_updated": "05 Nov 2014 @ 0813",
        "summary": [{
            "vital_sign": "Blood Pressure",
            "reading": "190/70 mm[Hg]",
            "date": "07 Jan 2013 @ 1527"
        }, {
            "vital_sign": "Pulse Rate",
            "reading": "88 /min",
            "date": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Respiration",
            "reading": "16 /min",
            "date": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Temperature",
            "reading": "98.5 F",
            "date": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Pain Level",
            "reading": "3",
            "date": "07 Jan 2013 @ 1527"
        }, {
            "vital_sign": "Height",
            "reading": "70 in",
            "date": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Weight",
            "reading": "325 lb",
            "date": "10 Dec 2012 @ 0924"
        }],
        "sorted_by": "Type of Vital Sign or Health Reading, then Date/Time",
        "vitals": [{
            "vital_sign": "Blood Pressure",
            "measurement": "190/70 mm[Hg]",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "07 Jan 2013 @ 1527"
        }, {
            "vital_sign": "Blood Pressure",
            "measurement": "200/120 mm[Hg]",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Blood Pressure",
            "measurement": "190/120 mm[Hg]",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "07 Dec 2012 @ 1201"
        }, {
            "vital_sign": "Blood Pressure",
            "measurement": "150/70 mm[Hg]",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "11 Nov 2012 @ 0900"
        }, {
            "vital_sign": "Blood Pressure",
            "measurement": "155/92 mm[Hg]",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "06 Jun 2011 @ 1247"
        }, {
            "vital_sign": "Temperature",
            "measurement": "98.5 F",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Temperature",
            "measurement": "101.3 F",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "11 Nov 2012 @ 0900"
        }, {
            "vital_sign": "Circumference/Girth",
            "measurement": "50 in",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Height",
            "measurement": "70 in",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Height",
            "measurement": "70 in",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "07 Dec 2012 @ 1201"
        }, {
            "vital_sign": "Height",
            "measurement": "70 in",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "11 Nov 2012 @ 0900"
        }, {
            "vital_sign": "Height",
            "measurement": "64 in",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "06 Jun 2011 @ 1237"
        }, {
            "vital_sign": "Pain Level",
            "measurement": "3",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "07 Jan 2013 @ 1527"
        }, {
            "vital_sign": "Pain Level",
            "measurement": "8",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Pain Level",
            "measurement": "7",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "07 Dec 2012 @ 1201"
        }, {
            "vital_sign": "Pain Level",
            "measurement": "6",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "11 Nov 2012 @ 0900"
        }, {
            "vital_sign": "Pain Level",
            "measurement": "1",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "06 Jun 2011 @ 1247"
        }, {
            "vital_sign": "Pulse Oximetry",
            "measurement": "98 %",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Pulse Rate",
            "measurement": "88 /min",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Pulse Rate",
            "measurement": "120 /min",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "11 Nov 2012 @ 0900"
        }, {
            "vital_sign": "Respiration",
            "measurement": "16 /min",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Respiration",
            "measurement": "20 /min",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "11 Nov 2012 @ 0900"
        }, {
            "vital_sign": "Weight",
            "measurement": "325 lb",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "10 Dec 2012 @ 0924"
        }, {
            "vital_sign": "Weight",
            "measurement": "350 lb",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "07 Dec 2012 @ 1201"
        }, {
            "vital_sign": "Weight",
            "measurement": "310 lb",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "11 Nov 2012 @ 0900"
        }, {
            "vital_sign": "Weight",
            "measurement": "301 lb",
            "comments": "--",
            "location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "date/time_collected": "06 Jun 2011 @ 1237"
        }]
    },
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