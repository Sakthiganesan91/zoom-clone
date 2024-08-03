"use client";
import { SignUp } from "@clerk/clerk-react";
import React from "react";

const SignUpPage = () => {
  return (
    <>
      <main className="flex justify-center items-center h-screen w-full">
        <SignUp />
      </main>
    </>
  );
};

export default SignUpPage;
