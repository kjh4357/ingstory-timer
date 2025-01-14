import Modal from "@/components/Modal";
import { ModalContext } from "@/context/ModalContext";
import React, { useState, ReactNode } from "react";

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<{
    title: string;
    msg: string;
    func: () => void;
  } | null>(null);

  const showModal = (title: string, msg: string, func: () => void) => {
    setModalProps({ title, msg, func });
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setModalProps(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {isOpen && modalProps && (
        <Modal
          title={modalProps.title}
          msg={modalProps.msg}
          onClose={() => {
            hideModal();
            modalProps.func(); // 닫기 이후 실행할 함수 호출
          }}
        />
      )}
    </ModalContext.Provider>
  );
};
