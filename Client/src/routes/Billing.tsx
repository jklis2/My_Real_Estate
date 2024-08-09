import BillingHistory from "../containers/billing/BillingHistory.tsx";
import BillingStats from "../containers/billing/BillingStats.tsx";
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
