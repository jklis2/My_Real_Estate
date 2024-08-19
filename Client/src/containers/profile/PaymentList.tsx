import PaymentCard from 'components/PaymentCard.tsx';
import visa from 'assets/icons/visa.svg';
import mastercard from 'assets/icons/mastercard.svg';
export default function PaymentList() {
  return (
    <section className="my-10">
      <PaymentCard logo={visa} name="Visa ending in 1234" expireDate="Expires 04/2024" />
      <PaymentCard logo={mastercard} name="Mastercard ending in 5678" expireDate="Expires 05/2027" />
      <PaymentCard logo={visa} name="Visa ending in 6666" expireDate="Expires in 09/2025" />
      <PaymentCard logo={mastercard} name="Mastercard ending in 9012" expireDate="Expires 01/2026" />
    </section>
  );
}
