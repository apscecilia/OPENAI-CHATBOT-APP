import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chat Assistant",
  description: "Chat with GPT-3.5 and GPT-4 powered AI assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
