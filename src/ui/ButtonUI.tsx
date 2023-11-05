import React from "react";
import { Button } from "@nextui-org/react";

type Props = {
  children?: React.ReactNode;
  variant?:
    | `solid`
    | `bordered`
    | `light`
    | `flat`
    | `faded`
    | `shadow`
    | `ghost`;
  color?:
    | `default`
    | `primary`
    | `secondary`
    | `success`
    | `warning`
    | `danger`;
  size: `sm` | `md` | `lg`;
  radius?: `none` | `sm` | `md` | `lg` | `full`;
  spinnerPlacement?: `start` | `end`;
  fullWidth?: boolean;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  disableRipple?: boolean;
  disableAnimation?: boolean;
  onClick?: () => void;
  onPress?: () => void;
};

export default function ButtonUI({
  children,
  variant,
  color,
  size = "md",
  radius,
  spinnerPlacement,
  fullWidth,
  isIconOnly,
  isDisabled,
  isLoading,
  disableRipple,
  disableAnimation,
  onClick,
  onPress,
}: Readonly<Props>) {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      radius={radius}
      spinnerPlacement={spinnerPlacement}
      fullWidth={fullWidth}
      isIconOnly={isIconOnly}
      isDisabled={isDisabled}
      isLoading={isLoading}
      disableRipple={disableRipple}
      disableAnimation={disableAnimation}
      onClick={onClick}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}
