import React, {
  Children,
  isValidElement,
  PropsWithChildren,
  ReactNode,
  useMemo,
  useState,
} from "react";
import Steps, { StepsProps } from "./Steps";
import WizardContext from "./WizardContext";

type Props = PropsWithChildren<{}>;

function Wizard({ children }: Props) {
  const stepCount = useMemo(
    () => getStepCountFromChildren(children),
    [children]
  );
  const [stepIndex, setStepIndex] = useState(0);
  const canPrev = stepIndex > 0;
  const canNext = stepIndex < stepCount - 1;
  const prev = () => {
    if (canPrev) {
      setStepIndex((current) => current - 1);
    }
  };
  const next = () => {
    if (canNext) {
      setStepIndex((current) => current + 1);
    }
  };

  return (
    <WizardContext.Provider
      value={{ canPrev, canNext, prev, next, stepIndex, stepCount }}
    >
      {children}
    </WizardContext.Provider>
  );
}

function getStepCountFromChildren(children: ReactNode): number {
  for (const child of Children.toArray(children)) {
    if (
      isValidElement<StepsProps>(child) &&
      child.type === Steps &&
      Array.isArray(child.props.children)
    ) {
      return child.props.children.length;
    }
  }

  return 0;
}

export default Wizard;
