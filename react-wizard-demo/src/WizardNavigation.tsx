import { useWizard } from "@fvilers/react-wizard";

function WizardNavigation() {
  const { canPrev, canNext, prev, next, stepIndex } = useWizard();

  return (
    <div>
      <button disabled={!canPrev} onClick={prev}>
        Prev
      </button>
      <button disabled={!canNext} onClick={next}>
        Next
      </button>
      Current step: {stepIndex}
    </div>
  );
}

export default WizardNavigation;
