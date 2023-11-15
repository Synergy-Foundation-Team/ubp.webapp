"use client";
import React from "react";
import { Input } from "@nextui-org/react";

type Props = {
  classNames?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
};

export default function InputFieldDatePickerUI({
  classNames,
  value,
  placeholder,
  label,
  onChange,
  onValueChange,
  isDisabled,
}: Props) {
  return (
    <Input
      className={classNames}
      value={value}
      placeholder={placeholder}
      label={label}
      type="date"
      onChange={onChange}
      onValueChange={onValueChange}
      isDisabled={isDisabled}
      defaultValue={new Date().toISOString().slice(0, 10)}
    />
  );
}
