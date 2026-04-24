"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const strongPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const form = Object.fromEntries(formData);

      if (!form.name || !form.email || !form.password) {
        toast.error("All fields are required");
        return;
      }

      if (!strongPassword.test(form.password)) {
        toast.error("Password must be 8+ chars with uppercase & number");
        return;
      }

      const { data, error } = await authClient.signUp.email({
        name: form.name,
        email: form.email,
        password: form.password,
      });

      if (data) {
        toast.success("Account created 🎉");
        router.push("/login");
      } else {
        toast.error(error?.message || "Something went wrong");
      }
    } catch {
      toast.error("Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center px-4 py-8 bg-white overflow-x-hidden">

      <div className="w-full max-w-md">

        <h2 className="text-center text-4xl font-bold text-emerald-700 mb-6">
          Sign Up
        </h2>

        <div className="bg-gradient-to-br from-emerald-100 via-teal-50 to-green-100 border border-zinc-200 p-6 rounded-xl shadow-lg">

          <Form onSubmit={onSubmit}>

            <TextField isRequired name="name" type="text">
              <Label>Name</Label>
              <Input placeholder="Enter your Name" />
              <FieldError />
            </TextField>

            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="Enter your Email" />
              <FieldError />
            </TextField>

            <TextField isRequired name="password" type="password">
              <Label>Password</Label>
              <Input placeholder="Enter your Password" />
              <Description>
                8+ chars, 1 uppercase letter & 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2 justify-between mt-4">
              <Button
                type="submit"
                isDisabled={loading}
                className="bg-emerald-700 text-white hover:bg-emerald-800"
              >
                <Check />
                {loading ? "Creating..." : "Submit"}
              </Button>

              <Button type="reset" variant="secondary" isDisabled={loading}>
                Reset
              </Button>
            </div>

          </Form>

        </div>
      </div>
    </div>
  );
};

export default SignUpPage;