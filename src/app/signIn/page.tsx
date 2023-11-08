"use client"
import LoginComponent from "@/components/LoginComponent";
import React from "react";

type Props = {
  params?: Record<"callbackUrl" | "error", string>
}

export default function SignInPage(props: Readonly<Props>) {

  return (
    <LoginComponent error={props.params?.error} callbackUrl={props.params?.callbackUrl} />
  );
}
