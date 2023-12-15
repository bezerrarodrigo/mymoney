import { SearchFormContainer } from "./style";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search for transactions" />
      <button type="submit">
        <MagnifyingGlass size={20} weight="bold" />
        <span>Search</span>
      </button>
    </SearchFormContainer>
  );
};
