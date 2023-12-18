import * as Dialog from "@radix-ui/react-dialog";
import { Content, ModalCloseButton, Overlay } from "./styles";
import { X } from "@phosphor-icons/react";

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
          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
