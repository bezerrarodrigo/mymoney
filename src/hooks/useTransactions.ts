import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useTransactions() {
  const context = useContext(TransactionsContext);
  if (context === undefined)
    throw new Error(
      "TransactionsContext was used outside TransactionsProvider."
    );
  return context;
}
