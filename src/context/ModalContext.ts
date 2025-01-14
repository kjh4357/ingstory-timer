import { createContext } from "react";

interface ModalContextType {
  showModal: (title: string, msg: string, func: () => void) => void;
  hideModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
