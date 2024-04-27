// hooks/usePaddle.tsx
"use client";
import {
  initializePaddle,
  InitializePaddleOptions,
  Paddle,
} from "@paddle/paddle-js";
import { useEffect, useState } from "react";

export default function usePaddle() {
  const [paddle, setPaddle] = useState<Paddle>();

  useEffect(() => {
    initializePaddle({
      environment: "sandbox",

      pwCustomer: {
        email: "darshansr1618@gmail.com",
      },
      seller: 19128,
    }).then((paddleInstance: Paddle | undefined) => {
      if (paddleInstance) {
        setPaddle(paddleInstance);
      }
    });
  }, []);

  return paddle;
}
