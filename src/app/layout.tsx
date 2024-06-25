import React from "react";

import "./globals.css";

import type { Metadata } from "next";

import { UserProvider } from "@auth0/nextjs-auth0/client";

// Font Awesome icons
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "./Navbar";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Show Tracker",
  description:
    "A show app to track your favorite shows and share it with your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <main>{children}</main>
          <Navbar />
        </body>
      </UserProvider>
    </html>
  );
}
