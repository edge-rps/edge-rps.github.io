"use client";

import Link from "next/link";
import { Button, Package, Pricing } from "../../devlink";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div>
        Back to <Link href="/">Home</Link>
        <br />
        <button>Click me</button>
        <Button
          buttonRuntimeProps={{
            onClick: () => {
              alert("test");
            },
            style: { backgroundColor: "blue" },
          }}
          buttonText={"yoyo"}
        ></Button>
        <Pricing
          title={"Get the one that fits you"}
          pricingGridSlot={[
            <Package pricingHeadingPrice={"$100"}></Package>,
            <Package></Package>,
          ]}
        ></Pricing>
      </div>
    </>
  );
}

