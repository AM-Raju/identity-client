import Container from "../shared/Container";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="bg-emerald-600 md:h-[700px] w-full">
      <Container>
        <div className="pt-32">
          <div className="text-center w-full px-2 md:px-0 md:w-3/4 mx-auto my-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-coal-black mt-8">
              Know the BEST you
            </h1>
            <p className=" max-w-[80ch] mx-auto text-gray-800 my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              rerum excepturi id laboriosam reprehenderit possimus cum,
              architecto quo dolor.
            </p>
          </div>
          <Slider></Slider>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
