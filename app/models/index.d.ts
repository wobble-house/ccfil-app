import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum Pronouns {
  HEHIM = "HEHIM",
  SHEHER = "SHEHER",
  THEYTHEM = "THEYTHEM",
  OTHER = "OTHER"
}

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
  DECLINETOANSWER = "DECLINETOANSWER"
}

export enum Gender {
  AGENDER = "AGENDER",
  ANDROGYNE = "ANDROGYNE",
  BIGENDER = "BIGENDER",
  BUTCH = "BUTCH",
  CISGENDER = "CISGENDER",
  GENDEREXPANSIVE = "GENDEREXPANSIVE",
  GENDERFLUID = "GENDERFLUID",
  GENDEROUTLAW = "GENDEROUTLAW",
  GENDERQUEER = "GENDERQUEER",
  MASCULINEOFCENTER = "MASCULINEOFCENTER",
  NONBINARY = "NONBINARY",
  OMNIGENDER = "OMNIGENDER",
  POLYGENDERANDPANGENDER = "POLYGENDERANDPANGENDER",
  TRANSGENDER = "TRANSGENDER",
  TRANS = "TRANS",
  TWOSPIRIT = "TWOSPIRIT",
  DECLINETOANSWER = "DECLINETOANSWER"
}

export enum Ethnicity {
  AFRICAN = "AFRICAN",
  CARIBBEAN = "CARIBBEAN",
  INDIAN = "INDIAN",
  MELANESIAN = "MELANESIAN",
  AUSTRALASIANABORIGINAL = "AUSTRALASIANABORIGINAL",
  CHINESE = "CHINESE",
  GUAMANIAN = "GUAMANIAN",
  JAPANESE = "JAPANESE",
  KOREAN = "KOREAN",
  EUROPEANANGLOSAXON = "EUROPEANANGLOSAXON",
  OTHERPACIFICISLANDER = "OTHERPACIFICISLANDER",
  LATINAMERICAN = "LATINAMERICAN",
  ARABIC = "ARABIC",
  VIETNAMESE = "VIETNAMESE",
  MICRONESIAN = "MICRONESIAN",
  DECLINEDTORESPOND = "DECLINEDTORESPOND",
  OTHERHISPANIC = "OTHERHISPANIC",
  USORCANADIANINDIAN = "USORCANADIANINDIAN",
  OTHERASIAN = "OTHERASIAN",
  PUERTORICAN = "PUERTORICAN",
  FILIPINO = "FILIPINO",
  MEXICAN = "MEXICAN",
  ALASKANNATIVE = "ALASKANNATIVE",
  CUBAN = "CUBAN"
}

