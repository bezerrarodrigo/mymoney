import { ArrowCircleUp, X } from "@phosphor-icons/react";
import { ArrowCircleDown } from "@phosphor-icons/react/dist/ssr";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import {
  Content,
  ModalCloseButton,
  Overlay,
  TransactionButton,
  TransactionType,
} from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  // type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export const NewTransactionModal = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    console.log(
      "🚀 ~ file: NewTransactionModal.tsx:30 ~ NewTransactionModal ~ data:",
      data
    );
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ModalCloseButton>
          <X size={24} />
        </ModalCloseButton>
        <Dialog.Title>New Transaction</Dialog.Title>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            {...register("description")}
            required
          />
          <input
            type="number"
            placeholder="Price"
            {...register("price", { valueAsNumber: true })}
            required
          />
          <input
            type="text"
            placeholder="Category"
            {...register("category")}
            required
          />

          <TransactionType>
            <TransactionButton variant="income" value="income">
              <ArrowCircleDown size={24} />
              <span>Income</span>
            </TransactionButton>
            <TransactionButton variant="outcome" value="outcome">
              <ArrowCircleUp size={24} />
              <span>Outcome</span>
            </TransactionButton>
          </TransactionType>

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
