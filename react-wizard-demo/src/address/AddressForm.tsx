import { FormEvent, useState } from "react";
import FormProps from "../FormProps";

export type AddressValues = {
  street: string;
  postalCode: string;
  city: string;
};

type Props = FormProps<AddressValues>;

function AddressForm({ disabled, errorMessage, onSubmit, value }: Props) {
  const [street, setStreet] = useState(value?.street ?? "");
  const [postalCode, setPostalCode] = useState(value?.postalCode ?? "");
  const [city, setCity] = useState(value?.city ?? "");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ street, postalCode, city });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="street">Street</label>
        <input
          disabled={disabled}
          id="street"
          onChange={(e) => setStreet(e.currentTarget.value)}
          required
          value={street}
        />
      </div>

      <div>
        <label htmlFor="postalCode">Postal code</label>
        <input
          disabled={disabled}
          id="postalCode"
          onChange={(e) => setPostalCode(e.currentTarget.value)}
          required
          value={postalCode}
        />
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input
          disabled={disabled}
          id="city"
          onChange={(e) => setCity(e.currentTarget.value)}
          required
          value={city}
        />
      </div>

      {errorMessage && <div> {errorMessage}</div>}

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default AddressForm;