export enum State {
  ALABAMA = "ALABAMA",
  ALASKA = "ALASKA",
  ARIZONA = "ARIZONA",
  ARKANSAS = "ARKANSAS",
  AMERICANSAMOA = "AMERICANSAMOA",
  CALIFORNIA = "CALIFORNIA",
  COLORADO = "COLORADO",
  CONNECTICUT = "CONNECTICUT",
  DELAWARE = "DELAWARE",
  DISTRICTOFCOLUMBIA = "DISTRICTOFCOLUMBIA",
  FLORIDA = "FLORIDA",
  GEORGIA = "GEORGIA",
  GUAM = "GUAM",
  HAWAII = "HAWAII",
  IDAHO = "IDAHO",
  ILLINOIS = "ILLINOIS",
  INDIANA = "INDIANA",
  IOWA = "IOWA",
  KANSAS = "KANSAS",
  KENTUCKY = "KENTUCKY",
  LOUISIANA = "LOUISIANA",
  MAINE = "MAINE",
  MARYLAND = "MARYLAND",
  MASSACHUSETTS = "MASSACHUSETTS",
  MICHIGAN = "MICHIGAN",
  MINNESOTA = "MINNESOTA",
  MISSISSIPPI = "MISSISSIPPI",
  MISSOURI = "MISSOURI",
  MONTANA = "MONTANA",
  NEBRASKA = "NEBRASKA",
  NEVADA = "NEVADA",
  NEWHAMPSHIRE = "NEWHAMPSHIRE",
  NEWJERSEY = "NEWJERSEY",
  NEWMEXICO = "NEWMEXICO",
  NEWYORK = "NEWYORK",
  NORTHCAROLINA = "NORTHCAROLINA",
  NORTHDAKOTA = "NORTHDAKOTA",
  NORTHERNMARIANAISLANDS = "NORTHERNMARIANAISLANDS",
  OHIO = "OHIO",
  OKLAHOMA = "OKLAHOMA",
  OREGON = "OREGON",
  PENNSYLVANIA = "PENNSYLVANIA",
  PUERTORICO = "PUERTORICO",
  RHODEISLAND = "RHODEISLAND",
  SOUTHCAROLINA = "SOUTHCAROLINA",
  SOUTHDAKOTA = "SOUTHDAKOTA",
  TENNESSEE = "TENNESSEE",
  TEXAS = "TEXAS",
  TRUSTTERRITORIES = "TRUSTTERRITORIES",
  UTAH = "UTAH",
  VERMONT = "VERMONT",
  VIRGINIA = "VIRGINIA",
  VIRGINISLANDS = "VIRGINISLANDS",
  WASHINGTON = "WASHINGTON",
  WESTVIRGINIA = "WESTVIRGINIA",
  WISCONSIN = "WISCONSIN",
  WYOMING = "WYOMING"
}

type EagerInsuranceOrderType = {
  readonly primary?: boolean | null;
  readonly secondary?: boolean | null;
}

type LazyInsuranceOrderType = {
  readonly primary?: boolean | null;
  readonly secondary?: boolean | null;
}

export declare type InsuranceOrderType = LazyLoading extends LazyLoadingDisabled ? EagerInsuranceOrderType : LazyInsuranceOrderType

export declare const InsuranceOrderType: (new (init: ModelInit<InsuranceOrderType>) => InsuranceOrderType)

type EagerMedicalInsurance = {
  readonly companyName?: string | null;
  readonly address?: string | null;
  readonly phone?: string | null;
  readonly groupNumber?: string | null;
  readonly policyNumber?: string | null;
  readonly policyholdersFirstName?: string | null;
  readonly policyholdersLastName?: string | null;
  readonly employer?: string | null;
  readonly DOB?: string | null;
  readonly SSN?: number | null;
  readonly orderType?: InsuranceOrderType | null;
}

type LazyMedicalInsurance = {
  readonly companyName?: string | null;
  readonly address?: string | null;
  readonly phone?: string | null;
  readonly groupNumber?: string | null;
  readonly policyNumber?: string | null;
  readonly policyholdersFirstName?: string | null;
  readonly policyholdersLastName?: string | null;
  readonly employer?: string | null;
  readonly DOB?: string | null;
  readonly SSN?: number | null;
  readonly orderType?: InsuranceOrderType | null;
}

export declare type MedicalInsurance = LazyLoading extends LazyLoadingDisabled ? EagerMedicalInsurance : LazyMedicalInsurance

export declare const MedicalInsurance: (new (init: ModelInit<MedicalInsurance>) => MedicalInsurance)

