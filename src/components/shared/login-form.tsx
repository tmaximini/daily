import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "./submit-button";

type Props = {
  onLogin: (formData: FormData) => Promise<never>;
  onLoginWithGoogle?: (formData: FormData) => Promise<never>;
  onForgotPassword?: (formData: FormData) => Promise<never>;
  message?: string;
};

export function LoginForm({ onLogin, message }: Props) {
  return (
    <form>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input name="password" id="password" type="password" required />
            </div>
            <SubmitButton
              pendingText="Logging in..."
              formAction={onLogin}
              type="submit"
              className="w-full"
            >
              Login
            </SubmitButton>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
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
