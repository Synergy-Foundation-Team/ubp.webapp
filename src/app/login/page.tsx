"use client";

import ButtonUI from "@/ui/ButtonUI";
import CardUI from "@/ui/CardUI";
import InputFieldUI from "@/ui/InputFieldUI";
import React, { useState, useEffect } from "react";
import { LuLogIn, LuEye, LuEyeOff } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const containerClassNames = `flex flex-col w-full h-screen justify-center items-center ${fadeIn ? 'fade-in' : ''}`;

  return (
    <div className={containerClassNames}>
      <CardUI
        classNames={"mx-10 w-[80%] md:w-[70%] lg:w-[50%]"}
        bodyClassName="flex flex-col flex-wrap gap-y-8"
      >
        <div className="flex justify-center">
          <Image
            src="/assets/UBP_LOGO.svg"
            alt="Picture of the author"
            width={400}
            height={400}
          ></Image>
        </div>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center mb-4">
          ระบบติดตามการหมักก๊าซ UBP
        </h1>
        <div className="grid gap-y-4">
          <div className="">
            <InputFieldUI type="email" label="Email" />
          </div>

          <div className="">
            <InputFieldUI
              label="password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <LuEyeOff className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <LuEye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
          </div>
        </div>

        <div className="input_button my-6">
          <Link href="/dashboard">
            <ButtonUI
              color="primary"
              size="lg"
              fullWidth
              startContent={<LuLogIn />}
            >
              Login
            </ButtonUI>
          </Link>
        </div>
      </CardUI>
    </div>
  );
}
