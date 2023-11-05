"use client";

import ButtonUI from "@/ui/ButtonUI";
import CardUI from "@/ui/CardUI";
import InputFieldUI from "@/ui/InputFieldUI";
import React from "react";

type Props = {};

export default function LoginPage() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center ">
      <CardUI
        classNames={"mx-10 w-[80%] md:w-[40%] lg:w-[40%]"}
        bodyClassName="flex flex-col flex-wrap gap-y-8"
      >
        <h1 className="text-2xl md:text-4xl font-semibold text-center my-4">
          ระบบติดตามการหมักก๊าซ UBP
        </h1>
        <div className="grid gap-y-4">
          <div className="">
            <InputFieldUI type="email" label="Email" />
          </div>

          <div className="">
            <InputFieldUI type="password" label="password" />
          </div>
        </div>

        <div className="input_button my-6">
          <ButtonUI color="primary" size="lg" fullWidth>
            Login
          </ButtonUI>
        </div>
      </CardUI>
    </div>
  );
}
