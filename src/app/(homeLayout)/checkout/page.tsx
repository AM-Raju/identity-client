import PaymentMethodCard from "@/components/checkout/PaymentMethodCard";
import ShippingAddress from "@/components/checkout/ShippingAddress";
import Container from "@/components/shared/Container";
import { Metadata } from "next";

import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Checkout | Identity",
  description: "Be the real you",
};

const CheckoutPage = () => {
  const CheckoutItems = dynamic(
    () => import("@/components/checkout/CheckoutItems"),
    { ssr: false }
  );
  const OrderSummary = dynamic(
    () => import("@/components/checkout/OrderSummary"),
    { ssr: false }
  );
  return (
    <Container>
      <div className="pt-32 pb-40 space-y-10">
        <div className="grid grid-cols-2 gap-16">
          <CheckoutItems></CheckoutItems>
          <OrderSummary></OrderSummary>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <ShippingAddress></ShippingAddress>
          <PaymentMethodCard></PaymentMethodCard>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
