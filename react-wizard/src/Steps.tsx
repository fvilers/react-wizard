import { Children, isValidElement, PropsWithChildren, ReactNode } from "react";
import Step from "./Step";
import StepObject from "./StepObject";
import useSteps from "./useSteps";

type Props = PropsWithChildren<{}>;

function Steps({ children }: Props) {
  const steps = createStepsFromChildren(children);

  return useSteps(steps);
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
