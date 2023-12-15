/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAdmissions = /* GraphQL */ `mutation CreateAdmissions(
  $input: CreateAdmissionsInput!
  $condition: ModelAdmissionsConditionInput
) {
  createAdmissions(input: $input, condition: $condition) {
    id
    firstName
    lastName
    expectToEnroll
    pronouns
    sex
    SSN
    address
    gender
    ethnicity
    zip
    country
    homePhone
    mobilePhone
    email
    city
    DOB
    emergencyContactRelationship
    emergencyContactPhone
    emergencyContactAddress
    emergencyContactCity
    emergencyContactState
    emergencyContactZip
    emergencyContactFirstName
    PGSFirstName
    PGSLastName
    PGSAddress
    PGSHomePhone
    emergencyContactLastName
    PGSEmail
    PGSFax
    state
    PGSSponsor
    PGSLegalCustody
    PGSPhysicalCustody
    PGSEmergencyContact
    PGSParentGuardian
    PGSRelationship
    PGSMobilePhone
    PGSWorkPhone
    PGSWorkEmail
    PGSWorkFax
    howDIdYouHearAboutCCFIL
    referralSource
    whatEventsLeadToSeekTreatment
    PGSEmployer
    applicantsStrengths
    applicantsWeaknesses
    currentPlacementLocation
    currentPlacementDates
    currentPlacementProvider
    PGSJobTitle
    psychAnger
    psychSuicidality
    psychSexualActivity
    whatGoalsReceivingTreatment
    psychLegalProblems
    medicalSurgeriesIllnessesHospitalizations
    medicalPrescriptions
    medicalVitaminsSupplements
    medicalHistory {
      allergies
      anaphylacticShock
      anemia
      ankleProblem
      anorexiaBulimia
      appendicitis
      armProblem
      arthritis
      asthma
      backProblems
      bedwetting
      bladderKidneyProblems
      bleedingDisorder
      boneCondition
      bowelProblems
      brokenBones
      cancer
      chestPains
      chronicCough
      circulationIssues
      coldsFrequent
      constipation
      cystsTumors
      dermatitis
      diabetes
      diarrhea
      difficultyWalking
      earInfections
      endocrineProblems
      excessiveSweating
      faintingDizziness
      heartDisease
      footProblem
      frequentColdsSoreThroats
      frequentHeartburn
      frequentMuscleCramps
      frequentShortnessOfBreath
      frostbite
      gasBloating
      HIVAIDS
      headTraumas
      headachesMigraines
      hearingImpairment
      heartProblemsMurmurs
      hepatitisABC
      hernia
      highBloodPressure
      hypoglycemia
      intoleranceToCold
      intoleranceToHeat
      irregularHeartbeat
      jointInjuries
      kidneyProblems
      kneeProblem
      legProblem
      liverProblems
      lungInfections
      medicalEquipmentDevices
      meningitis
      menstrualProblems
      mononucleosis
      motionSickness
      obesity
      other
      PMSSevereSymptoms
      pneumoniaBronchitis
      pregnancy
      recurrentInjurySurgery
      STDs
      scoliosis
      seizuresEpilepsy
      shoulderProblem
      skinDiseasesProblems
      sleepwalking
      TBPositive
      TBRecentExposure
      tuberculosis
      thyroidProblems
      ulcers
      unexpectedWeightLoss
      urinationProblem
      __typename
    }
    allergiesAsthma
    inhalerEpiPen
    inhalerType
    autoInsurance
    currentPlacementReason
    autoInsuranceClaimNumber
    psychSubstanceIssues
    autoInsuranceClaimAdjuster
    autoInsuranceAddress
    autoInsuranceCity
    autoInsuranceState
    autoInsuranceZip
    autoInsurancePhone
    workersCompInsurance
    workersCompInsuranceCarrier
    autoInsuranceDOL
    workersCompClaimAdjuster
    workersCompAddress
    autoInsuranceCarrier
    PGSContactMethod
    workersCompZip
    workersCompPhone
    medicalInsurance {
      companyName
      address
      phone
      groupNumber
      policyNumber
      policyholdersFirstName
      policyholdersLastName
      employer
      DOB
      SSN
      orderType {
        primary
        secondary
        __typename
      }
      __typename
    }
    workersCompClaimNumber
    workersCompCity
    workersCompState
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAdmissionsMutationVariables,
  APITypes.CreateAdmissionsMutation
>;
export const updateAdmissions = /* GraphQL */ `mutation UpdateAdmissions(
  $input: UpdateAdmissionsInput!
  $condition: ModelAdmissionsConditionInput
) {
  updateAdmissions(input: $input, condition: $condition) {
    id
    firstName
    lastName
    expectToEnroll
    pronouns
    sex
    SSN
    address
    gender
    ethnicity
    zip
    country
    homePhone
    mobilePhone
    email
    city
    DOB
    emergencyContactRelationship
    emergencyContactPhone
    emergencyContactAddress
    emergencyContactCity
    emergencyContactState
    emergencyContactZip
    emergencyContactFirstName
    PGSFirstName
    PGSLastName
    PGSAddress
    PGSHomePhone
    emergencyContactLastName
    PGSEmail
    PGSFax
    state
    PGSSponsor
    PGSLegalCustody
    PGSPhysicalCustody
    PGSEmergencyContact
    PGSParentGuardian
    PGSRelationship
    PGSMobilePhone
    PGSWorkPhone
    PGSWorkEmail
    PGSWorkFax
    howDIdYouHearAboutCCFIL
    referralSource
    whatEventsLeadToSeekTreatment
    PGSEmployer
    applicantsStrengths
    applicantsWeaknesses
    currentPlacementLocation
    currentPlacementDates
    currentPlacementProvider
    PGSJobTitle
    psychAnger
    psychSuicidality
    psychSexualActivity
    whatGoalsReceivingTreatment
    psychLegalProblems
    medicalSurgeriesIllnessesHospitalizations
    medicalPrescriptions
    medicalVitaminsSupplements
    medicalHistory {
      allergies
      anaphylacticShock
      anemia
      ankleProblem
      anorexiaBulimia
      appendicitis
      armProblem
      arthritis
      asthma
      backProblems
      bedwetting
      bladderKidneyProblems
      bleedingDisorder
      boneCondition
      bowelProblems
      brokenBones
      cancer
      chestPains
      chronicCough
      circulationIssues
      coldsFrequent
      constipation
      cystsTumors
      dermatitis
      diabetes
      diarrhea
      difficultyWalking
      earInfections
      endocrineProblems
      excessiveSweating
      faintingDizziness
      heartDisease
      footProblem
      frequentColdsSoreThroats
      frequentHeartburn
      frequentMuscleCramps
      frequentShortnessOfBreath
      frostbite
      gasBloating
      HIVAIDS
      headTraumas
      headachesMigraines
      hearingImpairment
      heartProblemsMurmurs
      hepatitisABC
      hernia
      highBloodPressure
      hypoglycemia
      intoleranceToCold
      intoleranceToHeat
      irregularHeartbeat
      jointInjuries
      kidneyProblems
      kneeProblem
      legProblem
      liverProblems
      lungInfections
      medicalEquipmentDevices
      meningitis
      menstrualProblems
      mononucleosis
      motionSickness
      obesity
      other
      PMSSevereSymptoms
      pneumoniaBronchitis
      pregnancy
      recurrentInjurySurgery
      STDs
      scoliosis
      seizuresEpilepsy
      shoulderProblem
      skinDiseasesProblems
      sleepwalking
      TBPositive
      TBRecentExposure
      tuberculosis
      thyroidProblems
      ulcers
      unexpectedWeightLoss
      urinationProblem
      __typename
    }
    allergiesAsthma
    inhalerEpiPen
    inhalerType
    autoInsurance
    currentPlacementReason
    autoInsuranceClaimNumber
    psychSubstanceIssues
    autoInsuranceClaimAdjuster
    autoInsuranceAddress
    autoInsuranceCity
    autoInsuranceState
    autoInsuranceZip
    autoInsurancePhone
    workersCompInsurance
    workersCompInsuranceCarrier
    autoInsuranceDOL
    workersCompClaimAdjuster
    workersCompAddress
    autoInsuranceCarrier
    PGSContactMethod
    workersCompZip
    workersCompPhone
    medicalInsurance {
      companyName
      address
      phone
      groupNumber
      policyNumber
      policyholdersFirstName
      policyholdersLastName
      employer
      DOB
      SSN
      orderType {
        primary
        secondary
        __typename
      }
      __typename
    }
    workersCompClaimNumber
    workersCompCity
    workersCompState
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAdmissionsMutationVariables,
  APITypes.UpdateAdmissionsMutation
>;
export const deleteAdmissions = /* GraphQL */ `mutation DeleteAdmissions(
  $input: DeleteAdmissionsInput!
  $condition: ModelAdmissionsConditionInput
) {
  deleteAdmissions(input: $input, condition: $condition) {
    id
    firstName
    lastName
    expectToEnroll
    pronouns
    sex
    SSN
    address
    gender
    ethnicity
    zip
    country
    homePhone
    mobilePhone
    email
    city
    DOB
    emergencyContactRelationship
    emergencyContactPhone
    emergencyContactAddress
    emergencyContactCity
    emergencyContactState
    emergencyContactZip
    emergencyContactFirstName
    PGSFirstName
    PGSLastName
    PGSAddress
    PGSHomePhone
    emergencyContactLastName
    PGSEmail
    PGSFax
    state
    PGSSponsor
    PGSLegalCustody
    PGSPhysicalCustody
    PGSEmergencyContact
    PGSParentGuardian
    PGSRelationship
    PGSMobilePhone
    PGSWorkPhone
    PGSWorkEmail
    PGSWorkFax
    howDIdYouHearAboutCCFIL
    referralSource
    whatEventsLeadToSeekTreatment
    PGSEmployer
    applicantsStrengths
    applicantsWeaknesses
    currentPlacementLocation
    currentPlacementDates
    currentPlacementProvider
    PGSJobTitle
    psychAnger
    psychSuicidality
    psychSexualActivity
    whatGoalsReceivingTreatment
    psychLegalProblems
    medicalSurgeriesIllnessesHospitalizations
    medicalPrescriptions
    medicalVitaminsSupplements
    medicalHistory {
      allergies
      anaphylacticShock
      anemia
      ankleProblem
      anorexiaBulimia
      appendicitis
      armProblem
      arthritis
      asthma
      backProblems
      bedwetting
      bladderKidneyProblems
      bleedingDisorder
      boneCondition
      bowelProblems
      brokenBones
      cancer
      chestPains
      chronicCough
      circulationIssues
      coldsFrequent
      constipation
      cystsTumors
      dermatitis
      diabetes
      diarrhea
      difficultyWalking
      earInfections
      endocrineProblems
      excessiveSweating
      faintingDizziness
      heartDisease
      footProblem
      frequentColdsSoreThroats
      frequentHeartburn
      frequentMuscleCramps
      frequentShortnessOfBreath
      frostbite
      gasBloating
      HIVAIDS
      headTraumas
      headachesMigraines
      hearingImpairment
      heartProblemsMurmurs
      hepatitisABC
      hernia
      highBloodPressure
      hypoglycemia
      intoleranceToCold
      intoleranceToHeat
      irregularHeartbeat
      jointInjuries
      kidneyProblems
      kneeProblem
      legProblem
      liverProblems
      lungInfections
      medicalEquipmentDevices
      meningitis
      menstrualProblems
      mononucleosis
      motionSickness
      obesity
      other
      PMSSevereSymptoms
      pneumoniaBronchitis
      pregnancy
      recurrentInjurySurgery
      STDs
      scoliosis
      seizuresEpilepsy
      shoulderProblem
      skinDiseasesProblems
      sleepwalking
      TBPositive
      TBRecentExposure
      tuberculosis
      thyroidProblems
      ulcers
      unexpectedWeightLoss
      urinationProblem
      __typename
    }
    allergiesAsthma
    inhalerEpiPen
    inhalerType
    autoInsurance
    currentPlacementReason
    autoInsuranceClaimNumber
    psychSubstanceIssues
    autoInsuranceClaimAdjuster
    autoInsuranceAddress
    autoInsuranceCity
    autoInsuranceState
    autoInsuranceZip
    autoInsurancePhone
    workersCompInsurance
    workersCompInsuranceCarrier
    autoInsuranceDOL
    workersCompClaimAdjuster
    workersCompAddress
    autoInsuranceCarrier
    PGSContactMethod
    workersCompZip
    workersCompPhone
    medicalInsurance {
      companyName
      address
      phone
      groupNumber
      policyNumber
      policyholdersFirstName
      policyholdersLastName
      employer
      DOB
      SSN
      orderType {
        primary
        secondary
        __typename
      }
      __typename
    }
    workersCompClaimNumber
    workersCompCity
    workersCompState
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAdmissionsMutationVariables,
  APITypes.DeleteAdmissionsMutation
>;
export const createReferrals = /* GraphQL */ `mutation CreateReferrals(
  $input: CreateReferralsInput!
  $condition: ModelReferralsConditionInput
) {
  createReferrals(input: $input, condition: $condition) {
    id
    date
    source
    name
    followUp
    DOA
    DOADate
    reasonForDecline
    howDidYouHearAboutUs
    assistanceProvided
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateReferralsMutationVariables,
  APITypes.CreateReferralsMutation
>;
export const updateReferrals = /* GraphQL */ `mutation UpdateReferrals(
  $input: UpdateReferralsInput!
  $condition: ModelReferralsConditionInput
) {
  updateReferrals(input: $input, condition: $condition) {
    id
    date
    source
    name
    followUp
    DOA
    DOADate
    reasonForDecline
    howDidYouHearAboutUs
    assistanceProvided
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateReferralsMutationVariables,
  APITypes.UpdateReferralsMutation
>;
export const deleteReferrals = /* GraphQL */ `mutation DeleteReferrals(
  $input: DeleteReferralsInput!
  $condition: ModelReferralsConditionInput
) {
  deleteReferrals(input: $input, condition: $condition) {
    id
    date
    source
    name
    followUp
    DOA
    DOADate
    reasonForDecline
    howDidYouHearAboutUs
    assistanceProvided
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteReferralsMutationVariables,
  APITypes.DeleteReferralsMutation
>;
export const createIcon = /* GraphQL */ `mutation CreateIcon(
  $input: CreateIconInput!
  $condition: ModelIconConditionInput
) {
  createIcon(input: $input, condition: $condition) {
    id
    alt
    src
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateIconMutationVariables,
  APITypes.CreateIconMutation
>;
export const updateIcon = /* GraphQL */ `mutation UpdateIcon(
  $input: UpdateIconInput!
  $condition: ModelIconConditionInput
) {
  updateIcon(input: $input, condition: $condition) {
    id
    alt
    src
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateIconMutationVariables,
  APITypes.UpdateIconMutation
>;
export const deleteIcon = /* GraphQL */ `mutation DeleteIcon(
  $input: DeleteIconInput!
  $condition: ModelIconConditionInput
) {
  deleteIcon(input: $input, condition: $condition) {
    id
    alt
    src
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteIconMutationVariables,
  APITypes.DeleteIconMutation
>;
export const createServices = /* GraphQL */ `mutation CreateServices(
  $input: CreateServicesInput!
  $condition: ModelServicesConditionInput
) {
  createServices(input: $input, condition: $condition) {
    id
    serviceTitle
    serviceBodyText
    Icon {
      id
      alt
      src
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    servicesIconId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateServicesMutationVariables,
  APITypes.CreateServicesMutation
>;
export const updateServices = /* GraphQL */ `mutation UpdateServices(
  $input: UpdateServicesInput!
  $condition: ModelServicesConditionInput
) {
  updateServices(input: $input, condition: $condition) {
    id
    serviceTitle
    serviceBodyText
    Icon {
      id
      alt
      src
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    servicesIconId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateServicesMutationVariables,
  APITypes.UpdateServicesMutation
>;
export const deleteServices = /* GraphQL */ `mutation DeleteServices(
  $input: DeleteServicesInput!
  $condition: ModelServicesConditionInput
) {
  deleteServices(input: $input, condition: $condition) {
    id
    serviceTitle
    serviceBodyText
    Icon {
      id
      alt
      src
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    servicesIconId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteServicesMutationVariables,
  APITypes.DeleteServicesMutation
>;
export const createTeamMember = /* GraphQL */ `mutation CreateTeamMember(
  $input: CreateTeamMemberInput!
  $condition: ModelTeamMemberConditionInput
) {
  createTeamMember(input: $input, condition: $condition) {
    id
    firstName
    lastName
    bio
    link
    title
    isFeatured
    Image {
      id
      src
      alt
      imageTitle
      createdAt
      updatedAt
      __typename
    }
    isLeader
    userId
    createdAt
    updatedAt
    teamMemberImageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTeamMemberMutationVariables,
  APITypes.CreateTeamMemberMutation
>;
export const updateTeamMember = /* GraphQL */ `mutation UpdateTeamMember(
  $input: UpdateTeamMemberInput!
  $condition: ModelTeamMemberConditionInput
) {
  updateTeamMember(input: $input, condition: $condition) {
    id
    firstName
    lastName
    bio
    link
    title
    isFeatured
    Image {
      id
      src
      alt
      imageTitle
      createdAt
      updatedAt
      __typename
    }
    isLeader
    userId
    createdAt
    updatedAt
    teamMemberImageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTeamMemberMutationVariables,
  APITypes.UpdateTeamMemberMutation
>;
export const deleteTeamMember = /* GraphQL */ `mutation DeleteTeamMember(
  $input: DeleteTeamMemberInput!
  $condition: ModelTeamMemberConditionInput
) {
  deleteTeamMember(input: $input, condition: $condition) {
    id
    firstName
    lastName
    bio
    link
    title
    isFeatured
    Image {
      id
      src
      alt
      imageTitle
      createdAt
      updatedAt
      __typename
    }
    isLeader
    userId
    createdAt
    updatedAt
    teamMemberImageId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTeamMemberMutationVariables,
  APITypes.DeleteTeamMemberMutation
>;
export const createHeadshot = /* GraphQL */ `mutation CreateHeadshot(
  $input: CreateHeadshotInput!
  $condition: ModelHeadshotConditionInput
) {
  createHeadshot(input: $input, condition: $condition) {
    id
    src
    alt
    imageTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateHeadshotMutationVariables,
  APITypes.CreateHeadshotMutation
>;
export const updateHeadshot = /* GraphQL */ `mutation UpdateHeadshot(
  $input: UpdateHeadshotInput!
  $condition: ModelHeadshotConditionInput
) {
  updateHeadshot(input: $input, condition: $condition) {
    id
    src
    alt
    imageTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateHeadshotMutationVariables,
  APITypes.UpdateHeadshotMutation
>;
export const deleteHeadshot = /* GraphQL */ `mutation DeleteHeadshot(
  $input: DeleteHeadshotInput!
  $condition: ModelHeadshotConditionInput
) {
  deleteHeadshot(input: $input, condition: $condition) {
    id
    src
    alt
    imageTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteHeadshotMutationVariables,
  APITypes.DeleteHeadshotMutation
>;
