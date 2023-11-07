"use client"
import BaseTable from "@/components/TableComponent/bassTable";
import { SearchIcon } from "@/components/icons/SearchIcon";
import CardUI from "@/ui/CardUI";
import { Input } from "@nextui-org/react";
import React, { useState } from "react";

const menufacturial = () => {
  const [textSearch, setTextSearch] = useState<string>("");
  return (
    <div>
      <CardUI
        fullWidth
        classNames="bg-white m-4"
        bodyClassName="p-6 flex flex-col items-center justify-center"
      >
        <div className="text-start flex justify-between w-full text-xl font-semibold text-gray-800">
          <div>ติดตามการหมัก</div>
          {textSearch}
          <Input
            value={textSearch}
            onChange={(e) => setTextSearch(e.target.value)}
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </div>
      </CardUI>
      <BaseTable classNames="p-4" />
    </div>
  );
};

export default menufacturial;
