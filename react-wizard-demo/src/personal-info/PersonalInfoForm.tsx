import { FormEvent, useState } from "react";
import FormProps from "../FormProps";

export type PersonalInfoValues = {
  firstName: string;
  lastName: string;
};

type Props = FormProps<PersonalInfoValues>;

function PersonalInfoForm({ disabled, errorMessage, onSubmit, value }: Props) {
  const [firstName, setFirstName] = useState(value?.firstName ?? "");
  const [lastName, setLastName] = useState(value?.lastName ?? "");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ firstName, lastName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          disabled={disabled}
          id="firstName"
          onChange={(e) => setFirstName(e.currentTarget.value)}
          required
          value={firstName}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last name</label>
        <input
          disabled={disabled}
          id="lastName"
          onChange={(e) => setLastName(e.currentTarget.value)}
          required
          value={lastName}
        />
      </div>

      {errorMessage && <div> {errorMessage}</div>}

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default PersonalInfoForm;
