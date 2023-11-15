"use client";

import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import ButtonUI from "@/ui/ButtonUI";
import InputFieldUI from "@/ui/InputFieldUI";
import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import React from "react";
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiFillFileAdd,
} from "react-icons/ai";
import { useDisclosure } from "@nextui-org/react";
import ModalUI from "@/ui/ModalUI";
import InputFieldDatePickerUI from "@/ui/InputFieldDatePickerUI";

type Props = {};

const columns = [
  {
    key: "rawMaterialName",
    label: "Raw Material Name",
  },
  {
    key: "qty",
    label: "Qty to Menufacture",
  },
  {
    key: "createDate",
    label: "วันที่สร้าง",
  },
  {
    key: "action",
    label: "Action",
  },
];

const rows: any = [];

export default function Page({}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="mx-6 p-4 lg:mx-12">
      <BreadcrumbComponent />
      <ModalUI
        title="เพิ่มข้อมูลวัตถุดิบ"
        isOpen={isOpen}
        onClose={onOpenChange}
      >
        <main className="flex flex-col gap-5">
          <div className="w-full lg:w-auto">
            <InputFieldUI label="ชื่อวัตถุดิบ" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto">
            <InputFieldUI label="Qty to Menufacture" isRequired isClearable />
          </div>
          <div className="w-full lg:w-auto">
            <InputFieldDatePickerUI isDisabled />
          </div>
        </main>
      </ModalUI>
      <div className="flex flex-col w-full lg:flex-row justify-between items-center mt-10">
        <div className="flex items-center lg:w-auto">
          <h1 className="text-4xl font-bold">จัดการวัตถุดิบ</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 mt-4 lg:mt-0">
          <div className="w-full lg:w-auto">
            <InputFieldUI
              isClearable
              placeholder="ค้นหา"
              startContent={<AiOutlineSearch />}
              size="sm"
            />
          </div>
          <div className="w-full lg:w-auto">
            <ButtonUI
              size="lg"
              type="button"
              variant="solid"
              color="primary"
              endContent={<AiFillFileAdd />}
              onPress={onOpen}
            >
              เพิ่มวัตถุดิบ
            </ButtonUI>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key} className="text-md font-bold">
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows} emptyContent="No rows to display.">
            {([] as any[]).map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell key={column.key}>{[]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
