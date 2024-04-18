"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GoPlusCircle } from "react-icons/go";
import { z } from "zod";
import * as actions from "@/actions";

const incomeSchema = z.object({
  title: z.string().min(1, "This field is required."),
  amount: z.coerce.number().min(1, "This field is required."),
  date: z.string().min(1, "This field is required."),
  description: z.string(),
});

type IncomeFormFields = z.infer<typeof incomeSchema>;

function IncomeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IncomeFormFields>({
    resolver: zodResolver(incomeSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<IncomeFormFields> = async (data) => {
    try {
      const incomeDto = {
        title: data.title,
        amount: data.amount,
        date: new Date(data.date).toISOString(),
        description: data.description,
      };

      const income = await actions.createIncome(incomeDto);
      if (income) {
        console.log(income);
        toast.success("Income added successfully.");
        router.refresh();
      }
    } catch (error) {
      toast.error("Failed to add income.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-y-4"
    >
      <input
        {...register("title")}
        type="text"
        className="w-full border border-border rounded-md bg-primarylighter py-2 pl-2 outline-none"
        placeholder="Title"
      />
      <input
        {...register("amount")}
        type="number"
        className="w-full border border-border rounded-md bg-primarylighter py-2 px-2 outline-none"
        placeholder="Price"
        min={0}
      />
      <input
        {...register("date")}
        type="date"
        className="w-full border border-border rounded-md bg-primarylighter py-2 px-2 outline-none text-neutral-50"
        placeholder="Date"
      />
      <textarea
        {...register("description")}
        placeholder="Description"
        className="resize-none w-full border border-border rounded-md bg-primarylighter py-2 pl-2 outline-none"
        cols={30}
        rows={4}
      ></textarea>

      <Button
        className="bg-secondary text-white w-full text-base"
        size="md"
        radius="sm"
        startContent={isSubmitting ? null : <GoPlusCircle />}
        type="submit"
        isLoading={isSubmitting}
      >
        Add Income
      </Button>
    </form>
  );
}

export default IncomeForm;
