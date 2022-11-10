import { useWizard } from "@fvilers/react-wizard";
import PersonalInfoForm, { PersonalInfoValues } from "./PersonalInfoForm";

const KEY = "react-wizard-demo:personal-info";

function PersonalInfo() {
  const personalInfo = JSON.parse(window.localStorage.getItem(KEY) ?? "{}");
  const { next } = useWizard();
  const handlePersonalInfo = (personalInfo: PersonalInfoValues) => {
    window.localStorage.setItem(KEY, JSON.stringify(personalInfo));
    next();
  };

  return (
    <PersonalInfoForm onSubmit={handlePersonalInfo} value={personalInfo} />
  );
}

export default PersonalInfo;
