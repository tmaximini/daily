"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";
import { Button } from "@/components/ui/button";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
};

export function SubmitButton({ children, pendingText, ...props }: Props) {
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  console.info("isPending", isPending);
  console.info("form action", props.formAction);

  return (
    <Button {...props} type="submit" aria-disabled={pending}>
      {isPending ? pendingText : children}
    </Button>
  );
}
