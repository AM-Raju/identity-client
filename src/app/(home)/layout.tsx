import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Brands from "@/components/shared/Brands";

export const metadata: Metadata = {
  title: "Home | Identity",
  description: "Be the real you",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar></Navbar>
      <div>{children}</div>

      <Brands></Brands>
      <Footer></Footer>
    </div>
  );
}
