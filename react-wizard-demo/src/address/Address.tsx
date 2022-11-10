import { useWizard } from "@fvilers/react-wizard";
import AddressForm, { AddressValues } from "./AddressForm";

const KEY = "react-wizard-demo:address";

function Address() {
  const address = JSON.parse(window.localStorage.getItem(KEY) ?? "{}");
  const { next } = useWizard();
  const handleAddress = (address: AddressValues) => {
    window.localStorage.setItem(KEY, JSON.stringify(address));
    next();
  };

  return <AddressForm onSubmit={handleAddress} value={address} />;
}

export default Address;
