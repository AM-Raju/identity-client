import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-slate-700">
      <Container>
        <div className="pt-20 pb-5 text-white  flex flex-col  md:flex-row px-3 xl:px-0 justify-between">
          {/* Part 1 */}
          <div className="w-full md:w-3/12 flex flex-col items-center md:items-start">
            <Logo customClass="text white font-normal tracking-wider "></Logo>
            <p className="tracking-wide  mt-8  text-center md:text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              asperiores dolores, aperiam laudantium nobis facere quasi. Nulla.
            </p>
          </div>
          {/* Part 2 */}
          <div className="flex justify-between md:justify-around w-full my-10 md:my-0  md:w-6/12">
            <div className="flex flex-col gap-1 text-sm">
              <h3 className=" tracking-wider ">Menz World</h3>
              <hr className="mb-3" />
              <Link href="#">Shirt</Link>
              <Link href="#">T-shirt</Link>
              <Link href="#">Polo shirt</Link>
              <Link href="#">Jeans</Link>
              <Link href="#">Trousers</Link>
              <Link href="#">Short</Link>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <h3 className=" tracking-wider ">Womenz World</h3>
              <hr className="mb-3" />
              <Link href="#">Top</Link>
              <Link href="#">T-shirt</Link>
              <Link href="#">Tank-tops</Link>
              <Link href="#">Jackets</Link>
              <Link href="#">Jeans</Link>
              <Link href="#">Skirts</Link>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <h3 className=" tracking-wider ">Help Links</h3>
              <hr className="mb-3" />
              <Link href="#">Terms and condition</Link>
              <Link href="#">Privacy policy</Link>
              <Link href="#">Payment Method</Link>
              <Link href="#">Return policy</Link>
              <Link href="#">Support</Link>
            </div>
          </div>
          {/* Part 3 */}
          <div className=" flex items-end justify-center">
            <div>
              <form action="">
                <input
                  className="text-black px-3 w-48  md:max-xl:w-36 py-2 outline-none"
                  type="email"
                  name="subscribe"
                  id=""
                />
                <button
                  type="submit"
                  className="px-3 py-2 text-primary bg-secondary"
                >
                  Subscribe
                </button>
              </form>
              <div className="grid grid-cols-4 text-xl mt-3 justify-center">
                <div className=" py-2 hover:bg-secondary border border-secondary hover:text-primary transition-all duration-300 flex items-center justify-center ">
                  <FaFacebookF />
                </div>
                <div className=" py-2 hover:bg-secondary border border-secondary hover:text-primary transition-all duration-300 flex items-center justify-center">
                  <FaXTwitter />
                </div>
                <div className=" py-2 hover:bg-secondary border border-secondary hover:text-primary transition-all duration-300 flex items-center justify-center">
                  <FaInstagram />
                </div>
                <div className=" py-2 hover:bg-secondary border border-secondary hover:text-primary transition-all duration-300 flex items-center justify-center">
                  <FaGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer bottom */}
        <hr />
        <div className="px-3 xl:px-0 text-center text-white py-5 flex flex-col md:flex-row justify-between">
          <p>&copy;Identity, All right reserved</p>
          <div className="space-x-3 mt-5 md:mt-0">
            <Link href="/trending-products">Trending Products</Link>
            <Link href="/categories">Category</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/customer-care">Customer Care</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
