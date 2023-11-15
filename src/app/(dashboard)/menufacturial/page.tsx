"use client"
import BaseTable from "@/components/TableComponent/bassTable";
import CardUI from "@/ui/CardUI";
import React from "react";

const menufacturial = () => {
  return (
    <div>
      <CardUI
        fullWidth
        classNames="bg-white m-4"
        bodyClassName="p-6 flex flex-col items-center justify-center"
      >
        <div className="text-start flex justify-between w-full text-xl font-semibold text-gray-800">
          <div>ติดตามการหมัก</div>
        </div>
      </CardUI>
      <BaseTable classNames="p-4" />
    </div>
  );
};

export default menufacturial;
