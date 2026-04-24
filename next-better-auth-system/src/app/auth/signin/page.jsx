"use client";
import { authClient } from "@/Lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  InputGroup,
} from "@heroui/react";

import {Eye, EyeSlash} from "@gravity-ui/icons";
import { useState } from "react";

const SignInPage = () => {
  const [isVisible,setIsVisible]=useState(false)  ;
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log("Form submitted with", userData);

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/dashboard",
    });
    if (error) {
      console.error("Sign in failed:", error.message);

      return;
    }
    console.log("Signed in:", data);

    // console.log("Sign in response", { data, error });
  };

  return (
    <div className="w-1/2 mx-auto p-8 ">
       <h2 className="font-bold text-4xl text-pink-700 text-center mb-5">  
        Please Sign In
      </h2>
      <Form
        className="flex w-96 flex-col gap-4 border border-zinc-700  p-8 rounded-2xl shadow-xl"
        onSubmit={onSubmit}>
        {/* name */}

        {/* email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}>
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>
         <TextField className="w-full max-w-[280px]" name="password">
      <Label>Password</Label>
      <InputGroup>
        <InputGroup.Input
          className="w-full max-w-[280px]"
          type={isVisible ? "text" : "password"}
          placeholder="Enter your password"
          required
        />
        <InputGroup.Suffix className="pr-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}>
          
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
        <div className="flex justify-between">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;
