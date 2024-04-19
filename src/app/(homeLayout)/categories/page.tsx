import Container from "@/components/shared/Container";
import UnderConstruction from "@/components/shared/UnderConstruction";
import React from "react";

const CategoriesPage = () => {
  const page = "Categories";
  return (
    <div className="bg-secondary w-full h-[calc(100vh-520px)] pt-32">
      <Container>
        <UnderConstruction page={page}></UnderConstruction>
      </Container>
    </div>
  );
};

export default CategoriesPage;
