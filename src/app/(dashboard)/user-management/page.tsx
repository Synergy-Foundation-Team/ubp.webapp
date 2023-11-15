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
import { AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";

type Props = {};

const columns = [
  {
    key: "fullName",
    label: "ชื่อ - นามสกุล",
  },
  {
    key: "userName",
    label: "Username",
  },
  {
    key: "role",
    label: "ตำแหน่ง",
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

const rows: any = [
  {
    fullName: "ชื่อ - นามสกุล",
    userName: "Username",
    role: "ตำแหน่ง",
    createDate: "วันที่สร้าง",
    action: "Action",
  },
  {
    fullName: "ชื่อ - นามสกุล",
    userName: "Username",
    role: "ตำแหน่ง",
    createDate: "วันที่สร้าง",
    action: "Action",
  },
  {
    fullName: "ชื่อ - นามสกุล",
    userName: "Username",
    role: "ตำแหน่ง",
    createDate: "วันที่สร้าง",
    action: "Action",
  },
  {
    fullName: "ชื่อ - นามสกุล",
    userName: "Username",
    role: "ตำแหน่ง",
    createDate: "วันที่สร้าง",
    action: "Action",
  },
  {
    fullName: "ชื่อ - นามสกุล",
    userName: "Username",
    role: "ตำแหน่ง",
    createDate: "วันที่สร้าง",
    action: "Action",
  },
  {
    fullName: "ชื่อ - นามสกุล",
    userName: "Username",
    role: "ตำแหน่ง",
    createDate: "วันที่สร้าง",
    action: "Action",
  },
  {
    fullName: "ชื่อ - นามสกุล",
    userName: "Username",
    role: "ตำแหน่ง",
    createDate: "วันที่สร้าง",
    action: "Action",
  },
  {
    fullName: "ชื่อ - นามสกุล",
    userName: "Username",
    role: "ตำแหน่ง",
    createDate: "วันที่สร้าง",
    action: "Action",
  },
];

export default function Page({}: Props) {
  return (
    <div className="mx-6 p-4 lg:mx-12">
      <BreadcrumbComponent />
      <div className="flex flex-col w-full lg:flex-row justify-between items-center mt-10">
        <div className="flex items-center lg:w-auto">
          <h1 className="text-4xl font-bold">จัดการผู้ใช้งาน</h1>
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
              endContent={<AiOutlineUserAdd />}
            >
              เพิ่มผู้ใช้งาน
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
                  <TableCell key={column.key}>
                    {getKeyValue(row, column.key)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