type EagerMedicalHistory = {
  readonly allergies?: boolean | null;
  readonly anaphylacticShock?: boolean | null;
  readonly anemia?: boolean | null;
  readonly ankleProblem?: boolean | null;
  readonly anorexiaBulimia?: boolean | null;
  readonly appendicitis?: boolean | null;
  readonly armProblem?: boolean | null;
  readonly arthritis?: boolean | null;
  readonly asthma?: boolean | null;
  readonly backProblems?: boolean | null;
  readonly bedwetting?: boolean | null;
  readonly bladderKidneyProblems?: boolean | null;
  readonly bleedingDisorder?: boolean | null;
  readonly boneCondition?: boolean | null;
  readonly bowelProblems?: boolean | null;
  readonly brokenBones?: boolean | null;
  readonly cancer?: boolean | null;
  readonly chestPains?: boolean | null;
  readonly chronicCough?: boolean | null;
  readonly circulationIssues?: boolean | null;
  readonly coldsFrequent?: boolean | null;
  readonly constipation?: boolean | null;
  readonly cystsTumors?: boolean | null;
  readonly dermatitis?: boolean | null;
  readonly diabetes?: boolean | null;
  readonly diarrhea?: boolean | null;
  readonly difficultyWalking?: boolean | null;
  readonly earInfections?: boolean | null;
  readonly endocrineProblems?: boolean | null;
  readonly excessiveSweating?: boolean | null;
  readonly faintingDizziness?: boolean | null;
  readonly heartDisease?: boolean | null;
  readonly footProblem?: boolean | null;
  readonly frequentColdsSoreThroats?: boolean | null;
  readonly frequentHeartburn?: boolean | null;
  readonly frequentMuscleCramps?: boolean | null;
  readonly frequentShortnessOfBreath?: boolean | null;
  readonly frostbite?: boolean | null;
  readonly gasBloating?: boolean | null;
  readonly HIVAIDS?: boolean | null;
  readonly headTraumas?: boolean | null;
  readonly headachesMigraines?: boolean | null;
  readonly hearingImpairment?: boolean | null;
  readonly heartProblemsMurmurs?: boolean | null;
  readonly hepatitisABC?: boolean | null;
  readonly hernia?: boolean | null;
  readonly highBloodPressure?: boolean | null;
  readonly hypoglycemia?: boolean | null;
  readonly intoleranceToCold?: boolean | null;
  readonly intoleranceToHeat?: boolean | null;
  readonly irregularHeartbeat?: boolean | null;
  readonly jointInjuries?: boolean | null;
  readonly kidneyProblems?: boolean | null;
  readonly kneeProblem?: boolean | null;
  readonly legProblem?: boolean | null;
  readonly liverProblems?: boolean | null;
  readonly lungInfections?: boolean | null;
  readonly medicalEquipmentDevices?: boolean | null;
  readonly meningitis?: boolean | null;
  readonly menstrualProblems?: boolean | null;
  readonly mononucleosis?: boolean | null;
  readonly motionSickness?: boolean | null;
  readonly obesity?: boolean | null;
  readonly other?: boolean | null;
  readonly PMSSevereSymptoms?: boolean | null;
  readonly pneumoniaBronchitis?: boolean | null;
  readonly pregnancy?: boolean | null;
  readonly recurrentInjurySurgery?: boolean | null;
  readonly STDs?: boolean | null;
  readonly scoliosis?: boolean | null;
  readonly seizuresEpilepsy?: boolean | null;
  readonly shoulderProblem?: boolean | null;
  readonly skinDiseasesProblems?: boolean | null;
  readonly sleepwalking?: boolean | null;
  readonly TBPositive?: boolean | null;
  readonly TBRecentExposure?: boolean | null;
  readonly tuberculosis?: boolean | null;
  readonly thyroidProblems?: boolean | null;
  readonly ulcers?: boolean | null;
  readonly unexpectedWeightLoss?: boolean | null;
  readonly urinationProblem?: boolean | null;
}

