import { Poppins, Hedvig_Letters_Serif } from "next/font/google";
import { ReactQueryProvider } from "@/provider/reactQuery/ReactQueryProvider";
import { LenisProvider } from "@/provider/LenisProvider";
import type { Metadata } from "next";
import "./globals.css";

const hedvig = Hedvig_Letters_Serif({
  variable: "--font-hedvig",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Botify - Crie seu ChatBot",
  description: "Crie o seu ChatBot para WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <body className={`${poppins.variable} ${hedvig.variable} antialiased`}>
          <LenisProvider>{children}</LenisProvider>
        </body>
      </ReactQueryProvider>
    </html>
  );
}
