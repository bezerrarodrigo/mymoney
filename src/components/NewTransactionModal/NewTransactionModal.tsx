import {zodResolver} from "@hookform/resolvers/zod";
import {ArrowCircleDown, ArrowCircleUp, X} from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import {Controller, useForm} from "react-hook-form";
import * as z from "zod";
import {Content, ModalCloseButton, Overlay, TransactionButton, TransactionType,} from "./styles";
import {useTransactions} from "../../hooks/useTransactions.ts";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export const NewTransactionModal = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: {isSubmitting},
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {type: "income"},
  });

  const {createTransaction} = useTransactions();

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const {description, price, category, type} = data;
    await createTransaction({
      description,
      price,
      category,
      type
    });
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay/>
      <Content>
        <ModalCloseButton>
          <X size={24}/>
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
            {...register("price", {valueAsNumber: true})}
            required
          />
          <input
            type="text"
            placeholder="Category"
            {...register("category")}
            required
          />

          <Controller
            control={control}
            name="type"
            render={(props) => {
              return (
                <TransactionType
                  onValueChange={props.field.onChange}
                  value={props.field.value}
                >
                  <TransactionButton variant="income" value="income">
                    <ArrowCircleDown size={24}/>
                    <span>Income</span>
                  </TransactionButton>
                  <TransactionButton variant="outcome" value="outcome">
                    <ArrowCircleUp size={24}/>
                    <span>Outcome</span>
                  </TransactionButton>
                </TransactionType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
