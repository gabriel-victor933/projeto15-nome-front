import { Section } from "../style/Checkout.style";
import { Link } from "react-router-dom";
import CheckoutContent from "../components/CheckoutContent";
export default function Checkout() {
  const serverResponse = false;
  if (!serverResponse) return <Sucess />;
  return <Failure />;
}

function Sucess() {
  window.scrollTo(0, 0);
  return (
    <Section>
      <h1>Congratulations! Your purchase is complete. </h1>
      <p>An email confirmation will be sent to you shortly.</p>
      <CheckoutContent />
      <Link to="/">
        <button>Continue shopping</button>
      </Link>
    </Section>
  );
}

function Failure() {
  window.scrollTo(0, 0);
  return (
    <Section>
      <h1>Your order could not be completed at this time. </h1>
      <p>Please try again later.</p>
      <Link to="/">
        <button>Continue shopping</button>
      </Link>
    </Section>
  );
}
