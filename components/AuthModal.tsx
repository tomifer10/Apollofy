"use client";

import ModalProvider from "@/providers/ModalProvider";
import Modal from "./Modal";

const AuthModal = () => {
  return (
    <Modal
      title="Welcome back"
      description="Login to yout account"
      isOpen
      onChange={() => {}}
    >
      Auth modal children
    </Modal>
  );
};

export default AuthModal;
