import { useWizard } from "@fvilers/react-wizard";

function WizardNavigation() {
  const { canPrev, canNext, prev, next, stepIndex, stepCount } = useWizard();

  return (
    <div>
      <button disabled={!canPrev} onClick={prev}>
        Prev
      </button>
      <button disabled={!canNext} onClick={next}>
        Next
      </button>
      Step: {stepIndex + 1}/{stepCount}
    </div>
  );
}

export default WizardNavigation;
