"use client";
import LoginComponent from "@/components/LoginComponent";
import React from "react";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

export default function SignInPage(props: Readonly<Props>) {
  return (
    <LoginComponent
      error={props.searchParams?.error}
      callbackUrl={props.searchParams?.callbackUrl}
    />
  );
}
