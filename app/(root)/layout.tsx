import StreamVideoProvider from "@/providers/StreamClientProviders";
import { Metadata } from "next";
import { ReactNode } from "react";
import "react-datepicker/dist/react-datepicker.css";

export const metadata: Metadata = {
  title: "ReuVi",
  description: "Virtual meeting app for FFWPU",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
