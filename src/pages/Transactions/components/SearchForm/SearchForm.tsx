import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./style";
import { MagnifyingGlass } from "@phosphor-icons/react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransactions } from "../../../../hooks/useTransactions";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export const SearchForm = () => {
  const { fetchTransactions } = useTransactions();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInput) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search for transactions"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} weight="bold" />
        <span>Search</span>
      </button>
    </SearchFormContainer>
  );
};
