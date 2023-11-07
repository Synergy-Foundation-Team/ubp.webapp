"use client"

import CardUI from "@/ui/CardUI";
import React from "react";
import { CiBoxes } from "react-icons/ci";

const card = [
  { id: 1, icon: <CiBoxes className="text-indigo-500" />, text: "Stack" },
  { id: 2, icon: <CiBoxes className="text-green-500" />, text: "Manufacturial" },
  { id: 3, icon: <CiBoxes className="text-red-500" />, text: "Manage User" },
  { id: 4, icon: <CiBoxes className="text-yellow-500" />, text: "Master data" },
  { id: 5, icon: <CiBoxes className="text-blue-500" />, text: "Report" },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center my-6">
        Dashboard
      </h1>
      <div className="flex flex-wrap justify-center gap-2">
        {card.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <CardUI fullWidth classNames="w-full h-auto bg-white hover:shadow-xl transition-shadow duration-300" bodyClassName="p-6 flex flex-col items-center justify-center">
              <div className="text-6xl mb-4">{item.icon}</div>
              <div className="text-center text-xl font-semibold text-gray-800">{item.text}</div>
            </CardUI>
          </div>
        ))}
      </div>
    </div>
  );
}
