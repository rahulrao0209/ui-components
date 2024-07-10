import { createContext } from "react";

interface ToastContext {
  message: string;
}

const ToastContext = createContext<ToastContext>({ message: "" });

export const ToastContextProvider = () => {};
