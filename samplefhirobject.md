## FHIR Object Sample Output

```
{
    "Patient": {
        "resourceType": "Patient",
        "text": {
            "status": "generated",
            "div": ""
        },
        "identifier": [],
        "name": [{
            "use": "self",
            "family": ["MHVTESTVETERAN"],
            "given": ["ONE"]
        }, {
            "use": "VA_SOUTHERN_OREGON_REHABILITATION_CENTER_CLINICS",
            "family": ["MHVTESTVETERAN"],
            "given": ["ONE"]
        }, {
            "use": "SPOKANE_VAMC",
            "family": ["MHVTESTVETERAN"],
            "given": ["ONE"]
        }, {
            "use": "PORTLAND,_OREGON_VA_MEDICAL_CENTER",
            "family": ["MHVTESTVETERAN"],
            "given": ["ONE"]
        }],
        "telecom": [{
            "system": "phone",
            "value": "000-555-2123",
            "use": "home"
        }, {
            "system": "phone",
            "value": "000-555-4100",
            "use": "work"
        }, {
            "system": "phone",
            "value": "000-555-0303",
            "use": "cell"
        }, {
            "system": "fax",
            "value": "000-555-4110",
            "use": "fax"
        }, {
            "system": "pager",
            "value": "000-555-2020",
            "use": "pager"
        }, {
            "system": "phone",
            "value": "000-555-2123",
            "use": "home"
        }, {
            "system": "email",
            "value": "mhvveteran@emailaddress.com",
            "use": "email"
        }, {
            "system": "email",
            "value": "MHVVETERAN@EMAILADDRESS.COM",
            "use": "email"
        }, {
            "system": "email",
            "value": "MHVVETERAN@EMAILADDRESS.COM",
            "use": "email"
        }, {
            "system": "email",
            "value": "MHVVETERAN@EMAILADDRESS.COM",
            "use": "email"
        }],
        "gender": {
            "coding": []
        },
        "birthDate": "",
        "deceasedBoolean": false,
        "address": [{
            "use": "home",
            "line": ["123 Anywhere Road", "Apt. 123"],
            "city": "Anywhere",
            "state": "DC",
            "zip": "00000"
        }, {
            "use": "home",
            "line": ["123 ANYWHERE RD", "APT 123"],
            "city": "WASHINGTON",
            "state": "DISTRICT OF COLUMBIA",
            "zip": "00000"
        }, {
            "use": "home",
            "line": ["123 ANYWHERE RD", "APT 123"],
            "city": "WASHINGTON",
            "state": "DISTRICT OF COLUMBIA",
            "zip": "00000"
        }, {
            "use": "home",
            "line": ["123 ANYWHERE RD", "APT 123"],
            "city": "WASHINGTON",
            "state": "DISTRICT OF COLUMBIA",
            "zip": "00000"
        }],
        "contact": [{
            "relationship": [{
                "coding": []
            }],
            "name": {
                "family": ["MHVVeteran"],
                "_family": [{
                    "extension": []
                }],
                "given": ["Two"]
            },
            "telecom": [{
                "system": "phone",
                "value": "000-555-2121",
                "use": "home"
            }, {
                "system": "phone",
                "value": "000-555-1000",
                "use": "work"
            }, {
                "system": "phone",
                "value": "000-555-1855",
                "use": "cell"
            }]
        }, {
            "relationship": [{
                "coding": []
            }],
            "name": {
                "family": ["MHVVeteran"],
                "_family": [{
                    "extension": []
                }],
                "given": ["Three"]
            },
            "telecom": [{
                "system": "phone",
                "value": "000-555-2339",
                "use": "home"
            }, {
                "system": "phone",
                "value": "000-555-5000",
                "use": "work"
            }, {
                "system": "phone",
                "value": "000-555-1458",
                "use": "cell"
            }]
        }, {
            "relationship": [{
                "coding": []
            }],
            "name": {
                "family": ["MHVVETERAN"],
                "_family": [{
                    "extension": []
                }],
                "given": ["TWO"]
            },
            "telecom": [{
                "system": "phone",
                "value": "000-444-1952",
                "use": "home"
            }]
        }, {
            "relationship": [{
                "coding": []
            }],
            "name": {
                "family": ["MHVVETERAN"],
                "_family": [{
                    "extension": []
                }],
                "given": ["TWO"]
            },
            "telecom": [{
                "system": "phone",
                "value": "000-444-1952",
                "use": "home"
            }]
        }, {
            "relationship": [{
                "coding": []
            }],
            "name": {
                "family": ["MHVVETERAN"],
                "_family": [{
                    "extension": []
                }],
                "given": ["TWO"]
            },
            "telecom": [{
                "system": "phone",
                "value": "000-444-1952",
                "use": "home"
            }]
        }],
        "managingOrganization": {
            "reference": ""
        },
        "active": true
    },
    "Encounters": {
        "Encounters": [{
            "resourceType": "Encounter",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "08 Oct 2014 @ 1330",
            "status": "CANCELLED",
            "class": "",
            "subject": {
                "reference": ""
            }
        }, {
            "resourceType": "Encounter",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "08 Sep 2014 @ 1215",
            "status": "CANCELLED",
            "class": "",
            "subject": {
                "reference": ""
            }
        }, {
            "resourceType": "Encounter",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "29 Jul 2014 @ 0900",
            "status": "APPOINTMENT NOT KEPT",
            "class": "",
            "subject": {
                "reference": ""
            }
        }, {
            "resourceType": "Encounter",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "09 Dec 2013 @ 0800",
            "status": "APPOINTMENT NOT KEPT",
            "class": "",
            "subject": {
                "reference": ""
            }
        }, {
            "resourceType": "Encounter",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "05 Aug 2013 @ 0800",
            "status": "CANCELLED",
            "class": "",
            "subject": {
                "reference": ""
            }
        }, {
            "resourceType": "Encounter",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "08 Jul 2013 @ 0800",
            "status": "APPOINTMENT NOT KEPT",
            "class": "",
            "subject": {
                "reference": ""
            }
        }, {
            "resourceType": "Encounter",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "16 May 2013 @ 0800",
            "status": "CANCELLED",
            "class": "",
            "subject": {
                "reference": ""
            }
        }, {
            "resourceType": "Encounter",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "07 Jan 2013 @ 0800",
            "status": "APPOINTMENT NOT KEPT",
            "class": "",
            "subject": {
                "reference": ""
            }
        }]
    },
    "AdverseReactionAllergies": {
        "Allergies": [],
        "Reactions": [{
            "resourceType": "AdverseReaction",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "07 Dec 2012",
            "subject": {
                "reference": ""
            },
            "didNotOccurFlag": false,
            "recorder": {
                "reference": ""
            },
            "symptom": [{
                "code": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }],
                    "text": "ANAPHYLAXIS"
                },
                "severity": ""
            }],
            "exposure": [{
                "date": "",
                "type": "",
                "substance": {
                    "reference": ""
                }
            }]
        }, {
            "resourceType": "AdverseReaction",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "03 Jun 2011",
            "subject": {
                "reference": ""
            },
            "didNotOccurFlag": false,
            "recorder": {
                "reference": ""
            },
            "symptom": [{
                "code": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }],
                    "text": "--"
                },
                "severity": ""
            }],
            "exposure": [{
                "date": "",
                "type": "",
                "substance": {
                    "reference": ""
                }
            }]
        }, {
            "resourceType": "AdverseReaction",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "03 Jun 2011",
            "subject": {
                "reference": ""
            },
            "didNotOccurFlag": false,
            "recorder": {
                "reference": ""
            },
            "symptom": [{
                "code": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }],
                    "text": "RETENTION OF URINE"
                },
                "severity": ""
            }],
            "exposure": [{
                "date": "",
                "type": "",
                "substance": {
                    "reference": ""
                }
            }]
        }, {
            "resourceType": "AdverseReaction",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "03 Jun 2011",
            "subject": {
                "reference": ""
            },
            "didNotOccurFlag": false,
            "recorder": {
                "reference": ""
            },
            "symptom": [{
                "code": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }],
                    "text": "DIZZINESS"
                },
                "severity": ""
            }],
            "exposure": [{
                "date": "",
                "type": "",
                "substance": {
                    "reference": ""
                }
            }]
        }, {
            "resourceType": "AdverseReaction",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "03 Jun 2011",
            "subject": {
                "reference": ""
            },
            "didNotOccurFlag": false,
            "recorder": {
                "reference": ""
            },
            "symptom": [{
                "code": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }],
                    "text": "--"
                },
                "severity": ""
            }],
            "exposure": [{
                "date": "",
                "type": "",
                "substance": {
                    "reference": ""
                }
            }]
        }, {
            "resourceType": "AdverseReaction",
            "text": {
                "status": "generated",
                "div": ""
            },
            "date": "03 Jun 2011",
            "subject": {
                "reference": ""
            },
            "didNotOccurFlag": false,
            "recorder": {
                "reference": ""
            },
            "symptom": [{
                "code": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }],
                    "text": "DELIRIUM, DROWSY"
                },
                "severity": ""
            }],
            "exposure": [{
                "date": "",
                "type": "",
                "substance": {
                    "reference": ""
                }
            }]
        }],
        "Substances": [{
            "resourceType": "Substance",
            "text": {
                "status": "generated",
                "div": ""
            },
            "type": {
                "text": "IMIPRAMINE",
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            }
        }, {
            "resourceType": "Substance",
            "text": {
                "status": "generated",
                "div": ""
            },
            "type": {
                "text": "TRIMETHOPRIM",
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            }
        }, {
            "resourceType": "Substance",
            "text": {
                "status": "generated",
                "div": ""
            },
            "type": {
                "text": "TRAMADOL",
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            }
        }, {
            "resourceType": "Substance",
            "text": {
                "status": "generated",
                "div": ""
            },
            "type": {
                "text": "TERAZOSIN",
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            }
        }, {
            "resourceType": "Substance",
            "text": {
                "status": "generated",
                "div": ""
            },
            "type": {
                "text": "BACTRIM",
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            }
        }, {
            "resourceType": "Substance",
            "text": {
                "status": "generated",
                "div": ""
            },
            "type": {
                "text": "METHOCARBAMOL",
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            }
        }]
    },
    "Medication": {
        "Medications": [{
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "ASPIRIN 81MG EC TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "ASPIRIN 325MG EC TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "AMLODIPINE BESYLATE 5MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "DONEPEZIL HCL 5MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "HCTZ 25/TRIAMTERENE 37.5MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "FLUOXETINE HCL 10MG CAP",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "AMLODIPINE BESYLATE 10MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "COLON ELECTROLYTE LAVAGE PWD FOR SOLN",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "ACCU-CHEK AVIVA (GLUCOSE) TEST STRIP #50",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "SODIUM CHLORIDE 0.65% SOLN NASAL",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "SIMVASTATIN 40MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "NAPROXEN 500MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "METFORMIN HCL 1000MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "LISINOPRIL 10MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "INSULIN,GLARGINE 100U/ML INJ 10ML VIAL",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "INSULIN NPH HUMAN 100 UNIT/ML NOVOLIN N",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "IBUPROFEN 600MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "DEXAMETHASONE 4MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "BACITRACIN OINTMENT 1 OZ",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "AMLODIPINE BESYLATE 10MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "IBUPROFEN 600MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "ACCU-CHEK AVIVA (GLUCOSE) TEST STRIP #50",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "INSULIN,GLARGINE 100U/ML INJ 10ML VIAL",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "INSULIN NOVOLIN NPH 100U/ML INJ 10ML VL",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "SODIUM CHLORIDE 0.65% SOLN NASAL",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "METFORMIN HCL 1000MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "NAPROXEN 500MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "DEXAMETHASONE 4MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "BACITRACIN OINTMENT 1 OZ",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "LISINOPRIL 10MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "SIMVASTATIN 40MG TAB",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "COLONIC LAVAGE SOLUTION (4 LITER)",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "Cough Medicine",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }, {
            "resourceType": "Medication",
            "text": {
                "status": "generated",
                "div": ""
            },
            "name": "Multi-vitamin",
            "code": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "isBrand": true,
            "kind": "product",
            "product": {
                "form": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "ingredient": [{
                    "item": {
                        "reference": "",
                        "display": ""
                    },
                    "amount": {
                        "numerator": {
                            "value": 0,
                            "units": "",
                            "system": "",
                            "code": ""
                        },
                        "denominator": {
                            "value": 1
                        }
                    }
                }]
            }
        }],
        "MedicationPrescriptions": [{
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "active",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "ASPIRIN 81MG EC TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE TABLET BY MOUTH EVERY DAY",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "14 Oct 2014",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 3,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 30,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "active",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "ASPIRIN 325MG EC TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE TABLET BY MOUTH EVERY DAY",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "25 Aug 2014",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 11,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 1,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "AMLODIPINE BESYLATE 5MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE-HALF TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "10 Dec 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 2,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 90,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "DONEPEZIL HCL 5MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE TABLET BY MOUTH EVERY MORNING",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "10 Dec 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 10,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 30,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "HCTZ 25/TRIAMTERENE 37.5MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE-HALF TABLET (12.5/18.75 MG) BY MOUTH EVERY DAY",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "10 Dec 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 3,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 90,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "FLUOXETINE HCL 10MG CAP"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE CAPSULE BY MOUTH EVERY MORNING",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "10 Dec 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 3,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 90,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "AMLODIPINE BESYLATE 10MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE-HALF TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE --, AVOID GRAPEFRUIT JUICE --",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "15 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 3,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 90,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "COLON ELECTROLYTE LAVAGE PWD FOR SOLN"
            },
            "dosageInstruction": [{
                "text": "MIX 1 GALLON IN WATER AND DRINK AS DIRECTED FOR 1 DAY DISSOLVE 1, BOTTLE",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "13 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 0,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 2,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "ACCU-CHEK AVIVA (GLUCOSE) TEST STRIP #50"
            },
            "dosageInstruction": [{
                "text": "USE 1 STRIP FOR BLOOD GLUCOSE TESTING AS DIRECTED",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "06 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 2,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 50,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "SODIUM CHLORIDE 0.65% SOLN NASAL"
            },
            "dosageInstruction": [{
                "text": "SPRAY 2 SPRAYS MOUTH MINUTE FOR 30 DAYS",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "06 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 3,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 30,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "SIMVASTATIN 40MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE-HALF TABLET BY MOUTH AT BEDTIME TO LOWER YOUR, CHOLESTEROL. AVOID CONSUMING GRAPEFRUIT PRODUCTS.  CALL YOUR PROVIDER IF YOU, HAVE UNEXPLAINED MUSCLE PAIN, TENDERNESS OR  WEAKNESS.",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "06 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 2,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 90,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "NAPROXEN 500MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE TABLET BY MOUTH TWICE A DAY -- TAKE WITH FOOD IF GI",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "06 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 3,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 90,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "METFORMIN HCL 1000MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE TABLET BY MOUTH TWICE DAILY WITH MEALS FOR DIABETES.",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "06 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 2,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 90,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "LISINOPRIL 10MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "06 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 3,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 30,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "INSULIN,GLARGINE 100U/ML INJ 10ML VIAL"
            },
            "dosageInstruction": [{
                "text": "INJECT 25 UNITS SUBCUTANEOUSLY AT BEDTIME * DO NOT MIX OTHER, INSULINS IN SAME SYRINGE AS GLARGINE. DISCARD VIAL 28 DAYS AFTER OPENING.  EACH, VIAL EXPIRES 28 DAYS AFTER FIRST OPENING.",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "06 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 2,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 30,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "INSULIN NPH HUMAN 100 UNIT/ML NOVOLIN N"
            },
            "dosageInstruction": [{
                "text": "INJECT 16 UNITS SUBCUTANEOUSLY EVERY MORNING AND INJECT 18 UNITS, AT BEDTIME EACH VIAL EXPIRES 30 DAYS AFTER FIRST OPENING.",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "06 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 1,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 30,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "IBUPROFEN 600MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE TABLET BY MOUTH FOUR TIMES DAILY WITH MEALS AS NEEDED, FOR PAIN",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "06 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 3,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 60,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "DEXAMETHASONE 4MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE TWO TABLETS BY MOUTH HOUR FOR 2 DAYS -- TAKE WITH FOOD --",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "06 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 2,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 30,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "discontinued",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "BACITRACIN OINTMENT 1 OZ"
            },
            "dosageInstruction": [{
                "text": "APPLY SMALL AMOUNT TOPICALLY TO AFFECTED AREA TWICE A DAY TO, THREE TIMES A DAY FOR 30 DAYS",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "06 Jul 2012",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 1,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 45,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "AMLODIPINE BESYLATE 10MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE-HALF TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE --, AVOID GRAPEFRUIT JUICE --",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Jun 2011",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 2,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 90,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "IBUPROFEN 600MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE TABLET BY MOUTH FOUR TIMES DAILY WITH MEALS AS NEEDED, FOR PAIN",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Jun 2011",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 2,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 60,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "ACCU-CHEK AVIVA (GLUCOSE) TEST STRIP #50"
            },
            "dosageInstruction": [{
                "text": "USE 1 STRIP FOR BLOOD GLUCOSE TESTING AS DIRECTED",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Jun 2011",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 1,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 50,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "INSULIN,GLARGINE 100U/ML INJ 10ML VIAL"
            },
            "dosageInstruction": [{
                "text": "INJECT 25 UNITS SUBCUTANEOUSLY AT BEDTIME * DO NOT MIX OTHER, INSULINS IN SAME SYRINGE AS GLARGINE. DISCARD VIAL 28 DAYS AFTER OPENING.  EACH, VIAL EXPIRES 28 DAYS AFTER FIRST OPENING.",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Jun 2011",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 2,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 30,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "INSULIN NOVOLIN NPH 100U/ML INJ 10ML VL"
            },
            "dosageInstruction": [{
                "text": "INJECT 16 UNITS SUBCUTANEOUSLY EVERY MORNING AND INJECT 18 UNITS, AT BEDTIME EACH VIAL EXPIRES 30 DAYS AFTER FIRST OPENING.",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Jun 2011",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 1,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 30,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "SODIUM CHLORIDE 0.65% SOLN NASAL"
            },
            "dosageInstruction": [{
                "text": "SPRAY 2 SPRAYS MOUTH MINUTE FOR 30 DAYS",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Dec 2010",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 3,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 30,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "METFORMIN HCL 1000MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE TABLET BY MOUTH TWICE DAILY WITH MEALS FOR DIABETES.",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Jun 2011",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 2,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 90,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "NAPROXEN 500MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE TABLET BY MOUTH TWICE A DAY -- TAKE WITH FOOD IF GI",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Dec 2010",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 3,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 90,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "DEXAMETHASONE 4MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE TWO TABLETS BY MOUTH HOUR FOR 2 DAYS -- TAKE WITH FOOD --",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Dec 2010",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 2,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 30,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "BACITRACIN OINTMENT 1 OZ"
            },
            "dosageInstruction": [{
                "text": "APPLY SMALL AMOUNT TOPICALLY TO AFFECTED AREA TWICE A DAY TO, THREE TIMES A DAY FOR 30 DAYS",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Dec 2010",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 1,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 45,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "LISINOPRIL 10MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE TABLET BY MOUTH EVERY DAY FOR BLOOD PRESSURE",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Dec 2010",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 3,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 30,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "SIMVASTATIN 40MG TAB"
            },
            "dosageInstruction": [{
                "text": "TAKE ONE-HALF TABLET BY MOUTH AT BEDTIME TO LOWER YOUR, CHOLESTEROL. AVOID CONSUMING GRAPEFRUIT PRODUCTS.  CALL YOUR PROVIDER IF YOU, HAVE UNEXPLAINED MUSCLE PAIN, TENDERNESS OR  WEAKNESS.",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Jun 2011",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 2,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 90,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "expired",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "COLONIC LAVAGE SOLUTION (4 LITER)"
            },
            "dosageInstruction": [{
                "text": "MIX 1 GALLON IN WATER AND DRINK AS DIRECTED FOR 1 DAY DISSOLVE 1, BOTTLE",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "03 Jun 2011",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 0,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 2,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "Cough Medicine"
            },
            "dosageInstruction": [{
                "text": "",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 0,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 0,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }, {
            "resourceType": "MedicationPrescription",
            "text": {
                "status": "generated",
                "div": ""
            },
            "identifier": [{
                "use": "",
                "system": "",
                "value": ""
            }],
            "dateWritten": "",
            "status": "",
            "patient": {
                "reference": "",
                "display": ""
            },
            "prescriber": {
                "reference": "",
                "display": ""
            },
            "encounter": {
                "reference": "",
                "display": ""
            },
            "reasonCodeableConcept": {
                "coding": [{
                    "system": "",
                    "code": "",
                    "display": ""
                }]
            },
            "medication": {
                "reference": "",
                "display": "Multi-vitamin"
            },
            "dosageInstruction": [{
                "text": "",
                "additionalInstructions": {
                    "text": ""
                },
                "timingSchedule": {
                    "event": [{
                        "start": "",
                        "end": ""
                    }],
                    "repeat": {
                        "frequency": 0,
                        "duration": 1,
                        "units": ""
                    }
                },
                "site": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "route": {
                    "coding": [{
                        "system": "",
                        "code": "",
                        "display": ""
                    }]
                },
                "doseQuantity": {
                    "value": 0,
                    "units": "",
                    "system": "",
                    "code": ""
                }
            }],
            "dispense": {
                "validityPeriod": {
                    "start": "",
                    "end": ""
                },
                "numberOfRepeatsAllowed": 0,
                "quantity": {
                    "value": 1,
                    "units": "",
                    "system": "",
                    "code": ""
                },
                "expectedSupplyDuration": {
                    "value": 0,
                    "units": "days",
                    "system": "urn:oid:2.16.840.1.113883.6.8",
                    "code": "d"
                }
            }
        }]
    }
}
```