type LazyMedicalHistory = {
  readonly allergies?: boolean | null;
  readonly anaphylacticShock?: boolean | null;
  readonly anemia?: boolean | null;
  readonly ankleProblem?: boolean | null;
  readonly anorexiaBulimia?: boolean | null;
  readonly appendicitis?: boolean | null;
  readonly armProblem?: boolean | null;
  readonly arthritis?: boolean | null;
  readonly asthma?: boolean | null;
  readonly backProblems?: boolean | null;
  readonly bedwetting?: boolean | null;
  readonly bladderKidneyProblems?: boolean | null;
  readonly bleedingDisorder?: boolean | null;
  readonly boneCondition?: boolean | null;
  readonly bowelProblems?: boolean | null;
  readonly brokenBones?: boolean | null;
  readonly cancer?: boolean | null;
  readonly chestPains?: boolean | null;
  readonly chronicCough?: boolean | null;
  readonly circulationIssues?: boolean | null;
  readonly coldsFrequent?: boolean | null;
  readonly constipation?: boolean | null;
  readonly cystsTumors?: boolean | null;
  readonly dermatitis?: boolean | null;
  readonly diabetes?: boolean | null;
  readonly diarrhea?: boolean | null;
  readonly difficultyWalking?: boolean | null;
  readonly earInfections?: boolean | null;
  readonly endocrineProblems?: boolean | null;
  readonly excessiveSweating?: boolean | null;
  readonly faintingDizziness?: boolean | null;
  readonly heartDisease?: boolean | null;
  readonly footProblem?: boolean | null;
  readonly frequentColdsSoreThroats?: boolean | null;
  readonly frequentHeartburn?: boolean | null;
  readonly frequentMuscleCramps?: boolean | null;
  readonly frequentShortnessOfBreath?: boolean | null;
  readonly frostbite?: boolean | null;
  readonly gasBloating?: boolean | null;
  readonly HIVAIDS?: boolean | null;
  readonly headTraumas?: boolean | null;
  readonly headachesMigraines?: boolean | null;
  readonly hearingImpairment?: boolean | null;
  readonly heartProblemsMurmurs?: boolean | null;
  readonly hepatitisABC?: boolean | null;
  readonly hernia?: boolean | null;
  readonly highBloodPressure?: boolean | null;
  readonly hypoglycemia?: boolean | null;
  readonly intoleranceToCold?: boolean | null;
  readonly intoleranceToHeat?: boolean | null;
  readonly irregularHeartbeat?: boolean | null;
  readonly jointInjuries?: boolean | null;
  readonly kidneyProblems?: boolean | null;
  readonly kneeProblem?: boolean | null;
  readonly legProblem?: boolean | null;
  readonly liverProblems?: boolean | null;
  readonly lungInfections?: boolean | null;
  readonly medicalEquipmentDevices?: boolean | null;
  readonly meningitis?: boolean | null;
  readonly menstrualProblems?: boolean | null;
  readonly mononucleosis?: boolean | null;
  readonly motionSickness?: boolean | null;
  readonly obesity?: boolean | null;
  readonly other?: boolean | null;
  readonly PMSSevereSymptoms?: boolean | null;
  readonly pneumoniaBronchitis?: boolean | null;
  readonly pregnancy?: boolean | null;
  readonly recurrentInjurySurgery?: boolean | null;
  readonly STDs?: boolean | null;
  readonly scoliosis?: boolean | null;
  readonly seizuresEpilepsy?: boolean | null;
  readonly shoulderProblem?: boolean | null;
  readonly skinDiseasesProblems?: boolean | null;
  readonly sleepwalking?: boolean | null;
  readonly TBPositive?: boolean | null;
  readonly TBRecentExposure?: boolean | null;
  readonly tuberculosis?: boolean | null;
  readonly thyroidProblems?: boolean | null;
  readonly ulcers?: boolean | null;
  readonly unexpectedWeightLoss?: boolean | null;
  readonly urinationProblem?: boolean | null;
}

export declare type MedicalHistory = LazyLoading extends LazyLoadingDisabled ? EagerMedicalHistory : LazyMedicalHistory

export declare const MedicalHistory: (new (init: ModelInit<MedicalHistory>) => MedicalHistory)

