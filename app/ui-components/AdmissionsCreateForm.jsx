/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createAdmissions } from "../../utils/graphql/mutations";
const client = generateClient();
export default function AdmissionsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstName: "",
    lastName: "",
    expectToEnroll: "",
    pronouns: "",
    sex: "",
    SSN: "",
    address: "",
    gender: "",
    ethnicity: "",
    zip: "",
    country: "",
    homePhone: "",
    mobilePhone: "",
    email: "",
    city: "",
    DOB: "",
    emergencyContactRelationship: "",
    emergencyContactPhone: "",
    emergencyContactAddress: "",
    emergencyContactCity: "",
    emergencyContactState: "",
    emergencyContactZip: "",
    emergencyContactFirstName: "",
    PGSFirstName: "",
    PGSLastName: "",
    PGSAddress: "",
    PGSHomePhone: "",
    emergencyContactLastName: "",
    PGSEmail: "",
    PGSFax: "",
    state: "",
    PGSSponsor: "",
    PGSLegalCustody: "",
    PGSPhysicalCustody: "",
    PGSEmergencyContact: "",
    PGSParentGuardian: "",
    PGSRelationship: "",
    PGSMobilePhone: "",
    PGSWorkPhone: "",
    PGSWorkEmail: "",
    PGSWorkFax: "",
    howDIdYouHearAboutCCFIL: "",
    referralSource: "",
    whatEventsLeadToSeekTreatment: "",
    PGSEmployer: "",
    applicantsStrengths: "",
    applicantsWeaknesses: "",
    currentPlacementLocation: "",
    currentPlacementDates: "",
    currentPlacementProvider: "",
    PGSJobTitle: "",
    psychAnger: "",
    psychSuicidality: "",
    psychSexualActivity: "",
    whatGoalsReceivingTreatment: "",
    psychLegalProblems: "",
    medicalSurgeriesIllnessesHospitalizations: "",
    medicalPrescriptions: "",
    medicalVitaminsSupplements: "",
    allergiesAsthma: "",
    inhalerEpiPen: "",
    inhalerType: "",
    autoInsurance: "",
    currentPlacementReason: "",
    autoInsuranceClaimNumber: "",
    psychSubstanceIssues: "",
    autoInsuranceClaimAdjuster: "",
    autoInsuranceAddress: "",
    autoInsuranceCity: "",
    autoInsuranceState: "",
    autoInsuranceZip: "",
    autoInsurancePhone: "",
    workersCompInsurance: "",
    workersCompInsuranceCarrier: "",
    autoInsuranceDOL: "",
    workersCompClaimAdjuster: "",
    workersCompAddress: "",
    autoInsuranceCarrier: "",
    PGSContactMethod: "",
    workersCompZip: "",
    workersCompPhone: "",
    workersCompClaimNumber: "",
    workersCompCity: "",
    workersCompState: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [expectToEnroll, setExpectToEnroll] = React.useState(
    initialValues.expectToEnroll
  );
  const [pronouns, setPronouns] = React.useState(initialValues.pronouns);
  const [sex, setSex] = React.useState(initialValues.sex);
  const [SSN, setSSN] = React.useState(initialValues.SSN);
  const [address, setAddress] = React.useState(initialValues.address);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [ethnicity, setEthnicity] = React.useState(initialValues.ethnicity);
  const [zip, setZip] = React.useState(initialValues.zip);
  const [country, setCountry] = React.useState(initialValues.country);
  const [homePhone, setHomePhone] = React.useState(initialValues.homePhone);
  const [mobilePhone, setMobilePhone] = React.useState(
    initialValues.mobilePhone
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [city, setCity] = React.useState(initialValues.city);
  const [DOB, setDOB] = React.useState(initialValues.DOB);
  const [emergencyContactRelationship, setEmergencyContactRelationship] =
    React.useState(initialValues.emergencyContactRelationship);
  const [emergencyContactPhone, setEmergencyContactPhone] = React.useState(
    initialValues.emergencyContactPhone
  );
  const [emergencyContactAddress, setEmergencyContactAddress] = React.useState(
    initialValues.emergencyContactAddress
  );
  const [emergencyContactCity, setEmergencyContactCity] = React.useState(
    initialValues.emergencyContactCity
  );
  const [emergencyContactState, setEmergencyContactState] = React.useState(
    initialValues.emergencyContactState
  );
  const [emergencyContactZip, setEmergencyContactZip] = React.useState(
    initialValues.emergencyContactZip
  );
  const [emergencyContactFirstName, setEmergencyContactFirstName] =
    React.useState(initialValues.emergencyContactFirstName);
  const [PGSFirstName, setPGSFirstName] = React.useState(
    initialValues.PGSFirstName
  );
  const [PGSLastName, setPGSLastName] = React.useState(
    initialValues.PGSLastName
  );
  const [PGSAddress, setPGSAddress] = React.useState(initialValues.PGSAddress);
  const [PGSHomePhone, setPGSHomePhone] = React.useState(
    initialValues.PGSHomePhone
  );
  const [emergencyContactLastName, setEmergencyContactLastName] =
    React.useState(initialValues.emergencyContactLastName);
  const [PGSEmail, setPGSEmail] = React.useState(initialValues.PGSEmail);
  const [PGSFax, setPGSFax] = React.useState(initialValues.PGSFax);
  const [state, setState] = React.useState(initialValues.state);
  const [PGSSponsor, setPGSSponsor] = React.useState(initialValues.PGSSponsor);
  const [PGSLegalCustody, setPGSLegalCustody] = React.useState(
    initialValues.PGSLegalCustody
  );
  const [PGSPhysicalCustody, setPGSPhysicalCustody] = React.useState(
    initialValues.PGSPhysicalCustody
  );
  const [PGSEmergencyContact, setPGSEmergencyContact] = React.useState(
    initialValues.PGSEmergencyContact
  );
  const [PGSParentGuardian, setPGSParentGuardian] = React.useState(
    initialValues.PGSParentGuardian
  );
  const [PGSRelationship, setPGSRelationship] = React.useState(
    initialValues.PGSRelationship
  );
  const [PGSMobilePhone, setPGSMobilePhone] = React.useState(
    initialValues.PGSMobilePhone
  );
  const [PGSWorkPhone, setPGSWorkPhone] = React.useState(
    initialValues.PGSWorkPhone
  );
  const [PGSWorkEmail, setPGSWorkEmail] = React.useState(
    initialValues.PGSWorkEmail
  );
  const [PGSWorkFax, setPGSWorkFax] = React.useState(initialValues.PGSWorkFax);
  const [howDIdYouHearAboutCCFIL, setHowDIdYouHearAboutCCFIL] = React.useState(
    initialValues.howDIdYouHearAboutCCFIL
  );
  const [referralSource, setReferralSource] = React.useState(
    initialValues.referralSource
  );
  const [whatEventsLeadToSeekTreatment, setWhatEventsLeadToSeekTreatment] =
    React.useState(initialValues.whatEventsLeadToSeekTreatment);
  const [PGSEmployer, setPGSEmployer] = React.useState(
    initialValues.PGSEmployer
  );
  const [applicantsStrengths, setApplicantsStrengths] = React.useState(
    initialValues.applicantsStrengths
  );
  const [applicantsWeaknesses, setApplicantsWeaknesses] = React.useState(
    initialValues.applicantsWeaknesses
  );
  const [currentPlacementLocation, setCurrentPlacementLocation] =
    React.useState(initialValues.currentPlacementLocation);
  const [currentPlacementDates, setCurrentPlacementDates] = React.useState(
    initialValues.currentPlacementDates
  );
  const [currentPlacementProvider, setCurrentPlacementProvider] =
    React.useState(initialValues.currentPlacementProvider);
  const [PGSJobTitle, setPGSJobTitle] = React.useState(
    initialValues.PGSJobTitle
  );
  const [psychAnger, setPsychAnger] = React.useState(initialValues.psychAnger);
  const [psychSuicidality, setPsychSuicidality] = React.useState(
    initialValues.psychSuicidality
  );
  const [psychSexualActivity, setPsychSexualActivity] = React.useState(
    initialValues.psychSexualActivity
  );
  const [whatGoalsReceivingTreatment, setWhatGoalsReceivingTreatment] =
    React.useState(initialValues.whatGoalsReceivingTreatment);
  const [psychLegalProblems, setPsychLegalProblems] = React.useState(
    initialValues.psychLegalProblems
  );
  const [
    medicalSurgeriesIllnessesHospitalizations,
    setMedicalSurgeriesIllnessesHospitalizations,
  ] = React.useState(initialValues.medicalSurgeriesIllnessesHospitalizations);
  const [medicalPrescriptions, setMedicalPrescriptions] = React.useState(
    initialValues.medicalPrescriptions
  );
  const [medicalVitaminsSupplements, setMedicalVitaminsSupplements] =
    React.useState(initialValues.medicalVitaminsSupplements);
  const [allergiesAsthma, setAllergiesAsthma] = React.useState(
    initialValues.allergiesAsthma
  );
  const [inhalerEpiPen, setInhalerEpiPen] = React.useState(
    initialValues.inhalerEpiPen
  );
  const [inhalerType, setInhalerType] = React.useState(
    initialValues.inhalerType
  );
  const [autoInsurance, setAutoInsurance] = React.useState(
    initialValues.autoInsurance
  );
  const [currentPlacementReason, setCurrentPlacementReason] = React.useState(
    initialValues.currentPlacementReason
  );
  const [autoInsuranceClaimNumber, setAutoInsuranceClaimNumber] =
    React.useState(initialValues.autoInsuranceClaimNumber);
  const [psychSubstanceIssues, setPsychSubstanceIssues] = React.useState(
    initialValues.psychSubstanceIssues
  );
  const [autoInsuranceClaimAdjuster, setAutoInsuranceClaimAdjuster] =
    React.useState(initialValues.autoInsuranceClaimAdjuster);
  const [autoInsuranceAddress, setAutoInsuranceAddress] = React.useState(
    initialValues.autoInsuranceAddress
  );
  const [autoInsuranceCity, setAutoInsuranceCity] = React.useState(
    initialValues.autoInsuranceCity
  );
  const [autoInsuranceState, setAutoInsuranceState] = React.useState(
    initialValues.autoInsuranceState
  );
  const [autoInsuranceZip, setAutoInsuranceZip] = React.useState(
    initialValues.autoInsuranceZip
  );
  const [autoInsurancePhone, setAutoInsurancePhone] = React.useState(
    initialValues.autoInsurancePhone
  );
  const [workersCompInsurance, setWorkersCompInsurance] = React.useState(
    initialValues.workersCompInsurance
  );
  const [workersCompInsuranceCarrier, setWorkersCompInsuranceCarrier] =
    React.useState(initialValues.workersCompInsuranceCarrier);
  const [autoInsuranceDOL, setAutoInsuranceDOL] = React.useState(
    initialValues.autoInsuranceDOL
  );
  const [workersCompClaimAdjuster, setWorkersCompClaimAdjuster] =
    React.useState(initialValues.workersCompClaimAdjuster);
  const [workersCompAddress, setWorkersCompAddress] = React.useState(
    initialValues.workersCompAddress
  );
  const [autoInsuranceCarrier, setAutoInsuranceCarrier] = React.useState(
    initialValues.autoInsuranceCarrier
  );
  const [PGSContactMethod, setPGSContactMethod] = React.useState(
    initialValues.PGSContactMethod
  );
  const [workersCompZip, setWorkersCompZip] = React.useState(
    initialValues.workersCompZip
  );
  const [workersCompPhone, setWorkersCompPhone] = React.useState(
    initialValues.workersCompPhone
  );
  const [workersCompClaimNumber, setWorkersCompClaimNumber] = React.useState(
    initialValues.workersCompClaimNumber
  );
  const [workersCompCity, setWorkersCompCity] = React.useState(
    initialValues.workersCompCity
  );
  const [workersCompState, setWorkersCompState] = React.useState(
    initialValues.workersCompState
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setExpectToEnroll(initialValues.expectToEnroll);
    setPronouns(initialValues.pronouns);
    setSex(initialValues.sex);
    setSSN(initialValues.SSN);
    setAddress(initialValues.address);
    setGender(initialValues.gender);
    setEthnicity(initialValues.ethnicity);
    setZip(initialValues.zip);
    setCountry(initialValues.country);
    setHomePhone(initialValues.homePhone);
    setMobilePhone(initialValues.mobilePhone);
    setEmail(initialValues.email);
    setCity(initialValues.city);
    setDOB(initialValues.DOB);
    setEmergencyContactRelationship(initialValues.emergencyContactRelationship);
    setEmergencyContactPhone(initialValues.emergencyContactPhone);
    setEmergencyContactAddress(initialValues.emergencyContactAddress);
    setEmergencyContactCity(initialValues.emergencyContactCity);
    setEmergencyContactState(initialValues.emergencyContactState);
    setEmergencyContactZip(initialValues.emergencyContactZip);
    setEmergencyContactFirstName(initialValues.emergencyContactFirstName);
    setPGSFirstName(initialValues.PGSFirstName);
    setPGSLastName(initialValues.PGSLastName);
    setPGSAddress(initialValues.PGSAddress);
    setPGSHomePhone(initialValues.PGSHomePhone);
    setEmergencyContactLastName(initialValues.emergencyContactLastName);
    setPGSEmail(initialValues.PGSEmail);
    setPGSFax(initialValues.PGSFax);
    setState(initialValues.state);
    setPGSSponsor(initialValues.PGSSponsor);
    setPGSLegalCustody(initialValues.PGSLegalCustody);
    setPGSPhysicalCustody(initialValues.PGSPhysicalCustody);
    setPGSEmergencyContact(initialValues.PGSEmergencyContact);
    setPGSParentGuardian(initialValues.PGSParentGuardian);
    setPGSRelationship(initialValues.PGSRelationship);
    setPGSMobilePhone(initialValues.PGSMobilePhone);
    setPGSWorkPhone(initialValues.PGSWorkPhone);
    setPGSWorkEmail(initialValues.PGSWorkEmail);
    setPGSWorkFax(initialValues.PGSWorkFax);
    setHowDIdYouHearAboutCCFIL(initialValues.howDIdYouHearAboutCCFIL);
    setReferralSource(initialValues.referralSource);
    setWhatEventsLeadToSeekTreatment(
      initialValues.whatEventsLeadToSeekTreatment
    );
    setPGSEmployer(initialValues.PGSEmployer);
    setApplicantsStrengths(initialValues.applicantsStrengths);
    setApplicantsWeaknesses(initialValues.applicantsWeaknesses);
    setCurrentPlacementLocation(initialValues.currentPlacementLocation);
    setCurrentPlacementDates(initialValues.currentPlacementDates);
    setCurrentPlacementProvider(initialValues.currentPlacementProvider);
    setPGSJobTitle(initialValues.PGSJobTitle);
    setPsychAnger(initialValues.psychAnger);
    setPsychSuicidality(initialValues.psychSuicidality);
    setPsychSexualActivity(initialValues.psychSexualActivity);
    setWhatGoalsReceivingTreatment(initialValues.whatGoalsReceivingTreatment);
    setPsychLegalProblems(initialValues.psychLegalProblems);
    setMedicalSurgeriesIllnessesHospitalizations(
      initialValues.medicalSurgeriesIllnessesHospitalizations
    );
    setMedicalPrescriptions(initialValues.medicalPrescriptions);
    setMedicalVitaminsSupplements(initialValues.medicalVitaminsSupplements);
    setAllergiesAsthma(initialValues.allergiesAsthma);
    setInhalerEpiPen(initialValues.inhalerEpiPen);
    setInhalerType(initialValues.inhalerType);
    setAutoInsurance(initialValues.autoInsurance);
    setCurrentPlacementReason(initialValues.currentPlacementReason);
    setAutoInsuranceClaimNumber(initialValues.autoInsuranceClaimNumber);
    setPsychSubstanceIssues(initialValues.psychSubstanceIssues);
    setAutoInsuranceClaimAdjuster(initialValues.autoInsuranceClaimAdjuster);
    setAutoInsuranceAddress(initialValues.autoInsuranceAddress);
    setAutoInsuranceCity(initialValues.autoInsuranceCity);
    setAutoInsuranceState(initialValues.autoInsuranceState);
    setAutoInsuranceZip(initialValues.autoInsuranceZip);
    setAutoInsurancePhone(initialValues.autoInsurancePhone);
    setWorkersCompInsurance(initialValues.workersCompInsurance);
    setWorkersCompInsuranceCarrier(initialValues.workersCompInsuranceCarrier);
    setAutoInsuranceDOL(initialValues.autoInsuranceDOL);
    setWorkersCompClaimAdjuster(initialValues.workersCompClaimAdjuster);
    setWorkersCompAddress(initialValues.workersCompAddress);
    setAutoInsuranceCarrier(initialValues.autoInsuranceCarrier);
    setPGSContactMethod(initialValues.PGSContactMethod);
    setWorkersCompZip(initialValues.workersCompZip);
    setWorkersCompPhone(initialValues.workersCompPhone);
    setWorkersCompClaimNumber(initialValues.workersCompClaimNumber);
    setWorkersCompCity(initialValues.workersCompCity);
    setWorkersCompState(initialValues.workersCompState);
    setErrors({});
  };
  const validations = {
    firstName: [],
    lastName: [],
    expectToEnroll: [],
    pronouns: [],
    sex: [],
    SSN: [],
    address: [],
    gender: [],
    ethnicity: [],
    zip: [],
    country: [],
    homePhone: [{ type: "Phone" }],
    mobilePhone: [{ type: "Phone" }],
    email: [{ type: "Email" }],
    city: [],
    DOB: [],
    emergencyContactRelationship: [],
    emergencyContactPhone: [{ type: "Phone" }],
    emergencyContactAddress: [],
    emergencyContactCity: [],
    emergencyContactState: [],
    emergencyContactZip: [],
    emergencyContactFirstName: [],
    PGSFirstName: [],
    PGSLastName: [],
    PGSAddress: [],
    PGSHomePhone: [{ type: "Phone" }],
    emergencyContactLastName: [],
    PGSEmail: [{ type: "Email" }],
    PGSFax: [{ type: "Phone" }],
    state: [],
    PGSSponsor: [],
    PGSLegalCustody: [],
    PGSPhysicalCustody: [],
    PGSEmergencyContact: [],
    PGSParentGuardian: [],
    PGSRelationship: [],
    PGSMobilePhone: [{ type: "Phone" }],
    PGSWorkPhone: [{ type: "Phone" }],
    PGSWorkEmail: [{ type: "Email" }],
    PGSWorkFax: [{ type: "Phone" }],
    howDIdYouHearAboutCCFIL: [],
    referralSource: [],
    whatEventsLeadToSeekTreatment: [],
    PGSEmployer: [],
    applicantsStrengths: [],
    applicantsWeaknesses: [],
    currentPlacementLocation: [],
    currentPlacementDates: [],
    currentPlacementProvider: [],
    PGSJobTitle: [],
    psychAnger: [],
    psychSuicidality: [],
    psychSexualActivity: [],
    whatGoalsReceivingTreatment: [],
    psychLegalProblems: [],
    medicalSurgeriesIllnessesHospitalizations: [],
    medicalPrescriptions: [],
    medicalVitaminsSupplements: [],
    allergiesAsthma: [],
    inhalerEpiPen: [],
    inhalerType: [],
    autoInsurance: [],
    currentPlacementReason: [],
    autoInsuranceClaimNumber: [],
    psychSubstanceIssues: [],
    autoInsuranceClaimAdjuster: [],
    autoInsuranceAddress: [],
    autoInsuranceCity: [],
    autoInsuranceState: [],
    autoInsuranceZip: [],
    autoInsurancePhone: [{ type: "Phone" }],
    workersCompInsurance: [],
    workersCompInsuranceCarrier: [],
    autoInsuranceDOL: [],
    workersCompClaimAdjuster: [],
    workersCompAddress: [],
    autoInsuranceCarrier: [],
    PGSContactMethod: [],
    workersCompZip: [],
    workersCompPhone: [{ type: "Phone" }],
    workersCompClaimNumber: [],
    workersCompCity: [],
    workersCompState: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          firstName,
          lastName,
          expectToEnroll,
          pronouns,
          sex,
          SSN,
          address,
          gender,
          ethnicity,
          zip,
          country,
          homePhone,
          mobilePhone,
          email,
          city,
          DOB,
          emergencyContactRelationship,
          emergencyContactPhone,
          emergencyContactAddress,
          emergencyContactCity,
          emergencyContactState,
          emergencyContactZip,
          emergencyContactFirstName,
          PGSFirstName,
          PGSLastName,
          PGSAddress,
          PGSHomePhone,
          emergencyContactLastName,
          PGSEmail,
          PGSFax,
          state,
          PGSSponsor,
          PGSLegalCustody,
          PGSPhysicalCustody,
          PGSEmergencyContact,
          PGSParentGuardian,
          PGSRelationship,
          PGSMobilePhone,
          PGSWorkPhone,
          PGSWorkEmail,
          PGSWorkFax,
          howDIdYouHearAboutCCFIL,
          referralSource,
          whatEventsLeadToSeekTreatment,
          PGSEmployer,
          applicantsStrengths,
          applicantsWeaknesses,
          currentPlacementLocation,
          currentPlacementDates,
          currentPlacementProvider,
          PGSJobTitle,
          psychAnger,
          psychSuicidality,
          psychSexualActivity,
          whatGoalsReceivingTreatment,
          psychLegalProblems,
          medicalSurgeriesIllnessesHospitalizations,
          medicalPrescriptions,
          medicalVitaminsSupplements,
          allergiesAsthma,
          inhalerEpiPen,
          inhalerType,
          autoInsurance,
          currentPlacementReason,
          autoInsuranceClaimNumber,
          psychSubstanceIssues,
          autoInsuranceClaimAdjuster,
          autoInsuranceAddress,
          autoInsuranceCity,
          autoInsuranceState,
          autoInsuranceZip,
          autoInsurancePhone,
          workersCompInsurance,
          workersCompInsuranceCarrier,
          autoInsuranceDOL,
          workersCompClaimAdjuster,
          workersCompAddress,
          autoInsuranceCarrier,
          PGSContactMethod,
          workersCompZip,
          workersCompPhone,
          workersCompClaimNumber,
          workersCompCity,
          workersCompState,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createAdmissions.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AdmissionsCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Expect to enroll"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={expectToEnroll}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll: value,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.expectToEnroll ?? value;
          }
          if (errors.expectToEnroll?.hasError) {
            runValidationTasks("expectToEnroll", value);
          }
          setExpectToEnroll(value);
        }}
        onBlur={() => runValidationTasks("expectToEnroll", expectToEnroll)}
        errorMessage={errors.expectToEnroll?.errorMessage}
        hasError={errors.expectToEnroll?.hasError}
        {...getOverrideProps(overrides, "expectToEnroll")}
      ></TextField>
      <SelectField
        label="Pronouns"
        placeholder="Please select an option"
        isDisabled={false}
        value={pronouns}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns: value,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.pronouns ?? value;
          }
          if (errors.pronouns?.hasError) {
            runValidationTasks("pronouns", value);
          }
          setPronouns(value);
        }}
        onBlur={() => runValidationTasks("pronouns", pronouns)}
        errorMessage={errors.pronouns?.errorMessage}
        hasError={errors.pronouns?.hasError}
        {...getOverrideProps(overrides, "pronouns")}
      >
        <option
          children="Hehim"
          value="HEHIM"
          {...getOverrideProps(overrides, "pronounsoption0")}
        ></option>
        <option
          children="Sheher"
          value="SHEHER"
          {...getOverrideProps(overrides, "pronounsoption1")}
        ></option>
        <option
          children="Theythem"
          value="THEYTHEM"
          {...getOverrideProps(overrides, "pronounsoption2")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "pronounsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Sex"
        placeholder="Please select an option"
        isDisabled={false}
        value={sex}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex: value,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.sex ?? value;
          }
          if (errors.sex?.hasError) {
            runValidationTasks("sex", value);
          }
          setSex(value);
        }}
        onBlur={() => runValidationTasks("sex", sex)}
        errorMessage={errors.sex?.errorMessage}
        hasError={errors.sex?.hasError}
        {...getOverrideProps(overrides, "sex")}
      >
        <option
          children="Male"
          value="MALE"
          {...getOverrideProps(overrides, "sexoption0")}
        ></option>
        <option
          children="Female"
          value="FEMALE"
          {...getOverrideProps(overrides, "sexoption1")}
        ></option>
        <option
          children="Declinetoanswer"
          value="DECLINETOANSWER"
          {...getOverrideProps(overrides, "sexoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Ssn"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={SSN}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN: value,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.SSN ?? value;
          }
          if (errors.SSN?.hasError) {
            runValidationTasks("SSN", value);
          }
          setSSN(value);
        }}
        onBlur={() => runValidationTasks("SSN", SSN)}
        errorMessage={errors.SSN?.errorMessage}
        hasError={errors.SSN?.hasError}
        {...getOverrideProps(overrides, "SSN")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address: value,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <SelectField
        label="Gender"
        placeholder="Please select an option"
        isDisabled={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender: value,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      >
        <option
          children="Agender"
          value="AGENDER"
          {...getOverrideProps(overrides, "genderoption0")}
        ></option>
        <option
          children="Androgyne"
          value="ANDROGYNE"
          {...getOverrideProps(overrides, "genderoption1")}
        ></option>
        <option
          children="Bigender"
          value="BIGENDER"
          {...getOverrideProps(overrides, "genderoption2")}
        ></option>
        <option
          children="Butch"
          value="BUTCH"
          {...getOverrideProps(overrides, "genderoption3")}
        ></option>
        <option
          children="Cisgender"
          value="CISGENDER"
          {...getOverrideProps(overrides, "genderoption4")}
        ></option>
        <option
          children="Genderexpansive"
          value="GENDEREXPANSIVE"
          {...getOverrideProps(overrides, "genderoption5")}
        ></option>
        <option
          children="Genderfluid"
          value="GENDERFLUID"
          {...getOverrideProps(overrides, "genderoption6")}
        ></option>
        <option
          children="Genderoutlaw"
          value="GENDEROUTLAW"
          {...getOverrideProps(overrides, "genderoption7")}
        ></option>
        <option
          children="Genderqueer"
          value="GENDERQUEER"
          {...getOverrideProps(overrides, "genderoption8")}
        ></option>
        <option
          children="Masculineofcenter"
          value="MASCULINEOFCENTER"
          {...getOverrideProps(overrides, "genderoption9")}
        ></option>
        <option
          children="Nonbinary"
          value="NONBINARY"
          {...getOverrideProps(overrides, "genderoption10")}
        ></option>
        <option
          children="Omnigender"
          value="OMNIGENDER"
          {...getOverrideProps(overrides, "genderoption11")}
        ></option>
        <option
          children="Polygenderandpangender"
          value="POLYGENDERANDPANGENDER"
          {...getOverrideProps(overrides, "genderoption12")}
        ></option>
        <option
          children="Transgender"
          value="TRANSGENDER"
          {...getOverrideProps(overrides, "genderoption13")}
        ></option>
        <option
          children="Trans"
          value="TRANS"
          {...getOverrideProps(overrides, "genderoption14")}
        ></option>
        <option
          children="Twospirit"
          value="TWOSPIRIT"
          {...getOverrideProps(overrides, "genderoption15")}
        ></option>
        <option
          children="Declinetoanswer"
          value="DECLINETOANSWER"
          {...getOverrideProps(overrides, "genderoption16")}
        ></option>
      </SelectField>
      <SelectField
        label="Ethnicity"
        placeholder="Please select an option"
        isDisabled={false}
        value={ethnicity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity: value,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.ethnicity ?? value;
          }
          if (errors.ethnicity?.hasError) {
            runValidationTasks("ethnicity", value);
          }
          setEthnicity(value);
        }}
        onBlur={() => runValidationTasks("ethnicity", ethnicity)}
        errorMessage={errors.ethnicity?.errorMessage}
        hasError={errors.ethnicity?.hasError}
        {...getOverrideProps(overrides, "ethnicity")}
      >
        <option
          children="African"
          value="AFRICAN"
          {...getOverrideProps(overrides, "ethnicityoption0")}
        ></option>
        <option
          children="Caribbean"
          value="CARIBBEAN"
          {...getOverrideProps(overrides, "ethnicityoption1")}
        ></option>
        <option
          children="Indian"
          value="INDIAN"
          {...getOverrideProps(overrides, "ethnicityoption2")}
        ></option>
        <option
          children="Melanesian"
          value="MELANESIAN"
          {...getOverrideProps(overrides, "ethnicityoption3")}
        ></option>
        <option
          children="Australasianaboriginal"
          value="AUSTRALASIANABORIGINAL"
          {...getOverrideProps(overrides, "ethnicityoption4")}
        ></option>
        <option
          children="Chinese"
          value="CHINESE"
          {...getOverrideProps(overrides, "ethnicityoption5")}
        ></option>
        <option
          children="Guamanian"
          value="GUAMANIAN"
          {...getOverrideProps(overrides, "ethnicityoption6")}
        ></option>
        <option
          children="Japanese"
          value="JAPANESE"
          {...getOverrideProps(overrides, "ethnicityoption7")}
        ></option>
        <option
          children="Korean"
          value="KOREAN"
          {...getOverrideProps(overrides, "ethnicityoption8")}
        ></option>
        <option
          children="Europeananglosaxon"
          value="EUROPEANANGLOSAXON"
          {...getOverrideProps(overrides, "ethnicityoption9")}
        ></option>
        <option
          children="Otherpacificislander"
          value="OTHERPACIFICISLANDER"
          {...getOverrideProps(overrides, "ethnicityoption10")}
        ></option>
        <option
          children="Latinamerican"
          value="LATINAMERICAN"
          {...getOverrideProps(overrides, "ethnicityoption11")}
        ></option>
        <option
          children="Arabic"
          value="ARABIC"
          {...getOverrideProps(overrides, "ethnicityoption12")}
        ></option>
        <option
          children="Vietnamese"
          value="VIETNAMESE"
          {...getOverrideProps(overrides, "ethnicityoption13")}
        ></option>
        <option
          children="Micronesian"
          value="MICRONESIAN"
          {...getOverrideProps(overrides, "ethnicityoption14")}
        ></option>
        <option
          children="Declinedtorespond"
          value="DECLINEDTORESPOND"
          {...getOverrideProps(overrides, "ethnicityoption15")}
        ></option>
        <option
          children="Otherhispanic"
          value="OTHERHISPANIC"
          {...getOverrideProps(overrides, "ethnicityoption16")}
        ></option>
        <option
          children="Usorcanadianindian"
          value="USORCANADIANINDIAN"
          {...getOverrideProps(overrides, "ethnicityoption17")}
        ></option>
        <option
          children="Otherasian"
          value="OTHERASIAN"
          {...getOverrideProps(overrides, "ethnicityoption18")}
        ></option>
        <option
          children="Puertorican"
          value="PUERTORICAN"
          {...getOverrideProps(overrides, "ethnicityoption19")}
        ></option>
        <option
          children="Filipino"
          value="FILIPINO"
          {...getOverrideProps(overrides, "ethnicityoption20")}
        ></option>
        <option
          children="Mexican"
          value="MEXICAN"
          {...getOverrideProps(overrides, "ethnicityoption21")}
        ></option>
        <option
          children="Alaskannative"
          value="ALASKANNATIVE"
          {...getOverrideProps(overrides, "ethnicityoption22")}
        ></option>
        <option
          children="Cuban"
          value="CUBAN"
          {...getOverrideProps(overrides, "ethnicityoption23")}
        ></option>
      </SelectField>
      <TextField
        label="Zip"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={zip}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip: value,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.zip ?? value;
          }
          if (errors.zip?.hasError) {
            runValidationTasks("zip", value);
          }
          setZip(value);
        }}
        onBlur={() => runValidationTasks("zip", zip)}
        errorMessage={errors.zip?.errorMessage}
        hasError={errors.zip?.hasError}
        {...getOverrideProps(overrides, "zip")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country: value,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Home phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={homePhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone: value,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.homePhone ?? value;
          }
          if (errors.homePhone?.hasError) {
            runValidationTasks("homePhone", value);
          }
          setHomePhone(value);
        }}
        onBlur={() => runValidationTasks("homePhone", homePhone)}
        errorMessage={errors.homePhone?.errorMessage}
        hasError={errors.homePhone?.hasError}
        {...getOverrideProps(overrides, "homePhone")}
      ></TextField>
      <TextField
        label="Mobile phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={mobilePhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone: value,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.mobilePhone ?? value;
          }
          if (errors.mobilePhone?.hasError) {
            runValidationTasks("mobilePhone", value);
          }
          setMobilePhone(value);
        }}
        onBlur={() => runValidationTasks("mobilePhone", mobilePhone)}
        errorMessage={errors.mobilePhone?.errorMessage}
        hasError={errors.mobilePhone?.hasError}
        {...getOverrideProps(overrides, "mobilePhone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email: value,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city: value,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Dob"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={DOB}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB: value,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.DOB ?? value;
          }
          if (errors.DOB?.hasError) {
            runValidationTasks("DOB", value);
          }
          setDOB(value);
        }}
        onBlur={() => runValidationTasks("DOB", DOB)}
        errorMessage={errors.DOB?.errorMessage}
        hasError={errors.DOB?.hasError}
        {...getOverrideProps(overrides, "DOB")}
      ></TextField>
      <TextField
        label="Emergency contact relationship"
        isRequired={false}
        isReadOnly={false}
        value={emergencyContactRelationship}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship: value,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.emergencyContactRelationship ?? value;
          }
          if (errors.emergencyContactRelationship?.hasError) {
            runValidationTasks("emergencyContactRelationship", value);
          }
          setEmergencyContactRelationship(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "emergencyContactRelationship",
            emergencyContactRelationship
          )
        }
        errorMessage={errors.emergencyContactRelationship?.errorMessage}
        hasError={errors.emergencyContactRelationship?.hasError}
        {...getOverrideProps(overrides, "emergencyContactRelationship")}
      ></TextField>
      <TextField
        label="Emergency contact phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={emergencyContactPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone: value,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.emergencyContactPhone ?? value;
          }
          if (errors.emergencyContactPhone?.hasError) {
            runValidationTasks("emergencyContactPhone", value);
          }
          setEmergencyContactPhone(value);
        }}
        onBlur={() =>
          runValidationTasks("emergencyContactPhone", emergencyContactPhone)
        }
        errorMessage={errors.emergencyContactPhone?.errorMessage}
        hasError={errors.emergencyContactPhone?.hasError}
        {...getOverrideProps(overrides, "emergencyContactPhone")}
      ></TextField>
      <TextField
        label="Emergency contact address"
        isRequired={false}
        isReadOnly={false}
        value={emergencyContactAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress: value,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.emergencyContactAddress ?? value;
          }
          if (errors.emergencyContactAddress?.hasError) {
            runValidationTasks("emergencyContactAddress", value);
          }
          setEmergencyContactAddress(value);
        }}
        onBlur={() =>
          runValidationTasks("emergencyContactAddress", emergencyContactAddress)
        }
        errorMessage={errors.emergencyContactAddress?.errorMessage}
        hasError={errors.emergencyContactAddress?.hasError}
        {...getOverrideProps(overrides, "emergencyContactAddress")}
      ></TextField>
      <TextField
        label="Emergency contact city"
        isRequired={false}
        isReadOnly={false}
        value={emergencyContactCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity: value,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.emergencyContactCity ?? value;
          }
          if (errors.emergencyContactCity?.hasError) {
            runValidationTasks("emergencyContactCity", value);
          }
          setEmergencyContactCity(value);
        }}
        onBlur={() =>
          runValidationTasks("emergencyContactCity", emergencyContactCity)
        }
        errorMessage={errors.emergencyContactCity?.errorMessage}
        hasError={errors.emergencyContactCity?.hasError}
        {...getOverrideProps(overrides, "emergencyContactCity")}
      ></TextField>
      <SelectField
        label="Emergency contact state"
        placeholder="Please select an option"
        isDisabled={false}
        value={emergencyContactState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState: value,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.emergencyContactState ?? value;
          }
          if (errors.emergencyContactState?.hasError) {
            runValidationTasks("emergencyContactState", value);
          }
          setEmergencyContactState(value);
        }}
        onBlur={() =>
          runValidationTasks("emergencyContactState", emergencyContactState)
        }
        errorMessage={errors.emergencyContactState?.errorMessage}
        hasError={errors.emergencyContactState?.hasError}
        {...getOverrideProps(overrides, "emergencyContactState")}
      >
        <option
          children="Alabama"
          value="ALABAMA"
          {...getOverrideProps(overrides, "emergencyContactStateoption0")}
        ></option>
        <option
          children="Alaska"
          value="ALASKA"
          {...getOverrideProps(overrides, "emergencyContactStateoption1")}
        ></option>
        <option
          children="Arizona"
          value="ARIZONA"
          {...getOverrideProps(overrides, "emergencyContactStateoption2")}
        ></option>
        <option
          children="Arkansas"
          value="ARKANSAS"
          {...getOverrideProps(overrides, "emergencyContactStateoption3")}
        ></option>
        <option
          children="Americansamoa"
          value="AMERICANSAMOA"
          {...getOverrideProps(overrides, "emergencyContactStateoption4")}
        ></option>
        <option
          children="California"
          value="CALIFORNIA"
          {...getOverrideProps(overrides, "emergencyContactStateoption5")}
        ></option>
        <option
          children="Colorado"
          value="COLORADO"
          {...getOverrideProps(overrides, "emergencyContactStateoption6")}
        ></option>
        <option
          children="Connecticut"
          value="CONNECTICUT"
          {...getOverrideProps(overrides, "emergencyContactStateoption7")}
        ></option>
        <option
          children="Delaware"
          value="DELAWARE"
          {...getOverrideProps(overrides, "emergencyContactStateoption8")}
        ></option>
        <option
          children="Districtofcolumbia"
          value="DISTRICTOFCOLUMBIA"
          {...getOverrideProps(overrides, "emergencyContactStateoption9")}
        ></option>
        <option
          children="Florida"
          value="FLORIDA"
          {...getOverrideProps(overrides, "emergencyContactStateoption10")}
        ></option>
        <option
          children="Georgia"
          value="GEORGIA"
          {...getOverrideProps(overrides, "emergencyContactStateoption11")}
        ></option>
        <option
          children="Guam"
          value="GUAM"
          {...getOverrideProps(overrides, "emergencyContactStateoption12")}
        ></option>
        <option
          children="Hawaii"
          value="HAWAII"
          {...getOverrideProps(overrides, "emergencyContactStateoption13")}
        ></option>
        <option
          children="Idaho"
          value="IDAHO"
          {...getOverrideProps(overrides, "emergencyContactStateoption14")}
        ></option>
        <option
          children="Illinois"
          value="ILLINOIS"
          {...getOverrideProps(overrides, "emergencyContactStateoption15")}
        ></option>
        <option
          children="Indiana"
          value="INDIANA"
          {...getOverrideProps(overrides, "emergencyContactStateoption16")}
        ></option>
        <option
          children="Iowa"
          value="IOWA"
          {...getOverrideProps(overrides, "emergencyContactStateoption17")}
        ></option>
        <option
          children="Kansas"
          value="KANSAS"
          {...getOverrideProps(overrides, "emergencyContactStateoption18")}
        ></option>
        <option
          children="Kentucky"
          value="KENTUCKY"
          {...getOverrideProps(overrides, "emergencyContactStateoption19")}
        ></option>
        <option
          children="Louisiana"
          value="LOUISIANA"
          {...getOverrideProps(overrides, "emergencyContactStateoption20")}
        ></option>
        <option
          children="Maine"
          value="MAINE"
          {...getOverrideProps(overrides, "emergencyContactStateoption21")}
        ></option>
        <option
          children="Maryland"
          value="MARYLAND"
          {...getOverrideProps(overrides, "emergencyContactStateoption22")}
        ></option>
        <option
          children="Massachusetts"
          value="MASSACHUSETTS"
          {...getOverrideProps(overrides, "emergencyContactStateoption23")}
        ></option>
        <option
          children="Michigan"
          value="MICHIGAN"
          {...getOverrideProps(overrides, "emergencyContactStateoption24")}
        ></option>
        <option
          children="Minnesota"
          value="MINNESOTA"
          {...getOverrideProps(overrides, "emergencyContactStateoption25")}
        ></option>
        <option
          children="Mississippi"
          value="MISSISSIPPI"
          {...getOverrideProps(overrides, "emergencyContactStateoption26")}
        ></option>
        <option
          children="Missouri"
          value="MISSOURI"
          {...getOverrideProps(overrides, "emergencyContactStateoption27")}
        ></option>
        <option
          children="Montana"
          value="MONTANA"
          {...getOverrideProps(overrides, "emergencyContactStateoption28")}
        ></option>
        <option
          children="Nebraska"
          value="NEBRASKA"
          {...getOverrideProps(overrides, "emergencyContactStateoption29")}
        ></option>
        <option
          children="Nevada"
          value="NEVADA"
          {...getOverrideProps(overrides, "emergencyContactStateoption30")}
        ></option>
        <option
          children="Newhampshire"
          value="NEWHAMPSHIRE"
          {...getOverrideProps(overrides, "emergencyContactStateoption31")}
        ></option>
        <option
          children="Newjersey"
          value="NEWJERSEY"
          {...getOverrideProps(overrides, "emergencyContactStateoption32")}
        ></option>
        <option
          children="Newmexico"
          value="NEWMEXICO"
          {...getOverrideProps(overrides, "emergencyContactStateoption33")}
        ></option>
        <option
          children="Newyork"
          value="NEWYORK"
          {...getOverrideProps(overrides, "emergencyContactStateoption34")}
        ></option>
        <option
          children="Northcarolina"
          value="NORTHCAROLINA"
          {...getOverrideProps(overrides, "emergencyContactStateoption35")}
        ></option>
        <option
          children="Northdakota"
          value="NORTHDAKOTA"
          {...getOverrideProps(overrides, "emergencyContactStateoption36")}
        ></option>
        <option
          children="Northernmarianaislands"
          value="NORTHERNMARIANAISLANDS"
          {...getOverrideProps(overrides, "emergencyContactStateoption37")}
        ></option>
        <option
          children="Ohio"
          value="OHIO"
          {...getOverrideProps(overrides, "emergencyContactStateoption38")}
        ></option>
        <option
          children="Oklahoma"
          value="OKLAHOMA"
          {...getOverrideProps(overrides, "emergencyContactStateoption39")}
        ></option>
        <option
          children="Oregon"
          value="OREGON"
          {...getOverrideProps(overrides, "emergencyContactStateoption40")}
        ></option>
        <option
          children="Pennsylvania"
          value="PENNSYLVANIA"
          {...getOverrideProps(overrides, "emergencyContactStateoption41")}
        ></option>
        <option
          children="Puertorico"
          value="PUERTORICO"
          {...getOverrideProps(overrides, "emergencyContactStateoption42")}
        ></option>
        <option
          children="Rhodeisland"
          value="RHODEISLAND"
          {...getOverrideProps(overrides, "emergencyContactStateoption43")}
        ></option>
        <option
          children="Southcarolina"
          value="SOUTHCAROLINA"
          {...getOverrideProps(overrides, "emergencyContactStateoption44")}
        ></option>
        <option
          children="Southdakota"
          value="SOUTHDAKOTA"
          {...getOverrideProps(overrides, "emergencyContactStateoption45")}
        ></option>
        <option
          children="Tennessee"
          value="TENNESSEE"
          {...getOverrideProps(overrides, "emergencyContactStateoption46")}
        ></option>
        <option
          children="Texas"
          value="TEXAS"
          {...getOverrideProps(overrides, "emergencyContactStateoption47")}
        ></option>
        <option
          children="Trustterritories"
          value="TRUSTTERRITORIES"
          {...getOverrideProps(overrides, "emergencyContactStateoption48")}
        ></option>
        <option
          children="Utah"
          value="UTAH"
          {...getOverrideProps(overrides, "emergencyContactStateoption49")}
        ></option>
        <option
          children="Vermont"
          value="VERMONT"
          {...getOverrideProps(overrides, "emergencyContactStateoption50")}
        ></option>
        <option
          children="Virginia"
          value="VIRGINIA"
          {...getOverrideProps(overrides, "emergencyContactStateoption51")}
        ></option>
        <option
          children="Virginislands"
          value="VIRGINISLANDS"
          {...getOverrideProps(overrides, "emergencyContactStateoption52")}
        ></option>
        <option
          children="Washington"
          value="WASHINGTON"
          {...getOverrideProps(overrides, "emergencyContactStateoption53")}
        ></option>
        <option
          children="Westvirginia"
          value="WESTVIRGINIA"
          {...getOverrideProps(overrides, "emergencyContactStateoption54")}
        ></option>
        <option
          children="Wisconsin"
          value="WISCONSIN"
          {...getOverrideProps(overrides, "emergencyContactStateoption55")}
        ></option>
        <option
          children="Wyoming"
          value="WYOMING"
          {...getOverrideProps(overrides, "emergencyContactStateoption56")}
        ></option>
      </SelectField>
      <TextField
        label="Emergency contact zip"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={emergencyContactZip}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip: value,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.emergencyContactZip ?? value;
          }
          if (errors.emergencyContactZip?.hasError) {
            runValidationTasks("emergencyContactZip", value);
          }
          setEmergencyContactZip(value);
        }}
        onBlur={() =>
          runValidationTasks("emergencyContactZip", emergencyContactZip)
        }
        errorMessage={errors.emergencyContactZip?.errorMessage}
        hasError={errors.emergencyContactZip?.hasError}
        {...getOverrideProps(overrides, "emergencyContactZip")}
      ></TextField>
      <TextField
        label="Emergency contact first name"
        isRequired={false}
        isReadOnly={false}
        value={emergencyContactFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName: value,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.emergencyContactFirstName ?? value;
          }
          if (errors.emergencyContactFirstName?.hasError) {
            runValidationTasks("emergencyContactFirstName", value);
          }
          setEmergencyContactFirstName(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "emergencyContactFirstName",
            emergencyContactFirstName
          )
        }
        errorMessage={errors.emergencyContactFirstName?.errorMessage}
        hasError={errors.emergencyContactFirstName?.hasError}
        {...getOverrideProps(overrides, "emergencyContactFirstName")}
      ></TextField>
      <TextField
        label="Pgs first name"
        isRequired={false}
        isReadOnly={false}
        value={PGSFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName: value,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSFirstName ?? value;
          }
          if (errors.PGSFirstName?.hasError) {
            runValidationTasks("PGSFirstName", value);
          }
          setPGSFirstName(value);
        }}
        onBlur={() => runValidationTasks("PGSFirstName", PGSFirstName)}
        errorMessage={errors.PGSFirstName?.errorMessage}
        hasError={errors.PGSFirstName?.hasError}
        {...getOverrideProps(overrides, "PGSFirstName")}
      ></TextField>
      <TextField
        label="Pgs last name"
        isRequired={false}
        isReadOnly={false}
        value={PGSLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName: value,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSLastName ?? value;
          }
          if (errors.PGSLastName?.hasError) {
            runValidationTasks("PGSLastName", value);
          }
          setPGSLastName(value);
        }}
        onBlur={() => runValidationTasks("PGSLastName", PGSLastName)}
        errorMessage={errors.PGSLastName?.errorMessage}
        hasError={errors.PGSLastName?.hasError}
        {...getOverrideProps(overrides, "PGSLastName")}
      ></TextField>
      <TextField
        label="Pgs address"
        isRequired={false}
        isReadOnly={false}
        value={PGSAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress: value,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSAddress ?? value;
          }
          if (errors.PGSAddress?.hasError) {
            runValidationTasks("PGSAddress", value);
          }
          setPGSAddress(value);
        }}
        onBlur={() => runValidationTasks("PGSAddress", PGSAddress)}
        errorMessage={errors.PGSAddress?.errorMessage}
        hasError={errors.PGSAddress?.hasError}
        {...getOverrideProps(overrides, "PGSAddress")}
      ></TextField>
      <TextField
        label="Pgs home phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={PGSHomePhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone: value,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSHomePhone ?? value;
          }
          if (errors.PGSHomePhone?.hasError) {
            runValidationTasks("PGSHomePhone", value);
          }
          setPGSHomePhone(value);
        }}
        onBlur={() => runValidationTasks("PGSHomePhone", PGSHomePhone)}
        errorMessage={errors.PGSHomePhone?.errorMessage}
        hasError={errors.PGSHomePhone?.hasError}
        {...getOverrideProps(overrides, "PGSHomePhone")}
      ></TextField>
      <TextField
        label="Emergency contact last name"
        isRequired={false}
        isReadOnly={false}
        value={emergencyContactLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName: value,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.emergencyContactLastName ?? value;
          }
          if (errors.emergencyContactLastName?.hasError) {
            runValidationTasks("emergencyContactLastName", value);
          }
          setEmergencyContactLastName(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "emergencyContactLastName",
            emergencyContactLastName
          )
        }
        errorMessage={errors.emergencyContactLastName?.errorMessage}
        hasError={errors.emergencyContactLastName?.hasError}
        {...getOverrideProps(overrides, "emergencyContactLastName")}
      ></TextField>
      <TextField
        label="Pgs email"
        isRequired={false}
        isReadOnly={false}
        value={PGSEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail: value,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSEmail ?? value;
          }
          if (errors.PGSEmail?.hasError) {
            runValidationTasks("PGSEmail", value);
          }
          setPGSEmail(value);
        }}
        onBlur={() => runValidationTasks("PGSEmail", PGSEmail)}
        errorMessage={errors.PGSEmail?.errorMessage}
        hasError={errors.PGSEmail?.hasError}
        {...getOverrideProps(overrides, "PGSEmail")}
      ></TextField>
      <TextField
        label="Pgs fax"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={PGSFax}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax: value,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSFax ?? value;
          }
          if (errors.PGSFax?.hasError) {
            runValidationTasks("PGSFax", value);
          }
          setPGSFax(value);
        }}
        onBlur={() => runValidationTasks("PGSFax", PGSFax)}
        errorMessage={errors.PGSFax?.errorMessage}
        hasError={errors.PGSFax?.hasError}
        {...getOverrideProps(overrides, "PGSFax")}
      ></TextField>
      <SelectField
        label="State"
        placeholder="Please select an option"
        isDisabled={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state: value,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      >
        <option
          children="Alabama"
          value="ALABAMA"
          {...getOverrideProps(overrides, "stateoption0")}
        ></option>
        <option
          children="Alaska"
          value="ALASKA"
          {...getOverrideProps(overrides, "stateoption1")}
        ></option>
        <option
          children="Arizona"
          value="ARIZONA"
          {...getOverrideProps(overrides, "stateoption2")}
        ></option>
        <option
          children="Arkansas"
          value="ARKANSAS"
          {...getOverrideProps(overrides, "stateoption3")}
        ></option>
        <option
          children="Americansamoa"
          value="AMERICANSAMOA"
          {...getOverrideProps(overrides, "stateoption4")}
        ></option>
        <option
          children="California"
          value="CALIFORNIA"
          {...getOverrideProps(overrides, "stateoption5")}
        ></option>
        <option
          children="Colorado"
          value="COLORADO"
          {...getOverrideProps(overrides, "stateoption6")}
        ></option>
        <option
          children="Connecticut"
          value="CONNECTICUT"
          {...getOverrideProps(overrides, "stateoption7")}
        ></option>
        <option
          children="Delaware"
          value="DELAWARE"
          {...getOverrideProps(overrides, "stateoption8")}
        ></option>
        <option
          children="Districtofcolumbia"
          value="DISTRICTOFCOLUMBIA"
          {...getOverrideProps(overrides, "stateoption9")}
        ></option>
        <option
          children="Florida"
          value="FLORIDA"
          {...getOverrideProps(overrides, "stateoption10")}
        ></option>
        <option
          children="Georgia"
          value="GEORGIA"
          {...getOverrideProps(overrides, "stateoption11")}
        ></option>
        <option
          children="Guam"
          value="GUAM"
          {...getOverrideProps(overrides, "stateoption12")}
        ></option>
        <option
          children="Hawaii"
          value="HAWAII"
          {...getOverrideProps(overrides, "stateoption13")}
        ></option>
        <option
          children="Idaho"
          value="IDAHO"
          {...getOverrideProps(overrides, "stateoption14")}
        ></option>
        <option
          children="Illinois"
          value="ILLINOIS"
          {...getOverrideProps(overrides, "stateoption15")}
        ></option>
        <option
          children="Indiana"
          value="INDIANA"
          {...getOverrideProps(overrides, "stateoption16")}
        ></option>
        <option
          children="Iowa"
          value="IOWA"
          {...getOverrideProps(overrides, "stateoption17")}
        ></option>
        <option
          children="Kansas"
          value="KANSAS"
          {...getOverrideProps(overrides, "stateoption18")}
        ></option>
        <option
          children="Kentucky"
          value="KENTUCKY"
          {...getOverrideProps(overrides, "stateoption19")}
        ></option>
        <option
          children="Louisiana"
          value="LOUISIANA"
          {...getOverrideProps(overrides, "stateoption20")}
        ></option>
        <option
          children="Maine"
          value="MAINE"
          {...getOverrideProps(overrides, "stateoption21")}
        ></option>
        <option
          children="Maryland"
          value="MARYLAND"
          {...getOverrideProps(overrides, "stateoption22")}
        ></option>
        <option
          children="Massachusetts"
          value="MASSACHUSETTS"
          {...getOverrideProps(overrides, "stateoption23")}
        ></option>
        <option
          children="Michigan"
          value="MICHIGAN"
          {...getOverrideProps(overrides, "stateoption24")}
        ></option>
        <option
          children="Minnesota"
          value="MINNESOTA"
          {...getOverrideProps(overrides, "stateoption25")}
        ></option>
        <option
          children="Mississippi"
          value="MISSISSIPPI"
          {...getOverrideProps(overrides, "stateoption26")}
        ></option>
        <option
          children="Missouri"
          value="MISSOURI"
          {...getOverrideProps(overrides, "stateoption27")}
        ></option>
        <option
          children="Montana"
          value="MONTANA"
          {...getOverrideProps(overrides, "stateoption28")}
        ></option>
        <option
          children="Nebraska"
          value="NEBRASKA"
          {...getOverrideProps(overrides, "stateoption29")}
        ></option>
        <option
          children="Nevada"
          value="NEVADA"
          {...getOverrideProps(overrides, "stateoption30")}
        ></option>
        <option
          children="Newhampshire"
          value="NEWHAMPSHIRE"
          {...getOverrideProps(overrides, "stateoption31")}
        ></option>
        <option
          children="Newjersey"
          value="NEWJERSEY"
          {...getOverrideProps(overrides, "stateoption32")}
        ></option>
        <option
          children="Newmexico"
          value="NEWMEXICO"
          {...getOverrideProps(overrides, "stateoption33")}
        ></option>
        <option
          children="Newyork"
          value="NEWYORK"
          {...getOverrideProps(overrides, "stateoption34")}
        ></option>
        <option
          children="Northcarolina"
          value="NORTHCAROLINA"
          {...getOverrideProps(overrides, "stateoption35")}
        ></option>
        <option
          children="Northdakota"
          value="NORTHDAKOTA"
          {...getOverrideProps(overrides, "stateoption36")}
        ></option>
        <option
          children="Northernmarianaislands"
          value="NORTHERNMARIANAISLANDS"
          {...getOverrideProps(overrides, "stateoption37")}
        ></option>
        <option
          children="Ohio"
          value="OHIO"
          {...getOverrideProps(overrides, "stateoption38")}
        ></option>
        <option
          children="Oklahoma"
          value="OKLAHOMA"
          {...getOverrideProps(overrides, "stateoption39")}
        ></option>
        <option
          children="Oregon"
          value="OREGON"
          {...getOverrideProps(overrides, "stateoption40")}
        ></option>
        <option
          children="Pennsylvania"
          value="PENNSYLVANIA"
          {...getOverrideProps(overrides, "stateoption41")}
        ></option>
        <option
          children="Puertorico"
          value="PUERTORICO"
          {...getOverrideProps(overrides, "stateoption42")}
        ></option>
        <option
          children="Rhodeisland"
          value="RHODEISLAND"
          {...getOverrideProps(overrides, "stateoption43")}
        ></option>
        <option
          children="Southcarolina"
          value="SOUTHCAROLINA"
          {...getOverrideProps(overrides, "stateoption44")}
        ></option>
        <option
          children="Southdakota"
          value="SOUTHDAKOTA"
          {...getOverrideProps(overrides, "stateoption45")}
        ></option>
        <option
          children="Tennessee"
          value="TENNESSEE"
          {...getOverrideProps(overrides, "stateoption46")}
        ></option>
        <option
          children="Texas"
          value="TEXAS"
          {...getOverrideProps(overrides, "stateoption47")}
        ></option>
        <option
          children="Trustterritories"
          value="TRUSTTERRITORIES"
          {...getOverrideProps(overrides, "stateoption48")}
        ></option>
        <option
          children="Utah"
          value="UTAH"
          {...getOverrideProps(overrides, "stateoption49")}
        ></option>
        <option
          children="Vermont"
          value="VERMONT"
          {...getOverrideProps(overrides, "stateoption50")}
        ></option>
        <option
          children="Virginia"
          value="VIRGINIA"
          {...getOverrideProps(overrides, "stateoption51")}
        ></option>
        <option
          children="Virginislands"
          value="VIRGINISLANDS"
          {...getOverrideProps(overrides, "stateoption52")}
        ></option>
        <option
          children="Washington"
          value="WASHINGTON"
          {...getOverrideProps(overrides, "stateoption53")}
        ></option>
        <option
          children="Westvirginia"
          value="WESTVIRGINIA"
          {...getOverrideProps(overrides, "stateoption54")}
        ></option>
        <option
          children="Wisconsin"
          value="WISCONSIN"
          {...getOverrideProps(overrides, "stateoption55")}
        ></option>
        <option
          children="Wyoming"
          value="WYOMING"
          {...getOverrideProps(overrides, "stateoption56")}
        ></option>
      </SelectField>
      <TextField
        label="Pgs sponsor"
        isRequired={false}
        isReadOnly={false}
        value={PGSSponsor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor: value,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSSponsor ?? value;
          }
          if (errors.PGSSponsor?.hasError) {
            runValidationTasks("PGSSponsor", value);
          }
          setPGSSponsor(value);
        }}
        onBlur={() => runValidationTasks("PGSSponsor", PGSSponsor)}
        errorMessage={errors.PGSSponsor?.errorMessage}
        hasError={errors.PGSSponsor?.hasError}
        {...getOverrideProps(overrides, "PGSSponsor")}
      ></TextField>
      <TextField
        label="Pgs legal custody"
        isRequired={false}
        isReadOnly={false}
        value={PGSLegalCustody}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody: value,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSLegalCustody ?? value;
          }
          if (errors.PGSLegalCustody?.hasError) {
            runValidationTasks("PGSLegalCustody", value);
          }
          setPGSLegalCustody(value);
        }}
        onBlur={() => runValidationTasks("PGSLegalCustody", PGSLegalCustody)}
        errorMessage={errors.PGSLegalCustody?.errorMessage}
        hasError={errors.PGSLegalCustody?.hasError}
        {...getOverrideProps(overrides, "PGSLegalCustody")}
      ></TextField>
      <TextField
        label="Pgs physical custody"
        isRequired={false}
        isReadOnly={false}
        value={PGSPhysicalCustody}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody: value,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSPhysicalCustody ?? value;
          }
          if (errors.PGSPhysicalCustody?.hasError) {
            runValidationTasks("PGSPhysicalCustody", value);
          }
          setPGSPhysicalCustody(value);
        }}
        onBlur={() =>
          runValidationTasks("PGSPhysicalCustody", PGSPhysicalCustody)
        }
        errorMessage={errors.PGSPhysicalCustody?.errorMessage}
        hasError={errors.PGSPhysicalCustody?.hasError}
        {...getOverrideProps(overrides, "PGSPhysicalCustody")}
      ></TextField>
      <TextField
        label="Pgs emergency contact"
        isRequired={false}
        isReadOnly={false}
        value={PGSEmergencyContact}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact: value,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSEmergencyContact ?? value;
          }
          if (errors.PGSEmergencyContact?.hasError) {
            runValidationTasks("PGSEmergencyContact", value);
          }
          setPGSEmergencyContact(value);
        }}
        onBlur={() =>
          runValidationTasks("PGSEmergencyContact", PGSEmergencyContact)
        }
        errorMessage={errors.PGSEmergencyContact?.errorMessage}
        hasError={errors.PGSEmergencyContact?.hasError}
        {...getOverrideProps(overrides, "PGSEmergencyContact")}
      ></TextField>
      <TextField
        label="Pgs parent guardian"
        isRequired={false}
        isReadOnly={false}
        value={PGSParentGuardian}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian: value,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSParentGuardian ?? value;
          }
          if (errors.PGSParentGuardian?.hasError) {
            runValidationTasks("PGSParentGuardian", value);
          }
          setPGSParentGuardian(value);
        }}
        onBlur={() =>
          runValidationTasks("PGSParentGuardian", PGSParentGuardian)
        }
        errorMessage={errors.PGSParentGuardian?.errorMessage}
        hasError={errors.PGSParentGuardian?.hasError}
        {...getOverrideProps(overrides, "PGSParentGuardian")}
      ></TextField>
      <TextField
        label="Pgs relationship"
        isRequired={false}
        isReadOnly={false}
        value={PGSRelationship}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship: value,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSRelationship ?? value;
          }
          if (errors.PGSRelationship?.hasError) {
            runValidationTasks("PGSRelationship", value);
          }
          setPGSRelationship(value);
        }}
        onBlur={() => runValidationTasks("PGSRelationship", PGSRelationship)}
        errorMessage={errors.PGSRelationship?.errorMessage}
        hasError={errors.PGSRelationship?.hasError}
        {...getOverrideProps(overrides, "PGSRelationship")}
      ></TextField>
      <TextField
        label="Pgs mobile phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={PGSMobilePhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone: value,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSMobilePhone ?? value;
          }
          if (errors.PGSMobilePhone?.hasError) {
            runValidationTasks("PGSMobilePhone", value);
          }
          setPGSMobilePhone(value);
        }}
        onBlur={() => runValidationTasks("PGSMobilePhone", PGSMobilePhone)}
        errorMessage={errors.PGSMobilePhone?.errorMessage}
        hasError={errors.PGSMobilePhone?.hasError}
        {...getOverrideProps(overrides, "PGSMobilePhone")}
      ></TextField>
      <TextField
        label="Pgs work phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={PGSWorkPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone: value,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSWorkPhone ?? value;
          }
          if (errors.PGSWorkPhone?.hasError) {
            runValidationTasks("PGSWorkPhone", value);
          }
          setPGSWorkPhone(value);
        }}
        onBlur={() => runValidationTasks("PGSWorkPhone", PGSWorkPhone)}
        errorMessage={errors.PGSWorkPhone?.errorMessage}
        hasError={errors.PGSWorkPhone?.hasError}
        {...getOverrideProps(overrides, "PGSWorkPhone")}
      ></TextField>
      <TextField
        label="Pgs work email"
        isRequired={false}
        isReadOnly={false}
        value={PGSWorkEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail: value,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSWorkEmail ?? value;
          }
          if (errors.PGSWorkEmail?.hasError) {
            runValidationTasks("PGSWorkEmail", value);
          }
          setPGSWorkEmail(value);
        }}
        onBlur={() => runValidationTasks("PGSWorkEmail", PGSWorkEmail)}
        errorMessage={errors.PGSWorkEmail?.errorMessage}
        hasError={errors.PGSWorkEmail?.hasError}
        {...getOverrideProps(overrides, "PGSWorkEmail")}
      ></TextField>
      <TextField
        label="Pgs work fax"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={PGSWorkFax}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax: value,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSWorkFax ?? value;
          }
          if (errors.PGSWorkFax?.hasError) {
            runValidationTasks("PGSWorkFax", value);
          }
          setPGSWorkFax(value);
        }}
        onBlur={() => runValidationTasks("PGSWorkFax", PGSWorkFax)}
        errorMessage={errors.PGSWorkFax?.errorMessage}
        hasError={errors.PGSWorkFax?.hasError}
        {...getOverrideProps(overrides, "PGSWorkFax")}
      ></TextField>
      <TextField
        label="How d id you hear about ccfil"
        isRequired={false}
        isReadOnly={false}
        value={howDIdYouHearAboutCCFIL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL: value,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.howDIdYouHearAboutCCFIL ?? value;
          }
          if (errors.howDIdYouHearAboutCCFIL?.hasError) {
            runValidationTasks("howDIdYouHearAboutCCFIL", value);
          }
          setHowDIdYouHearAboutCCFIL(value);
        }}
        onBlur={() =>
          runValidationTasks("howDIdYouHearAboutCCFIL", howDIdYouHearAboutCCFIL)
        }
        errorMessage={errors.howDIdYouHearAboutCCFIL?.errorMessage}
        hasError={errors.howDIdYouHearAboutCCFIL?.hasError}
        {...getOverrideProps(overrides, "howDIdYouHearAboutCCFIL")}
      ></TextField>
      <TextField
        label="Referral source"
        isRequired={false}
        isReadOnly={false}
        value={referralSource}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource: value,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.referralSource ?? value;
          }
          if (errors.referralSource?.hasError) {
            runValidationTasks("referralSource", value);
          }
          setReferralSource(value);
        }}
        onBlur={() => runValidationTasks("referralSource", referralSource)}
        errorMessage={errors.referralSource?.errorMessage}
        hasError={errors.referralSource?.hasError}
        {...getOverrideProps(overrides, "referralSource")}
      ></TextField>
      <TextField
        label="What events lead to seek treatment"
        isRequired={false}
        isReadOnly={false}
        value={whatEventsLeadToSeekTreatment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment: value,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.whatEventsLeadToSeekTreatment ?? value;
          }
          if (errors.whatEventsLeadToSeekTreatment?.hasError) {
            runValidationTasks("whatEventsLeadToSeekTreatment", value);
          }
          setWhatEventsLeadToSeekTreatment(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "whatEventsLeadToSeekTreatment",
            whatEventsLeadToSeekTreatment
          )
        }
        errorMessage={errors.whatEventsLeadToSeekTreatment?.errorMessage}
        hasError={errors.whatEventsLeadToSeekTreatment?.hasError}
        {...getOverrideProps(overrides, "whatEventsLeadToSeekTreatment")}
      ></TextField>
      <TextField
        label="Pgs employer"
        isRequired={false}
        isReadOnly={false}
        value={PGSEmployer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer: value,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSEmployer ?? value;
          }
          if (errors.PGSEmployer?.hasError) {
            runValidationTasks("PGSEmployer", value);
          }
          setPGSEmployer(value);
        }}
        onBlur={() => runValidationTasks("PGSEmployer", PGSEmployer)}
        errorMessage={errors.PGSEmployer?.errorMessage}
        hasError={errors.PGSEmployer?.hasError}
        {...getOverrideProps(overrides, "PGSEmployer")}
      ></TextField>
      <TextField
        label="Applicants strengths"
        isRequired={false}
        isReadOnly={false}
        value={applicantsStrengths}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths: value,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.applicantsStrengths ?? value;
          }
          if (errors.applicantsStrengths?.hasError) {
            runValidationTasks("applicantsStrengths", value);
          }
          setApplicantsStrengths(value);
        }}
        onBlur={() =>
          runValidationTasks("applicantsStrengths", applicantsStrengths)
        }
        errorMessage={errors.applicantsStrengths?.errorMessage}
        hasError={errors.applicantsStrengths?.hasError}
        {...getOverrideProps(overrides, "applicantsStrengths")}
      ></TextField>
      <TextField
        label="Applicants weaknesses"
        isRequired={false}
        isReadOnly={false}
        value={applicantsWeaknesses}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses: value,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.applicantsWeaknesses ?? value;
          }
          if (errors.applicantsWeaknesses?.hasError) {
            runValidationTasks("applicantsWeaknesses", value);
          }
          setApplicantsWeaknesses(value);
        }}
        onBlur={() =>
          runValidationTasks("applicantsWeaknesses", applicantsWeaknesses)
        }
        errorMessage={errors.applicantsWeaknesses?.errorMessage}
        hasError={errors.applicantsWeaknesses?.hasError}
        {...getOverrideProps(overrides, "applicantsWeaknesses")}
      ></TextField>
      <TextField
        label="Current placement location"
        isRequired={false}
        isReadOnly={false}
        value={currentPlacementLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation: value,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.currentPlacementLocation ?? value;
          }
          if (errors.currentPlacementLocation?.hasError) {
            runValidationTasks("currentPlacementLocation", value);
          }
          setCurrentPlacementLocation(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "currentPlacementLocation",
            currentPlacementLocation
          )
        }
        errorMessage={errors.currentPlacementLocation?.errorMessage}
        hasError={errors.currentPlacementLocation?.hasError}
        {...getOverrideProps(overrides, "currentPlacementLocation")}
      ></TextField>
      <TextField
        label="Current placement dates"
        isRequired={false}
        isReadOnly={false}
        value={currentPlacementDates}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates: value,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.currentPlacementDates ?? value;
          }
          if (errors.currentPlacementDates?.hasError) {
            runValidationTasks("currentPlacementDates", value);
          }
          setCurrentPlacementDates(value);
        }}
        onBlur={() =>
          runValidationTasks("currentPlacementDates", currentPlacementDates)
        }
        errorMessage={errors.currentPlacementDates?.errorMessage}
        hasError={errors.currentPlacementDates?.hasError}
        {...getOverrideProps(overrides, "currentPlacementDates")}
      ></TextField>
      <TextField
        label="Current placement provider"
        isRequired={false}
        isReadOnly={false}
        value={currentPlacementProvider}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider: value,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.currentPlacementProvider ?? value;
          }
          if (errors.currentPlacementProvider?.hasError) {
            runValidationTasks("currentPlacementProvider", value);
          }
          setCurrentPlacementProvider(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "currentPlacementProvider",
            currentPlacementProvider
          )
        }
        errorMessage={errors.currentPlacementProvider?.errorMessage}
        hasError={errors.currentPlacementProvider?.hasError}
        {...getOverrideProps(overrides, "currentPlacementProvider")}
      ></TextField>
      <TextField
        label="Pgs job title"
        isRequired={false}
        isReadOnly={false}
        value={PGSJobTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle: value,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSJobTitle ?? value;
          }
          if (errors.PGSJobTitle?.hasError) {
            runValidationTasks("PGSJobTitle", value);
          }
          setPGSJobTitle(value);
        }}
        onBlur={() => runValidationTasks("PGSJobTitle", PGSJobTitle)}
        errorMessage={errors.PGSJobTitle?.errorMessage}
        hasError={errors.PGSJobTitle?.hasError}
        {...getOverrideProps(overrides, "PGSJobTitle")}
      ></TextField>
      <TextField
        label="Psych anger"
        isRequired={false}
        isReadOnly={false}
        value={psychAnger}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger: value,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.psychAnger ?? value;
          }
          if (errors.psychAnger?.hasError) {
            runValidationTasks("psychAnger", value);
          }
          setPsychAnger(value);
        }}
        onBlur={() => runValidationTasks("psychAnger", psychAnger)}
        errorMessage={errors.psychAnger?.errorMessage}
        hasError={errors.psychAnger?.hasError}
        {...getOverrideProps(overrides, "psychAnger")}
      ></TextField>
      <TextField
        label="Psych suicidality"
        isRequired={false}
        isReadOnly={false}
        value={psychSuicidality}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality: value,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.psychSuicidality ?? value;
          }
          if (errors.psychSuicidality?.hasError) {
            runValidationTasks("psychSuicidality", value);
          }
          setPsychSuicidality(value);
        }}
        onBlur={() => runValidationTasks("psychSuicidality", psychSuicidality)}
        errorMessage={errors.psychSuicidality?.errorMessage}
        hasError={errors.psychSuicidality?.hasError}
        {...getOverrideProps(overrides, "psychSuicidality")}
      ></TextField>
      <TextField
        label="Psych sexual activity"
        isRequired={false}
        isReadOnly={false}
        value={psychSexualActivity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity: value,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.psychSexualActivity ?? value;
          }
          if (errors.psychSexualActivity?.hasError) {
            runValidationTasks("psychSexualActivity", value);
          }
          setPsychSexualActivity(value);
        }}
        onBlur={() =>
          runValidationTasks("psychSexualActivity", psychSexualActivity)
        }
        errorMessage={errors.psychSexualActivity?.errorMessage}
        hasError={errors.psychSexualActivity?.hasError}
        {...getOverrideProps(overrides, "psychSexualActivity")}
      ></TextField>
      <TextField
        label="What goals receiving treatment"
        isRequired={false}
        isReadOnly={false}
        value={whatGoalsReceivingTreatment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment: value,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.whatGoalsReceivingTreatment ?? value;
          }
          if (errors.whatGoalsReceivingTreatment?.hasError) {
            runValidationTasks("whatGoalsReceivingTreatment", value);
          }
          setWhatGoalsReceivingTreatment(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "whatGoalsReceivingTreatment",
            whatGoalsReceivingTreatment
          )
        }
        errorMessage={errors.whatGoalsReceivingTreatment?.errorMessage}
        hasError={errors.whatGoalsReceivingTreatment?.hasError}
        {...getOverrideProps(overrides, "whatGoalsReceivingTreatment")}
      ></TextField>
      <TextField
        label="Psych legal problems"
        isRequired={false}
        isReadOnly={false}
        value={psychLegalProblems}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems: value,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.psychLegalProblems ?? value;
          }
          if (errors.psychLegalProblems?.hasError) {
            runValidationTasks("psychLegalProblems", value);
          }
          setPsychLegalProblems(value);
        }}
        onBlur={() =>
          runValidationTasks("psychLegalProblems", psychLegalProblems)
        }
        errorMessage={errors.psychLegalProblems?.errorMessage}
        hasError={errors.psychLegalProblems?.hasError}
        {...getOverrideProps(overrides, "psychLegalProblems")}
      ></TextField>
      <TextField
        label="Medical surgeries illnesses hospitalizations"
        isRequired={false}
        isReadOnly={false}
        value={medicalSurgeriesIllnessesHospitalizations}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations: value,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.medicalSurgeriesIllnessesHospitalizations ?? value;
          }
          if (errors.medicalSurgeriesIllnessesHospitalizations?.hasError) {
            runValidationTasks(
              "medicalSurgeriesIllnessesHospitalizations",
              value
            );
          }
          setMedicalSurgeriesIllnessesHospitalizations(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "medicalSurgeriesIllnessesHospitalizations",
            medicalSurgeriesIllnessesHospitalizations
          )
        }
        errorMessage={
          errors.medicalSurgeriesIllnessesHospitalizations?.errorMessage
        }
        hasError={errors.medicalSurgeriesIllnessesHospitalizations?.hasError}
        {...getOverrideProps(
          overrides,
          "medicalSurgeriesIllnessesHospitalizations"
        )}
      ></TextField>
      <TextField
        label="Medical prescriptions"
        isRequired={false}
        isReadOnly={false}
        value={medicalPrescriptions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions: value,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.medicalPrescriptions ?? value;
          }
          if (errors.medicalPrescriptions?.hasError) {
            runValidationTasks("medicalPrescriptions", value);
          }
          setMedicalPrescriptions(value);
        }}
        onBlur={() =>
          runValidationTasks("medicalPrescriptions", medicalPrescriptions)
        }
        errorMessage={errors.medicalPrescriptions?.errorMessage}
        hasError={errors.medicalPrescriptions?.hasError}
        {...getOverrideProps(overrides, "medicalPrescriptions")}
      ></TextField>
      <TextField
        label="Medical vitamins supplements"
        isRequired={false}
        isReadOnly={false}
        value={medicalVitaminsSupplements}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements: value,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.medicalVitaminsSupplements ?? value;
          }
          if (errors.medicalVitaminsSupplements?.hasError) {
            runValidationTasks("medicalVitaminsSupplements", value);
          }
          setMedicalVitaminsSupplements(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "medicalVitaminsSupplements",
            medicalVitaminsSupplements
          )
        }
        errorMessage={errors.medicalVitaminsSupplements?.errorMessage}
        hasError={errors.medicalVitaminsSupplements?.hasError}
        {...getOverrideProps(overrides, "medicalVitaminsSupplements")}
      ></TextField>
      <TextField
        label="Allergies asthma"
        isRequired={false}
        isReadOnly={false}
        value={allergiesAsthma}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma: value,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.allergiesAsthma ?? value;
          }
          if (errors.allergiesAsthma?.hasError) {
            runValidationTasks("allergiesAsthma", value);
          }
          setAllergiesAsthma(value);
        }}
        onBlur={() => runValidationTasks("allergiesAsthma", allergiesAsthma)}
        errorMessage={errors.allergiesAsthma?.errorMessage}
        hasError={errors.allergiesAsthma?.hasError}
        {...getOverrideProps(overrides, "allergiesAsthma")}
      ></TextField>
      <TextField
        label="Inhaler epi pen"
        isRequired={false}
        isReadOnly={false}
        value={inhalerEpiPen}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen: value,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.inhalerEpiPen ?? value;
          }
          if (errors.inhalerEpiPen?.hasError) {
            runValidationTasks("inhalerEpiPen", value);
          }
          setInhalerEpiPen(value);
        }}
        onBlur={() => runValidationTasks("inhalerEpiPen", inhalerEpiPen)}
        errorMessage={errors.inhalerEpiPen?.errorMessage}
        hasError={errors.inhalerEpiPen?.hasError}
        {...getOverrideProps(overrides, "inhalerEpiPen")}
      ></TextField>
      <TextField
        label="Inhaler type"
        isRequired={false}
        isReadOnly={false}
        value={inhalerType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType: value,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.inhalerType ?? value;
          }
          if (errors.inhalerType?.hasError) {
            runValidationTasks("inhalerType", value);
          }
          setInhalerType(value);
        }}
        onBlur={() => runValidationTasks("inhalerType", inhalerType)}
        errorMessage={errors.inhalerType?.errorMessage}
        hasError={errors.inhalerType?.hasError}
        {...getOverrideProps(overrides, "inhalerType")}
      ></TextField>
      <TextField
        label="Auto insurance"
        isRequired={false}
        isReadOnly={false}
        value={autoInsurance}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance: value,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.autoInsurance ?? value;
          }
          if (errors.autoInsurance?.hasError) {
            runValidationTasks("autoInsurance", value);
          }
          setAutoInsurance(value);
        }}
        onBlur={() => runValidationTasks("autoInsurance", autoInsurance)}
        errorMessage={errors.autoInsurance?.errorMessage}
        hasError={errors.autoInsurance?.hasError}
        {...getOverrideProps(overrides, "autoInsurance")}
      ></TextField>
      <TextField
        label="Current placement reason"
        isRequired={false}
        isReadOnly={false}
        value={currentPlacementReason}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason: value,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.currentPlacementReason ?? value;
          }
          if (errors.currentPlacementReason?.hasError) {
            runValidationTasks("currentPlacementReason", value);
          }
          setCurrentPlacementReason(value);
        }}
        onBlur={() =>
          runValidationTasks("currentPlacementReason", currentPlacementReason)
        }
        errorMessage={errors.currentPlacementReason?.errorMessage}
        hasError={errors.currentPlacementReason?.hasError}
        {...getOverrideProps(overrides, "currentPlacementReason")}
      ></TextField>
      <TextField
        label="Auto insurance claim number"
        isRequired={false}
        isReadOnly={false}
        value={autoInsuranceClaimNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber: value,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.autoInsuranceClaimNumber ?? value;
          }
          if (errors.autoInsuranceClaimNumber?.hasError) {
            runValidationTasks("autoInsuranceClaimNumber", value);
          }
          setAutoInsuranceClaimNumber(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "autoInsuranceClaimNumber",
            autoInsuranceClaimNumber
          )
        }
        errorMessage={errors.autoInsuranceClaimNumber?.errorMessage}
        hasError={errors.autoInsuranceClaimNumber?.hasError}
        {...getOverrideProps(overrides, "autoInsuranceClaimNumber")}
      ></TextField>
      <TextField
        label="Psych substance issues"
        isRequired={false}
        isReadOnly={false}
        value={psychSubstanceIssues}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues: value,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.psychSubstanceIssues ?? value;
          }
          if (errors.psychSubstanceIssues?.hasError) {
            runValidationTasks("psychSubstanceIssues", value);
          }
          setPsychSubstanceIssues(value);
        }}
        onBlur={() =>
          runValidationTasks("psychSubstanceIssues", psychSubstanceIssues)
        }
        errorMessage={errors.psychSubstanceIssues?.errorMessage}
        hasError={errors.psychSubstanceIssues?.hasError}
        {...getOverrideProps(overrides, "psychSubstanceIssues")}
      ></TextField>
      <TextField
        label="Auto insurance claim adjuster"
        isRequired={false}
        isReadOnly={false}
        value={autoInsuranceClaimAdjuster}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster: value,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.autoInsuranceClaimAdjuster ?? value;
          }
          if (errors.autoInsuranceClaimAdjuster?.hasError) {
            runValidationTasks("autoInsuranceClaimAdjuster", value);
          }
          setAutoInsuranceClaimAdjuster(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "autoInsuranceClaimAdjuster",
            autoInsuranceClaimAdjuster
          )
        }
        errorMessage={errors.autoInsuranceClaimAdjuster?.errorMessage}
        hasError={errors.autoInsuranceClaimAdjuster?.hasError}
        {...getOverrideProps(overrides, "autoInsuranceClaimAdjuster")}
      ></TextField>
      <TextField
        label="Auto insurance address"
        isRequired={false}
        isReadOnly={false}
        value={autoInsuranceAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress: value,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.autoInsuranceAddress ?? value;
          }
          if (errors.autoInsuranceAddress?.hasError) {
            runValidationTasks("autoInsuranceAddress", value);
          }
          setAutoInsuranceAddress(value);
        }}
        onBlur={() =>
          runValidationTasks("autoInsuranceAddress", autoInsuranceAddress)
        }
        errorMessage={errors.autoInsuranceAddress?.errorMessage}
        hasError={errors.autoInsuranceAddress?.hasError}
        {...getOverrideProps(overrides, "autoInsuranceAddress")}
      ></TextField>
      <TextField
        label="Auto insurance city"
        isRequired={false}
        isReadOnly={false}
        value={autoInsuranceCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity: value,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.autoInsuranceCity ?? value;
          }
          if (errors.autoInsuranceCity?.hasError) {
            runValidationTasks("autoInsuranceCity", value);
          }
          setAutoInsuranceCity(value);
        }}
        onBlur={() =>
          runValidationTasks("autoInsuranceCity", autoInsuranceCity)
        }
        errorMessage={errors.autoInsuranceCity?.errorMessage}
        hasError={errors.autoInsuranceCity?.hasError}
        {...getOverrideProps(overrides, "autoInsuranceCity")}
      ></TextField>
      <SelectField
        label="Auto insurance state"
        placeholder="Please select an option"
        isDisabled={false}
        value={autoInsuranceState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState: value,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.autoInsuranceState ?? value;
          }
          if (errors.autoInsuranceState?.hasError) {
            runValidationTasks("autoInsuranceState", value);
          }
          setAutoInsuranceState(value);
        }}
        onBlur={() =>
          runValidationTasks("autoInsuranceState", autoInsuranceState)
        }
        errorMessage={errors.autoInsuranceState?.errorMessage}
        hasError={errors.autoInsuranceState?.hasError}
        {...getOverrideProps(overrides, "autoInsuranceState")}
      >
        <option
          children="Alabama"
          value="ALABAMA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption0")}
        ></option>
        <option
          children="Alaska"
          value="ALASKA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption1")}
        ></option>
        <option
          children="Arizona"
          value="ARIZONA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption2")}
        ></option>
        <option
          children="Arkansas"
          value="ARKANSAS"
          {...getOverrideProps(overrides, "autoInsuranceStateoption3")}
        ></option>
        <option
          children="Americansamoa"
          value="AMERICANSAMOA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption4")}
        ></option>
        <option
          children="California"
          value="CALIFORNIA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption5")}
        ></option>
        <option
          children="Colorado"
          value="COLORADO"
          {...getOverrideProps(overrides, "autoInsuranceStateoption6")}
        ></option>
        <option
          children="Connecticut"
          value="CONNECTICUT"
          {...getOverrideProps(overrides, "autoInsuranceStateoption7")}
        ></option>
        <option
          children="Delaware"
          value="DELAWARE"
          {...getOverrideProps(overrides, "autoInsuranceStateoption8")}
        ></option>
        <option
          children="Districtofcolumbia"
          value="DISTRICTOFCOLUMBIA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption9")}
        ></option>
        <option
          children="Florida"
          value="FLORIDA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption10")}
        ></option>
        <option
          children="Georgia"
          value="GEORGIA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption11")}
        ></option>
        <option
          children="Guam"
          value="GUAM"
          {...getOverrideProps(overrides, "autoInsuranceStateoption12")}
        ></option>
        <option
          children="Hawaii"
          value="HAWAII"
          {...getOverrideProps(overrides, "autoInsuranceStateoption13")}
        ></option>
        <option
          children="Idaho"
          value="IDAHO"
          {...getOverrideProps(overrides, "autoInsuranceStateoption14")}
        ></option>
        <option
          children="Illinois"
          value="ILLINOIS"
          {...getOverrideProps(overrides, "autoInsuranceStateoption15")}
        ></option>
        <option
          children="Indiana"
          value="INDIANA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption16")}
        ></option>
        <option
          children="Iowa"
          value="IOWA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption17")}
        ></option>
        <option
          children="Kansas"
          value="KANSAS"
          {...getOverrideProps(overrides, "autoInsuranceStateoption18")}
        ></option>
        <option
          children="Kentucky"
          value="KENTUCKY"
          {...getOverrideProps(overrides, "autoInsuranceStateoption19")}
        ></option>
        <option
          children="Louisiana"
          value="LOUISIANA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption20")}
        ></option>
        <option
          children="Maine"
          value="MAINE"
          {...getOverrideProps(overrides, "autoInsuranceStateoption21")}
        ></option>
        <option
          children="Maryland"
          value="MARYLAND"
          {...getOverrideProps(overrides, "autoInsuranceStateoption22")}
        ></option>
        <option
          children="Massachusetts"
          value="MASSACHUSETTS"
          {...getOverrideProps(overrides, "autoInsuranceStateoption23")}
        ></option>
        <option
          children="Michigan"
          value="MICHIGAN"
          {...getOverrideProps(overrides, "autoInsuranceStateoption24")}
        ></option>
        <option
          children="Minnesota"
          value="MINNESOTA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption25")}
        ></option>
        <option
          children="Mississippi"
          value="MISSISSIPPI"
          {...getOverrideProps(overrides, "autoInsuranceStateoption26")}
        ></option>
        <option
          children="Missouri"
          value="MISSOURI"
          {...getOverrideProps(overrides, "autoInsuranceStateoption27")}
        ></option>
        <option
          children="Montana"
          value="MONTANA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption28")}
        ></option>
        <option
          children="Nebraska"
          value="NEBRASKA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption29")}
        ></option>
        <option
          children="Nevada"
          value="NEVADA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption30")}
        ></option>
        <option
          children="Newhampshire"
          value="NEWHAMPSHIRE"
          {...getOverrideProps(overrides, "autoInsuranceStateoption31")}
        ></option>
        <option
          children="Newjersey"
          value="NEWJERSEY"
          {...getOverrideProps(overrides, "autoInsuranceStateoption32")}
        ></option>
        <option
          children="Newmexico"
          value="NEWMEXICO"
          {...getOverrideProps(overrides, "autoInsuranceStateoption33")}
        ></option>
        <option
          children="Newyork"
          value="NEWYORK"
          {...getOverrideProps(overrides, "autoInsuranceStateoption34")}
        ></option>
        <option
          children="Northcarolina"
          value="NORTHCAROLINA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption35")}
        ></option>
        <option
          children="Northdakota"
          value="NORTHDAKOTA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption36")}
        ></option>
        <option
          children="Northernmarianaislands"
          value="NORTHERNMARIANAISLANDS"
          {...getOverrideProps(overrides, "autoInsuranceStateoption37")}
        ></option>
        <option
          children="Ohio"
          value="OHIO"
          {...getOverrideProps(overrides, "autoInsuranceStateoption38")}
        ></option>
        <option
          children="Oklahoma"
          value="OKLAHOMA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption39")}
        ></option>
        <option
          children="Oregon"
          value="OREGON"
          {...getOverrideProps(overrides, "autoInsuranceStateoption40")}
        ></option>
        <option
          children="Pennsylvania"
          value="PENNSYLVANIA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption41")}
        ></option>
        <option
          children="Puertorico"
          value="PUERTORICO"
          {...getOverrideProps(overrides, "autoInsuranceStateoption42")}
        ></option>
        <option
          children="Rhodeisland"
          value="RHODEISLAND"
          {...getOverrideProps(overrides, "autoInsuranceStateoption43")}
        ></option>
        <option
          children="Southcarolina"
          value="SOUTHCAROLINA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption44")}
        ></option>
        <option
          children="Southdakota"
          value="SOUTHDAKOTA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption45")}
        ></option>
        <option
          children="Tennessee"
          value="TENNESSEE"
          {...getOverrideProps(overrides, "autoInsuranceStateoption46")}
        ></option>
        <option
          children="Texas"
          value="TEXAS"
          {...getOverrideProps(overrides, "autoInsuranceStateoption47")}
        ></option>
        <option
          children="Trustterritories"
          value="TRUSTTERRITORIES"
          {...getOverrideProps(overrides, "autoInsuranceStateoption48")}
        ></option>
        <option
          children="Utah"
          value="UTAH"
          {...getOverrideProps(overrides, "autoInsuranceStateoption49")}
        ></option>
        <option
          children="Vermont"
          value="VERMONT"
          {...getOverrideProps(overrides, "autoInsuranceStateoption50")}
        ></option>
        <option
          children="Virginia"
          value="VIRGINIA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption51")}
        ></option>
        <option
          children="Virginislands"
          value="VIRGINISLANDS"
          {...getOverrideProps(overrides, "autoInsuranceStateoption52")}
        ></option>
        <option
          children="Washington"
          value="WASHINGTON"
          {...getOverrideProps(overrides, "autoInsuranceStateoption53")}
        ></option>
        <option
          children="Westvirginia"
          value="WESTVIRGINIA"
          {...getOverrideProps(overrides, "autoInsuranceStateoption54")}
        ></option>
        <option
          children="Wisconsin"
          value="WISCONSIN"
          {...getOverrideProps(overrides, "autoInsuranceStateoption55")}
        ></option>
        <option
          children="Wyoming"
          value="WYOMING"
          {...getOverrideProps(overrides, "autoInsuranceStateoption56")}
        ></option>
      </SelectField>
      <TextField
        label="Auto insurance zip"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={autoInsuranceZip}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip: value,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.autoInsuranceZip ?? value;
          }
          if (errors.autoInsuranceZip?.hasError) {
            runValidationTasks("autoInsuranceZip", value);
          }
          setAutoInsuranceZip(value);
        }}
        onBlur={() => runValidationTasks("autoInsuranceZip", autoInsuranceZip)}
        errorMessage={errors.autoInsuranceZip?.errorMessage}
        hasError={errors.autoInsuranceZip?.hasError}
        {...getOverrideProps(overrides, "autoInsuranceZip")}
      ></TextField>
      <TextField
        label="Auto insurance phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={autoInsurancePhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone: value,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.autoInsurancePhone ?? value;
          }
          if (errors.autoInsurancePhone?.hasError) {
            runValidationTasks("autoInsurancePhone", value);
          }
          setAutoInsurancePhone(value);
        }}
        onBlur={() =>
          runValidationTasks("autoInsurancePhone", autoInsurancePhone)
        }
        errorMessage={errors.autoInsurancePhone?.errorMessage}
        hasError={errors.autoInsurancePhone?.hasError}
        {...getOverrideProps(overrides, "autoInsurancePhone")}
      ></TextField>
      <TextField
        label="Workers comp insurance"
        isRequired={false}
        isReadOnly={false}
        value={workersCompInsurance}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance: value,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.workersCompInsurance ?? value;
          }
          if (errors.workersCompInsurance?.hasError) {
            runValidationTasks("workersCompInsurance", value);
          }
          setWorkersCompInsurance(value);
        }}
        onBlur={() =>
          runValidationTasks("workersCompInsurance", workersCompInsurance)
        }
        errorMessage={errors.workersCompInsurance?.errorMessage}
        hasError={errors.workersCompInsurance?.hasError}
        {...getOverrideProps(overrides, "workersCompInsurance")}
      ></TextField>
      <TextField
        label="Workers comp insurance carrier"
        isRequired={false}
        isReadOnly={false}
        value={workersCompInsuranceCarrier}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier: value,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.workersCompInsuranceCarrier ?? value;
          }
          if (errors.workersCompInsuranceCarrier?.hasError) {
            runValidationTasks("workersCompInsuranceCarrier", value);
          }
          setWorkersCompInsuranceCarrier(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "workersCompInsuranceCarrier",
            workersCompInsuranceCarrier
          )
        }
        errorMessage={errors.workersCompInsuranceCarrier?.errorMessage}
        hasError={errors.workersCompInsuranceCarrier?.hasError}
        {...getOverrideProps(overrides, "workersCompInsuranceCarrier")}
      ></TextField>
      <TextField
        label="Auto insurance dol"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={autoInsuranceDOL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL: value,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.autoInsuranceDOL ?? value;
          }
          if (errors.autoInsuranceDOL?.hasError) {
            runValidationTasks("autoInsuranceDOL", value);
          }
          setAutoInsuranceDOL(value);
        }}
        onBlur={() => runValidationTasks("autoInsuranceDOL", autoInsuranceDOL)}
        errorMessage={errors.autoInsuranceDOL?.errorMessage}
        hasError={errors.autoInsuranceDOL?.hasError}
        {...getOverrideProps(overrides, "autoInsuranceDOL")}
      ></TextField>
      <TextField
        label="Workers comp claim adjuster"
        isRequired={false}
        isReadOnly={false}
        value={workersCompClaimAdjuster}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster: value,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.workersCompClaimAdjuster ?? value;
          }
          if (errors.workersCompClaimAdjuster?.hasError) {
            runValidationTasks("workersCompClaimAdjuster", value);
          }
          setWorkersCompClaimAdjuster(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "workersCompClaimAdjuster",
            workersCompClaimAdjuster
          )
        }
        errorMessage={errors.workersCompClaimAdjuster?.errorMessage}
        hasError={errors.workersCompClaimAdjuster?.hasError}
        {...getOverrideProps(overrides, "workersCompClaimAdjuster")}
      ></TextField>
      <TextField
        label="Workers comp address"
        isRequired={false}
        isReadOnly={false}
        value={workersCompAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress: value,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.workersCompAddress ?? value;
          }
          if (errors.workersCompAddress?.hasError) {
            runValidationTasks("workersCompAddress", value);
          }
          setWorkersCompAddress(value);
        }}
        onBlur={() =>
          runValidationTasks("workersCompAddress", workersCompAddress)
        }
        errorMessage={errors.workersCompAddress?.errorMessage}
        hasError={errors.workersCompAddress?.hasError}
        {...getOverrideProps(overrides, "workersCompAddress")}
      ></TextField>
      <TextField
        label="Auto insurance carrier"
        isRequired={false}
        isReadOnly={false}
        value={autoInsuranceCarrier}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier: value,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.autoInsuranceCarrier ?? value;
          }
          if (errors.autoInsuranceCarrier?.hasError) {
            runValidationTasks("autoInsuranceCarrier", value);
          }
          setAutoInsuranceCarrier(value);
        }}
        onBlur={() =>
          runValidationTasks("autoInsuranceCarrier", autoInsuranceCarrier)
        }
        errorMessage={errors.autoInsuranceCarrier?.errorMessage}
        hasError={errors.autoInsuranceCarrier?.hasError}
        {...getOverrideProps(overrides, "autoInsuranceCarrier")}
      ></TextField>
      <TextField
        label="Pgs contact method"
        isRequired={false}
        isReadOnly={false}
        value={PGSContactMethod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod: value,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.PGSContactMethod ?? value;
          }
          if (errors.PGSContactMethod?.hasError) {
            runValidationTasks("PGSContactMethod", value);
          }
          setPGSContactMethod(value);
        }}
        onBlur={() => runValidationTasks("PGSContactMethod", PGSContactMethod)}
        errorMessage={errors.PGSContactMethod?.errorMessage}
        hasError={errors.PGSContactMethod?.hasError}
        {...getOverrideProps(overrides, "PGSContactMethod")}
      ></TextField>
      <TextField
        label="Workers comp zip"
        isRequired={false}
        isReadOnly={false}
        value={workersCompZip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip: value,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.workersCompZip ?? value;
          }
          if (errors.workersCompZip?.hasError) {
            runValidationTasks("workersCompZip", value);
          }
          setWorkersCompZip(value);
        }}
        onBlur={() => runValidationTasks("workersCompZip", workersCompZip)}
        errorMessage={errors.workersCompZip?.errorMessage}
        hasError={errors.workersCompZip?.hasError}
        {...getOverrideProps(overrides, "workersCompZip")}
      ></TextField>
      <TextField
        label="Workers comp phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={workersCompPhone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone: value,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.workersCompPhone ?? value;
          }
          if (errors.workersCompPhone?.hasError) {
            runValidationTasks("workersCompPhone", value);
          }
          setWorkersCompPhone(value);
        }}
        onBlur={() => runValidationTasks("workersCompPhone", workersCompPhone)}
        errorMessage={errors.workersCompPhone?.errorMessage}
        hasError={errors.workersCompPhone?.hasError}
        {...getOverrideProps(overrides, "workersCompPhone")}
      ></TextField>
      <TextField
        label="Workers comp claim number"
        isRequired={false}
        isReadOnly={false}
        value={workersCompClaimNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber: value,
              workersCompCity,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.workersCompClaimNumber ?? value;
          }
          if (errors.workersCompClaimNumber?.hasError) {
            runValidationTasks("workersCompClaimNumber", value);
          }
          setWorkersCompClaimNumber(value);
        }}
        onBlur={() =>
          runValidationTasks("workersCompClaimNumber", workersCompClaimNumber)
        }
        errorMessage={errors.workersCompClaimNumber?.errorMessage}
        hasError={errors.workersCompClaimNumber?.hasError}
        {...getOverrideProps(overrides, "workersCompClaimNumber")}
      ></TextField>
      <TextField
        label="Workers comp city"
        isRequired={false}
        isReadOnly={false}
        value={workersCompCity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity: value,
              workersCompState,
            };
            const result = onChange(modelFields);
            value = result?.workersCompCity ?? value;
          }
          if (errors.workersCompCity?.hasError) {
            runValidationTasks("workersCompCity", value);
          }
          setWorkersCompCity(value);
        }}
        onBlur={() => runValidationTasks("workersCompCity", workersCompCity)}
        errorMessage={errors.workersCompCity?.errorMessage}
        hasError={errors.workersCompCity?.hasError}
        {...getOverrideProps(overrides, "workersCompCity")}
      ></TextField>
      <SelectField
        label="Workers comp state"
        placeholder="Please select an option"
        isDisabled={false}
        value={workersCompState}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              expectToEnroll,
              pronouns,
              sex,
              SSN,
              address,
              gender,
              ethnicity,
              zip,
              country,
              homePhone,
              mobilePhone,
              email,
              city,
              DOB,
              emergencyContactRelationship,
              emergencyContactPhone,
              emergencyContactAddress,
              emergencyContactCity,
              emergencyContactState,
              emergencyContactZip,
              emergencyContactFirstName,
              PGSFirstName,
              PGSLastName,
              PGSAddress,
              PGSHomePhone,
              emergencyContactLastName,
              PGSEmail,
              PGSFax,
              state,
              PGSSponsor,
              PGSLegalCustody,
              PGSPhysicalCustody,
              PGSEmergencyContact,
              PGSParentGuardian,
              PGSRelationship,
              PGSMobilePhone,
              PGSWorkPhone,
              PGSWorkEmail,
              PGSWorkFax,
              howDIdYouHearAboutCCFIL,
              referralSource,
              whatEventsLeadToSeekTreatment,
              PGSEmployer,
              applicantsStrengths,
              applicantsWeaknesses,
              currentPlacementLocation,
              currentPlacementDates,
              currentPlacementProvider,
              PGSJobTitle,
              psychAnger,
              psychSuicidality,
              psychSexualActivity,
              whatGoalsReceivingTreatment,
              psychLegalProblems,
              medicalSurgeriesIllnessesHospitalizations,
              medicalPrescriptions,
              medicalVitaminsSupplements,
              allergiesAsthma,
              inhalerEpiPen,
              inhalerType,
              autoInsurance,
              currentPlacementReason,
              autoInsuranceClaimNumber,
              psychSubstanceIssues,
              autoInsuranceClaimAdjuster,
              autoInsuranceAddress,
              autoInsuranceCity,
              autoInsuranceState,
              autoInsuranceZip,
              autoInsurancePhone,
              workersCompInsurance,
              workersCompInsuranceCarrier,
              autoInsuranceDOL,
              workersCompClaimAdjuster,
              workersCompAddress,
              autoInsuranceCarrier,
              PGSContactMethod,
              workersCompZip,
              workersCompPhone,
              workersCompClaimNumber,
              workersCompCity,
              workersCompState: value,
            };
            const result = onChange(modelFields);
            value = result?.workersCompState ?? value;
          }
          if (errors.workersCompState?.hasError) {
            runValidationTasks("workersCompState", value);
          }
          setWorkersCompState(value);
        }}
        onBlur={() => runValidationTasks("workersCompState", workersCompState)}
        errorMessage={errors.workersCompState?.errorMessage}
        hasError={errors.workersCompState?.hasError}
        {...getOverrideProps(overrides, "workersCompState")}
      >
        <option
          children="Alabama"
          value="ALABAMA"
          {...getOverrideProps(overrides, "workersCompStateoption0")}
        ></option>
        <option
          children="Alaska"
          value="ALASKA"
          {...getOverrideProps(overrides, "workersCompStateoption1")}
        ></option>
        <option
          children="Arizona"
          value="ARIZONA"
          {...getOverrideProps(overrides, "workersCompStateoption2")}
        ></option>
        <option
          children="Arkansas"
          value="ARKANSAS"
          {...getOverrideProps(overrides, "workersCompStateoption3")}
        ></option>
        <option
          children="Americansamoa"
          value="AMERICANSAMOA"
          {...getOverrideProps(overrides, "workersCompStateoption4")}
        ></option>
        <option
          children="California"
          value="CALIFORNIA"
          {...getOverrideProps(overrides, "workersCompStateoption5")}
        ></option>
        <option
          children="Colorado"
          value="COLORADO"
          {...getOverrideProps(overrides, "workersCompStateoption6")}
        ></option>
        <option
          children="Connecticut"
          value="CONNECTICUT"
          {...getOverrideProps(overrides, "workersCompStateoption7")}
        ></option>
        <option
          children="Delaware"
          value="DELAWARE"
          {...getOverrideProps(overrides, "workersCompStateoption8")}
        ></option>
        <option
          children="Districtofcolumbia"
          value="DISTRICTOFCOLUMBIA"
          {...getOverrideProps(overrides, "workersCompStateoption9")}
        ></option>
        <option
          children="Florida"
          value="FLORIDA"
          {...getOverrideProps(overrides, "workersCompStateoption10")}
        ></option>
        <option
          children="Georgia"
          value="GEORGIA"
          {...getOverrideProps(overrides, "workersCompStateoption11")}
        ></option>
        <option
          children="Guam"
          value="GUAM"
          {...getOverrideProps(overrides, "workersCompStateoption12")}
        ></option>
        <option
          children="Hawaii"
          value="HAWAII"
          {...getOverrideProps(overrides, "workersCompStateoption13")}
        ></option>
        <option
          children="Idaho"
          value="IDAHO"
          {...getOverrideProps(overrides, "workersCompStateoption14")}
        ></option>
        <option
          children="Illinois"
          value="ILLINOIS"
          {...getOverrideProps(overrides, "workersCompStateoption15")}
        ></option>
        <option
          children="Indiana"
          value="INDIANA"
          {...getOverrideProps(overrides, "workersCompStateoption16")}
        ></option>
        <option
          children="Iowa"
          value="IOWA"
          {...getOverrideProps(overrides, "workersCompStateoption17")}
        ></option>
        <option
          children="Kansas"
          value="KANSAS"
          {...getOverrideProps(overrides, "workersCompStateoption18")}
        ></option>
        <option
          children="Kentucky"
          value="KENTUCKY"
          {...getOverrideProps(overrides, "workersCompStateoption19")}
        ></option>
        <option
          children="Louisiana"
          value="LOUISIANA"
          {...getOverrideProps(overrides, "workersCompStateoption20")}
        ></option>
        <option
          children="Maine"
          value="MAINE"
          {...getOverrideProps(overrides, "workersCompStateoption21")}
        ></option>
        <option
          children="Maryland"
          value="MARYLAND"
          {...getOverrideProps(overrides, "workersCompStateoption22")}
        ></option>
        <option
          children="Massachusetts"
          value="MASSACHUSETTS"
          {...getOverrideProps(overrides, "workersCompStateoption23")}
        ></option>
        <option
          children="Michigan"
          value="MICHIGAN"
          {...getOverrideProps(overrides, "workersCompStateoption24")}
        ></option>
        <option
          children="Minnesota"
          value="MINNESOTA"
          {...getOverrideProps(overrides, "workersCompStateoption25")}
        ></option>
        <option
          children="Mississippi"
          value="MISSISSIPPI"
          {...getOverrideProps(overrides, "workersCompStateoption26")}
        ></option>
        <option
          children="Missouri"
          value="MISSOURI"
          {...getOverrideProps(overrides, "workersCompStateoption27")}
        ></option>
        <option
          children="Montana"
          value="MONTANA"
          {...getOverrideProps(overrides, "workersCompStateoption28")}
        ></option>
        <option
          children="Nebraska"
          value="NEBRASKA"
          {...getOverrideProps(overrides, "workersCompStateoption29")}
        ></option>
        <option
          children="Nevada"
          value="NEVADA"
          {...getOverrideProps(overrides, "workersCompStateoption30")}
        ></option>
        <option
          children="Newhampshire"
          value="NEWHAMPSHIRE"
          {...getOverrideProps(overrides, "workersCompStateoption31")}
        ></option>
        <option
          children="Newjersey"
          value="NEWJERSEY"
          {...getOverrideProps(overrides, "workersCompStateoption32")}
        ></option>
        <option
          children="Newmexico"
          value="NEWMEXICO"
          {...getOverrideProps(overrides, "workersCompStateoption33")}
        ></option>
        <option
          children="Newyork"
          value="NEWYORK"
          {...getOverrideProps(overrides, "workersCompStateoption34")}
        ></option>
        <option
          children="Northcarolina"
          value="NORTHCAROLINA"
          {...getOverrideProps(overrides, "workersCompStateoption35")}
        ></option>
        <option
          children="Northdakota"
          value="NORTHDAKOTA"
          {...getOverrideProps(overrides, "workersCompStateoption36")}
        ></option>
        <option
          children="Northernmarianaislands"
          value="NORTHERNMARIANAISLANDS"
          {...getOverrideProps(overrides, "workersCompStateoption37")}
        ></option>
        <option
          children="Ohio"
          value="OHIO"
          {...getOverrideProps(overrides, "workersCompStateoption38")}
        ></option>
        <option
          children="Oklahoma"
          value="OKLAHOMA"
          {...getOverrideProps(overrides, "workersCompStateoption39")}
        ></option>
        <option
          children="Oregon"
          value="OREGON"
          {...getOverrideProps(overrides, "workersCompStateoption40")}
        ></option>
        <option
          children="Pennsylvania"
          value="PENNSYLVANIA"
          {...getOverrideProps(overrides, "workersCompStateoption41")}
        ></option>
        <option
          children="Puertorico"
          value="PUERTORICO"
          {...getOverrideProps(overrides, "workersCompStateoption42")}
        ></option>
        <option
          children="Rhodeisland"
          value="RHODEISLAND"
          {...getOverrideProps(overrides, "workersCompStateoption43")}
        ></option>
        <option
          children="Southcarolina"
          value="SOUTHCAROLINA"
          {...getOverrideProps(overrides, "workersCompStateoption44")}
        ></option>
        <option
          children="Southdakota"
          value="SOUTHDAKOTA"
          {...getOverrideProps(overrides, "workersCompStateoption45")}
        ></option>
        <option
          children="Tennessee"
          value="TENNESSEE"
          {...getOverrideProps(overrides, "workersCompStateoption46")}
        ></option>
        <option
          children="Texas"
          value="TEXAS"
          {...getOverrideProps(overrides, "workersCompStateoption47")}
        ></option>
        <option
          children="Trustterritories"
          value="TRUSTTERRITORIES"
          {...getOverrideProps(overrides, "workersCompStateoption48")}
        ></option>
        <option
          children="Utah"
          value="UTAH"
          {...getOverrideProps(overrides, "workersCompStateoption49")}
        ></option>
        <option
          children="Vermont"
          value="VERMONT"
          {...getOverrideProps(overrides, "workersCompStateoption50")}
        ></option>
        <option
          children="Virginia"
          value="VIRGINIA"
          {...getOverrideProps(overrides, "workersCompStateoption51")}
        ></option>
        <option
          children="Virginislands"
          value="VIRGINISLANDS"
          {...getOverrideProps(overrides, "workersCompStateoption52")}
        ></option>
        <option
          children="Washington"
          value="WASHINGTON"
          {...getOverrideProps(overrides, "workersCompStateoption53")}
        ></option>
        <option
          children="Westvirginia"
          value="WESTVIRGINIA"
          {...getOverrideProps(overrides, "workersCompStateoption54")}
        ></option>
        <option
          children="Wisconsin"
          value="WISCONSIN"
          {...getOverrideProps(overrides, "workersCompStateoption55")}
        ></option>
        <option
          children="Wyoming"
          value="WYOMING"
          {...getOverrideProps(overrides, "workersCompStateoption56")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
