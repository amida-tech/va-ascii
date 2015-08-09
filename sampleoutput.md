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
                "name": "genderdoborgan",
                "pattern": {},
                "multiple": false,
                "model": [],
                "raw": [],
                "found": false,
                "processed": {}
            }, {
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