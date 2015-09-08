## Mapping

This file lists the intermediate object lowest level data sets (left) with their FHIR object destinations

 * `header.bbversion` -> not used
 * `header.requestdate` -> not used
 * `header.requestname` -> not used
 * `header.requestdob` -> not used
 * `request_summary.systemrequestdate` -> not used
 * `request_summary.filename` -> not used
 * `request_summary.daterange` -> not used
 * `request_summary.datatypes[0]` -> not used 
 * `self_demographics.source` -> not used
 * `self_demographics.first_name` -> `Patient` resource `"name"` (array entry) in `"given" {"use": "self", "family": ["MHVTESTVETERAN"], "given": ["ONE"]}`
 * `self_demographics.middle_initial` -> not used
 * `self_demographics.last_name` -> `Patient` resource `"name"` (array entry) in `"family" {"use": "self", "family": ["MHVTESTVETERAN"], "given": ["ONE"]}`
 * `self_demographics.suffix` -> not used
 * `self_demographics.alias` -> not used
 * `self_demographics.relationship_to_va` -> not used
 * `self_demographics.gender` -> `Patient` resource `"gender"` (array entry) in `"coding"` `"display"`
 * `self_demographics.bloodtype` -> not used
 * `self_demographics.organdonor` -> not used
 * `self_demographics.date_of_birth` -> `Patient` resource `"birthDate"` (TODO: match FHIR formatting)
 * `self_demographics.marital_status` -> not used
 * `self_demographics.current_occupation` -> not used
 * `self_demographics.mailing_or_destination_address` -> `Patient` resource `"address"` (array) in `"line"` (array) `{"use": "home","line": ["123 Anywhere Road", "Apt. 123"],"city": "Anywhere","state": "DC","zip": "00000"}`
 * `self_demographics.mailing_or_destination_address2` -> `Patient` resource `"address"` (array) in `"line"` (array) `{"use": "home","line": ["123 Anywhere Road", "Apt. 123"],"city": "Anywhere","state": "DC","zip": "00000"}`
 * `self_demographics.mailing_or_destination_city` -> `Patient` resource `"address"` (array) in `"city" {"use": "home","line": ["123 Anywhere Road", "Apt. 123"],"city": "Anywhere","state": "DC","zip": "00000"}`
 * `self_demographics.mailing_or_destination_state` -> `Patient` resource `"address"` (array) in `"state" {"use": "home","line": ["123 Anywhere Road", "Apt. 123"],"city": "Anywhere","state": "DC","zip": "00000"}`
 * `self_demographics.mailing_or_destination_country` -> not used
 * `self_demographics.mailing_or_destination_province` -> not used
 * `self_demographics.mailing_or_destination_zip/postal_code` -> `Patient` resource `"address"` (array) in `"zip" {"use": "home","line": ["123 Anywhere Road", "Apt. 123"],"city": "Anywhere","state": "DC","zip": "00000"}`
 * `self_demographics.home_phone_number` -> `Patient` resource `"telecom"` (array entry) `{"system": "phone", "value": "000-555-2123", "use": "home"}`
 * `self_demographics.work_phone_number` -> `Patient` resource `"telecom"` (array entry) `{"system": "phone", "value": "000-555-2123", "use": "work"}`
 * `self_demographics.pager_number` -> `Patient` resource `"telecom"` (array entry) `{"system": "phone", "value": "000-555-2123", "use": "pager"}`
 * `self_demographics.cell_phone_number` -> `Patient` resource `"telecom"` (array entry) `{"system": "phone", "value": "000-555-2123", "use": "cell"}`
 * `self_demographics.fax_number` -> `Patient` resource `"telecom"` (array entry) `{"system": "phone", "value": "000-555-2123", "use": "fax"}`
 * `self_demographics.email_address` -> `Patient` resource `"telecom"` (array entry) `{"system": "email", "value": "000-555-2123", "use": "email"}`
 * `self_demographics.preferred_method_of_contact` -> not used
 * `self_demographics.emergencycontacts[0].contact_first_name` -> `Patient` resource `"contact"` (array entry) `"name"`
 * `self_demographics.emergencycontacts[0].contact_last_name` -> `Patient` resource `"contact"` (array entry) `"name"`
 * `self_demographics.emergencycontacts[0].relationship` -> not used
 * `self_demographics.emergencycontacts[0].home_phone_number` -> `Patient` resource `"contact"` (array entry) `"telecom"`
 * `self_demographics.emergencycontacts[0].work_phone_number` -> `Patient` resource `"contact"` (array entry) `"telecom"`
 * `self_demographics.emergencycontacts[0].work_phone_ext` -> not used
 * `self_demographics.emergencycontacts[0].cell_phone_number` -> `Patient` resource `"contact"` (array entry) `"telecom"`
 * `self_demographics.emergencycontacts[0].address_line_1` -> not used
 * `self_demographics.emergencycontacts[0].address_line_2` -> not used
 * `self_demographics.emergencycontacts[0].city` -> not used
 * `self_demographics.emergencycontacts[0].state` -> not used
 * `self_demographics.emergencycontacts[0].country` -> not used
 * `self_demographics.emergencycontacts[0].province` -> not used
 * `self_demographics.emergencycontacts[0].zip/post_code` -> not used
 * `self_demographics.emergencycontacts[0].email_address` -> `Patient` resource `"contact"` (array entry) `"telecom"`
 * `va_demographics.source` -> not used
 * `va_demographics.last_updated` -> not used
 * `va_demographics.sorted_by` -> not used 
 * `va_demographics.facilities[0].va_treating_facility` -> `Patient` resource `"name"` (array entry) in `"use" {"use": "VA_SOUTHERN_OREGON_REHABILITATION_CENTER_CLINICS","family": ["MHVTESTVETERAN"],"given": ["ONE"]}`
 * `va_demographics.facilities[0].first_name` ->  `Patient` resource `"name"` (array entry) in `"given" {"use": "VA_SOUTHERN_OREGON_REHABILITATION_CENTER_CLINICS","family": ["MHVTESTVETERAN"],"given": ["ONE"]}`
 * `va_demographics.facilities[0].middle_name` -> `Patient` resource `"name"` (array entry) in `"given" {"use": "VA_SOUTHERN_OREGON_REHABILITATION_CENTER_CLINICS","family": ["MHVTESTVETERAN"],"given": ["ONE"]}`
 * `va_demographics.facilities[0].last_name` ->  `Patient` resource `"name"` (array entry) in `"family" {"use": "VA_SOUTHERN_OREGON_REHABILITATION_CENTER_CLINICS","family": ["MHVTESTVETERAN"],"given": ["ONE"]}`
 * `va_demographics.facilities[0].religion` -> not used
 * `va_demographics.facilities[0].ethnicity` -> not used
 * `va_demographics.facilities[0].date_of_birth` -> not used
 * `va_demographics.facilities[0].place_of_birth` -> not used
 * `va_demographics.facilities[0].age` -> not used
 * `va_demographics.facilities[0].gender` -> not used
 * `va_demographics.facilities[0].marital_status` -> not used
 * `va_demographics.facilities[0].permanentaddress.street_address` -> `Patient` resource `"address"` (array) in `"line"` (array) `{"use": "home","line": ["123 Anywhere Road", "Apt. 123"],"city": "Anywhere","state": "DC","zip": "00000"}`
 * `va_demographics.facilities[0].permanentaddress.street_address_2` -> `Patient` resource `"address"` (array) in `"line"` (array) `{"use": "home","line": ["123 Anywhere Road", "Apt. 123"],"city": "Anywhere","state": "DC","zip": "00000"}`
 * `va_demographics.facilities[0].permanentaddress.work_phone_number` ->
 * `va_demographics.facilities[0].permanentaddress.city` -> `Patient` resource `"address"` (array) in `"city" {"use": "home","line": ["123 Anywhere Road", "Apt. 123"],"city": "Anywhere","state": "DC","zip": "00000"}`
 * `va_demographics.facilities[0].permanentaddress.state` -> `Patient` resource `"address"` (array) in `"state" {"use": "home","line": ["123 Anywhere Road", "Apt. 123"],"city": "Anywhere","state": "DC","zip": "00000"}`
 * `va_demographics.facilities[0].permanentaddress.zip_code` -> `Patient` resource `"address"` (array) in `"zip" {"use": "home","line": ["123 Anywhere Road", "Apt. 123"],"city": "Anywhere","state": "DC","zip": "00000"}`
 * `va_demographics.facilities[0].permanentaddress.county` -> not used
 * `va_demographics.facilities[0].permanentaddress.country` -> not used
 * `va_demographics.facilities[0].permanentaddress.home_phone_number` -> `"telecom"` (array entry) `{"system": "phone", "value": "000-555-2123", "use": "home"}`
 * `va_demographics.facilities[0].permanentaddress.cell_phone_number` -> `"telecom"` (array entry) `{"system": "phone", "value": "000-555-2123", "use": "cell"}`
 * `va_demographics.facilities[0].permanentaddress.email_address` -> `"telecom"` (array entry) `{"system": "email", "value": "000-555-2123", "use": "email"}`
 * `va_demographics.facilities[0].eligibility.primary_eligibility_code` -> not used
 * `va_demographics.facilities[0].eligibility.service_connected_percentage` -> not used
 * `va_demographics.facilities[0].employment.employment_status` -> not used
 * `va_demographics.facilities[0].employment.employer_name` -> not used
 * `va_demographics.facilities[0].activeinsurance.insurance_company` -> not used
 * `va_demographics.facilities[0].activeinsurance.effective_date` -> not used
 * `va_demographics.facilities[0].activeinsurance.expiration_date` -> not used
 * `va_demographics.facilities[0].activeinsurance.group_name` -> not used
 * `va_demographics.facilities[0].activeinsurance.group_number` -> not used
 * `va_demographics.facilities[0].activeinsurance.subscriber_id` -> not used
 * `va_demographics.facilities[0].activeinsurance.subscriber_name` -> not used
 * `va_demographics.facilities[0].activeinsurance.subscriber_relationship` -> not used
 * `va_demographics.facilities[0].primarynextofkin.name` -> not used
 * `va_demographics.facilities[0].primarynextofkin.street_address` - not used>
 * `va_demographics.facilities[0].primarynextofkin.city` -> not used
 * `va_demographics.facilities[0].primarynextofkin.state` -> not used
 * `va_demographics.facilities[0].primarynextofkin.zip_code` -> not used
 * `va_demographics.facilities[0].primarynextofkin.home_phone_number` -> not used
 * `va_demographics.facilities[0].primarynextofkin.work_phone_number` -> not used
 * `va_demographics.facilities[0].emergencycontact.name` -> `Patient` resource `"contact"` (array entry) `"name"`
 * `va_demographics.facilities[0].emergencycontact.street_address` -> not used
 * `va_demographics.facilities[0].emergencycontact.city` -> not used
 * `va_demographics.facilities[0].emergencycontact.state` -> not used
 * `va_demographics.facilities[0].emergencycontact.zip_code` -> not used
 * `va_demographics.facilities[0].emergencycontact.home_phone_number` -> `Patient` resource `"contact"` (array entry) `"telecom"`
 * `va_demographics.facilities[0].emergencycontact.work_phone_number` -> `Patient` resource `"contact"` (array entry) `"telecom"`
 * `va_demographics.facilities[0].vaguardian.name` -> not used
 * `va_demographics.facilities[0].vaguardian.street_address` -> not used
 * `va_demographics.facilities[0].vaguardian.city` -> not used
 * `va_demographics.facilities[0].vaguardian.state` -> not used
 * `va_demographics.facilities[0].vaguardian.zip_code` -> not used
 * `va_demographics.facilities[0].vaguardian.home_phone_number` -> not used
 * `va_demographics.facilities[0].vaguardian.work_phone_number` -> not used
 * `va_demographics.facilities[0].civilguardian.name` -> not used
 * `va_demographics.facilities[0].civilguardian.street_address` -> not used
 * `va_demographics.facilities[0].civilguardian.city` -> not used
 * `va_demographics.facilities[0].civilguardian.state` -> not used
 * `va_demographics.facilities[0].civilguardian.zip_code` -> not used
 * `va_demographics.facilities[0].civilguardian.home_phone_number` -> not used
 * `va_demographics.facilities[0].civilguardian.work_phone_number` -> not used
 * `va_appointments.source` -> not used
 * `va_appointments.last_updated` -> not used
 * `va_appointments.sort_by` -> not used
 * `va_appointments.pastappointments[0].date/time` -> `Encounter` resource `"date"` in format: `"2014-09-30T18:09:16.976+10:00"`
 * `va_appointments.pastappointments[0].location` -> TBD, probably `Location` resource
 * `va_appointments.pastappointments[0].status` -> `Encounter` resource `"status"`
 * `va_appointments.pastappointments[0].clinic` -> TBD, probably `Location` resource
 * `va_appointments.pastappointments[0].phone_number` -> `Encounter` resource `"telecom"`
 * `va_allergies.source` -> not used
 * `va_allergies.last_updated` -> not used
 * `va_allergies.allergies[0].allergy_name` -> 
 * `va_allergies.allergies[0].location` ->
 * `va_allergies.allergies[0].date_entered` -> `AdverseReaction` resource `"date"` in format: `"2012-09-17"`
 * `va_allergies.allergies[0].reaction` -> `AdverseReaction` resource `"symptom"`... `"code"` ... `"text"`
 * `va_allergies.allergies[0].allergy_type` ->
 * `va_allergies.allergies[0].va_drug_class` ->
 * `va_allergies.allergies[0].observed/historical` ->
 * `va_allergies.allergies[0].comments[0]` ->
 * `self_allergies.source` -> not used
 * `self_allergies.allergies[0].allergy_name` ->
 * `self_allergies.allergies[0].date` -> `AdverseReaction` resource `"date"` in format: `"2012-09-17"`
 * `self_allergies.allergies[0].severity` -> `AdverseReaction` resource `"symptom"`... `"severity"`
 * `self_allergies.allergies[0].diagnosed` ->
 * `self_allergies.allergies[0].reaction` -> `AdverseReaction` resource `"symptom"`... `"code"` ... `"text"`
 * `self_allergies.allergies[0].comments[0]` ->
 * `va_medications.source` -> not used
 * `va_medications.last_updated` -> not used
 * `va_medications.sorted_by` -> not used
 * `va_medications.medications[0].medication_name` -> `Medication` resource `"name"`, `MedicationPrescription` resource `"medication"` ... `"display"`
 * `va_medications.medications[0].instructions[0]` -> `MedicationPrescription` resource `"dosageInstruction"` ... `"text"`
 * `va_medications.medications[0].status` -> `MedicationPrescription` resource `"status"`
 * `va_medications.medications[0].refills_remaining` -> `MedicationPrescription` resource `"dispense"` ... `"numberOfRepeatsAllowed"`
 * `va_medications.medications[0].last_filled_on` -> not used
 * `va_medications.medications[0].initially_ordered_on` -> `MedicationPrescription` resource `"dispense"` ... `"validityPeriod"` ... `"start"`
 * `va_medications.medications[0].quantity` -> not used
 * `va_medications.medications[0].days_supply` -> `MedicationPrescription` resource `"dispense"` ... `"expectedSupplyDuration"` ... `"value"`
 * `va_medications.medications[0].pharmacy` -> not used
 * `va_medications.medications[0].prescription_number` -> not used
 * `self_medications.source` -> not used
 * `self_medications.medications[0].medication_category` -> not used
 * `self_medications.medications[0].drug_name` -> `Medication` resource `"name"`
 * `self_medications.medications[0].prescription_number` -> not used
 * `self_medications.medications[0].strength` -> not used
 * `self_medications.medications[0].dose` -> not used
 * `self_medications.medications[0].frequency` -> not used
 * `self_medications.medications[0].start_date` -> `MedicationStatement` resource `"whenGiven"` ... `"start"`
 * `self_medications.medications[0].stop_date` -> `MedicationStatement` resource `"whenGiven"` ... `"end"`
 * `self_medications.medications[0].pharmacy_name` -> not used
 * `self_medications.medications[0].pharmacy_phone` -> not used
 * `self_medications.medications[0].reason_for_taking` -> not used
 * `self_medications.medications[0].comments` -> not used
 * `va_problems.source` -> not used
 * `va_problems.last_updated` -> not used
 * `va_problems.sorted_by` -> not used
 * `va_problems.problems[0].problem` -> `Condition` resource `"coding"` ... `"code"` ... `"display"`
 * `va_problems.problems[0].date/time_entered` -> `Condition` resource `"dateAsserted"`
 * `va_problems.problems[0].location` -> not used
 * `va_problems.problems[0].status` -> `Condition` resource `"status"`
 * `va_problems.problems[0].provider` -> not used
 * `va_problems.problems[0].comments[0]` -> not used
 * `va_admission_discharge.source` -> not used
 * `va_admission_discharge.last_updated` -> not used
 * `va_admission_discharge.sorted_by` -> not used
 * `va_admission_discharge.admindischarge[0].admission_date` -> `Encounter` resource `date` and `period` ... `start`
 * `va_admission_discharge.admindischarge[0].location` ->
 * `va_admission_discharge.admindischarge[0].admitting_physician` ->
 * `va_admission_discharge.admindischarge[0].discharge_date` -> `Encounter` resource `period` ... `end`
 * `va_admission_discharge.admindischarge[0].discharge_physician` ->
 * `va_admission_discharge.admindischarge[0].summary[0]` -> `Encounter` resource `reason` ... `text` (joined)
 * `va_notes.source` -> not used
 * `va_notes.last_updated` -> not used
 * `va_notes.sorted_by` -> not used
 * `va_notes.newnote` ->
 * `va_notes.notes[0].date_time` ->
 * `va_notes.notes[0].note_title` ->
 * `va_notes.notes[0].location` ->
 * `va_notes.notes[0].signed_by` ->
 * `va_notes.notes[0].co-signed_by` ->
 * `va_notes.notes[0].date/time_signed` ->
 * `va_notes.notes[0].raw_note[0]` ->
 * `va_immunizations.source` -> not used
 * `va_immunizations.last_updated` -> not used
 * `va_immunizations.sorted_by` -> not used
 * `va_immunizations.summary[0].immunization` -> not used
 * `va_immunizations.summary[0].date` -> not used
 * `va_immunizations.immunizations[0].immunization_name` -> `Immunization` resource `"vaccineType"` ... `"coding"` ... `"text"`
 * `va_immunizations.immunizations[0].date_received:` -> `Immunization` resource `"date"` in format `"2013-01-01"`
 * `va_immunizations.immunizations[0].location` -> not used
 * `va_immunizations.immunizations[0].reaction` -> not used
 * `va_immunizations.immunizations[0].comments` -> not used
 * `va_immunizations.immunizations[0].reaction_key` -> not used
 * `self_immunizations.source` -> not used
 * `self_immunizations.lastkey` -> not used
 * `self_immunizations.immunizations[0].immunization_name` -> `Immunization` resource `"vaccineType"` ... `"coding"` ... `"text"`
 * `self_immunizations.immunizations[0].other` -> not used
 * `self_immunizations.immunizations[0].method` -> not used
 * `self_immunizations.immunizations[0].date_received` -> `Immunization` resource `"date"` in format `"2013-01-01"`
 * `self_immunizations.immunizations[0].reactions` -> not used
 * `self_immunizations.immunizations[0].comments` -> not used
 * `va_labs.source` -> not used
 * `va_labs.newtest` -> not used
 * `va_labs.newlab` -> not used
 * `va_labs.lastkey` -> not used
 * `va_labs.last_updated` -> not used
 * `va_labs.sorted_by` -> not used
 * `va_labs.labs[0].lab_test` ->
 * `va_labs.labs[0].lab_type` ->
 * `va_labs.labs[0].ordering_provider` ->
 * `va_labs.labs[0].ordering_location` ->
 * `va_labs.labs[0].specimen` ->
 * `va_labs.labs[0].date/time_collected` ->
 * `va_labs.labs[0].collected_location` ->
 * `va_labs.labs[0].tests[0]` ->
 * `va_labs.labs[0].raw_lab[0]` ->
 * `va_labs.labs[0].collection_sample` ->
 * `va_labs.labs[0].performing_location` ->
 * `va_labs.labs[0].date/time_completed` ->
 * `self_labs.source` -> not used
 * `self_labs.tests[0].test_name` ->
 * `self_labs.tests[0].date` ->
 * `self_labs.tests[0].location_performed` ->
 * `self_labs.tests[0].provider` ->
 * `self_labs.tests[0].results[0]` ->
 * `self_labs.tests[0].comments` ->
 * `va_vitals.source` -> not used
 * `va_vitals.last_updated` ->
 * `va_vitals.summary[0].vital_sign` -> not used (duplicate data)
 * `va_vitals.summary[0].reading` -> not used (duplicate date)
 * `va_vitals.summary[0].date` -> not used (duplicate data)
 * `va_vitals.sorted_by` -> not used
 * `va_vitals.vitals[0].vital_sign` -> `Observation` resource `"name"` ... `"text"`
 * `va_vitals.vitals[0].measurement` ->
 * `va_vitals.vitals[0].comments` -> not used
 * `va_vitals.vitals[0].location` ->
 * `va_vitals.vitals[0].date/time_collected` -> `Observation` resource `"issued"`
 * `self_vitals.source` -> not used
 * `self_vitals.vitals[0].measurement_type` ->
 * `self_vitals.vitals[0].date` ->
 * `self_vitals.vitals[0].time` ->
 * `self_vitals.vitals[0].systolic` ->
 * `self_vitals.vitals[0].diastolic` ->
 * `self_vitals.vitals[0].comments[0]` ->
 * `self_vitals.vitals[0].heart_rate` ->
 * `self_vitals.vitals[0].body_weight` ->
 * `self_vitals.vitals[0].measure` ->
 * `self_vitals.vitals[0].body_temperature` ->
 * `self_vitals.vitals[0].method` ->
 * `self_vitals.vitals[0].pain_level` ->
 * `self_vitals.vitals[0].blood_sugar_count` ->
 * `self_vitals.vitals[0].inr_value` ->
 * `self_vitals.vitals[0].target_range` ->
 * `self_vitals.vitals[0].location` ->
 * `self_vitals.vitals[0].provider` ->
