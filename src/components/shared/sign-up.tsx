import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "./submit-button";

type Props = {
  onSignup: (formData: FormData) => Promise<never>;
  message?: string;
};

export function SignupForm({ onSignup, message }: Props) {
  return (
    <form>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            <SubmitButton
              pendingText="Signing up..."
              formAction={onSignup}
              type="submit"
              className="w-full"
            >
              Sign up
            </SubmitButton>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
          {message && (
            <p className="mt-4 text-center text-red-500 text-sm">{message}</p>
          )}
        </CardContent>
      </Card>
    </form>
  );
}
