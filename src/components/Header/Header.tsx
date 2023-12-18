import * as Dialog from "@radix-ui/react-dialog";
import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal/NewTransactionModal.tsx";
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from "./style.ts";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New transaction</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
