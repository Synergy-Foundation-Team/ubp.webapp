import { CiBoxes, CiMemoPad } from "react-icons/ci";
import { LuWrench, LuUserCog, LuDatabaseBackup } from "react-icons/lu";

export const cardItems = [
  { id: 1, icon: <CiBoxes className="text-indigo-500" />, text: "Stack" },
  { id: 2, icon: <LuWrench className="text-green-500" />, text: "Manufacturial" },
  { id: 3, icon: <LuUserCog className="text-red-500" />, text: "Manage User" },
  { id: 4, icon: <LuDatabaseBackup className="text-yellow-500" />, text: "Master data" },
  { id: 5, icon: <CiMemoPad className="text-blue-500" />, text: "Report" },
];
