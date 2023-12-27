import {createContext, ReactNode, useEffect, useState} from "react";
import {api} from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: createTransactionProps) => Promise<void>;
}

interface createTransactionProps {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc'
      },
    });

    setTransactions(response.data);
  }

  async function createTransaction(data: createTransactionProps) {
    const {description, price, category, type} = data;
    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date()
    });
    setTransactions(prevState => [response.data, ...prevState]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{transactions, fetchTransactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}
