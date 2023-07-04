"use client";

import { createContext, useEffect, useState } from "react";

export const wsContext = createContext(null);

export function Socket({ children }) {
  let [socket, setSocket] = useState();

  useEffect(() => {
    let attempts = 10;

    function attemptConnect() {
      let ws = new WebSocket("ws://localhost:8000/ws");

      ws.onopen = (e) => {
        setSocket(ws);
      };

      ws.onclose = (e) => {
        if (attempts > 0) {
          attempts--;
          return attemptConnect();
        }
      };
    }

    attemptConnect();

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (e) => {
      console.log(e.data);
    };
  }, [socket]);

  return <wsContext.Provider value={{ socket }}>{children}</wsContext.Provider>;
}
