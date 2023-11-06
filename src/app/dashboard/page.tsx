"use client"

import CardUI from "@/ui/CardUI";
import React from "react";



const card = [
  { id: 1, text: "1" },
  { id: 2, text: "2" },
  { id: 3, text: "3" },
  { id: 4, text: "4" },
];

export default function page() {
  return (
    <div className="flex flex-wrap flex-col item-center justify-center">
      <div>
        <h1 className="text-2xl md:text-4xl font-semibold my-6">
          Dashboard
        </h1>
      </div>
      <div className="flex flex-wrap flex-row gap-5 item-center">
        {card.map((item) => (
          <div key={item.id}>
            <CardUI>{item.text}</CardUI>
          </div>
        ))}
      </div>
    </div>
  );
}
