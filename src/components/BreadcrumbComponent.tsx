"use client";

import React, { use } from "react";
import BreadcrumbsUI from "@/ui/BreadcrumbsUI";
import { cardItems } from "@/constants";
import { usePathname } from "next/navigation";

type Breadcrumb = {
  id: number;
  icon: React.ReactNode;
  text: string;
  picture: string;
  path: string;
};

export default function BreadcrumbComponent() {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = React.useState<Breadcrumb[]>([]);

  React.useEffect(() => {
    const filterBreads: Breadcrumb[] = [];
    cardItems.forEach((item) => {
      if (item.path !== "/dashboard") {
        filterBreads.push(cardItems[0], item);
      }
    });

    setBreadcrumbs(filterBreads);
  }, [cardItems, pathname]);

  return <BreadcrumbsUI breadcrumbs={breadcrumbs} />;
}
