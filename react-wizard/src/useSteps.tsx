import React, { cloneElement, isValidElement } from "react";
import StepObject from "./StepObject";

function useSteps(steps: StepObject[]) {
  if (steps.length < 1) {
    return null;
  }

  // TODO: select the right step
  const currentStep = steps[0];

  if (!isValidElement(currentStep.element)) {
    return null;
  }

  const element = cloneElement(currentStep.element, {});

  return <>{element}</>;
}

export default useSteps;
