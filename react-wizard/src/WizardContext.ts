import { createContext, useContext } from "react";

type WizardContextType = {
  stepIndex: number;
};

const WizardContext = createContext<WizardContextType>({
  stepIndex: 0,
});

export function useWizard() {
  return useContext(WizardContext);
}

export default WizardContext;
