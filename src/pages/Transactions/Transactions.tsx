import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header.tsx";
import { Summary } from "../../components/Summary/Summary.tsx";
import { SearchForm } from "./components/SearchForm/SearchForm.tsx";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./style.ts";

interface TransactionsProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

export const Transactions = () => {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch("http://localhost:3000/transactions");
      const data = await response.json();
      setTransactions(data);
    }
    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
};
