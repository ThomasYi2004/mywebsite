'use client'

import "./globals.css";
import {Header} from "@/components/header"
import {HeroUIProvider} from '@heroui/react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <HeroUIProvider>
          <Header />
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
