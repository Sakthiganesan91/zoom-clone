import Navbar from "@/components/Navbar";
import { Metadata } from "next";

import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "MeetingZX",
  description: "Vidoe Calling App",
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />

      {children}
    </main>
  );
};

export default HomeLayout;
