import Button from "../components/shared/Button.tsx";
import BillingPeriod from "../containers/billing/BillingPeriod.tsx";
import ExtraCharges from "../containers/ExtraCharges";
import FlatCharges from "../containers/FlatCharges";
import PropertyTenantPicker from "../containers/PropertyTenantPicker";

export default function Reports() {
  return (
    <section className="mx-8">
      <PropertyTenantPicker />
      <FlatCharges />
      <ExtraCharges />
      <BillingPeriod />
      <Button className="my-10 w-1/4">Generate invoice</Button>
    </section>
  );
}
