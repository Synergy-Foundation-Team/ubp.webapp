"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";
import Link from "next/link";

type Breadcrumb = {
  id: number;
  icon: React.ReactNode;
  text: string;
  picture: string;
  path: string;
};

type Props = {
  breadcrumbs: Breadcrumb[];
};

export default function BreadcrumbsUI({ breadcrumbs }: Props) {
  return (
    <Breadcrumbs>
      {breadcrumbs.map((breadcrumb, index) => (
        <BreadcrumbItem key={index}>
          <Link href={breadcrumb.path}>{breadcrumb.text}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
