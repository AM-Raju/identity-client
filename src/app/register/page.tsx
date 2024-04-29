"use client";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const RegisterPage = () => {
  const [err, setErr] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();
  const [createUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res: any = await createUser(data).unwrap();

      if (res?.success) {
        toast.success(res?.message);
        const result = await loginUser(data).unwrap();

        if (result?.success) {
          storeUserInfo({ accessToken: result?.accessToken });
          reset();
          router.push("/dashboard");
          reset();
        }
      }
    } catch (error: any) {
      setErr(error?.data?.message);
    }
  };
  return (
    <div className="bg-slate-800 w-full min-h-screen flex items-center justify-center">
      {/* Login form */}
      <div className="w-[90%] lg:w-[40%]    flex items-center justify-center relative border-t-2 border-b-2 border-white">
        <div className=" w-[80%] h-[80%] rounded-lg relative py-10">
          <div className=" w-full relative">
            <h1 className="text-amber-500 px-4 py-6 shrink-0  tracking-wider font-poppins font-bold text-5xl text-center relative">
              Please Register
            </h1>
            {err && (
              <p className="text-red-500 font-semibold text-xl text-center">
                {err}
              </p>
            )}
          </div>
          <form className="mt-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white placeholder:text-white text-white  "
              type="text"
              placeholder="User Name"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
            <input
              className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white placeholder:text-white text-white  "
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.username && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
            <input
              className="outline-none py-2 px-3 w-full bg-transparent border  focus:text-black focus:bg-white placeholder:text-white text-white  "
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.username && (
              <span className="text-red-500 text-xs">
                This field is required
              </span>
            )}
            <div className="w-full pt-5">
              <button
                className=" w-full hover:bg-secondary hover:text-primary transition-all duration-500 px-3 py-3 border font-poppins text-white border-white hover:border-secondary"
                type="submit"
              >
                Register
              </button>
              <p className="text-sm text-white mt-2 tracking-wider">
                Already registered!{" "}
                <span>
                  <Link
                    className="text-secondary transition-all duration-500"
                    href="/login"
                  >
                    Please login
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

export default RegisterPage;
