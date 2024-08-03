"use client";
import { SignIn } from "@clerk/clerk-react";
import React from "react";

const SignInPage = () => {
  return (
    <>
      <main className="flex justify-center items-center h-screen w-full">
        <SignIn />
      </main>
    </>
  );
};

export default SignInPage;
