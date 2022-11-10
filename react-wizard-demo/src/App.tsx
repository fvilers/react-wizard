import { Step, Steps, Wizard } from "@fvilers/react-wizard";
import Address from "./address/Address";
import PersonalInfo from "./personal-info/PersonalInfo";
import WizardNavigation from "./WizardNavigation";

function App() {
  return (
    <div>
      <h1>React Wizard Demo</h1>
      <Wizard>
        <Steps>
          <Step element={<PersonalInfo />} />
          <Step element={<Address />} />
        </Steps>
        <WizardNavigation />
      </Wizard>
    </div>
  );
}

export default App;
