import { ArrowCircleUp, X } from "@phosphor-icons/react";
import { ArrowCircleDown } from "@phosphor-icons/react/dist/ssr";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Content,
  ModalCloseButton,
  Overlay,
  TransactionButton,
  TransactionType,
} from "./styles";

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalCloseButton>
          <X size={24} />
        </ModalCloseButton>
        <Dialog.Title>New Transaction</Dialog.Title>
        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Category" required />
          <TransactionType>
            <TransactionButton variant="income">
              <ArrowCircleDown size={24} />
              <span>Income</span>
            </TransactionButton>
            <TransactionButton variant="outcome">
              <ArrowCircleUp size={24} />
              <span>Outcome</span>
            </TransactionButton>
          </TransactionType>
          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
