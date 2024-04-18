"use client";

import { paths } from "@/paths";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CiUnlock } from "react-icons/ci";
import { z } from "zod";

const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .regex(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s)/,
      "You must provide a strong password."
    ),
});

type SignInFormFields = z.infer<typeof signInSchema>;

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormFields>({
    resolver: zodResolver(signInSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.ok) {
        toast.success("Login successful!");
        router.push(paths.dashboard());
      }

      if (!result?.ok) {
        toast.error("Invalid Credentials!");
      }
    } catch (error) {
      toast.error("Invalid Credentials!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-primarylight p-4 w-[350px] text-neutral-50 border border-border rounded-md flex items-center justify-center flex-col gap-y-4"
    >
      <h1 className="text-3xl glitch">Login</h1>
      <Input
        {...register("email")}
        isInvalid={errors.email ? true : undefined}
        type="text"
        placeholder="Email"
        variant="bordered"
        size="md"
        radius="sm"
        classNames={{
          inputWrapper: "bg-primarylighter border-border",
        }}
      />
      <Input
        {...register("password")}
        isInvalid={errors.password ? true : undefined}
        type="password"
        placeholder="Password"
        variant="bordered"
        size="md"
        radius="sm"
        classNames={{
          inputWrapper: "bg-primarylighter border-border",
        }}
      />

      {errors.password || errors.email ? (
        <p className="text-danger text-sm font-light">Invalid Credentials!</p>
      ) : null}

      <Button
        className="bg-secondary text-white w-full text-base"
        size="md"
        radius="sm"
        startContent={isSubmitting ? null : <CiUnlock />}
        type="submit"
        isLoading={isSubmitting}
      >
        Sign In
      </Button>
    </form>
  );
}

export default SignInForm;
