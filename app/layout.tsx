"use client";
import { Socket } from "./websocket";

import { useEffect } from "react";

import "../devlink/global.css";
import { DevLinkProvider } from "../devlink";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const getCookie = (name) => {
      const cookies = document.cookie.split("; ");

      for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
          return decodeURIComponent(cookieValue);
        }
      }

      return null; // Cookie not found
    };

    // Usage
    const myCookieValue = getCookie("myCookie");
    if (myCookieValue) {
      console.log(myCookieValue);
    } else {
      console.log("Cookie not found");
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <DevLinkProvider>
          <Socket>{children}</Socket>
        </DevLinkProvider>
      </body>
    </html>
  );
}

