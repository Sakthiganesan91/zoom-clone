import Navbar from "@/components/Navbar";

import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />

      {children}
    </main>
  );
};

export default HomeLayout;
