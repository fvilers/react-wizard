import { Step, Steps, Wizard } from "@fvilers/react-wizard";

function App() {
  return (
    <div>
      <h1>React Wizard Demo</h1>
      <Wizard>
        <Steps>
          <Step
            element={
              <div>
                <h2>Step 1</h2>
              </div>
            }
          />
          <Step
            element={
              <div>
                <h2>Step 2</h2>
              </div>
            }
          />
        </Steps>
      </Wizard>
    </div>
  );
}

export default App;
