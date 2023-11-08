"use client"
import LoginComponent from "@/components/LoginComponent";
import React from "react";

type Props = {
  params?: Record<"callbackUrl" | "error", string>
}

export default function SignInPage(props: Readonly<Props>) {
  console.log(props.params?.callbackUrl);
  console.log(props.params?.error)

  return (
    <LoginComponent error={props.params?.error} callbackUrl={props.params?.callbackUrl} />
  );
}
