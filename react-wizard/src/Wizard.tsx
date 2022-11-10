import React, { PropsWithChildren, useState } from "react";
import WizardContext from "./WizardContext";

type Props = PropsWithChildren<{}>;

function Wizard({ children }: Props) {
  const [stepIndex, setStepIndex] = useState(0);

  return (
    <WizardContext.Provider value={{ stepIndex }}>
      {children}
    </WizardContext.Provider>
  );
}

export default Wizard;
