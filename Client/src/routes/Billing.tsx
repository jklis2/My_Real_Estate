import BillingHistory from "../containers/BillingHistory";
import BillingStats from "../containers/BillingStats";
import PaymentList from "../containers/PaymentList";

export default function Billing() {
  return (
    <>
      <BillingStats />
      <PaymentList />
      <BillingHistory />
    </>
  );
}
