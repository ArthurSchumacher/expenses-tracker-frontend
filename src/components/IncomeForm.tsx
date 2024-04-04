import React from "react";
import { GoPlusCircle } from "react-icons/go";

function IncomeForm() {
  return (
    <form className="flex flex-col w-full">
      <input
        type="text"
        className="w-full border border-border rounded-md bg-primarylighter py-2 pl-2 mb-2 outline-none"
        placeholder="Title"
      />
      <input
        type="number"
        className="w-full border border-border rounded-md bg-primarylighter py-2 pl-2 mt-2 mb-2 outline-none"
        placeholder="Price"
        min={0}
      />
      <input
        type="date"
        className="w-full border border-border rounded-md bg-primarylighter py-2 px-2 mt-2 mb-2 outline-none text-neutral-50"
        placeholder="Date"
      />
      <textarea
        name="description"
        id="description"
        placeholder="Description"
        className="resize-none w-full border border-border rounded-md bg-primarylighter py-2 pl-2 mt-2 mb-4 outline-none"
        cols={30}
        rows={4}
      ></textarea>
      <button
        type="submit"
        className="flex items-center justify-center gap-x-2 w-full border border-border rounded-md bg-secondary py-2 pl-2 mt-2 mb-4 outline-none"
      >
        <GoPlusCircle />
        Add Income
      </button>
    </form>
  );
}

export default IncomeForm;
