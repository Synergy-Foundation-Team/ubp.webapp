"use client";

import InputFieldUI from "@/ui/InputFieldUI";
import React, { useState } from "react";

type Props = {};

export default function LoginPage({}: Props) {
  const [value, setValue] = useState("");
  const setFieldValue = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <p>InputFieldUI</p>
      <InputFieldUI type="email" label="Email" onValueChange={setValue} />
    </div>
  );
}
