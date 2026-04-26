"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

const LogInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      toast.success("Login successful 🎉");

      setTimeout(() => {
        window.location.href = "/";
      }, 800);
    } else {
      toast.error(error?.message || "Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-x-hidden">

      <div className="w-full max-w-md">

        <h2 className="text-center text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-6">
          Login Here
        </h2>

        <div className="bg-gradient-to-br from-emerald-100 via-teal-50 to-green-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-700 p-6 rounded-xl shadow-lg">

          <Form onSubmit={onSubmit}>

            <TextField isRequired name="email" type="email">
              <Label className="dark:text-zinc-200">Email</Label>
              <Input placeholder="Enter your Email" />
              <FieldError />
            </TextField>

            <TextField isRequired name="password" type="password">
              <Label className="dark:text-zinc-200">Password</Label>
              <Input placeholder="Enter your Password" />
              <Description className="dark:text-zinc-400">
                Must be 8+ chars with uppercase & number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2 justify-between mt-4">
              <Button
                type="submit"
                className="bg-emerald-700 text-white hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700"
              >
                <Check />
                Submit
              </Button>

              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </div>

          </Form>

        </div>
      </div>
    </div>
  );
};

export default LogInPage;