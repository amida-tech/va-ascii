Below is sample output... will update this with each commit:

```
{
    "header": {
        "bbversion": "12.10",
        "requestdate": "05 Nov 2014 @ 0827",
        "requestname": "MHVTESTVETERAN, ONE A",
        "requestdob": "01 Mar 1948"
    },
    "request_summary": {
        "systemrequestdate": "05 Nov 2014 @ 0827",
        "filename": "mhv_MHVTESTVETERAN_20141105_0827.txt",
        "daterange": "05 Nov 2009 to 05 Nov 2014",
        "datatypes": ["My HealtheVet Account Summary", "Self Reported Demographics", "VA Demographics", "Self Reported Health Care Providers", "Self Reported Treatment Facilities", "Self Reported Health Insurance", "VA Wellness Reminders", "VA Appointments (Future)", "VA Appointments (Limited to past 2 years)", "VA Allergies", "Self Reported Allergies", "VA Medication History", "Self Reported Medications and Supplements", "VA Problem List", "VA Admissions and Discharges", "VA Notes", "Self Reported Medical Events", "VA Immunizations", "Self Reported Immunizations", "VA Laboratory Results: Chemistry/Hematology/Microbiology", "VA Pathology Reports: Surgical Pathology/Cytology/Electron Microscopy", "Self Reported Labs and Tests", "VA Vitals and Readings", "Self Reported Vitals and Readings", "VA Radiology Reports", "VA Electrocardiogram (EKG) Reports", "Self Reported Family Health History", "Self Reported Military Health History", "Self Reported Activity Journal", "Self Reported Food Journal", "DoD Military Service Information", "Self Reported My Goals Current", "Self Reported My Goals Completed"]
    },
    "account_summary": {},
    "self_demographics": {
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
            "work_phone_number": "000-555-5000",
            "work_phone_ext": "",
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
    "va_demographics": {
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
    "self_providers": {},
    "self_facilities": {},
    "self_insurance": {},
    "va_reminders": {},
    "va_appointments": {
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
    "va_allergies": {
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
    "self_allergies": {
        "source": "Self-Entered",
        "allergies": [{
            "allergy_name": "Pollen",
            "date": "18 Mar 2011",
            "severity": "Mild",
            "diagnosed": "Yes",
            "reaction": "Watery eyes, itchy nose",
            "comments": ["Took an over the counter antihistamine"]
        }, {
            "allergy_name": "Diovan",
            "date": "07 Jan 2013",
            "severity": "Mild",
            "diagnosed": "No",
            "reaction": "Dry cough",
            "comments": ["I called my provider and told him the reaction I had. He is calling", "in a new Rx for my HTN"]
        }]
    },
    "va_medications": {
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
    "self_medications": {
        "source": "Self-Entered",
        "medications": [{
            "medication_category": "OTC",
            "drug_name": "Cough Medicine",
            "prescription_number": "",
            "strength": "1000mg",
            "dose": "2 TBS",
            "frequency": "morning and night",
            "start_date": "01 Feb 2010",
            "stop_date": "21 Feb 2010",
            "pharmacy_name": "My Local Drugstore",
            "pharmacy_phone": "000-010-0000",
            "reason_for_taking": "Cough was keeping me up at night",
            "comments": "Cleared up after a few weeks"
        }, {
            "medication_category": "Supplement",
            "drug_name": "Multi-vitamin",
            "prescription_number": "",
            "strength": "100% RDA",
            "dose": "1 tablet daily",
            "frequency": "morning",
            "start_date": "18 Mar 2010",
            "stop_date": "",
            "pharmacy_name": "My Local Drugstore",
            "pharmacy_phone": "000-010-0000",
            "reason_for_taking": "To stay healthy",
            "comments": "Feeling more energetic since I started taking vitamin"
        }]
    },
    "va_problems": {
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
    "va_admission_discharge": {
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
    "va_notes": {
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
    "self_events": {},
    "va_immunizations": {
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
    "self_immunizations": {
        "source": "Self-Entered",
        "lastkey": "comments",
        "immunizations": [{
            "immunization_name": "Tetanus",
            "other": "Booster",
            "method": "Injection",
            "date_received": "07 Jan 2013",
            "reactions": " ---------------------------------",
            "comments": "Stepped on a board with rusty nails in it. Nail just broke the skin"
        }, {
            "immunization_name": "Tetanus",
            "other": "",
            "method": "Injection",
            "date_received": "18 Jul 2010",
            "reactions": " --------------------------------- Pain",
            "comments": "stepped on a rusty nail"
        }]
    },
    "va_labs": {
        "source": "VA",
        "newtest": false,
        "newlab": true,
        "lastkey": "changed_to_150_on_jun_03,_2011@10",
        "last_updated": "05 Nov 2014 @ 0813",
        "sorted_by": "Date Specimen Collected (Descending) Lab Test(Alphabetical Order), then Time Specimen Collected VA Laboratory Results are available 3 calendar days after they have been verified. For some tests, results slightly outside the reference range are not unusual. In addition, not all results are clinically significant. If you have any questions about your information please visit the FAQs or contact your VA health care team.",
        "labs": [{
            "lab_test": "Potassium",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "17 Jan 2013 @ 1341",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "POTASSIUM",
                "result": "6.5 Critical High",
                "units": "mmol/L",
                "reference_range": "(3.5-5.0)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "GRAM STAIN - MISC.............",
            "lab_type": "Microbiology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "LUNG",
            "collection_sample": "SPUTUM, EXPECTORATED",
            "date/time_collected": "12 Dec 2012 @ 1200",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER PO BOX 1034, PORTLAND 97207",
            "date/time_completed": "07 Jan 2013 @ 1200",
            "raw_lab": ["GRAM STAIN: POSITIVE", "CULTURE RESULTS:  STAPHYLOCOCCUS AUREUS  - Quantity: 250", "Comment: TEST", "ANTIBIOTIC SUSCEPTIBILITY TEST RESULTS: ", "STAPHYLOCOCCUS AUREUS", ": ", "CEFAZOLIN.....................  S", "CIPROFLOXACIN.................  S", "DOXYCYCLINE...................  S", "LINEZOLID.....................  S", "MOXIFLOXACIN..................  S", "OXACILLIN.....................  S", "PENICILLIN....................  R", "PIPERACILLIN/TAZOBAC..........  S", "TRIMETH/SULFA.................  S", "CLINDAMYCIN...................  S", "ERYTHROMYCIN..................  S", "VANCOMYCIN....................  S", "Bacteriology Remark(s): ", "TEST", "Result Key: ", "SUSC = Susceptibility Result                S = Susceptible", "INTP = Interpretation                       I = Intermediate", "MIC  = Minimum Inhibitory Concentration     R = Resistant"]
        }, {
            "lab_test": "Glycohemoglobin A(1) C",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Whole blood",
            "date/time_collected": "12 Dec 2012 @ 0811",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "HEMOGLOBIN A1C/HEMOGLOBIN.TOTAL",
                "result": "8.5 High",
                "units": "%",
                "reference_range": "(3.4-6.1)",
                "interpretation": "*** If Diabetic, recommended HgA1C should be <7% *** Hemoglobin A1c values reported after 1-1-95 are standardized in accordance with recommendations of the Diabetes Control and Complications Trial(DCCT).  Based on these recommendations, a upward shift in reported results will be noted.  A table depicting this shift is available in Chemistry on request.",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Cell Count Body Fluid",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Cerebral spinal fluid",
            "date/time_collected": "12 Dec 2012 @ 0810",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "APPEARANCE BODY FLUID",
                "result": "CLEAR",
                "units": "--",
                "reference_range": "",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "COLOR",
                "result": "YELLOW",
                "units": "--",
                "reference_range": "",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "ERYTHROCYTES",
                "result": "10 High",
                "units": "#/cumm",
                "reference_range": "(0-0)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "LEUKOCYTES",
                "result": "250 High",
                "units": "#/cumm",
                "reference_range": "(0-6)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "TUBE NUMBER",
                "result": "1",
                "units": "--",
                "reference_range": "",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "XANTHOCHROMIA, CSF",
                "result": "NEG",
                "units": "--",
                "reference_range": "",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Albumin/Creat Ratio",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Urine",
            "date/time_collected": "12 Dec 2012 @ 0810",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "ALBUMIN",
                "result": "25 High",
                "units": "MG/DL",
                "reference_range": "(0-2)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "ALBUMIN/CREATININE",
                "result": "20",
                "units": "mg/g",
                "reference_range": "(<30)",
                "interpretation": "Reference range change per ADA Guidelines. Normal                <30      mg/g Microalbuminuria      30 - 299 mg/g Clinical Albuminuria  >300     mg/g",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "CREATININE",
                "result": "1.2",
                "units": "mg/dL",
                "reference_range": "",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Lipid Panel",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0809",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "CHOLESTEROL",
                "result": "165",
                "units": "mg/dL",
                "reference_range": "(1-240)",
                "interpretation:_desirable_value": "<200",
                "borderline_value": "201-239",
                "elevated_value": ">240",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "CHOLESTEROL.IN HDL",
                "result": "45",
                "units": "mg/dL",
                "reference_range": "(32-78)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "CHOLESTEROL.IN LDL",
                "result": "120",
                "units": "MG/DL",
                "reference_range": "(43-161)",
                "interpretation": "***If pt age < 75, recommended LDL-C < 100 mg/dl in diabetes and ischemic heart disease*** ACCORDING TO THE \"NATIONAL CHOLESTEROL EDUCATION PROGRAM\"",
                "levels_of_risk_are_defined_as_follows": "",
                "low_risk": "<130 MG/DL",
                "borderline_high_risk": "130-159 MG/DL",
                "high_risk": ">=160 MG/DL NOTE THAT NONFASTING RESULTS ARE SLIGHTLY LOWER THAN FASTING RESULTS.",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "TRIGLYCERIDE",
                "result": "99",
                "units": "mg/dL",
                "reference_range": "(35-160)",
                "interpretation:_desirable_value": "<150",
                "borderline_value": "150-199",
                "elevated_value": "200-499 Patient should be fasting at time of specimen collection for valid interpretation of triglyceride level.",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "VDRL",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Cerebral spinal fluid",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "REAGIN AB",
                "result": "NEG",
                "units": "--",
                "reference_range": "(SEE INTERPRETATION)",
                "interpretation": "NORMAL REFERENCE RANGE = NONREACTIVE",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "HIV Ab",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Serum",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "HIV 1+2 AB",
                "result": "NEG",
                "units": "--",
                "reference_range": "",
                "interpretation": "Interpretation of serologic results should be made in a clinical context including post-test counseling regarding HIV risk. - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Carbon Dioxide Content",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "CARBON DIOXIDE",
                "result": "25",
                "units": "mmol/L",
                "reference_range": "(21-32)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Chloride",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "CHLORIDE",
                "result": "102",
                "units": "mmol/L",
                "reference_range": "(95-108)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Creatinine",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "CREATININE",
                "result": "1.3",
                "units": "mg/dL",
                "reference_range": "(0.8-1.5)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Creatinine eGFR",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "GLOMERULAR FILTRATION RATE.PREDICTED",
                "result": "56 Low",
                "units": "--",
                "reference_range": "(>60)",
                "interpretation": "An eGFR <60 is abnormal. Estimated glomerular filtration rate (eGFR) results >60 are imprecise. Many variables affect the calculated result. Interpretation of eGFR results >60 must be monitored over time. Units are mL/min/1.73m^2.",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Gen Chem Specimen",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "ANION GAP",
                "result": "19",
                "units": "mmol/L",
                "reference_range": "(10-22)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Glucose Quant",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "GLUCOSE",
                "result": "150 High",
                "units": "mg/dL",
                "reference_range": "(71-109)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Lipid Panel",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "CHOLESTEROL",
                "result": "150",
                "units": "mg/dL",
                "reference_range": "(1-240)",
                "interpretation:_desirable_value": "<200",
                "borderline_value": "201-239",
                "elevated_value": ">240",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "CHOLESTEROL.IN HDL",
                "result": "23 Low",
                "units": "mg/dL",
                "reference_range": "(32-78)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "CHOLESTEROL.IN LDL",
                "result": "23 Low",
                "units": "MG/DL",
                "reference_range": "(43-161)",
                "interpretation": "***If pt age < 75, recommended LDL-C < 100 mg/dl in diabetes and ischemic heart disease*** ACCORDING TO THE \"NATIONAL CHOLESTEROL EDUCATION PROGRAM\"",
                "levels_of_risk_are_defined_as_follows": "",
                "low_risk": "<130 MG/DL",
                "borderline_high_risk": "130-159 MG/DL",
                "high_risk": ">=160 MG/DL NOTE THAT NONFASTING RESULTS ARE SLIGHTLY LOWER THAN FASTING RESULTS.",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }, {
                "test_name": "TRIGLYCERIDE",
                "result": "46",
                "units": "mg/dL",
                "reference_range": "(35-160)",
                "interpretation:_desirable_value": "<150",
                "borderline_value": "150-199",
                "elevated_value": "200-499 Patient should be fasting at time of specimen collection for valid interpretation of triglyceride level.",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Potassium",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "POTASSIUM",
                "result": "3.5",
                "units": "mmol/L",
                "reference_range": "(3.5-5.0)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Sodium",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "SODIUM",
                "result": "145 High",
                "units": "mmol/L",
                "reference_range": "(131-142)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Thyroid Stimulating Hormone",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "THYROTROPIN",
                "result": "29 High",
                "units": "uIU/mL",
                "reference_range": "(0.27-4.20)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Transferase Aspartate  SGOT",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "ASPARTATE AMINOTRANSFERASE",
                "result": "12 Low",
                "units": "IU/L",
                "reference_range": "(14-44)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Urea Nitrogen",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "12 Dec 2012 @ 0808",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "UREA NITROGEN",
                "result": "25 High",
                "units": "mg/dL",
                "reference_range": "(7-23)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "Glycohemoglobin A(1) C",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Whole blood",
            "date/time_collected": "12 Dec 2012 @ 0806",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "HEMOGLOBIN A1C/HEMOGLOBIN.TOTAL",
                "result": "7.4 High",
                "units": "%",
                "reference_range": "(3.4-6.1)",
                "interpretation": "*** If Diabetic, recommended HgA1C should be <7% *** Hemoglobin A1c values reported after 1-1-95 are standardized in accordance with recommendations of the Diabetes Control and Complications Trial(DCCT).  Based on these recommendations, a upward shift in reported results will be noted.  A table depicting this shift is available in Chemistry on request.",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239-2964",
                "status": "Final"
            }],
            "raw_lab": ["Comments: TEST"]
        }, {
            "lab_test": "INR",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "COAGULATION TISSUE FACTOR INDUCED.INR",
                "result": "0.7 Low",
                "units": "--",
                "reference_range": "(0.90-1.20)",
                "interpretation:_inr_therapeutic_ranges_for_full_anticoagulation": "",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: PT. reported incorrectly as 9.0 by [104353-VA648].", "Changed to 9.9 on Jun 06, 2011@12: 08 by [87277-VA648]."]
        }, {
            "lab_test": "Prothrombin Time",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "COAGULATION TISSUE FACTOR INDUCED",
                "result": "9.9 Low",
                "units": "SEC",
                "reference_range": "(11.9-14.5)",
                "interpretation": "SEE INR FOR CRITICAL VALUE CUT-OFF.",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Amended"
            }],
            "raw_lab": ["Comments: PT. reported incorrectly as 9.0 by [104353-VA648].", "Changed to 9.9 on Jun 06, 2011@12: 08 by [87277-VA648]."]
        }, {
            "lab_test": "Hemogram+Platelet",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Whole blood",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "ERYTHROCYTE DISTRIBUTION WIDTH",
                "result": "10 Low",
                "units": "%",
                "reference_range": "(11.5-14.5)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }, {
                "test_name": "ERYTHROCYTE MEAN CORPUSCULAR HEMOGLOBIN",
                "result": "32.2",
                "units": "pg",
                "reference_range": "(27-33)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }, {
                "test_name": "ERYTHROCYTE MEAN CORPUSCULAR HEMOGLOBIN CONCENTRATION",
                "result": "33.3",
                "units": "g/dL",
                "reference_range": "(33-37)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }, {
                "test_name": "ERYTHROCYTES",
                "result": "4.44",
                "units": "M/cmm",
                "reference_range": "(4.3-5.6)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }, {
                "test_name": "HEMATOCRIT",
                "result": "47.0",
                "units": "%",
                "reference_range": "(41-51)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }, {
                "test_name": "HEMOGLOBIN",
                "result": "15.5",
                "units": "g/dL",
                "reference_range": "(13-18)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }, {
                "test_name": "LEUKOCYTES",
                "result": "20.0 High",
                "units": "K/cmm",
                "reference_range": "(4.4-10.8)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }, {
                "test_name": "MEAN CORPUSCULAR VOLUME",
                "result": "90",
                "units": "fl",
                "reference_range": "(82-98)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }, {
                "test_name": "PLATELET MEAN VOLUME",
                "result": "9",
                "units": "fl",
                "reference_range": "(7.4-10.4)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }, {
                "test_name": "PLATELETS",
                "result": "240",
                "units": "K/cmm",
                "reference_range": "(150-400)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: Comments about the result for this test name"]
        }, {
            "lab_test": "Calcium",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "CALCIUM",
                "result": "9.0",
                "units": "mg/dL",
                "reference_range": "(8.4-10.4)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: GLUCOSE flagged incorrectly as normal", "GLUCOSE reported incorrectly as 110 by [104353-VA648].", "Changed to 150 on Jun 03, 2011@10: 31 by [104353-VA648]."]
        }, {
            "lab_test": "Carbon Dioxide Content",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "CARBON DIOXIDE",
                "result": "25",
                "units": "mmol/L",
                "reference_range": "(21-32)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: GLUCOSE flagged incorrectly as normal", "GLUCOSE reported incorrectly as 110 by [104353-VA648].", "Changed to 150 on Jun 03, 2011@10: 31 by [104353-VA648]."]
        }, {
            "lab_test": "Chloride",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "CHLORIDE",
                "result": "105",
                "units": "mmol/L",
                "reference_range": "(95-108)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: GLUCOSE flagged incorrectly as normal", "GLUCOSE reported incorrectly as 110 by [104353-VA648].", "Changed to 150 on Jun 03, 2011@10: 31 by [104353-VA648]."]
        }, {
            "lab_test": "Cholesterol Total",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "CHOLESTEROL",
                "result": "152",
                "units": "mg/dL",
                "reference_range": "(1-240)",
                "interpretation:_desirable_value": "<200",
                "borderline_value": "201-239",
                "elevated_value": ">240",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: GLUCOSE flagged incorrectly as normal", "GLUCOSE reported incorrectly as 110 by [104353-VA648].", "Changed to 150 on Jun 03, 2011@10: 31 by [104353-VA648]."]
        }, {
            "lab_test": "Creatinine",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "CREATININE",
                "result": "1.4",
                "units": "mg/dL",
                "reference_range": "(0.8-1.5)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: GLUCOSE flagged incorrectly as normal", "GLUCOSE reported incorrectly as 110 by [104353-VA648].", "Changed to 150 on Jun 03, 2011@10: 31 by [104353-VA648]."]
        }, {
            "lab_test": "Creatinine eGFR",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "GLOMERULAR FILTRATION RATE.PREDICTED",
                "result": "51 Low",
                "units": "--",
                "reference_range": "(>60)",
                "interpretation": "EGFR IS 5.9% LOWER THAN EGFR CALCULATIONS PERFORMED BEFORE 2/12/08 An eGFR <60 is abnormal. Estimated glomerular filtration rate (eGFR) results >60 are imprecise. Many variables affect the calculated result. Interpretation of eGFR results >60 must be monitored over time. Units are mL/min/1.73m^2.",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: GLUCOSE flagged incorrectly as normal", "GLUCOSE reported incorrectly as 110 by [104353-VA648].", "Changed to 150 on Jun 03, 2011@10: 31 by [104353-VA648]."]
        }, {
            "lab_test": "Gen Chem Specimen",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "ANION GAP",
                "result": "10.0",
                "units": "mmol/L",
                "reference_range": "(10-22)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: GLUCOSE flagged incorrectly as normal", "GLUCOSE reported incorrectly as 110 by [104353-VA648].", "Changed to 150 on Jun 03, 2011@10: 31 by [104353-VA648]."]
        }, {
            "lab_test": "Glucose Quant",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "GLUCOSE",
                "result": "150 High",
                "units": "mg/dL",
                "reference_range": "(71-109)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Amended"
            }],
            "raw_lab": ["Comments: GLUCOSE flagged incorrectly as normal", "GLUCOSE reported incorrectly as 110 by [104353-VA648].", "Changed to 150 on Jun 03, 2011@10: 31 by [104353-VA648]."]
        }, {
            "lab_test": "Potassium",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "POTASSIUM",
                "result": "4.5",
                "units": "mmol/L",
                "reference_range": "(3.5-5.0)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: GLUCOSE flagged incorrectly as normal", "GLUCOSE reported incorrectly as 110 by [104353-VA648].", "Changed to 150 on Jun 03, 2011@10: 31 by [104353-VA648]."]
        }, {
            "lab_test": "Sodium",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "SODIUM",
                "result": "140",
                "units": "mmol/L",
                "reference_range": "(131-142)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: GLUCOSE flagged incorrectly as normal", "GLUCOSE reported incorrectly as 110 by [104353-VA648].", "Changed to 150 on Jun 03, 2011@10: 31 by [104353-VA648]."]
        }, {
            "lab_test": "Triglycerides w o extract",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "TRIGLYCERIDE",
                "result": "250 High",
                "units": "mg/dL",
                "reference_range": "(35-160)",
                "interpretation:_desirable_value": "<150",
                "borderline_value": "150-199",
                "elevated_value": "200-499 Patient should be fasting at time of specimen collection for valid interpretation of triglyceride level.",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: GLUCOSE flagged incorrectly as normal", "GLUCOSE reported incorrectly as 110 by [104353-VA648].", "Changed to 150 on Jun 03, 2011@10: 31 by [104353-VA648]."]
        }, {
            "lab_test": "Urea Nitrogen",
            "lab_type": "Chemistry/Hematology",
            "ordering_provider": "PROVIDER, ONE",
            "ordering_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "specimen": "Plasma",
            "date/time_collected": "03 Jun 2011 @ 1024",
            "collected_location": "PORTLAND, OREGON VA MEDICAL CENTER",
            "tests": [{
                "test_name": "UREA NITROGEN",
                "result": "12",
                "units": "mg/dL",
                "reference_range": "(7-23)",
                "interpretation": "--",
                "performing_location": "PORTLAND, OREGON VA MEDICAL CENTER 3710 SW US VETERANS HOSPTL RD , PORTLAND, OR 97239",
                "status": "Final"
            }],
            "raw_lab": ["Comments: GLUCOSE flagged incorrectly as normal", "GLUCOSE reported incorrectly as 110 by [104353-VA648].", "Changed to 150 on Jun 03, 2011@10: 31 by [104353-VA648]."]
        }]
    },
    "va_pathology": {},
    "self_labs": {
        "source": "Self-Entered",
        "tests": [{
            "test_name": "Blood Test",
            "date": "06 Jun 2010",
            "location_performed": "Community Center",
            "provider": "Red Cross Blood Drive",
            "results": ["Was not able to donate blood because iron was low"],
            "comments": "Will ask doctor at next visit"
        }, {
            "test_name": "Colonoscopy",
            "date": "01 Jul 2010",
            "location_performed": "VAMC",
            "provider": "Provider One",
            "results": ["No new polyps"],
            "comments": "Keep high fiber diet"
        }, {
            "test_name": "CBC",
            "date": "08 Jan 2013",
            "location_performed": "Non VA Location",
            "provider": "Dr. Smith",
            "results": ["GLUCOSE 144", "K   \t4.1", "CO2 \t26.9", "CA \t9.3", "AST\t31", "ALT\t35", "ALK\t86"],
            "comments": "This is an old lab test. I wanted the report in my record"
        }]
    },
    "va_vitals": {
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
    "self_vitals": {
        "source": "Self-Entered",
        "vitals": [{
            "measurement_type": "Blood pressure",
            "date": "02 Aug 2010",
            "time": "1720",
            "systolic": "130",
            "diastolic": "76",
            "comments": ["BP taken lying down"]
        }, {
            "measurement_type": "Blood pressure",
            "date": "02 Aug 2010",
            "time": "1730",
            "systolic": "132",
            "diastolic": "76",
            "comments": ["BP taken standing.  PB continues at goal.  Doctor says to continue BP", "medications as directed"]
        }, {
            "measurement_type": "Blood pressure",
            "date": "06 Jan 2013",
            "time": "1940",
            "systolic": "126",
            "diastolic": "82",
            "comments": ["Did not sleep well last night. Took a long nap this afternoon"]
        }, {
            "measurement_type": "Blood pressure",
            "date": "07 Jan 2013",
            "time": "2359",
            "systolic": "132",
            "diastolic": "76",
            "comments": ["Feeling fine"]
        }, {
            "measurement_type": "Heart rate",
            "date": "02 Jun 2010",
            "time": "1720",
            "heart_rate": "160",
            "comments": ["Started taking Beta-Blockers after visit with physician"]
        }, {
            "measurement_type": "Heart rate",
            "date": "06 Jan 2013",
            "time": "1900",
            "heart_rate": "86",
            "comments": ["Feel Fine"]
        }, {
            "measurement_type": "Heart rate",
            "date": "07 Jan 2013",
            "time": "2359",
            "heart_rate": "77",
            "comments": ["Feel OK"]
        }, {
            "measurement_type": "Body weight",
            "date": "02 Apr 2010",
            "time": "1720",
            "body_weight": "246",
            "measure": "Pounds",
            "comments": ["Talk to provider about weight management program at next visit"]
        }, {
            "measurement_type": "Body weight",
            "date": "02 May 2010",
            "time": "1720",
            "body_weight": "244",
            "measure": "Pounds",
            "comments": ["Lost a few pounds and feel better.  Walking daily"]
        }, {
            "measurement_type": "Body weight",
            "date": "02 Jun 2010",
            "time": "1720",
            "body_weight": "242",
            "measure": "Pounds",
            "comments": ["still walking when I have time off from work"]
        }, {
            "measurement_type": "Body weight",
            "date": "06 Jan 2013",
            "time": "1900",
            "body_weight": "244",
            "measure": "Pounds",
            "comments": ["I can feel all those Christmas cookies I ate"]
        }, {
            "measurement_type": "Body weight",
            "date": "07 Jan 2013",
            "time": "2359",
            "body_weight": "242",
            "measure": "Pounds",
            "comments": ["Took a long walk with the dog today"]
        }, {
            "measurement_type": "Body temperature",
            "date": "02 Mar 2010",
            "time": "1720",
            "body_temperature": "98.5",
            "measure": "Fahrenheit",
            "method": "Mouth",
            "comments": ["I wasn't feeling well but temperature is normal"]
        }, {
            "measurement_type": "Body temperature",
            "date": "06 Jan 2013",
            "time": "1900",
            "body_temperature": "98.3",
            "measure": "Fahrenheit",
            "method": "Mouth",
            "comments": ["Not sure if this ear themo is working or if I am doing something", "work..."]
        }, {
            "measurement_type": "Body temperature",
            "date": "07 Jan 2013",
            "time": "2359",
            "body_temperature": "98.1",
            "measure": "Fahrenheit",
            "method": "Mouth",
            "comments": ["Feel Fine"]
        }, {
            "measurement_type": "Pain",
            "date": "02 Jan 2010",
            "time": "1720",
            "pain_level": "7",
            "comments": ["Lower back pain - took 1 Ibuprofen with food for pain"]
        }, {
            "measurement_type": "Pain",
            "date": "06 Jan 2013",
            "time": "1900",
            "pain_level": "4",
            "comments": ["Feet are sore from the long walk I took with the Dog today"]
        }, {
            "measurement_type": "Pain",
            "date": "07 Jan 2013",
            "time": "2359",
            "pain_level": "3",
            "comments": ["General aches"]
        }, {
            "measurement_type": "Blood sugar",
            "date": "02 Jan 2010",
            "time": "1720",
            "method": "Sterile Lancet",
            "blood_sugar_count": "166",
            "comments": ["BS taken before meal"]
        }, {
            "measurement_type": "Blood sugar",
            "date": "06 Jan 2013",
            "time": "1900",
            "method": "Sterile Lancet",
            "blood_sugar_count": "174",
            "comments": ["I just ate. Need to leave the ice cream alone"]
        }, {
            "measurement_type": "Blood sugar",
            "date": "07 Jan 2013",
            "time": "2359",
            "method": "Sterile Lancet",
            "blood_sugar_count": "141",
            "comments": ["Feeling good!"]
        }, {
            "measurement_type": "INR",
            "date": "08 Jan 2013",
            "time": "2359",
            "inr_value": ".8",
            "target_range": "No Target",
            "location": "Non VA Provider",
            "provider": "Dr. Smith",
            "comments": ["PT Only 9.6", "PTT only 13.3"]
        }]
    },
    "va_radiology": {},
    "va_ekg": {},
    "self_family": {},
    "self_military": {},
    "self_activity": {},
    "self_food": {},
    "dod_service": {},
    "self_current_goals": {},
    "self_completed_goals": {}
}
```