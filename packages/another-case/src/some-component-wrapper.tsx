import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { SomeButton as _SomeButton } from "./some-component/some-component";

export type SomeButtonProps = ComponentPropsWithoutRef<
  typeof SomeButtonWrapper
> & {
  wrapperValue: string;
};

const SomeButtonWrapper = forwardRef<
  ElementRef<typeof _SomeButton>,
  ComponentPropsWithoutRef<typeof _SomeButton>
>(({ wrapperValue, ...props }, ref) => {
  return <_SomeButton ref={ref} {...props} />;
});

export const SomeButton = forwardRef<
  ElementRef<typeof SomeButtonWrapper>,
  SomeButtonProps
>(({ wrapperValue, ...props }, ref) => {
  return <SomeButtonWrapper ref={ref} {...props} />;
});
