import H2 from "../components/H2";
import BillingHistory from "../containers/BillingHistory";
import BillingStats from "../containers/BillingStats";
import PaymentList from "../containers/PaymentList";

export default function Billing() {
  return (
    <section className="mt-7">
      <H2 className="my-4 mb-4">Billing stats</H2>
      <BillingStats />
      <PaymentList />
      <BillingHistory />
    </section>
  );
}
