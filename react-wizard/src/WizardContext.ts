import { createContext, useContext } from "react";

type NavigationFunction = () => void;

type WizardContextType = {
  canPrev: boolean;
  canNext: boolean;
  prev: NavigationFunction;
  next: NavigationFunction;
  stepIndex: number;
  stepCount: number;
};

const WizardContext = createContext<WizardContextType>({
  canPrev: false,
  canNext: false,
  prev: () => {},
  next: () => {},
  stepIndex: 0,
  stepCount: 0,
});

export function useWizard() {
  return useContext(WizardContext);
}

export default WizardContext;
