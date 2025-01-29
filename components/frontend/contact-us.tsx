"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "../FormInputs/SubmitButton";
import TextInput from "../FormInputs/TextInput";
import PasswordInput from "../FormInputs/PasswordInput";
import { Lock, Mail, Map, Phone, School, Send, UserRound } from "lucide-react";
import PhoneNumberInput from "../FormInputs/PhoneInput";
export type RegisterInputProps = {
  email: string;
  password: string;
  name: string;
  phone: string;
};
const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  async function onSubmit(data: RegisterInputProps) {
    setIsLoading(true);
    try {
      console.log(data);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-green-900 mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-8 pb-4">
          Streamline your processes and empower your team with our products.
          Effortlessly manage employee data, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 space-y-4">
            <div className="bg-green-800 text-white p-6 rounded-2xl">
              <h3 className="font-semibold text-xl mb-2">
                Speak to someone in sales
              </h3>
              <p className="text-sm mb-4 py-4">
                To create a more value-added solution, is essential to an
                analysis of the possibilities of improvement.
              </p>
              <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300">
                Book Appointment
              </button>
            </div>
            <div className="bg-lime-400 p-6 rounded-2xl">
              <h3 className="font-semibold mb-2 text-xl">
                Contact to our team
              </h3>
              <p className="text-sm mb-4 py-4">
                To create a more value-added solution, is essential to an
                analysis of the possibilities of improvement.
              </p>
              <button className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
                Send a Mail
              </button>
            </div>
          </div>

          <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">
              Sign up for onboarding your school today
            </h3>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <TextInput
                  label="Full Name"
                  register={register}
                  name="name"
                  type="text"
                  errors={errors}
                  placeholder=" John Doe"
                  icon={UserRound}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4 py-3">
                <div className="flex flex-col">
                  <TextInput
                    label="Email Address"
                    register={register}
                    name="email"
                    type="email"
                    errors={errors}
                    placeholder=" eg. johndoe@gmail.com"
                    icon={Mail}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <PhoneNumberInput
                    label="Phone Number"
                    register={register}
                    name="phone"
                    setValue={setValue}
                    errors={errors}
                    placeholder=" +234 123 456 7890"
                    icon={Phone}
                    control={undefined}
                  />
                </div>

                <div className="flex flex-col">
                  <TextInput
                    label="School Name"
                    register={register}
                    name="school_name"
                    type="text"
                    errors={errors}
                    placeholder=" Vincent High School"
                    icon={School}
                  />
                </div>
                <div className="flex flex-col">
                  <TextInput
                    label="School Address"
                    register={register}
                    name="school_address"
                    type="text"
                    errors={errors}
                    placeholder=" 123, Main Street, Lagos"
                    icon={Map}
                  />
                </div>
              </div>

              <SubmitButton
                className="w-full"
                buttonIcon={Send}
                title="Submit"
                loading={isLoading}
                loadingTitle="Submitting Please wait..."
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
