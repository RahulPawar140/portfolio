import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import type { ReactNode } from "react";
import Loader from "@/components/Loader";

/* ✅ ADD THIS */
export const metadata = {
  title: "Rahul Pawar | Portfolio",
  description:
    "Rahul Pawar – Frontend Developer skilled in React, Next.js, animations, backend basics, and API testing.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <Loader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}