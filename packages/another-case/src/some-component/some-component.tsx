import { Button } from "@grapgrap/design-system";
import { ComponentProps, ElementRef, forwardRef } from "react";

export interface SomeButtonProps extends ComponentProps<typeof Button> {
  someValue: string;
}

export const SomeButton = forwardRef<
  ElementRef<typeof Button>,
  SomeButtonProps
>(({ someValue, ...props }, ref) => {
  return <Button ref={ref} {...props} />;
});
