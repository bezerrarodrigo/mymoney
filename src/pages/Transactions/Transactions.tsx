import { Header } from "../../components/Header/Header.tsx";
import { Summary } from "../../components/Summary/Summary.tsx";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./style.ts";

export const Transactions = () => {
  return (
    <>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighLight variant="outcome"> - R$ 59,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
};
