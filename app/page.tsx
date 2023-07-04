"use client";

import Link from "next/link";
import { useContext, useEffect } from "react";
import { wsContext } from "./websocket";

const Home = () => {
  const { socket } = useContext(wsContext);

  useEffect(() => {
    if (!socket) return;

    socket.send("something");
  }, [socket]);

  return (
    <div>
      <h1>Home</h1>
      <p>Hello World! This is the Home page</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </div>
  );
};

export default Home;

