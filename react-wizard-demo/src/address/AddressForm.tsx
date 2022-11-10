import { FormEvent, useState } from "react";
import FormProps from "../FormProps";

export type AddressValues = {
  street: string;
  postalCode: string;
  city: string;
};

type Props = FormProps<AddressValues>;

function AddressForm({ disabled, errorMessage, onSubmit }: Props) {
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
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

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default AddressForm;