type EagerAdmissions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admissions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly expectToEnroll?: string | null;
  readonly pronouns?: Pronouns | keyof typeof Pronouns | null;
  readonly sex?: Sex | keyof typeof Sex | null;
  readonly SSN?: number | null;
  readonly address?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly ethnicity?: Ethnicity | keyof typeof Ethnicity | null;
  readonly zip?: number | null;
  readonly country?: string | null;
  readonly homePhone?: string | null;
  readonly mobilePhone?: string | null;
  readonly email?: string | null;
  readonly city?: string | null;
  readonly DOB?: string | null;
  readonly emergencyContactRelationship?: string | null;
  readonly emergencyContactPhone?: string | null;
  readonly emergencyContactAddress?: string | null;
  readonly emergencyContactCity?: string | null;
  readonly emergencyContactState?: State | keyof typeof State | null;
  readonly emergencyContactZip?: number | null;
  readonly emergencyContactFirstName?: string | null;
  readonly PGSFirstName?: string | null;
  readonly PGSLastName?: string | null;
  readonly PGSAddress?: string | null;
  readonly PGSHomePhone?: string | null;
  readonly emergencyContactLastName?: string | null;
  readonly PGSEmail?: string | null;
  readonly PGSFax?: string | null;
  readonly state?: State | keyof typeof State | null;
  readonly PGSSponsor?: string | null;
  readonly PGSLegalCustody?: string | null;
  readonly PGSPhysicalCustody?: string | null;
  readonly PGSEmergencyContact?: string | null;
  readonly PGSParentGuardian?: string | null;
  readonly PGSRelationship?: string | null;
  readonly PGSMobilePhone?: string | null;
  readonly PGSWorkPhone?: string | null;
  readonly PGSWorkEmail?: string | null;
  readonly PGSWorkFax?: string | null;
  readonly howDIdYouHearAboutCCFIL?: string | null;
  readonly referralSource?: string | null;
  readonly whatEventsLeadToSeekTreatment?: string | null;
  readonly PGSEmployer?: string | null;
  readonly applicantsStrengths?: string | null;
  readonly applicantsWeaknesses?: string | null;
  readonly currentPlacementLocation?: string | null;
  readonly currentPlacementDates?: string | null;
  readonly currentPlacementProvider?: string | null;
  readonly PGSJobTitle?: string | null;
  readonly psychAnger?: string | null;
  readonly psychSuicidality?: string | null;
  readonly psychSexualActivity?: string | null;
  readonly whatGoalsReceivingTreatment?: string | null;
  readonly psychLegalProblems?: string | null;
  readonly medicalSurgeriesIllnessesHospitalizations?: string | null;
  readonly medicalPrescriptions?: string | null;
  readonly medicalVitaminsSupplements?: string | null;
  readonly medicalHistory?: MedicalHistory | null;
  readonly allergiesAsthma?: string | null;
  readonly inhalerEpiPen?: string | null;
  readonly inhalerType?: string | null;
  readonly autoInsurance?: string | null;
  readonly currentPlacementReason?: string | null;
  readonly autoInsuranceClaimNumber?: string | null;
  readonly psychSubstanceIssues?: string | null;
  readonly autoInsuranceClaimAdjuster?: string | null;
  readonly autoInsuranceAddress?: string | null;
  readonly autoInsuranceCity?: string | null;
  readonly autoInsuranceState?: State | keyof typeof State | null;
  readonly autoInsuranceZip?: number | null;
  readonly autoInsurancePhone?: string | null;
  readonly workersCompInsurance?: string | null;
  readonly workersCompInsuranceCarrier?: string | null;
  readonly autoInsuranceDOL?: string | null;
  readonly workersCompClaimAdjuster?: string | null;
  readonly workersCompAddress?: string | null;
  readonly autoInsuranceCarrier?: string | null;
  readonly PGSContactMethod?: string | null;
  readonly workersCompZip?: string | null;
  readonly workersCompPhone?: string | null;
  readonly medicalInsurance?: MedicalInsurance | null;
  readonly workersCompClaimNumber?: string | null;
  readonly workersCompCity?: string | null;
  readonly workersCompState?: State | keyof typeof State | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdmissions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admissions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly expectToEnroll?: string | null;
  readonly pronouns?: Pronouns | keyof typeof Pronouns | null;
  readonly sex?: Sex | keyof typeof Sex | null;
  readonly SSN?: number | null;
  readonly address?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly ethnicity?: Ethnicity | keyof typeof Ethnicity | null;
  readonly zip?: number | null;
  readonly country?: string | null;
  readonly homePhone?: string | null;
  readonly mobilePhone?: string | null;
  readonly email?: string | null;
  readonly city?: string | null;
  readonly DOB?: string | null;
  readonly emergencyContactRelationship?: string | null;
  readonly emergencyContactPhone?: string | null;
  readonly emergencyContactAddress?: string | null;
  readonly emergencyContactCity?: string | null;
  readonly emergencyContactState?: State | keyof typeof State | null;
  readonly emergencyContactZip?: number | null;
  readonly emergencyContactFirstName?: string | null;
  readonly PGSFirstName?: string | null;
  readonly PGSLastName?: string | null;
  readonly PGSAddress?: string | null;
  readonly PGSHomePhone?: string | null;
  readonly emergencyContactLastName?: string | null;
  readonly PGSEmail?: string | null;
  readonly PGSFax?: string | null;
  readonly state?: State | keyof typeof State | null;
  readonly PGSSponsor?: string | null;
  readonly PGSLegalCustody?: string | null;
  readonly PGSPhysicalCustody?: string | null;
  readonly PGSEmergencyContact?: string | null;
  readonly PGSParentGuardian?: string | null;
  readonly PGSRelationship?: string | null;
  readonly PGSMobilePhone?: string | null;
  readonly PGSWorkPhone?: string | null;
  readonly PGSWorkEmail?: string | null;
  readonly PGSWorkFax?: string | null;
  readonly howDIdYouHearAboutCCFIL?: string | null;
  readonly referralSource?: string | null;
  readonly whatEventsLeadToSeekTreatment?: string | null;
  readonly PGSEmployer?: string | null;
  readonly applicantsStrengths?: string | null;
  readonly applicantsWeaknesses?: string | null;
  readonly currentPlacementLocation?: string | null;
  readonly currentPlacementDates?: string | null;
  readonly currentPlacementProvider?: string | null;
  readonly PGSJobTitle?: string | null;
  readonly psychAnger?: string | null;
  readonly psychSuicidality?: string | null;
  readonly psychSexualActivity?: string | null;
  readonly whatGoalsReceivingTreatment?: string | null;
  readonly psychLegalProblems?: string | null;
  readonly medicalSurgeriesIllnessesHospitalizations?: string | null;
  readonly medicalPrescriptions?: string | null;
  readonly medicalVitaminsSupplements?: string | null;
  readonly medicalHistory?: MedicalHistory | null;
  readonly allergiesAsthma?: string | null;
  readonly inhalerEpiPen?: string | null;
  readonly inhalerType?: string | null;
  readonly autoInsurance?: string | null;
  readonly currentPlacementReason?: string | null;
  readonly autoInsuranceClaimNumber?: string | null;
  readonly psychSubstanceIssues?: string | null;
  readonly autoInsuranceClaimAdjuster?: string | null;
  readonly autoInsuranceAddress?: string | null;
  readonly autoInsuranceCity?: string | null;
  readonly autoInsuranceState?: State | keyof typeof State | null;
  readonly autoInsuranceZip?: number | null;
  readonly autoInsurancePhone?: string | null;
  readonly workersCompInsurance?: string | null;
  readonly workersCompInsuranceCarrier?: string | null;
  readonly autoInsuranceDOL?: string | null;
  readonly workersCompClaimAdjuster?: string | null;
  readonly workersCompAddress?: string | null;
  readonly autoInsuranceCarrier?: string | null;
  readonly PGSContactMethod?: string | null;
  readonly workersCompZip?: string | null;
  readonly workersCompPhone?: string | null;
  readonly medicalInsurance?: MedicalInsurance | null;
  readonly workersCompClaimNumber?: string | null;
  readonly workersCompCity?: string | null;
  readonly workersCompState?: State | keyof typeof State | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Admissions = LazyLoading extends LazyLoadingDisabled ? EagerAdmissions : LazyAdmissions

