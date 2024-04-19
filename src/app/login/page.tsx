"use client";

import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("From login", data);
  };
  return (
    <div className="bg-zinc-800 w-full min-h-screen lg:h-[calc(100vh-64px)] flex items-center justify-center">
      {/* Login form */}
      <div className="w-[90%] lg:w-[40%]  flex items-center justify-center relative border-t-2 border-b-2 border-white">
        {/* <div className="w-full h-1 bg-pink-500 absolute top-0"></div> */}
        <div className=" w-[80%] h-[80%] rounded-lg relative py-10">
          <div className=" w-full relative">
            <h1 className="text-secondary px-4 py-4 shrink-0  tracking-wider font-poppins font-bold text-5xl text-center relative">
              Login Here
            </h1>
          </div>
          <form className="mt-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white placeholder:text-white text-white  "
              type="email"
              placeholder="Email"
              {...register("email")}
            />

            <input
              className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white placeholder:text-white text-white  "
              type="text"
              placeholder="Password"
              {...register("password")}
            />

            <div className="w-full pt-5">
              <button
                className=" w-full hover:bg-primary hover:text-white transition-all duration-500 px-3 py-3 border font-poppins text-white border-white hover:border-primary"
                type="submit"
              >
                Login
              </button>
              <p className="text-sm text-white mt-2 tracking-wider">
                Not registered yet!{" "}
                <span>
                  <Link
                    className="text-secondary transition-all duration-500"
                    href="/register"
                  >
                    Please register
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
