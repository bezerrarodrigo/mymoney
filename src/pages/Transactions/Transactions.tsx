import { Header } from "../../components/Header/Header.tsx";
import { Summary } from "../../components/Summary/Summary.tsx";
import { useTransactions } from "../../hooks/useTransactions.ts";
import { dateFormatter, priceFormatter } from "../../utils/formatter.ts";
import { SearchForm } from "./components/SearchForm/SearchForm.tsx";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./style.ts";

export const Transactions = () => {
  const { transactions } = useTransactions();

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
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
};
