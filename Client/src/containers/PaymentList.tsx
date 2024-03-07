import PaymentCard from "../components/PaymentCard";

export default function PaymentList() {
  return (
    <section className="my-10">
      <PaymentCard name="Visa ending in 1234" expireDate="Expires 04/2024" />
      <PaymentCard
        name="Mastercard ending in 5678"
        expireDate="Expires 05/2027"
      />
      <PaymentCard
        name="Visa ending in 1234"
        expireDate="Visa ending in 1234"
      />
      <PaymentCard
        name="American Express ending in 9012"
        expireDate="Expires 01/2026"
      />
    </section>
  );
}
