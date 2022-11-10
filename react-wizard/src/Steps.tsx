import React, {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactNode,
} from "react";
import Step from "./Step";
import StepObject from "./StepObject";
import { useWizard } from "./WizardContext";

type Props = PropsWithChildren<{}>;

function Steps({ children }: Props) {
  const steps = createStepsFromChildren(children);
  const { stepIndex } = useWizard();
  const currentStep = steps.at(stepIndex);

  if (currentStep === undefined || !isValidElement(currentStep.element)) {
    return null;
  }

  const element = cloneElement(currentStep.element, {});

  return <>{element}</>;
}

function createStepsFromChildren(children: ReactNode) {
  const steps: StepObject[] = [];

  Children.forEach(children, (element, index) => {
    if (!isValidElement(element)) {
      return;
    }

    if (element.type !== Step) {
      const typeName =
        typeof element.type === "string" ? element.type : element.type.name;
      throw new Error(
        `[${typeName}] is not a <Step> component. All component children of <Wizard> must be a <Step>`
      );
    }

    steps.push({ index, element: element.props.element });
  });

  return steps;
}

export default Steps;
