import Container from "./Container";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="py-6 bg-zinc-400">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-6 place-items-center">
          <Image
            className="w-32  grayscale hover:grayscale-0 transition-all duration-300 "
            src={"https://i.ibb.co/mRchWPR/5a1ac6eaf65d84088faf1357.png"}
            width={130}
            height={130}
            alt="brands"
          ></Image>
          <Image
            className="w-32  grayscale hover:grayscale-0 transition-all duration-300 "
            src={"https://i.ibb.co/mSnRVFq/61336a1382b156000425b39e.png"}
            width={130}
            height={130}
            alt="brands"
          ></Image>
          <Image
            className="  grayscale hover:grayscale-0 transition-all duration-300 "
            src={"https://i.ibb.co/GHGwF1n/584295d3a6515b1e0ad75ad2.png"}
            width={130}
            height={50}
            alt="brands"
          ></Image>
          <Image
            className="w-32 grayscale hover:grayscale-0 transition-all duration-300 "
            src={"https://i.ibb.co/mFHKL5P/584296c8a6515b1e0ad75ad6.png"}
            width={130}
            height={130}
            alt="brands"
          ></Image>
          <Image
            className="w-32 grayscale hover:grayscale-0 transition-all duration-300 "
            src={"https://i.ibb.co/pnqgzgY/585990234f6ae202fedf28cf.png"}
            width={130}
            height={130}
            alt="brands"
          ></Image>
          <Image
            className="w-32 grayscale hover:grayscale-0 transition-all duration-300 "
            src={"https://i.ibb.co/v3TwQC6/585990604f6ae202fedf28d3.png"}
            width={130}
            height={130}
            alt="brands"
          ></Image>
        </div>
      </Container>
    </div>
  );
};

export default Brands;
