import { useWizard } from "@fvilers/react-wizard";
import PersonalInfoForm from "./PersonalInfoForm";

function PersonalInfo() {
  const { next } = useWizard();
  const handlePersonalInfo = () => {
    // TODO: save personal info
    next();
  };

  return <PersonalInfoForm onSubmit={handlePersonalInfo} />;
}

export default PersonalInfo;
