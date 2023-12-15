export const schema = {
    "models": {
        "Admissions": {
            "name": "Admissions",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "expectToEnroll": {
                    "name": "expectToEnroll",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "pronouns": {
                    "name": "pronouns",
                    "isArray": false,
                    "type": {
                        "enum": "Pronouns"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": {
                        "enum": "Sex"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "SSN": {
                    "name": "SSN",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gender": {
                    "name": "gender",
                    "isArray": false,
                    "type": {
                        "enum": "Gender"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ethnicity": {
                    "name": "ethnicity",
                    "isArray": false,
                    "type": {
                        "enum": "Ethnicity"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "zip": {
                    "name": "zip",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "country": {
                    "name": "country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "homePhone": {
                    "name": "homePhone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "mobilePhone": {
                    "name": "mobilePhone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "DOB": {
                    "name": "DOB",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "emergencyContactRelationship": {
                    "name": "emergencyContactRelationship",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "emergencyContactPhone": {
                    "name": "emergencyContactPhone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "emergencyContactAddress": {
                    "name": "emergencyContactAddress",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "emergencyContactCity": {
                    "name": "emergencyContactCity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "emergencyContactState": {
                    "name": "emergencyContactState",
                    "isArray": false,
                    "type": {
                        "enum": "State"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "emergencyContactZip": {
                    "name": "emergencyContactZip",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "emergencyContactFirstName": {
                    "name": "emergencyContactFirstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSFirstName": {
                    "name": "PGSFirstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSLastName": {
                    "name": "PGSLastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSAddress": {
                    "name": "PGSAddress",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSHomePhone": {
                    "name": "PGSHomePhone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "emergencyContactLastName": {
                    "name": "emergencyContactLastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSEmail": {
                    "name": "PGSEmail",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSFax": {
                    "name": "PGSFax",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "State"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "PGSSponsor": {
                    "name": "PGSSponsor",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSLegalCustody": {
                    "name": "PGSLegalCustody",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSPhysicalCustody": {
                    "name": "PGSPhysicalCustody",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSEmergencyContact": {
                    "name": "PGSEmergencyContact",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSParentGuardian": {
                    "name": "PGSParentGuardian",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSRelationship": {
                    "name": "PGSRelationship",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSMobilePhone": {
                    "name": "PGSMobilePhone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSWorkPhone": {
                    "name": "PGSWorkPhone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSWorkEmail": {
                    "name": "PGSWorkEmail",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSWorkFax": {
                    "name": "PGSWorkFax",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "howDIdYouHearAboutCCFIL": {
                    "name": "howDIdYouHearAboutCCFIL",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "referralSource": {
                    "name": "referralSource",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "whatEventsLeadToSeekTreatment": {
                    "name": "whatEventsLeadToSeekTreatment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSEmployer": {
                    "name": "PGSEmployer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "applicantsStrengths": {
                    "name": "applicantsStrengths",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "applicantsWeaknesses": {
                    "name": "applicantsWeaknesses",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "currentPlacementLocation": {
                    "name": "currentPlacementLocation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "currentPlacementDates": {
                    "name": "currentPlacementDates",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "currentPlacementProvider": {
                    "name": "currentPlacementProvider",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSJobTitle": {
                    "name": "PGSJobTitle",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "psychAnger": {
                    "name": "psychAnger",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "psychSuicidality": {
                    "name": "psychSuicidality",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "psychSexualActivity": {
                    "name": "psychSexualActivity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "whatGoalsReceivingTreatment": {
                    "name": "whatGoalsReceivingTreatment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "psychLegalProblems": {
                    "name": "psychLegalProblems",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "medicalSurgeriesIllnessesHospitalizations": {
                    "name": "medicalSurgeriesIllnessesHospitalizations",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "medicalPrescriptions": {
                    "name": "medicalPrescriptions",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "medicalVitaminsSupplements": {
                    "name": "medicalVitaminsSupplements",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "medicalHistory": {
                    "name": "medicalHistory",
                    "isArray": false,
                    "type": {
                        "nonModel": "MedicalHistory"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "allergiesAsthma": {
                    "name": "allergiesAsthma",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "inhalerEpiPen": {
                    "name": "inhalerEpiPen",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "inhalerType": {
                    "name": "inhalerType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "autoInsurance": {
                    "name": "autoInsurance",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "currentPlacementReason": {
                    "name": "currentPlacementReason",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "autoInsuranceClaimNumber": {
                    "name": "autoInsuranceClaimNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "psychSubstanceIssues": {
                    "name": "psychSubstanceIssues",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "autoInsuranceClaimAdjuster": {
                    "name": "autoInsuranceClaimAdjuster",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "autoInsuranceAddress": {
                    "name": "autoInsuranceAddress",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "autoInsuranceCity": {
                    "name": "autoInsuranceCity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "autoInsuranceState": {
                    "name": "autoInsuranceState",
                    "isArray": false,
                    "type": {
                        "enum": "State"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "autoInsuranceZip": {
                    "name": "autoInsuranceZip",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "autoInsurancePhone": {
                    "name": "autoInsurancePhone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "workersCompInsurance": {
                    "name": "workersCompInsurance",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "workersCompInsuranceCarrier": {
                    "name": "workersCompInsuranceCarrier",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "autoInsuranceDOL": {
                    "name": "autoInsuranceDOL",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "workersCompClaimAdjuster": {
                    "name": "workersCompClaimAdjuster",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "workersCompAddress": {
                    "name": "workersCompAddress",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "autoInsuranceCarrier": {
                    "name": "autoInsuranceCarrier",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PGSContactMethod": {
                    "name": "PGSContactMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "workersCompZip": {
                    "name": "workersCompZip",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "workersCompPhone": {
                    "name": "workersCompPhone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "medicalInsurance": {
                    "name": "medicalInsurance",
                    "isArray": false,
                    "type": {
                        "nonModel": "MedicalInsurance"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "workersCompClaimNumber": {
                    "name": "workersCompClaimNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "workersCompCity": {
                    "name": "workersCompCity",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "workersCompState": {
                    "name": "workersCompState",
                    "isArray": false,
                    "type": {
                        "enum": "State"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Admissions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Referrals": {
            "name": "Referrals",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "source": {
                    "name": "source",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "followUp": {
                    "name": "followUp",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "DOA": {
                    "name": "DOA",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "DOADate": {
                    "name": "DOADate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "reasonForDecline": {
                    "name": "reasonForDecline",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "howDidYouHearAboutUs": {
                    "name": "howDidYouHearAboutUs",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "assistanceProvided": {
                    "name": "assistanceProvided",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Referrals",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Icon": {
            "name": "Icon",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "alt": {
                    "name": "alt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "src": {
                    "name": "src",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Icons",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Services": {
            "name": "Services",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "serviceTitle": {
                    "name": "serviceTitle",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "serviceBodyText": {
                    "name": "serviceBodyText",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Icon": {
                    "name": "Icon",
                    "isArray": false,
                    "type": {
                        "model": "Icon"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "servicesIconId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "servicesIconId": {
                    "name": "servicesIconId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Services",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TeamMember": {
            "name": "TeamMember",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "bio": {
                    "name": "bio",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "link": {
                    "name": "link",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isFeatured": {
                    "name": "isFeatured",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Image": {
                    "name": "Image",
                    "isArray": false,
                    "type": {
                        "model": "Headshot"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "teamMemberImageId"
                        ]
                    }
                },
                "isLeader": {
                    "name": "isLeader",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "userId": {
                    "name": "userId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "teamMemberImageId": {
                    "name": "teamMemberImageId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "TeamMembers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Headshot": {
            "name": "Headshot",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "src": {
                    "name": "src",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "alt": {
                    "name": "alt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "imageTitle": {
                    "name": "imageTitle",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Headshots",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Pronouns": {
            "name": "Pronouns",
            "values": [
                "HEHIM",
                "SHEHER",
                "THEYTHEM",
                "OTHER"
            ]
        },
        "Sex": {
            "name": "Sex",
            "values": [
                "MALE",
                "FEMALE",
                "DECLINETOANSWER"
            ]
        },
        "Gender": {
            "name": "Gender",
            "values": [
                "AGENDER",
                "ANDROGYNE",
                "BIGENDER",
                "BUTCH",
                "CISGENDER",
                "GENDEREXPANSIVE",
                "GENDERFLUID",
                "GENDEROUTLAW",
                "GENDERQUEER",
                "MASCULINEOFCENTER",
                "NONBINARY",
                "OMNIGENDER",
                "POLYGENDERANDPANGENDER",
                "TRANSGENDER",
                "TRANS",
                "TWOSPIRIT",
                "DECLINETOANSWER"
            ]
        },
        "Ethnicity": {
            "name": "Ethnicity",
            "values": [
                "AFRICAN",
                "CARIBBEAN",
                "INDIAN",
                "MELANESIAN",
                "AUSTRALASIANABORIGINAL",
                "CHINESE",
                "GUAMANIAN",
                "JAPANESE",
                "KOREAN",
                "EUROPEANANGLOSAXON",
                "OTHERPACIFICISLANDER",
                "LATINAMERICAN",
                "ARABIC",
                "VIETNAMESE",
                "MICRONESIAN",
                "DECLINEDTORESPOND",
                "OTHERHISPANIC",
                "USORCANADIANINDIAN",
                "OTHERASIAN",
                "PUERTORICAN",
                "FILIPINO",
                "MEXICAN",
                "ALASKANNATIVE",
                "CUBAN"
            ]
        },
        "State": {
            "name": "State",
            "values": [
                "ALABAMA",
                "ALASKA",
                "ARIZONA",
                "ARKANSAS",
                "AMERICANSAMOA",
                "CALIFORNIA",
                "COLORADO",
                "CONNECTICUT",
                "DELAWARE",
                "DISTRICTOFCOLUMBIA",
                "FLORIDA",
                "GEORGIA",
                "GUAM",
                "HAWAII",
                "IDAHO",
                "ILLINOIS",
                "INDIANA",
                "IOWA",
                "KANSAS",
                "KENTUCKY",
                "LOUISIANA",
                "MAINE",
                "MARYLAND",
                "MASSACHUSETTS",
                "MICHIGAN",
                "MINNESOTA",
                "MISSISSIPPI",
                "MISSOURI",
                "MONTANA",
                "NEBRASKA",
                "NEVADA",
                "NEWHAMPSHIRE",
                "NEWJERSEY",
                "NEWMEXICO",
                "NEWYORK",
                "NORTHCAROLINA",
                "NORTHDAKOTA",
                "NORTHERNMARIANAISLANDS",
                "OHIO",
                "OKLAHOMA",
                "OREGON",
                "PENNSYLVANIA",
                "PUERTORICO",
                "RHODEISLAND",
                "SOUTHCAROLINA",
                "SOUTHDAKOTA",
                "TENNESSEE",
                "TEXAS",
                "TRUSTTERRITORIES",
                "UTAH",
                "VERMONT",
                "VIRGINIA",
                "VIRGINISLANDS",
                "WASHINGTON",
                "WESTVIRGINIA",
                "WISCONSIN",
                "WYOMING"
            ]
        }
    },
    "nonModels": {
        "InsuranceOrderType": {
            "name": "InsuranceOrderType",
            "fields": {
                "primary": {
                    "name": "primary",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "secondary": {
                    "name": "secondary",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "MedicalInsurance": {
            "name": "MedicalInsurance",
            "fields": {
                "companyName": {
                    "name": "companyName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "groupNumber": {
                    "name": "groupNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "policyNumber": {
                    "name": "policyNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "policyholdersFirstName": {
                    "name": "policyholdersFirstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "policyholdersLastName": {
                    "name": "policyholdersLastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "employer": {
                    "name": "employer",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "DOB": {
                    "name": "DOB",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "SSN": {
                    "name": "SSN",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "orderType": {
                    "name": "orderType",
                    "isArray": false,
                    "type": {
                        "nonModel": "InsuranceOrderType"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "MedicalHistory": {
            "name": "MedicalHistory",
            "fields": {
                "allergies": {
                    "name": "allergies",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "anaphylacticShock": {
                    "name": "anaphylacticShock",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "anemia": {
                    "name": "anemia",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ankleProblem": {
                    "name": "ankleProblem",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "anorexiaBulimia": {
                    "name": "anorexiaBulimia",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "appendicitis": {
                    "name": "appendicitis",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "armProblem": {
                    "name": "armProblem",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "arthritis": {
                    "name": "arthritis",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "asthma": {
                    "name": "asthma",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "backProblems": {
                    "name": "backProblems",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "bedwetting": {
                    "name": "bedwetting",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "bladderKidneyProblems": {
                    "name": "bladderKidneyProblems",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "bleedingDisorder": {
                    "name": "bleedingDisorder",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "boneCondition": {
                    "name": "boneCondition",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "bowelProblems": {
                    "name": "bowelProblems",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "brokenBones": {
                    "name": "brokenBones",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "cancer": {
                    "name": "cancer",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "chestPains": {
                    "name": "chestPains",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "chronicCough": {
                    "name": "chronicCough",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "circulationIssues": {
                    "name": "circulationIssues",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "coldsFrequent": {
                    "name": "coldsFrequent",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "constipation": {
                    "name": "constipation",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "cystsTumors": {
                    "name": "cystsTumors",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "dermatitis": {
                    "name": "dermatitis",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "diabetes": {
                    "name": "diabetes",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "diarrhea": {
                    "name": "diarrhea",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "difficultyWalking": {
                    "name": "difficultyWalking",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "earInfections": {
                    "name": "earInfections",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "endocrineProblems": {
                    "name": "endocrineProblems",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "excessiveSweating": {
                    "name": "excessiveSweating",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "faintingDizziness": {
                    "name": "faintingDizziness",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "heartDisease": {
                    "name": "heartDisease",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "footProblem": {
                    "name": "footProblem",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "frequentColdsSoreThroats": {
                    "name": "frequentColdsSoreThroats",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "frequentHeartburn": {
                    "name": "frequentHeartburn",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "frequentMuscleCramps": {
                    "name": "frequentMuscleCramps",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "frequentShortnessOfBreath": {
                    "name": "frequentShortnessOfBreath",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "frostbite": {
                    "name": "frostbite",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "gasBloating": {
                    "name": "gasBloating",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "HIVAIDS": {
                    "name": "HIVAIDS",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "headTraumas": {
                    "name": "headTraumas",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "headachesMigraines": {
                    "name": "headachesMigraines",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "hearingImpairment": {
                    "name": "hearingImpairment",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "heartProblemsMurmurs": {
                    "name": "heartProblemsMurmurs",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "hepatitisABC": {
                    "name": "hepatitisABC",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "hernia": {
                    "name": "hernia",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "highBloodPressure": {
                    "name": "highBloodPressure",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "hypoglycemia": {
                    "name": "hypoglycemia",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "intoleranceToCold": {
                    "name": "intoleranceToCold",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "intoleranceToHeat": {
                    "name": "intoleranceToHeat",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "irregularHeartbeat": {
                    "name": "irregularHeartbeat",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "jointInjuries": {
                    "name": "jointInjuries",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "kidneyProblems": {
                    "name": "kidneyProblems",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "kneeProblem": {
                    "name": "kneeProblem",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "legProblem": {
                    "name": "legProblem",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "liverProblems": {
                    "name": "liverProblems",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "lungInfections": {
                    "name": "lungInfections",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "medicalEquipmentDevices": {
                    "name": "medicalEquipmentDevices",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "meningitis": {
                    "name": "meningitis",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "menstrualProblems": {
                    "name": "menstrualProblems",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "mononucleosis": {
                    "name": "mononucleosis",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "motionSickness": {
                    "name": "motionSickness",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "obesity": {
                    "name": "obesity",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "other": {
                    "name": "other",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "PMSSevereSymptoms": {
                    "name": "PMSSevereSymptoms",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "pneumoniaBronchitis": {
                    "name": "pneumoniaBronchitis",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "pregnancy": {
                    "name": "pregnancy",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "recurrentInjurySurgery": {
                    "name": "recurrentInjurySurgery",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "STDs": {
                    "name": "STDs",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "scoliosis": {
                    "name": "scoliosis",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "seizuresEpilepsy": {
                    "name": "seizuresEpilepsy",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "shoulderProblem": {
                    "name": "shoulderProblem",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "skinDiseasesProblems": {
                    "name": "skinDiseasesProblems",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "sleepwalking": {
                    "name": "sleepwalking",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "TBPositive": {
                    "name": "TBPositive",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "TBRecentExposure": {
                    "name": "TBRecentExposure",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "tuberculosis": {
                    "name": "tuberculosis",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "thyroidProblems": {
                    "name": "thyroidProblems",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "ulcers": {
                    "name": "ulcers",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "unexpectedWeightLoss": {
                    "name": "unexpectedWeightLoss",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "urinationProblem": {
                    "name": "urinationProblem",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "81421c621b5be57eb209069b7ae7a191"
};