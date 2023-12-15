/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SwitchField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createMedicalHistory } from "../../utils/graphql/mutations";
const client = generateClient();
export default function MedicalHistoryCreateForm(props) {
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
    allergies: false,
    anaphylacticShock: false,
    anemia: false,
    ankleProblem: false,
    anorexiaBulimia: false,
    appendicitis: false,
    armProblem: false,
    arthritis: false,
    asthma: false,
    backProblems: false,
    bedwetting: false,
    bladderKidneyProblems: false,
    bleedingDisorder: false,
    boneCondition: false,
    bowelProblems: false,
    brokenBones: false,
    cancer: false,
    chestPains: false,
    chronicCough: false,
    circulationIssues: false,
    coldsFrequent: false,
    constipation: false,
    cystsTumors: false,
    dermatitis: false,
    diabetes: false,
    diarrhea: false,
    difficultyWalking: false,
    earInfections: false,
    endocrineProblems: false,
    excessiveSweating: false,
    faintingDizziness: false,
    heartDisease: false,
    footProblem: false,
    frequentColdsSoreThroats: false,
    frequentHeartburn: false,
    frequentMuscleCramps: false,
    frequentShortnessOfBreath: false,
    frostbite: false,
    gasBloating: false,
    HIVAIDS: false,
    headTraumas: false,
    headachesMigraines: false,
    hearingImpairment: false,
    heartProblemsMurmurs: false,
    hepatitisABC: false,
    hernia: false,
    highBloodPressure: false,
    hypoglycemia: false,
    intoleranceToCold: false,
    intoleranceToHeat: false,
    irregularHeartbeat: false,
    jointInjuries: false,
    kidneyProblems: false,
    kneeProblem: false,
    legProblem: false,
    liverProblems: false,
    lungInfections: false,
    medicalEquipmentDevices: false,
    meningitis: false,
    menstrualProblems: false,
    mononucleosis: false,
    motionSickness: false,
    obesity: false,
    other: false,
    PMSSevereSymptoms: false,
    pneumoniaBronchitis: false,
    pregnancy: false,
    recurrentInjurySurgery: false,
    STDs: false,
    scoliosis: false,
    seizuresEpilepsy: false,
    shoulderProblem: false,
    skinDiseasesProblems: false,
    sleepwalking: false,
    TBPositive: false,
    TBRecentExposure: false,
    tuberculosis: false,
    thyroidProblems: false,
    ulcers: false,
    unexpectedWeightLoss: false,
    urinationProblem: false,
  };
  const [allergies, setAllergies] = React.useState(initialValues.allergies);
  const [anaphylacticShock, setAnaphylacticShock] = React.useState(
    initialValues.anaphylacticShock
  );
  const [anemia, setAnemia] = React.useState(initialValues.anemia);
  const [ankleProblem, setAnkleProblem] = React.useState(
    initialValues.ankleProblem
  );
  const [anorexiaBulimia, setAnorexiaBulimia] = React.useState(
    initialValues.anorexiaBulimia
  );
  const [appendicitis, setAppendicitis] = React.useState(
    initialValues.appendicitis
  );
  const [armProblem, setArmProblem] = React.useState(initialValues.armProblem);
  const [arthritis, setArthritis] = React.useState(initialValues.arthritis);
  const [asthma, setAsthma] = React.useState(initialValues.asthma);
  const [backProblems, setBackProblems] = React.useState(
    initialValues.backProblems
  );
  const [bedwetting, setBedwetting] = React.useState(initialValues.bedwetting);
  const [bladderKidneyProblems, setBladderKidneyProblems] = React.useState(
    initialValues.bladderKidneyProblems
  );
  const [bleedingDisorder, setBleedingDisorder] = React.useState(
    initialValues.bleedingDisorder
  );
  const [boneCondition, setBoneCondition] = React.useState(
    initialValues.boneCondition
  );
  const [bowelProblems, setBowelProblems] = React.useState(
    initialValues.bowelProblems
  );
  const [brokenBones, setBrokenBones] = React.useState(
    initialValues.brokenBones
  );
  const [cancer, setCancer] = React.useState(initialValues.cancer);
  const [chestPains, setChestPains] = React.useState(initialValues.chestPains);
  const [chronicCough, setChronicCough] = React.useState(
    initialValues.chronicCough
  );
  const [circulationIssues, setCirculationIssues] = React.useState(
    initialValues.circulationIssues
  );
  const [coldsFrequent, setColdsFrequent] = React.useState(
    initialValues.coldsFrequent
  );
  const [constipation, setConstipation] = React.useState(
    initialValues.constipation
  );
  const [cystsTumors, setCystsTumors] = React.useState(
    initialValues.cystsTumors
  );
  const [dermatitis, setDermatitis] = React.useState(initialValues.dermatitis);
  const [diabetes, setDiabetes] = React.useState(initialValues.diabetes);
  const [diarrhea, setDiarrhea] = React.useState(initialValues.diarrhea);
  const [difficultyWalking, setDifficultyWalking] = React.useState(
    initialValues.difficultyWalking
  );
  const [earInfections, setEarInfections] = React.useState(
    initialValues.earInfections
  );
  const [endocrineProblems, setEndocrineProblems] = React.useState(
    initialValues.endocrineProblems
  );
  const [excessiveSweating, setExcessiveSweating] = React.useState(
    initialValues.excessiveSweating
  );
  const [faintingDizziness, setFaintingDizziness] = React.useState(
    initialValues.faintingDizziness
  );
  const [heartDisease, setHeartDisease] = React.useState(
    initialValues.heartDisease
  );
  const [footProblem, setFootProblem] = React.useState(
    initialValues.footProblem
  );
  const [frequentColdsSoreThroats, setFrequentColdsSoreThroats] =
    React.useState(initialValues.frequentColdsSoreThroats);
  const [frequentHeartburn, setFrequentHeartburn] = React.useState(
    initialValues.frequentHeartburn
  );
  const [frequentMuscleCramps, setFrequentMuscleCramps] = React.useState(
    initialValues.frequentMuscleCramps
  );
  const [frequentShortnessOfBreath, setFrequentShortnessOfBreath] =
    React.useState(initialValues.frequentShortnessOfBreath);
  const [frostbite, setFrostbite] = React.useState(initialValues.frostbite);
  const [gasBloating, setGasBloating] = React.useState(
    initialValues.gasBloating
  );
  const [HIVAIDS, setHIVAIDS] = React.useState(initialValues.HIVAIDS);
  const [headTraumas, setHeadTraumas] = React.useState(
    initialValues.headTraumas
  );
  const [headachesMigraines, setHeadachesMigraines] = React.useState(
    initialValues.headachesMigraines
  );
  const [hearingImpairment, setHearingImpairment] = React.useState(
    initialValues.hearingImpairment
  );
  const [heartProblemsMurmurs, setHeartProblemsMurmurs] = React.useState(
    initialValues.heartProblemsMurmurs
  );
  const [hepatitisABC, setHepatitisABC] = React.useState(
    initialValues.hepatitisABC
  );
  const [hernia, setHernia] = React.useState(initialValues.hernia);
  const [highBloodPressure, setHighBloodPressure] = React.useState(
    initialValues.highBloodPressure
  );
  const [hypoglycemia, setHypoglycemia] = React.useState(
    initialValues.hypoglycemia
  );
  const [intoleranceToCold, setIntoleranceToCold] = React.useState(
    initialValues.intoleranceToCold
  );
  const [intoleranceToHeat, setIntoleranceToHeat] = React.useState(
    initialValues.intoleranceToHeat
  );
  const [irregularHeartbeat, setIrregularHeartbeat] = React.useState(
    initialValues.irregularHeartbeat
  );
  const [jointInjuries, setJointInjuries] = React.useState(
    initialValues.jointInjuries
  );
  const [kidneyProblems, setKidneyProblems] = React.useState(
    initialValues.kidneyProblems
  );
  const [kneeProblem, setKneeProblem] = React.useState(
    initialValues.kneeProblem
  );
  const [legProblem, setLegProblem] = React.useState(initialValues.legProblem);
  const [liverProblems, setLiverProblems] = React.useState(
    initialValues.liverProblems
  );
  const [lungInfections, setLungInfections] = React.useState(
    initialValues.lungInfections
  );
  const [medicalEquipmentDevices, setMedicalEquipmentDevices] = React.useState(
    initialValues.medicalEquipmentDevices
  );
  const [meningitis, setMeningitis] = React.useState(initialValues.meningitis);
  const [menstrualProblems, setMenstrualProblems] = React.useState(
    initialValues.menstrualProblems
  );
  const [mononucleosis, setMononucleosis] = React.useState(
    initialValues.mononucleosis
  );
  const [motionSickness, setMotionSickness] = React.useState(
    initialValues.motionSickness
  );
  const [obesity, setObesity] = React.useState(initialValues.obesity);
  const [other, setOther] = React.useState(initialValues.other);
  const [PMSSevereSymptoms, setPMSSevereSymptoms] = React.useState(
    initialValues.PMSSevereSymptoms
  );
  const [pneumoniaBronchitis, setPneumoniaBronchitis] = React.useState(
    initialValues.pneumoniaBronchitis
  );
  const [pregnancy, setPregnancy] = React.useState(initialValues.pregnancy);
  const [recurrentInjurySurgery, setRecurrentInjurySurgery] = React.useState(
    initialValues.recurrentInjurySurgery
  );
  const [STDs, setSTDs] = React.useState(initialValues.STDs);
  const [scoliosis, setScoliosis] = React.useState(initialValues.scoliosis);
  const [seizuresEpilepsy, setSeizuresEpilepsy] = React.useState(
    initialValues.seizuresEpilepsy
  );
  const [shoulderProblem, setShoulderProblem] = React.useState(
    initialValues.shoulderProblem
  );
  const [skinDiseasesProblems, setSkinDiseasesProblems] = React.useState(
    initialValues.skinDiseasesProblems
  );
  const [sleepwalking, setSleepwalking] = React.useState(
    initialValues.sleepwalking
  );
  const [TBPositive, setTBPositive] = React.useState(initialValues.TBPositive);
  const [TBRecentExposure, setTBRecentExposure] = React.useState(
    initialValues.TBRecentExposure
  );
  const [tuberculosis, setTuberculosis] = React.useState(
    initialValues.tuberculosis
  );
  const [thyroidProblems, setThyroidProblems] = React.useState(
    initialValues.thyroidProblems
  );
  const [ulcers, setUlcers] = React.useState(initialValues.ulcers);
  const [unexpectedWeightLoss, setUnexpectedWeightLoss] = React.useState(
    initialValues.unexpectedWeightLoss
  );
  const [urinationProblem, setUrinationProblem] = React.useState(
    initialValues.urinationProblem
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAllergies(initialValues.allergies);
    setAnaphylacticShock(initialValues.anaphylacticShock);
    setAnemia(initialValues.anemia);
    setAnkleProblem(initialValues.ankleProblem);
    setAnorexiaBulimia(initialValues.anorexiaBulimia);
    setAppendicitis(initialValues.appendicitis);
    setArmProblem(initialValues.armProblem);
    setArthritis(initialValues.arthritis);
    setAsthma(initialValues.asthma);
    setBackProblems(initialValues.backProblems);
    setBedwetting(initialValues.bedwetting);
    setBladderKidneyProblems(initialValues.bladderKidneyProblems);
    setBleedingDisorder(initialValues.bleedingDisorder);
    setBoneCondition(initialValues.boneCondition);
    setBowelProblems(initialValues.bowelProblems);
    setBrokenBones(initialValues.brokenBones);
    setCancer(initialValues.cancer);
    setChestPains(initialValues.chestPains);
    setChronicCough(initialValues.chronicCough);
    setCirculationIssues(initialValues.circulationIssues);
    setColdsFrequent(initialValues.coldsFrequent);
    setConstipation(initialValues.constipation);
    setCystsTumors(initialValues.cystsTumors);
    setDermatitis(initialValues.dermatitis);
    setDiabetes(initialValues.diabetes);
    setDiarrhea(initialValues.diarrhea);
    setDifficultyWalking(initialValues.difficultyWalking);
    setEarInfections(initialValues.earInfections);
    setEndocrineProblems(initialValues.endocrineProblems);
    setExcessiveSweating(initialValues.excessiveSweating);
    setFaintingDizziness(initialValues.faintingDizziness);
    setHeartDisease(initialValues.heartDisease);
    setFootProblem(initialValues.footProblem);
    setFrequentColdsSoreThroats(initialValues.frequentColdsSoreThroats);
    setFrequentHeartburn(initialValues.frequentHeartburn);
    setFrequentMuscleCramps(initialValues.frequentMuscleCramps);
    setFrequentShortnessOfBreath(initialValues.frequentShortnessOfBreath);
    setFrostbite(initialValues.frostbite);
    setGasBloating(initialValues.gasBloating);
    setHIVAIDS(initialValues.HIVAIDS);
    setHeadTraumas(initialValues.headTraumas);
    setHeadachesMigraines(initialValues.headachesMigraines);
    setHearingImpairment(initialValues.hearingImpairment);
    setHeartProblemsMurmurs(initialValues.heartProblemsMurmurs);
    setHepatitisABC(initialValues.hepatitisABC);
    setHernia(initialValues.hernia);
    setHighBloodPressure(initialValues.highBloodPressure);
    setHypoglycemia(initialValues.hypoglycemia);
    setIntoleranceToCold(initialValues.intoleranceToCold);
    setIntoleranceToHeat(initialValues.intoleranceToHeat);
    setIrregularHeartbeat(initialValues.irregularHeartbeat);
    setJointInjuries(initialValues.jointInjuries);
    setKidneyProblems(initialValues.kidneyProblems);
    setKneeProblem(initialValues.kneeProblem);
    setLegProblem(initialValues.legProblem);
    setLiverProblems(initialValues.liverProblems);
    setLungInfections(initialValues.lungInfections);
    setMedicalEquipmentDevices(initialValues.medicalEquipmentDevices);
    setMeningitis(initialValues.meningitis);
    setMenstrualProblems(initialValues.menstrualProblems);
    setMononucleosis(initialValues.mononucleosis);
    setMotionSickness(initialValues.motionSickness);
    setObesity(initialValues.obesity);
    setOther(initialValues.other);
    setPMSSevereSymptoms(initialValues.PMSSevereSymptoms);
    setPneumoniaBronchitis(initialValues.pneumoniaBronchitis);
    setPregnancy(initialValues.pregnancy);
    setRecurrentInjurySurgery(initialValues.recurrentInjurySurgery);
    setSTDs(initialValues.STDs);
    setScoliosis(initialValues.scoliosis);
    setSeizuresEpilepsy(initialValues.seizuresEpilepsy);
    setShoulderProblem(initialValues.shoulderProblem);
    setSkinDiseasesProblems(initialValues.skinDiseasesProblems);
    setSleepwalking(initialValues.sleepwalking);
    setTBPositive(initialValues.TBPositive);
    setTBRecentExposure(initialValues.TBRecentExposure);
    setTuberculosis(initialValues.tuberculosis);
    setThyroidProblems(initialValues.thyroidProblems);
    setUlcers(initialValues.ulcers);
    setUnexpectedWeightLoss(initialValues.unexpectedWeightLoss);
    setUrinationProblem(initialValues.urinationProblem);
    setErrors({});
  };
  const validations = {
    allergies: [],
    anaphylacticShock: [],
    anemia: [],
    ankleProblem: [],
    anorexiaBulimia: [],
    appendicitis: [],
    armProblem: [],
    arthritis: [],
    asthma: [],
    backProblems: [],
    bedwetting: [],
    bladderKidneyProblems: [],
    bleedingDisorder: [],
    boneCondition: [],
    bowelProblems: [],
    brokenBones: [],
    cancer: [],
    chestPains: [],
    chronicCough: [],
    circulationIssues: [],
    coldsFrequent: [],
    constipation: [],
    cystsTumors: [],
    dermatitis: [],
    diabetes: [],
    diarrhea: [],
    difficultyWalking: [],
    earInfections: [],
    endocrineProblems: [],
    excessiveSweating: [],
    faintingDizziness: [],
    heartDisease: [],
    footProblem: [],
    frequentColdsSoreThroats: [],
    frequentHeartburn: [],
    frequentMuscleCramps: [],
    frequentShortnessOfBreath: [],
    frostbite: [],
    gasBloating: [],
    HIVAIDS: [],
    headTraumas: [],
    headachesMigraines: [],
    hearingImpairment: [],
    heartProblemsMurmurs: [],
    hepatitisABC: [],
    hernia: [],
    highBloodPressure: [],
    hypoglycemia: [],
    intoleranceToCold: [],
    intoleranceToHeat: [],
    irregularHeartbeat: [],
    jointInjuries: [],
    kidneyProblems: [],
    kneeProblem: [],
    legProblem: [],
    liverProblems: [],
    lungInfections: [],
    medicalEquipmentDevices: [],
    meningitis: [],
    menstrualProblems: [],
    mononucleosis: [],
    motionSickness: [],
    obesity: [],
    other: [],
    PMSSevereSymptoms: [],
    pneumoniaBronchitis: [],
    pregnancy: [],
    recurrentInjurySurgery: [],
    STDs: [],
    scoliosis: [],
    seizuresEpilepsy: [],
    shoulderProblem: [],
    skinDiseasesProblems: [],
    sleepwalking: [],
    TBPositive: [],
    TBRecentExposure: [],
    tuberculosis: [],
    thyroidProblems: [],
    ulcers: [],
    unexpectedWeightLoss: [],
    urinationProblem: [],
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
          allergies,
          anaphylacticShock,
          anemia,
          ankleProblem,
          anorexiaBulimia,
          appendicitis,
          armProblem,
          arthritis,
          asthma,
          backProblems,
          bedwetting,
          bladderKidneyProblems,
          bleedingDisorder,
          boneCondition,
          bowelProblems,
          brokenBones,
          cancer,
          chestPains,
          chronicCough,
          circulationIssues,
          coldsFrequent,
          constipation,
          cystsTumors,
          dermatitis,
          diabetes,
          diarrhea,
          difficultyWalking,
          earInfections,
          endocrineProblems,
          excessiveSweating,
          faintingDizziness,
          heartDisease,
          footProblem,
          frequentColdsSoreThroats,
          frequentHeartburn,
          frequentMuscleCramps,
          frequentShortnessOfBreath,
          frostbite,
          gasBloating,
          HIVAIDS,
          headTraumas,
          headachesMigraines,
          hearingImpairment,
          heartProblemsMurmurs,
          hepatitisABC,
          hernia,
          highBloodPressure,
          hypoglycemia,
          intoleranceToCold,
          intoleranceToHeat,
          irregularHeartbeat,
          jointInjuries,
          kidneyProblems,
          kneeProblem,
          legProblem,
          liverProblems,
          lungInfections,
          medicalEquipmentDevices,
          meningitis,
          menstrualProblems,
          mononucleosis,
          motionSickness,
          obesity,
          other,
          PMSSevereSymptoms,
          pneumoniaBronchitis,
          pregnancy,
          recurrentInjurySurgery,
          STDs,
          scoliosis,
          seizuresEpilepsy,
          shoulderProblem,
          skinDiseasesProblems,
          sleepwalking,
          TBPositive,
          TBRecentExposure,
          tuberculosis,
          thyroidProblems,
          ulcers,
          unexpectedWeightLoss,
          urinationProblem,
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
            query: createMedicalHistory.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "MedicalHistoryCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Allergies"
        defaultChecked={false}
        isDisabled={false}
        isChecked={allergies}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies: value,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.allergies ?? value;
          }
          if (errors.allergies?.hasError) {
            runValidationTasks("allergies", value);
          }
          setAllergies(value);
        }}
        onBlur={() => runValidationTasks("allergies", allergies)}
        errorMessage={errors.allergies?.errorMessage}
        hasError={errors.allergies?.hasError}
        {...getOverrideProps(overrides, "allergies")}
      ></SwitchField>
      <SwitchField
        label="Anaphylactic shock"
        defaultChecked={false}
        isDisabled={false}
        isChecked={anaphylacticShock}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock: value,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.anaphylacticShock ?? value;
          }
          if (errors.anaphylacticShock?.hasError) {
            runValidationTasks("anaphylacticShock", value);
          }
          setAnaphylacticShock(value);
        }}
        onBlur={() =>
          runValidationTasks("anaphylacticShock", anaphylacticShock)
        }
        errorMessage={errors.anaphylacticShock?.errorMessage}
        hasError={errors.anaphylacticShock?.hasError}
        {...getOverrideProps(overrides, "anaphylacticShock")}
      ></SwitchField>
      <SwitchField
        label="Anemia"
        defaultChecked={false}
        isDisabled={false}
        isChecked={anemia}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia: value,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.anemia ?? value;
          }
          if (errors.anemia?.hasError) {
            runValidationTasks("anemia", value);
          }
          setAnemia(value);
        }}
        onBlur={() => runValidationTasks("anemia", anemia)}
        errorMessage={errors.anemia?.errorMessage}
        hasError={errors.anemia?.hasError}
        {...getOverrideProps(overrides, "anemia")}
      ></SwitchField>
      <SwitchField
        label="Ankle problem"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ankleProblem}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem: value,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.ankleProblem ?? value;
          }
          if (errors.ankleProblem?.hasError) {
            runValidationTasks("ankleProblem", value);
          }
          setAnkleProblem(value);
        }}
        onBlur={() => runValidationTasks("ankleProblem", ankleProblem)}
        errorMessage={errors.ankleProblem?.errorMessage}
        hasError={errors.ankleProblem?.hasError}
        {...getOverrideProps(overrides, "ankleProblem")}
      ></SwitchField>
      <SwitchField
        label="Anorexia bulimia"
        defaultChecked={false}
        isDisabled={false}
        isChecked={anorexiaBulimia}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia: value,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.anorexiaBulimia ?? value;
          }
          if (errors.anorexiaBulimia?.hasError) {
            runValidationTasks("anorexiaBulimia", value);
          }
          setAnorexiaBulimia(value);
        }}
        onBlur={() => runValidationTasks("anorexiaBulimia", anorexiaBulimia)}
        errorMessage={errors.anorexiaBulimia?.errorMessage}
        hasError={errors.anorexiaBulimia?.hasError}
        {...getOverrideProps(overrides, "anorexiaBulimia")}
      ></SwitchField>
      <SwitchField
        label="Appendicitis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={appendicitis}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis: value,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.appendicitis ?? value;
          }
          if (errors.appendicitis?.hasError) {
            runValidationTasks("appendicitis", value);
          }
          setAppendicitis(value);
        }}
        onBlur={() => runValidationTasks("appendicitis", appendicitis)}
        errorMessage={errors.appendicitis?.errorMessage}
        hasError={errors.appendicitis?.hasError}
        {...getOverrideProps(overrides, "appendicitis")}
      ></SwitchField>
      <SwitchField
        label="Arm problem"
        defaultChecked={false}
        isDisabled={false}
        isChecked={armProblem}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem: value,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.armProblem ?? value;
          }
          if (errors.armProblem?.hasError) {
            runValidationTasks("armProblem", value);
          }
          setArmProblem(value);
        }}
        onBlur={() => runValidationTasks("armProblem", armProblem)}
        errorMessage={errors.armProblem?.errorMessage}
        hasError={errors.armProblem?.hasError}
        {...getOverrideProps(overrides, "armProblem")}
      ></SwitchField>
      <SwitchField
        label="Arthritis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={arthritis}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis: value,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.arthritis ?? value;
          }
          if (errors.arthritis?.hasError) {
            runValidationTasks("arthritis", value);
          }
          setArthritis(value);
        }}
        onBlur={() => runValidationTasks("arthritis", arthritis)}
        errorMessage={errors.arthritis?.errorMessage}
        hasError={errors.arthritis?.hasError}
        {...getOverrideProps(overrides, "arthritis")}
      ></SwitchField>
      <SwitchField
        label="Asthma"
        defaultChecked={false}
        isDisabled={false}
        isChecked={asthma}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma: value,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.asthma ?? value;
          }
          if (errors.asthma?.hasError) {
            runValidationTasks("asthma", value);
          }
          setAsthma(value);
        }}
        onBlur={() => runValidationTasks("asthma", asthma)}
        errorMessage={errors.asthma?.errorMessage}
        hasError={errors.asthma?.hasError}
        {...getOverrideProps(overrides, "asthma")}
      ></SwitchField>
      <SwitchField
        label="Back problems"
        defaultChecked={false}
        isDisabled={false}
        isChecked={backProblems}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems: value,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.backProblems ?? value;
          }
          if (errors.backProblems?.hasError) {
            runValidationTasks("backProblems", value);
          }
          setBackProblems(value);
        }}
        onBlur={() => runValidationTasks("backProblems", backProblems)}
        errorMessage={errors.backProblems?.errorMessage}
        hasError={errors.backProblems?.hasError}
        {...getOverrideProps(overrides, "backProblems")}
      ></SwitchField>
      <SwitchField
        label="Bedwetting"
        defaultChecked={false}
        isDisabled={false}
        isChecked={bedwetting}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting: value,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.bedwetting ?? value;
          }
          if (errors.bedwetting?.hasError) {
            runValidationTasks("bedwetting", value);
          }
          setBedwetting(value);
        }}
        onBlur={() => runValidationTasks("bedwetting", bedwetting)}
        errorMessage={errors.bedwetting?.errorMessage}
        hasError={errors.bedwetting?.hasError}
        {...getOverrideProps(overrides, "bedwetting")}
      ></SwitchField>
      <SwitchField
        label="Bladder kidney problems"
        defaultChecked={false}
        isDisabled={false}
        isChecked={bladderKidneyProblems}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems: value,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.bladderKidneyProblems ?? value;
          }
          if (errors.bladderKidneyProblems?.hasError) {
            runValidationTasks("bladderKidneyProblems", value);
          }
          setBladderKidneyProblems(value);
        }}
        onBlur={() =>
          runValidationTasks("bladderKidneyProblems", bladderKidneyProblems)
        }
        errorMessage={errors.bladderKidneyProblems?.errorMessage}
        hasError={errors.bladderKidneyProblems?.hasError}
        {...getOverrideProps(overrides, "bladderKidneyProblems")}
      ></SwitchField>
      <SwitchField
        label="Bleeding disorder"
        defaultChecked={false}
        isDisabled={false}
        isChecked={bleedingDisorder}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder: value,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.bleedingDisorder ?? value;
          }
          if (errors.bleedingDisorder?.hasError) {
            runValidationTasks("bleedingDisorder", value);
          }
          setBleedingDisorder(value);
        }}
        onBlur={() => runValidationTasks("bleedingDisorder", bleedingDisorder)}
        errorMessage={errors.bleedingDisorder?.errorMessage}
        hasError={errors.bleedingDisorder?.hasError}
        {...getOverrideProps(overrides, "bleedingDisorder")}
      ></SwitchField>
      <SwitchField
        label="Bone condition"
        defaultChecked={false}
        isDisabled={false}
        isChecked={boneCondition}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition: value,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.boneCondition ?? value;
          }
          if (errors.boneCondition?.hasError) {
            runValidationTasks("boneCondition", value);
          }
          setBoneCondition(value);
        }}
        onBlur={() => runValidationTasks("boneCondition", boneCondition)}
        errorMessage={errors.boneCondition?.errorMessage}
        hasError={errors.boneCondition?.hasError}
        {...getOverrideProps(overrides, "boneCondition")}
      ></SwitchField>
      <SwitchField
        label="Bowel problems"
        defaultChecked={false}
        isDisabled={false}
        isChecked={bowelProblems}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems: value,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.bowelProblems ?? value;
          }
          if (errors.bowelProblems?.hasError) {
            runValidationTasks("bowelProblems", value);
          }
          setBowelProblems(value);
        }}
        onBlur={() => runValidationTasks("bowelProblems", bowelProblems)}
        errorMessage={errors.bowelProblems?.errorMessage}
        hasError={errors.bowelProblems?.hasError}
        {...getOverrideProps(overrides, "bowelProblems")}
      ></SwitchField>
      <SwitchField
        label="Broken bones"
        defaultChecked={false}
        isDisabled={false}
        isChecked={brokenBones}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones: value,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.brokenBones ?? value;
          }
          if (errors.brokenBones?.hasError) {
            runValidationTasks("brokenBones", value);
          }
          setBrokenBones(value);
        }}
        onBlur={() => runValidationTasks("brokenBones", brokenBones)}
        errorMessage={errors.brokenBones?.errorMessage}
        hasError={errors.brokenBones?.hasError}
        {...getOverrideProps(overrides, "brokenBones")}
      ></SwitchField>
      <SwitchField
        label="Cancer"
        defaultChecked={false}
        isDisabled={false}
        isChecked={cancer}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer: value,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.cancer ?? value;
          }
          if (errors.cancer?.hasError) {
            runValidationTasks("cancer", value);
          }
          setCancer(value);
        }}
        onBlur={() => runValidationTasks("cancer", cancer)}
        errorMessage={errors.cancer?.errorMessage}
        hasError={errors.cancer?.hasError}
        {...getOverrideProps(overrides, "cancer")}
      ></SwitchField>
      <SwitchField
        label="Chest pains"
        defaultChecked={false}
        isDisabled={false}
        isChecked={chestPains}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains: value,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.chestPains ?? value;
          }
          if (errors.chestPains?.hasError) {
            runValidationTasks("chestPains", value);
          }
          setChestPains(value);
        }}
        onBlur={() => runValidationTasks("chestPains", chestPains)}
        errorMessage={errors.chestPains?.errorMessage}
        hasError={errors.chestPains?.hasError}
        {...getOverrideProps(overrides, "chestPains")}
      ></SwitchField>
      <SwitchField
        label="Chronic cough"
        defaultChecked={false}
        isDisabled={false}
        isChecked={chronicCough}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough: value,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.chronicCough ?? value;
          }
          if (errors.chronicCough?.hasError) {
            runValidationTasks("chronicCough", value);
          }
          setChronicCough(value);
        }}
        onBlur={() => runValidationTasks("chronicCough", chronicCough)}
        errorMessage={errors.chronicCough?.errorMessage}
        hasError={errors.chronicCough?.hasError}
        {...getOverrideProps(overrides, "chronicCough")}
      ></SwitchField>
      <SwitchField
        label="Circulation issues"
        defaultChecked={false}
        isDisabled={false}
        isChecked={circulationIssues}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues: value,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.circulationIssues ?? value;
          }
          if (errors.circulationIssues?.hasError) {
            runValidationTasks("circulationIssues", value);
          }
          setCirculationIssues(value);
        }}
        onBlur={() =>
          runValidationTasks("circulationIssues", circulationIssues)
        }
        errorMessage={errors.circulationIssues?.errorMessage}
        hasError={errors.circulationIssues?.hasError}
        {...getOverrideProps(overrides, "circulationIssues")}
      ></SwitchField>
      <SwitchField
        label="Colds frequent"
        defaultChecked={false}
        isDisabled={false}
        isChecked={coldsFrequent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent: value,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.coldsFrequent ?? value;
          }
          if (errors.coldsFrequent?.hasError) {
            runValidationTasks("coldsFrequent", value);
          }
          setColdsFrequent(value);
        }}
        onBlur={() => runValidationTasks("coldsFrequent", coldsFrequent)}
        errorMessage={errors.coldsFrequent?.errorMessage}
        hasError={errors.coldsFrequent?.hasError}
        {...getOverrideProps(overrides, "coldsFrequent")}
      ></SwitchField>
      <SwitchField
        label="Constipation"
        defaultChecked={false}
        isDisabled={false}
        isChecked={constipation}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation: value,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.constipation ?? value;
          }
          if (errors.constipation?.hasError) {
            runValidationTasks("constipation", value);
          }
          setConstipation(value);
        }}
        onBlur={() => runValidationTasks("constipation", constipation)}
        errorMessage={errors.constipation?.errorMessage}
        hasError={errors.constipation?.hasError}
        {...getOverrideProps(overrides, "constipation")}
      ></SwitchField>
      <SwitchField
        label="Cysts tumors"
        defaultChecked={false}
        isDisabled={false}
        isChecked={cystsTumors}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors: value,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.cystsTumors ?? value;
          }
          if (errors.cystsTumors?.hasError) {
            runValidationTasks("cystsTumors", value);
          }
          setCystsTumors(value);
        }}
        onBlur={() => runValidationTasks("cystsTumors", cystsTumors)}
        errorMessage={errors.cystsTumors?.errorMessage}
        hasError={errors.cystsTumors?.hasError}
        {...getOverrideProps(overrides, "cystsTumors")}
      ></SwitchField>
      <SwitchField
        label="Dermatitis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={dermatitis}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis: value,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.dermatitis ?? value;
          }
          if (errors.dermatitis?.hasError) {
            runValidationTasks("dermatitis", value);
          }
          setDermatitis(value);
        }}
        onBlur={() => runValidationTasks("dermatitis", dermatitis)}
        errorMessage={errors.dermatitis?.errorMessage}
        hasError={errors.dermatitis?.hasError}
        {...getOverrideProps(overrides, "dermatitis")}
      ></SwitchField>
      <SwitchField
        label="Diabetes"
        defaultChecked={false}
        isDisabled={false}
        isChecked={diabetes}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes: value,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.diabetes ?? value;
          }
          if (errors.diabetes?.hasError) {
            runValidationTasks("diabetes", value);
          }
          setDiabetes(value);
        }}
        onBlur={() => runValidationTasks("diabetes", diabetes)}
        errorMessage={errors.diabetes?.errorMessage}
        hasError={errors.diabetes?.hasError}
        {...getOverrideProps(overrides, "diabetes")}
      ></SwitchField>
      <SwitchField
        label="Diarrhea"
        defaultChecked={false}
        isDisabled={false}
        isChecked={diarrhea}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea: value,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.diarrhea ?? value;
          }
          if (errors.diarrhea?.hasError) {
            runValidationTasks("diarrhea", value);
          }
          setDiarrhea(value);
        }}
        onBlur={() => runValidationTasks("diarrhea", diarrhea)}
        errorMessage={errors.diarrhea?.errorMessage}
        hasError={errors.diarrhea?.hasError}
        {...getOverrideProps(overrides, "diarrhea")}
      ></SwitchField>
      <SwitchField
        label="Difficulty walking"
        defaultChecked={false}
        isDisabled={false}
        isChecked={difficultyWalking}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking: value,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.difficultyWalking ?? value;
          }
          if (errors.difficultyWalking?.hasError) {
            runValidationTasks("difficultyWalking", value);
          }
          setDifficultyWalking(value);
        }}
        onBlur={() =>
          runValidationTasks("difficultyWalking", difficultyWalking)
        }
        errorMessage={errors.difficultyWalking?.errorMessage}
        hasError={errors.difficultyWalking?.hasError}
        {...getOverrideProps(overrides, "difficultyWalking")}
      ></SwitchField>
      <SwitchField
        label="Ear infections"
        defaultChecked={false}
        isDisabled={false}
        isChecked={earInfections}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections: value,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.earInfections ?? value;
          }
          if (errors.earInfections?.hasError) {
            runValidationTasks("earInfections", value);
          }
          setEarInfections(value);
        }}
        onBlur={() => runValidationTasks("earInfections", earInfections)}
        errorMessage={errors.earInfections?.errorMessage}
        hasError={errors.earInfections?.hasError}
        {...getOverrideProps(overrides, "earInfections")}
      ></SwitchField>
      <SwitchField
        label="Endocrine problems"
        defaultChecked={false}
        isDisabled={false}
        isChecked={endocrineProblems}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems: value,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.endocrineProblems ?? value;
          }
          if (errors.endocrineProblems?.hasError) {
            runValidationTasks("endocrineProblems", value);
          }
          setEndocrineProblems(value);
        }}
        onBlur={() =>
          runValidationTasks("endocrineProblems", endocrineProblems)
        }
        errorMessage={errors.endocrineProblems?.errorMessage}
        hasError={errors.endocrineProblems?.hasError}
        {...getOverrideProps(overrides, "endocrineProblems")}
      ></SwitchField>
      <SwitchField
        label="Excessive sweating"
        defaultChecked={false}
        isDisabled={false}
        isChecked={excessiveSweating}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating: value,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.excessiveSweating ?? value;
          }
          if (errors.excessiveSweating?.hasError) {
            runValidationTasks("excessiveSweating", value);
          }
          setExcessiveSweating(value);
        }}
        onBlur={() =>
          runValidationTasks("excessiveSweating", excessiveSweating)
        }
        errorMessage={errors.excessiveSweating?.errorMessage}
        hasError={errors.excessiveSweating?.hasError}
        {...getOverrideProps(overrides, "excessiveSweating")}
      ></SwitchField>
      <SwitchField
        label="Fainting dizziness"
        defaultChecked={false}
        isDisabled={false}
        isChecked={faintingDizziness}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness: value,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.faintingDizziness ?? value;
          }
          if (errors.faintingDizziness?.hasError) {
            runValidationTasks("faintingDizziness", value);
          }
          setFaintingDizziness(value);
        }}
        onBlur={() =>
          runValidationTasks("faintingDizziness", faintingDizziness)
        }
        errorMessage={errors.faintingDizziness?.errorMessage}
        hasError={errors.faintingDizziness?.hasError}
        {...getOverrideProps(overrides, "faintingDizziness")}
      ></SwitchField>
      <SwitchField
        label="Heart disease"
        defaultChecked={false}
        isDisabled={false}
        isChecked={heartDisease}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease: value,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.heartDisease ?? value;
          }
          if (errors.heartDisease?.hasError) {
            runValidationTasks("heartDisease", value);
          }
          setHeartDisease(value);
        }}
        onBlur={() => runValidationTasks("heartDisease", heartDisease)}
        errorMessage={errors.heartDisease?.errorMessage}
        hasError={errors.heartDisease?.hasError}
        {...getOverrideProps(overrides, "heartDisease")}
      ></SwitchField>
      <SwitchField
        label="Foot problem"
        defaultChecked={false}
        isDisabled={false}
        isChecked={footProblem}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem: value,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.footProblem ?? value;
          }
          if (errors.footProblem?.hasError) {
            runValidationTasks("footProblem", value);
          }
          setFootProblem(value);
        }}
        onBlur={() => runValidationTasks("footProblem", footProblem)}
        errorMessage={errors.footProblem?.errorMessage}
        hasError={errors.footProblem?.hasError}
        {...getOverrideProps(overrides, "footProblem")}
      ></SwitchField>
      <SwitchField
        label="Frequent colds sore throats"
        defaultChecked={false}
        isDisabled={false}
        isChecked={frequentColdsSoreThroats}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats: value,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.frequentColdsSoreThroats ?? value;
          }
          if (errors.frequentColdsSoreThroats?.hasError) {
            runValidationTasks("frequentColdsSoreThroats", value);
          }
          setFrequentColdsSoreThroats(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "frequentColdsSoreThroats",
            frequentColdsSoreThroats
          )
        }
        errorMessage={errors.frequentColdsSoreThroats?.errorMessage}
        hasError={errors.frequentColdsSoreThroats?.hasError}
        {...getOverrideProps(overrides, "frequentColdsSoreThroats")}
      ></SwitchField>
      <SwitchField
        label="Frequent heartburn"
        defaultChecked={false}
        isDisabled={false}
        isChecked={frequentHeartburn}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn: value,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.frequentHeartburn ?? value;
          }
          if (errors.frequentHeartburn?.hasError) {
            runValidationTasks("frequentHeartburn", value);
          }
          setFrequentHeartburn(value);
        }}
        onBlur={() =>
          runValidationTasks("frequentHeartburn", frequentHeartburn)
        }
        errorMessage={errors.frequentHeartburn?.errorMessage}
        hasError={errors.frequentHeartburn?.hasError}
        {...getOverrideProps(overrides, "frequentHeartburn")}
      ></SwitchField>
      <SwitchField
        label="Frequent muscle cramps"
        defaultChecked={false}
        isDisabled={false}
        isChecked={frequentMuscleCramps}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps: value,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.frequentMuscleCramps ?? value;
          }
          if (errors.frequentMuscleCramps?.hasError) {
            runValidationTasks("frequentMuscleCramps", value);
          }
          setFrequentMuscleCramps(value);
        }}
        onBlur={() =>
          runValidationTasks("frequentMuscleCramps", frequentMuscleCramps)
        }
        errorMessage={errors.frequentMuscleCramps?.errorMessage}
        hasError={errors.frequentMuscleCramps?.hasError}
        {...getOverrideProps(overrides, "frequentMuscleCramps")}
      ></SwitchField>
      <SwitchField
        label="Frequent shortness of breath"
        defaultChecked={false}
        isDisabled={false}
        isChecked={frequentShortnessOfBreath}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath: value,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.frequentShortnessOfBreath ?? value;
          }
          if (errors.frequentShortnessOfBreath?.hasError) {
            runValidationTasks("frequentShortnessOfBreath", value);
          }
          setFrequentShortnessOfBreath(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "frequentShortnessOfBreath",
            frequentShortnessOfBreath
          )
        }
        errorMessage={errors.frequentShortnessOfBreath?.errorMessage}
        hasError={errors.frequentShortnessOfBreath?.hasError}
        {...getOverrideProps(overrides, "frequentShortnessOfBreath")}
      ></SwitchField>
      <SwitchField
        label="Frostbite"
        defaultChecked={false}
        isDisabled={false}
        isChecked={frostbite}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite: value,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.frostbite ?? value;
          }
          if (errors.frostbite?.hasError) {
            runValidationTasks("frostbite", value);
          }
          setFrostbite(value);
        }}
        onBlur={() => runValidationTasks("frostbite", frostbite)}
        errorMessage={errors.frostbite?.errorMessage}
        hasError={errors.frostbite?.hasError}
        {...getOverrideProps(overrides, "frostbite")}
      ></SwitchField>
      <SwitchField
        label="Gas bloating"
        defaultChecked={false}
        isDisabled={false}
        isChecked={gasBloating}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating: value,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.gasBloating ?? value;
          }
          if (errors.gasBloating?.hasError) {
            runValidationTasks("gasBloating", value);
          }
          setGasBloating(value);
        }}
        onBlur={() => runValidationTasks("gasBloating", gasBloating)}
        errorMessage={errors.gasBloating?.errorMessage}
        hasError={errors.gasBloating?.hasError}
        {...getOverrideProps(overrides, "gasBloating")}
      ></SwitchField>
      <SwitchField
        label="Hivaids"
        defaultChecked={false}
        isDisabled={false}
        isChecked={HIVAIDS}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS: value,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.HIVAIDS ?? value;
          }
          if (errors.HIVAIDS?.hasError) {
            runValidationTasks("HIVAIDS", value);
          }
          setHIVAIDS(value);
        }}
        onBlur={() => runValidationTasks("HIVAIDS", HIVAIDS)}
        errorMessage={errors.HIVAIDS?.errorMessage}
        hasError={errors.HIVAIDS?.hasError}
        {...getOverrideProps(overrides, "HIVAIDS")}
      ></SwitchField>
      <SwitchField
        label="Head traumas"
        defaultChecked={false}
        isDisabled={false}
        isChecked={headTraumas}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas: value,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.headTraumas ?? value;
          }
          if (errors.headTraumas?.hasError) {
            runValidationTasks("headTraumas", value);
          }
          setHeadTraumas(value);
        }}
        onBlur={() => runValidationTasks("headTraumas", headTraumas)}
        errorMessage={errors.headTraumas?.errorMessage}
        hasError={errors.headTraumas?.hasError}
        {...getOverrideProps(overrides, "headTraumas")}
      ></SwitchField>
      <SwitchField
        label="Headaches migraines"
        defaultChecked={false}
        isDisabled={false}
        isChecked={headachesMigraines}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines: value,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.headachesMigraines ?? value;
          }
          if (errors.headachesMigraines?.hasError) {
            runValidationTasks("headachesMigraines", value);
          }
          setHeadachesMigraines(value);
        }}
        onBlur={() =>
          runValidationTasks("headachesMigraines", headachesMigraines)
        }
        errorMessage={errors.headachesMigraines?.errorMessage}
        hasError={errors.headachesMigraines?.hasError}
        {...getOverrideProps(overrides, "headachesMigraines")}
      ></SwitchField>
      <SwitchField
        label="Hearing impairment"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hearingImpairment}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment: value,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.hearingImpairment ?? value;
          }
          if (errors.hearingImpairment?.hasError) {
            runValidationTasks("hearingImpairment", value);
          }
          setHearingImpairment(value);
        }}
        onBlur={() =>
          runValidationTasks("hearingImpairment", hearingImpairment)
        }
        errorMessage={errors.hearingImpairment?.errorMessage}
        hasError={errors.hearingImpairment?.hasError}
        {...getOverrideProps(overrides, "hearingImpairment")}
      ></SwitchField>
      <SwitchField
        label="Heart problems murmurs"
        defaultChecked={false}
        isDisabled={false}
        isChecked={heartProblemsMurmurs}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs: value,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.heartProblemsMurmurs ?? value;
          }
          if (errors.heartProblemsMurmurs?.hasError) {
            runValidationTasks("heartProblemsMurmurs", value);
          }
          setHeartProblemsMurmurs(value);
        }}
        onBlur={() =>
          runValidationTasks("heartProblemsMurmurs", heartProblemsMurmurs)
        }
        errorMessage={errors.heartProblemsMurmurs?.errorMessage}
        hasError={errors.heartProblemsMurmurs?.hasError}
        {...getOverrideProps(overrides, "heartProblemsMurmurs")}
      ></SwitchField>
      <SwitchField
        label="Hepatitis abc"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hepatitisABC}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC: value,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.hepatitisABC ?? value;
          }
          if (errors.hepatitisABC?.hasError) {
            runValidationTasks("hepatitisABC", value);
          }
          setHepatitisABC(value);
        }}
        onBlur={() => runValidationTasks("hepatitisABC", hepatitisABC)}
        errorMessage={errors.hepatitisABC?.errorMessage}
        hasError={errors.hepatitisABC?.hasError}
        {...getOverrideProps(overrides, "hepatitisABC")}
      ></SwitchField>
      <SwitchField
        label="Hernia"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hernia}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia: value,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.hernia ?? value;
          }
          if (errors.hernia?.hasError) {
            runValidationTasks("hernia", value);
          }
          setHernia(value);
        }}
        onBlur={() => runValidationTasks("hernia", hernia)}
        errorMessage={errors.hernia?.errorMessage}
        hasError={errors.hernia?.hasError}
        {...getOverrideProps(overrides, "hernia")}
      ></SwitchField>
      <SwitchField
        label="High blood pressure"
        defaultChecked={false}
        isDisabled={false}
        isChecked={highBloodPressure}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure: value,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.highBloodPressure ?? value;
          }
          if (errors.highBloodPressure?.hasError) {
            runValidationTasks("highBloodPressure", value);
          }
          setHighBloodPressure(value);
        }}
        onBlur={() =>
          runValidationTasks("highBloodPressure", highBloodPressure)
        }
        errorMessage={errors.highBloodPressure?.errorMessage}
        hasError={errors.highBloodPressure?.hasError}
        {...getOverrideProps(overrides, "highBloodPressure")}
      ></SwitchField>
      <SwitchField
        label="Hypoglycemia"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hypoglycemia}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia: value,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.hypoglycemia ?? value;
          }
          if (errors.hypoglycemia?.hasError) {
            runValidationTasks("hypoglycemia", value);
          }
          setHypoglycemia(value);
        }}
        onBlur={() => runValidationTasks("hypoglycemia", hypoglycemia)}
        errorMessage={errors.hypoglycemia?.errorMessage}
        hasError={errors.hypoglycemia?.hasError}
        {...getOverrideProps(overrides, "hypoglycemia")}
      ></SwitchField>
      <SwitchField
        label="Intolerance to cold"
        defaultChecked={false}
        isDisabled={false}
        isChecked={intoleranceToCold}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold: value,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.intoleranceToCold ?? value;
          }
          if (errors.intoleranceToCold?.hasError) {
            runValidationTasks("intoleranceToCold", value);
          }
          setIntoleranceToCold(value);
        }}
        onBlur={() =>
          runValidationTasks("intoleranceToCold", intoleranceToCold)
        }
        errorMessage={errors.intoleranceToCold?.errorMessage}
        hasError={errors.intoleranceToCold?.hasError}
        {...getOverrideProps(overrides, "intoleranceToCold")}
      ></SwitchField>
      <SwitchField
        label="Intolerance to heat"
        defaultChecked={false}
        isDisabled={false}
        isChecked={intoleranceToHeat}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat: value,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.intoleranceToHeat ?? value;
          }
          if (errors.intoleranceToHeat?.hasError) {
            runValidationTasks("intoleranceToHeat", value);
          }
          setIntoleranceToHeat(value);
        }}
        onBlur={() =>
          runValidationTasks("intoleranceToHeat", intoleranceToHeat)
        }
        errorMessage={errors.intoleranceToHeat?.errorMessage}
        hasError={errors.intoleranceToHeat?.hasError}
        {...getOverrideProps(overrides, "intoleranceToHeat")}
      ></SwitchField>
      <SwitchField
        label="Irregular heartbeat"
        defaultChecked={false}
        isDisabled={false}
        isChecked={irregularHeartbeat}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat: value,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.irregularHeartbeat ?? value;
          }
          if (errors.irregularHeartbeat?.hasError) {
            runValidationTasks("irregularHeartbeat", value);
          }
          setIrregularHeartbeat(value);
        }}
        onBlur={() =>
          runValidationTasks("irregularHeartbeat", irregularHeartbeat)
        }
        errorMessage={errors.irregularHeartbeat?.errorMessage}
        hasError={errors.irregularHeartbeat?.hasError}
        {...getOverrideProps(overrides, "irregularHeartbeat")}
      ></SwitchField>
      <SwitchField
        label="Joint injuries"
        defaultChecked={false}
        isDisabled={false}
        isChecked={jointInjuries}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries: value,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.jointInjuries ?? value;
          }
          if (errors.jointInjuries?.hasError) {
            runValidationTasks("jointInjuries", value);
          }
          setJointInjuries(value);
        }}
        onBlur={() => runValidationTasks("jointInjuries", jointInjuries)}
        errorMessage={errors.jointInjuries?.errorMessage}
        hasError={errors.jointInjuries?.hasError}
        {...getOverrideProps(overrides, "jointInjuries")}
      ></SwitchField>
      <SwitchField
        label="Kidney problems"
        defaultChecked={false}
        isDisabled={false}
        isChecked={kidneyProblems}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems: value,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.kidneyProblems ?? value;
          }
          if (errors.kidneyProblems?.hasError) {
            runValidationTasks("kidneyProblems", value);
          }
          setKidneyProblems(value);
        }}
        onBlur={() => runValidationTasks("kidneyProblems", kidneyProblems)}
        errorMessage={errors.kidneyProblems?.errorMessage}
        hasError={errors.kidneyProblems?.hasError}
        {...getOverrideProps(overrides, "kidneyProblems")}
      ></SwitchField>
      <SwitchField
        label="Knee problem"
        defaultChecked={false}
        isDisabled={false}
        isChecked={kneeProblem}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem: value,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.kneeProblem ?? value;
          }
          if (errors.kneeProblem?.hasError) {
            runValidationTasks("kneeProblem", value);
          }
          setKneeProblem(value);
        }}
        onBlur={() => runValidationTasks("kneeProblem", kneeProblem)}
        errorMessage={errors.kneeProblem?.errorMessage}
        hasError={errors.kneeProblem?.hasError}
        {...getOverrideProps(overrides, "kneeProblem")}
      ></SwitchField>
      <SwitchField
        label="Leg problem"
        defaultChecked={false}
        isDisabled={false}
        isChecked={legProblem}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem: value,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.legProblem ?? value;
          }
          if (errors.legProblem?.hasError) {
            runValidationTasks("legProblem", value);
          }
          setLegProblem(value);
        }}
        onBlur={() => runValidationTasks("legProblem", legProblem)}
        errorMessage={errors.legProblem?.errorMessage}
        hasError={errors.legProblem?.hasError}
        {...getOverrideProps(overrides, "legProblem")}
      ></SwitchField>
      <SwitchField
        label="Liver problems"
        defaultChecked={false}
        isDisabled={false}
        isChecked={liverProblems}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems: value,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.liverProblems ?? value;
          }
          if (errors.liverProblems?.hasError) {
            runValidationTasks("liverProblems", value);
          }
          setLiverProblems(value);
        }}
        onBlur={() => runValidationTasks("liverProblems", liverProblems)}
        errorMessage={errors.liverProblems?.errorMessage}
        hasError={errors.liverProblems?.hasError}
        {...getOverrideProps(overrides, "liverProblems")}
      ></SwitchField>
      <SwitchField
        label="Lung infections"
        defaultChecked={false}
        isDisabled={false}
        isChecked={lungInfections}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections: value,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.lungInfections ?? value;
          }
          if (errors.lungInfections?.hasError) {
            runValidationTasks("lungInfections", value);
          }
          setLungInfections(value);
        }}
        onBlur={() => runValidationTasks("lungInfections", lungInfections)}
        errorMessage={errors.lungInfections?.errorMessage}
        hasError={errors.lungInfections?.hasError}
        {...getOverrideProps(overrides, "lungInfections")}
      ></SwitchField>
      <SwitchField
        label="Medical equipment devices"
        defaultChecked={false}
        isDisabled={false}
        isChecked={medicalEquipmentDevices}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices: value,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.medicalEquipmentDevices ?? value;
          }
          if (errors.medicalEquipmentDevices?.hasError) {
            runValidationTasks("medicalEquipmentDevices", value);
          }
          setMedicalEquipmentDevices(value);
        }}
        onBlur={() =>
          runValidationTasks("medicalEquipmentDevices", medicalEquipmentDevices)
        }
        errorMessage={errors.medicalEquipmentDevices?.errorMessage}
        hasError={errors.medicalEquipmentDevices?.hasError}
        {...getOverrideProps(overrides, "medicalEquipmentDevices")}
      ></SwitchField>
      <SwitchField
        label="Meningitis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={meningitis}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis: value,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.meningitis ?? value;
          }
          if (errors.meningitis?.hasError) {
            runValidationTasks("meningitis", value);
          }
          setMeningitis(value);
        }}
        onBlur={() => runValidationTasks("meningitis", meningitis)}
        errorMessage={errors.meningitis?.errorMessage}
        hasError={errors.meningitis?.hasError}
        {...getOverrideProps(overrides, "meningitis")}
      ></SwitchField>
      <SwitchField
        label="Menstrual problems"
        defaultChecked={false}
        isDisabled={false}
        isChecked={menstrualProblems}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems: value,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.menstrualProblems ?? value;
          }
          if (errors.menstrualProblems?.hasError) {
            runValidationTasks("menstrualProblems", value);
          }
          setMenstrualProblems(value);
        }}
        onBlur={() =>
          runValidationTasks("menstrualProblems", menstrualProblems)
        }
        errorMessage={errors.menstrualProblems?.errorMessage}
        hasError={errors.menstrualProblems?.hasError}
        {...getOverrideProps(overrides, "menstrualProblems")}
      ></SwitchField>
      <SwitchField
        label="Mononucleosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={mononucleosis}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis: value,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.mononucleosis ?? value;
          }
          if (errors.mononucleosis?.hasError) {
            runValidationTasks("mononucleosis", value);
          }
          setMononucleosis(value);
        }}
        onBlur={() => runValidationTasks("mononucleosis", mononucleosis)}
        errorMessage={errors.mononucleosis?.errorMessage}
        hasError={errors.mononucleosis?.hasError}
        {...getOverrideProps(overrides, "mononucleosis")}
      ></SwitchField>
      <SwitchField
        label="Motion sickness"
        defaultChecked={false}
        isDisabled={false}
        isChecked={motionSickness}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness: value,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.motionSickness ?? value;
          }
          if (errors.motionSickness?.hasError) {
            runValidationTasks("motionSickness", value);
          }
          setMotionSickness(value);
        }}
        onBlur={() => runValidationTasks("motionSickness", motionSickness)}
        errorMessage={errors.motionSickness?.errorMessage}
        hasError={errors.motionSickness?.hasError}
        {...getOverrideProps(overrides, "motionSickness")}
      ></SwitchField>
      <SwitchField
        label="Obesity"
        defaultChecked={false}
        isDisabled={false}
        isChecked={obesity}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity: value,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.obesity ?? value;
          }
          if (errors.obesity?.hasError) {
            runValidationTasks("obesity", value);
          }
          setObesity(value);
        }}
        onBlur={() => runValidationTasks("obesity", obesity)}
        errorMessage={errors.obesity?.errorMessage}
        hasError={errors.obesity?.hasError}
        {...getOverrideProps(overrides, "obesity")}
      ></SwitchField>
      <SwitchField
        label="Other"
        defaultChecked={false}
        isDisabled={false}
        isChecked={other}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other: value,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.other ?? value;
          }
          if (errors.other?.hasError) {
            runValidationTasks("other", value);
          }
          setOther(value);
        }}
        onBlur={() => runValidationTasks("other", other)}
        errorMessage={errors.other?.errorMessage}
        hasError={errors.other?.hasError}
        {...getOverrideProps(overrides, "other")}
      ></SwitchField>
      <SwitchField
        label="Pms severe symptoms"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PMSSevereSymptoms}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms: value,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.PMSSevereSymptoms ?? value;
          }
          if (errors.PMSSevereSymptoms?.hasError) {
            runValidationTasks("PMSSevereSymptoms", value);
          }
          setPMSSevereSymptoms(value);
        }}
        onBlur={() =>
          runValidationTasks("PMSSevereSymptoms", PMSSevereSymptoms)
        }
        errorMessage={errors.PMSSevereSymptoms?.errorMessage}
        hasError={errors.PMSSevereSymptoms?.hasError}
        {...getOverrideProps(overrides, "PMSSevereSymptoms")}
      ></SwitchField>
      <SwitchField
        label="Pneumonia bronchitis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={pneumoniaBronchitis}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis: value,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.pneumoniaBronchitis ?? value;
          }
          if (errors.pneumoniaBronchitis?.hasError) {
            runValidationTasks("pneumoniaBronchitis", value);
          }
          setPneumoniaBronchitis(value);
        }}
        onBlur={() =>
          runValidationTasks("pneumoniaBronchitis", pneumoniaBronchitis)
        }
        errorMessage={errors.pneumoniaBronchitis?.errorMessage}
        hasError={errors.pneumoniaBronchitis?.hasError}
        {...getOverrideProps(overrides, "pneumoniaBronchitis")}
      ></SwitchField>
      <SwitchField
        label="Pregnancy"
        defaultChecked={false}
        isDisabled={false}
        isChecked={pregnancy}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy: value,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.pregnancy ?? value;
          }
          if (errors.pregnancy?.hasError) {
            runValidationTasks("pregnancy", value);
          }
          setPregnancy(value);
        }}
        onBlur={() => runValidationTasks("pregnancy", pregnancy)}
        errorMessage={errors.pregnancy?.errorMessage}
        hasError={errors.pregnancy?.hasError}
        {...getOverrideProps(overrides, "pregnancy")}
      ></SwitchField>
      <SwitchField
        label="Recurrent injury surgery"
        defaultChecked={false}
        isDisabled={false}
        isChecked={recurrentInjurySurgery}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery: value,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.recurrentInjurySurgery ?? value;
          }
          if (errors.recurrentInjurySurgery?.hasError) {
            runValidationTasks("recurrentInjurySurgery", value);
          }
          setRecurrentInjurySurgery(value);
        }}
        onBlur={() =>
          runValidationTasks("recurrentInjurySurgery", recurrentInjurySurgery)
        }
        errorMessage={errors.recurrentInjurySurgery?.errorMessage}
        hasError={errors.recurrentInjurySurgery?.hasError}
        {...getOverrideProps(overrides, "recurrentInjurySurgery")}
      ></SwitchField>
      <SwitchField
        label="St ds"
        defaultChecked={false}
        isDisabled={false}
        isChecked={STDs}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs: value,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.STDs ?? value;
          }
          if (errors.STDs?.hasError) {
            runValidationTasks("STDs", value);
          }
          setSTDs(value);
        }}
        onBlur={() => runValidationTasks("STDs", STDs)}
        errorMessage={errors.STDs?.errorMessage}
        hasError={errors.STDs?.hasError}
        {...getOverrideProps(overrides, "STDs")}
      ></SwitchField>
      <SwitchField
        label="Scoliosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={scoliosis}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis: value,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.scoliosis ?? value;
          }
          if (errors.scoliosis?.hasError) {
            runValidationTasks("scoliosis", value);
          }
          setScoliosis(value);
        }}
        onBlur={() => runValidationTasks("scoliosis", scoliosis)}
        errorMessage={errors.scoliosis?.errorMessage}
        hasError={errors.scoliosis?.hasError}
        {...getOverrideProps(overrides, "scoliosis")}
      ></SwitchField>
      <SwitchField
        label="Seizures epilepsy"
        defaultChecked={false}
        isDisabled={false}
        isChecked={seizuresEpilepsy}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy: value,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.seizuresEpilepsy ?? value;
          }
          if (errors.seizuresEpilepsy?.hasError) {
            runValidationTasks("seizuresEpilepsy", value);
          }
          setSeizuresEpilepsy(value);
        }}
        onBlur={() => runValidationTasks("seizuresEpilepsy", seizuresEpilepsy)}
        errorMessage={errors.seizuresEpilepsy?.errorMessage}
        hasError={errors.seizuresEpilepsy?.hasError}
        {...getOverrideProps(overrides, "seizuresEpilepsy")}
      ></SwitchField>
      <SwitchField
        label="Shoulder problem"
        defaultChecked={false}
        isDisabled={false}
        isChecked={shoulderProblem}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem: value,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.shoulderProblem ?? value;
          }
          if (errors.shoulderProblem?.hasError) {
            runValidationTasks("shoulderProblem", value);
          }
          setShoulderProblem(value);
        }}
        onBlur={() => runValidationTasks("shoulderProblem", shoulderProblem)}
        errorMessage={errors.shoulderProblem?.errorMessage}
        hasError={errors.shoulderProblem?.hasError}
        {...getOverrideProps(overrides, "shoulderProblem")}
      ></SwitchField>
      <SwitchField
        label="Skin diseases problems"
        defaultChecked={false}
        isDisabled={false}
        isChecked={skinDiseasesProblems}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems: value,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.skinDiseasesProblems ?? value;
          }
          if (errors.skinDiseasesProblems?.hasError) {
            runValidationTasks("skinDiseasesProblems", value);
          }
          setSkinDiseasesProblems(value);
        }}
        onBlur={() =>
          runValidationTasks("skinDiseasesProblems", skinDiseasesProblems)
        }
        errorMessage={errors.skinDiseasesProblems?.errorMessage}
        hasError={errors.skinDiseasesProblems?.hasError}
        {...getOverrideProps(overrides, "skinDiseasesProblems")}
      ></SwitchField>
      <SwitchField
        label="Sleepwalking"
        defaultChecked={false}
        isDisabled={false}
        isChecked={sleepwalking}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking: value,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.sleepwalking ?? value;
          }
          if (errors.sleepwalking?.hasError) {
            runValidationTasks("sleepwalking", value);
          }
          setSleepwalking(value);
        }}
        onBlur={() => runValidationTasks("sleepwalking", sleepwalking)}
        errorMessage={errors.sleepwalking?.errorMessage}
        hasError={errors.sleepwalking?.hasError}
        {...getOverrideProps(overrides, "sleepwalking")}
      ></SwitchField>
      <SwitchField
        label="Tb positive"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TBPositive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive: value,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.TBPositive ?? value;
          }
          if (errors.TBPositive?.hasError) {
            runValidationTasks("TBPositive", value);
          }
          setTBPositive(value);
        }}
        onBlur={() => runValidationTasks("TBPositive", TBPositive)}
        errorMessage={errors.TBPositive?.errorMessage}
        hasError={errors.TBPositive?.hasError}
        {...getOverrideProps(overrides, "TBPositive")}
      ></SwitchField>
      <SwitchField
        label="Tb recent exposure"
        defaultChecked={false}
        isDisabled={false}
        isChecked={TBRecentExposure}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure: value,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.TBRecentExposure ?? value;
          }
          if (errors.TBRecentExposure?.hasError) {
            runValidationTasks("TBRecentExposure", value);
          }
          setTBRecentExposure(value);
        }}
        onBlur={() => runValidationTasks("TBRecentExposure", TBRecentExposure)}
        errorMessage={errors.TBRecentExposure?.errorMessage}
        hasError={errors.TBRecentExposure?.hasError}
        {...getOverrideProps(overrides, "TBRecentExposure")}
      ></SwitchField>
      <SwitchField
        label="Tuberculosis"
        defaultChecked={false}
        isDisabled={false}
        isChecked={tuberculosis}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis: value,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.tuberculosis ?? value;
          }
          if (errors.tuberculosis?.hasError) {
            runValidationTasks("tuberculosis", value);
          }
          setTuberculosis(value);
        }}
        onBlur={() => runValidationTasks("tuberculosis", tuberculosis)}
        errorMessage={errors.tuberculosis?.errorMessage}
        hasError={errors.tuberculosis?.hasError}
        {...getOverrideProps(overrides, "tuberculosis")}
      ></SwitchField>
      <SwitchField
        label="Thyroid problems"
        defaultChecked={false}
        isDisabled={false}
        isChecked={thyroidProblems}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems: value,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.thyroidProblems ?? value;
          }
          if (errors.thyroidProblems?.hasError) {
            runValidationTasks("thyroidProblems", value);
          }
          setThyroidProblems(value);
        }}
        onBlur={() => runValidationTasks("thyroidProblems", thyroidProblems)}
        errorMessage={errors.thyroidProblems?.errorMessage}
        hasError={errors.thyroidProblems?.hasError}
        {...getOverrideProps(overrides, "thyroidProblems")}
      ></SwitchField>
      <SwitchField
        label="Ulcers"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ulcers}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers: value,
              unexpectedWeightLoss,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.ulcers ?? value;
          }
          if (errors.ulcers?.hasError) {
            runValidationTasks("ulcers", value);
          }
          setUlcers(value);
        }}
        onBlur={() => runValidationTasks("ulcers", ulcers)}
        errorMessage={errors.ulcers?.errorMessage}
        hasError={errors.ulcers?.hasError}
        {...getOverrideProps(overrides, "ulcers")}
      ></SwitchField>
      <SwitchField
        label="Unexpected weight loss"
        defaultChecked={false}
        isDisabled={false}
        isChecked={unexpectedWeightLoss}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss: value,
              urinationProblem,
            };
            const result = onChange(modelFields);
            value = result?.unexpectedWeightLoss ?? value;
          }
          if (errors.unexpectedWeightLoss?.hasError) {
            runValidationTasks("unexpectedWeightLoss", value);
          }
          setUnexpectedWeightLoss(value);
        }}
        onBlur={() =>
          runValidationTasks("unexpectedWeightLoss", unexpectedWeightLoss)
        }
        errorMessage={errors.unexpectedWeightLoss?.errorMessage}
        hasError={errors.unexpectedWeightLoss?.hasError}
        {...getOverrideProps(overrides, "unexpectedWeightLoss")}
      ></SwitchField>
      <SwitchField
        label="Urination problem"
        defaultChecked={false}
        isDisabled={false}
        isChecked={urinationProblem}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              allergies,
              anaphylacticShock,
              anemia,
              ankleProblem,
              anorexiaBulimia,
              appendicitis,
              armProblem,
              arthritis,
              asthma,
              backProblems,
              bedwetting,
              bladderKidneyProblems,
              bleedingDisorder,
              boneCondition,
              bowelProblems,
              brokenBones,
              cancer,
              chestPains,
              chronicCough,
              circulationIssues,
              coldsFrequent,
              constipation,
              cystsTumors,
              dermatitis,
              diabetes,
              diarrhea,
              difficultyWalking,
              earInfections,
              endocrineProblems,
              excessiveSweating,
              faintingDizziness,
              heartDisease,
              footProblem,
              frequentColdsSoreThroats,
              frequentHeartburn,
              frequentMuscleCramps,
              frequentShortnessOfBreath,
              frostbite,
              gasBloating,
              HIVAIDS,
              headTraumas,
              headachesMigraines,
              hearingImpairment,
              heartProblemsMurmurs,
              hepatitisABC,
              hernia,
              highBloodPressure,
              hypoglycemia,
              intoleranceToCold,
              intoleranceToHeat,
              irregularHeartbeat,
              jointInjuries,
              kidneyProblems,
              kneeProblem,
              legProblem,
              liverProblems,
              lungInfections,
              medicalEquipmentDevices,
              meningitis,
              menstrualProblems,
              mononucleosis,
              motionSickness,
              obesity,
              other,
              PMSSevereSymptoms,
              pneumoniaBronchitis,
              pregnancy,
              recurrentInjurySurgery,
              STDs,
              scoliosis,
              seizuresEpilepsy,
              shoulderProblem,
              skinDiseasesProblems,
              sleepwalking,
              TBPositive,
              TBRecentExposure,
              tuberculosis,
              thyroidProblems,
              ulcers,
              unexpectedWeightLoss,
              urinationProblem: value,
            };
            const result = onChange(modelFields);
            value = result?.urinationProblem ?? value;
          }
          if (errors.urinationProblem?.hasError) {
            runValidationTasks("urinationProblem", value);
          }
          setUrinationProblem(value);
        }}
        onBlur={() => runValidationTasks("urinationProblem", urinationProblem)}
        errorMessage={errors.urinationProblem?.errorMessage}
        hasError={errors.urinationProblem?.hasError}
        {...getOverrideProps(overrides, "urinationProblem")}
      ></SwitchField>
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
