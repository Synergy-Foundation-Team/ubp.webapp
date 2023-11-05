"use client";
import React, { useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import ButtonUI from "@/ui/ButtonUI";

export default function HomePage() {
  const useLocal = useLocalStorage("key", "value");
  const useLocalAuth = useLocalStorage("auth", "false");

  useEffect(() => {}, []);
  return (
    <div>
      <ButtonUI
        size="md"
        onClick={() => {
          useLocal.setItem("Test");
          useLocalAuth.setItem("true");
        }}
      >
        Set local
      </ButtonUI>
      <ButtonUI
        size="md"
        onClick={() => {
          const getlocal = useLocal.getItem();
          console.log(getlocal);
          console.log(useLocalAuth.getItem());
        }}
      >
        Get local
      </ButtonUI>
    </div>
  );
}