export declare const Admissions: (new (init: ModelInit<Admissions>) => Admissions) & {
  copyOf(source: Admissions, mutator: (draft: MutableModel<Admissions>) => MutableModel<Admissions> | void): Admissions;
}

type EagerReferrals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Referrals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly source?: string | null;
  readonly name?: string | null;
  readonly followUp?: string | null;
  readonly DOA?: boolean | null;
  readonly DOADate?: string | null;
  readonly reasonForDecline?: string | null;
  readonly howDidYouHearAboutUs?: string | null;
  readonly assistanceProvided?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReferrals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Referrals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date?: string | null;
  readonly source?: string | null;
  readonly name?: string | null;
  readonly followUp?: string | null;
  readonly DOA?: boolean | null;
  readonly DOADate?: string | null;
  readonly reasonForDecline?: string | null;
  readonly howDidYouHearAboutUs?: string | null;
  readonly assistanceProvided?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Referrals = LazyLoading extends LazyLoadingDisabled ? EagerReferrals : LazyReferrals

export declare const Referrals: (new (init: ModelInit<Referrals>) => Referrals) & {
  copyOf(source: Referrals, mutator: (draft: MutableModel<Referrals>) => MutableModel<Referrals> | void): Referrals;
}

type EagerIcon = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Icon, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly alt?: string | null;
  readonly src?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIcon = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Icon, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly alt?: string | null;
  readonly src?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Icon = LazyLoading extends LazyLoadingDisabled ? EagerIcon : LazyIcon

