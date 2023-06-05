"use client";

import { SignIn } from "@clerk/nextjs";
import Modal from "@/components/modal";

export default function InterceptedSignInPage() {
  return (
    <Modal>
      <SignIn afterSignInUrl="/" signUpUrl="/sign-up" />
    </Modal>
  );
}
