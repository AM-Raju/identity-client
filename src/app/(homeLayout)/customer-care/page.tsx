import Container from "@/components/shared/Container";
import UnderConstruction from "@/components/shared/UnderConstruction";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Customer Support | Identity",
  description: "Be the real you",
};

const CustomerCarePage = () => {
  const page = "Customer Care";
  return (
    <div className="bg-secondary w-full h-[calc(100vh-520px)] pt-32">
      <Container>
        <UnderConstruction page={page}></UnderConstruction>
      </Container>
    </div>
  );
};

export default CustomerCarePage;
