"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomCarousel from "../custom-carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};

export default function RegisterV1() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  const router = useRouter();

  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }

  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="absolute top-5 left-5">Simple UI</div>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label htmlFor="fullName" className="mb-1 text-sm font-medium">
                Full Name
              </label>
              <Input
                id="fullName"
                {...register("fullName", { required: "Full Name is required" })}
                placeholder="eg. John Doe"
              />
              {errors.fullName && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="eg. johndoe@gmail.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1 text-sm font-medium">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1 text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="******"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}