export declare const Icon: (new (init: ModelInit<Icon>) => Icon) & {
  copyOf(source: Icon, mutator: (draft: MutableModel<Icon>) => MutableModel<Icon> | void): Icon;
}

type EagerServices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Services, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly serviceTitle?: string | null;
  readonly serviceBodyText?: string | null;
  readonly Icon?: Icon | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly servicesIconId?: string | null;
}

type LazyServices = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Services, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly serviceTitle?: string | null;
  readonly serviceBodyText?: string | null;
  readonly Icon: AsyncItem<Icon | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly servicesIconId?: string | null;
}

export declare type Services = LazyLoading extends LazyLoadingDisabled ? EagerServices : LazyServices

export declare const Services: (new (init: ModelInit<Services>) => Services) & {
  copyOf(source: Services, mutator: (draft: MutableModel<Services>) => MutableModel<Services> | void): Services;
}

type EagerTeamMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly bio?: string | null;
  readonly link?: string | null;
  readonly title?: string | null;
  readonly isFeatured?: boolean | null;
  readonly Image?: Headshot | null;
  readonly isLeader?: boolean | null;
  readonly userId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamMemberImageId?: string | null;
}

type LazyTeamMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly bio?: string | null;
  readonly link?: string | null;
  readonly title?: string | null;
  readonly isFeatured?: boolean | null;
  readonly Image: AsyncItem<Headshot | undefined>;
  readonly isLeader?: boolean | null;
  readonly userId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamMemberImageId?: string | null;
}

export declare type TeamMember = LazyLoading extends LazyLoadingDisabled ? EagerTeamMember : LazyTeamMember

export declare const TeamMember: (new (init: ModelInit<TeamMember>) => TeamMember) & {
  copyOf(source: TeamMember, mutator: (draft: MutableModel<TeamMember>) => MutableModel<TeamMember> | void): TeamMember;
}

type EagerHeadshot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Headshot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly imageTitle?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHeadshot = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Headshot, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly imageTitle?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Headshot = LazyLoading extends LazyLoadingDisabled ? EagerHeadshot : LazyHeadshot

export declare const Headshot: (new (init: ModelInit<Headshot>) => Headshot) & {
  copyOf(source: Headshot, mutator: (draft: MutableModel<Headshot>) => MutableModel<Headshot> | void): Headshot;
}