"use client";

import { useState, useEffect, Children } from "react";
import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <AuthModal />;
};

export default ModalProvider;
