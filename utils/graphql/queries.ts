/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getInsuranceOrderType = /* GraphQL */ `query GetInsuranceOrderType($id: ID!) {
  getInsuranceOrderType(id: $id) {
    primary
    secondary
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetInsuranceOrderTypeQueryVariables,
  APITypes.GetInsuranceOrderTypeQuery
>;
export const listInsuranceOrderTypes = /* GraphQL */ `query ListInsuranceOrderTypes(
  $filter: ModelInsuranceOrderTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listInsuranceOrderTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      primary
      secondary
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInsuranceOrderTypesQueryVariables,
  APITypes.ListInsuranceOrderTypesQuery
>;
export const getMedicalInsurance = /* GraphQL */ `query GetMedicalInsurance($id: ID!) {
  getMedicalInsurance(id: $id) {
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
      id
      createdAt
      updatedAt
      __typename
    }
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMedicalInsuranceQueryVariables,
  APITypes.GetMedicalInsuranceQuery
>;
export const listMedicalInsurances = /* GraphQL */ `query ListMedicalInsurances(
  $filter: ModelMedicalInsuranceFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedicalInsurances(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        id
        createdAt
        updatedAt
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMedicalInsurancesQueryVariables,
  APITypes.ListMedicalInsurancesQuery
>;
export const getMedicalHistory = /* GraphQL */ `query GetMedicalHistory($id: ID!) {
  getMedicalHistory(id: $id) {
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
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMedicalHistoryQueryVariables,
  APITypes.GetMedicalHistoryQuery
>;
export const listMedicalHistories = /* GraphQL */ `query ListMedicalHistories(
  $filter: ModelMedicalHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedicalHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMedicalHistoriesQueryVariables,
  APITypes.ListMedicalHistoriesQuery
>;
export const getAdmissions = /* GraphQL */ `query GetAdmissions($id: ID!) {
  getAdmissions(id: $id) {
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
      id
      createdAt
      updatedAt
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
        id
        createdAt
        updatedAt
        __typename
      }
      id
      createdAt
      updatedAt
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
` as GeneratedQuery<
  APITypes.GetAdmissionsQueryVariables,
  APITypes.GetAdmissionsQuery
>;
export const listAdmissions = /* GraphQL */ `query ListAdmissions(
  $filter: ModelAdmissionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdmissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        id
        createdAt
        updatedAt
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
          id
          createdAt
          updatedAt
          __typename
        }
        id
        createdAt
        updatedAt
        __typename
      }
      workersCompClaimNumber
      workersCompCity
      workersCompState
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdmissionsQueryVariables,
  APITypes.ListAdmissionsQuery
>;
export const getReferrals = /* GraphQL */ `query GetReferrals($id: ID!) {
  getReferrals(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetReferralsQueryVariables,
  APITypes.GetReferralsQuery
>;
export const listReferrals = /* GraphQL */ `query ListReferrals(
  $filter: ModelReferralsFilterInput
  $limit: Int
  $nextToken: String
) {
  listReferrals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReferralsQueryVariables,
  APITypes.ListReferralsQuery
>;
export const getIcon = /* GraphQL */ `query GetIcon($id: ID!) {
  getIcon(id: $id) {
    id
    alt
    src
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetIconQueryVariables, APITypes.GetIconQuery>;
export const listIcons = /* GraphQL */ `query ListIcons(
  $filter: ModelIconFilterInput
  $limit: Int
  $nextToken: String
) {
  listIcons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      alt
      src
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListIconsQueryVariables, APITypes.ListIconsQuery>;
export const getServices = /* GraphQL */ `query GetServices($id: ID!) {
  getServices(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetServicesQueryVariables,
  APITypes.GetServicesQuery
>;
export const listServices = /* GraphQL */ `query ListServices(
  $filter: ModelServicesFilterInput
  $limit: Int
  $nextToken: String
) {
  listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServicesQueryVariables,
  APITypes.ListServicesQuery
>;
export const getTeamMember = /* GraphQL */ `query GetTeamMember($id: ID!) {
  getTeamMember(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTeamMemberQueryVariables,
  APITypes.GetTeamMemberQuery
>;
export const listTeamMembers = /* GraphQL */ `query ListTeamMembers(
  $filter: ModelTeamMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeamMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTeamMembersQueryVariables,
  APITypes.ListTeamMembersQuery
>;
export const getHeadshot = /* GraphQL */ `query GetHeadshot($id: ID!) {
  getHeadshot(id: $id) {
    id
    src
    alt
    imageTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHeadshotQueryVariables,
  APITypes.GetHeadshotQuery
>;
export const listHeadshots = /* GraphQL */ `query ListHeadshots(
  $filter: ModelHeadshotFilterInput
  $limit: Int
  $nextToken: String
) {
  listHeadshots(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      src
      alt
      imageTitle
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHeadshotsQueryVariables,
  APITypes.ListHeadshotsQuery
>;
