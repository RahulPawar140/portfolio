import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import type { ReactNode } from "react";
import Loader from "@/components/Loader";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground/>
        <Loader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}