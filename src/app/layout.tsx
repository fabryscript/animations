import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animations Lib",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          "mx-auto max-w-[1440px] bg-neutral-950",
          inter.className,
        )}
      >
        <div className="flex flex-col gap-1 py-8 text-center text-neutral-200">
          <h1 className="text-4xl font-bold">
            Collection of cool web animations
          </h1>
          <p className="text-xl">done with Framer Motion + React</p>
        </div>
        {children}
      </body>
    </html>
  );
}
