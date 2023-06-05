import React from "react";
import { SignUp } from "@clerk/nextjs";

export default function () {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <SignUp redirectUrl="/" />
    </main>
  );
}
