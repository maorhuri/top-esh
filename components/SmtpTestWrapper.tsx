"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SmtpTestModal from "./SmtpTestModal";

export default function SmtpTestWrapper() {
  const searchParams = useSearchParams();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (searchParams.get("sendtest") !== null) {
      setShowModal(true);
    }
  }, [searchParams]);

  return <SmtpTestModal isOpen={showModal} onClose={() => setShowModal(false)} />;
}
