import { CiBoxes, CiMemoPad } from "react-icons/ci";
import { LuWrench, LuUserCog, LuDatabaseBackup } from "react-icons/lu";

export const cardItems = [
  {
    id: 1,
    icon: <CiBoxes className="text-indigo-500" />,
    text: "Stack",
    picture: "/assets/inventory.png",
  },
  {
    id: 2,
    icon: <LuWrench className="text-green-500" />,
    text: "Manufacturial",
    picture: "/assets/manufacturing.png",
  },
  {
    id: 3,
    icon: <LuUserCog className="text-red-500" />,
    text: "Manage User",
    picture: "/assets/teamwork.png",
  },
  {
    id: 4,
    icon: <LuDatabaseBackup className="text-yellow-500" />,
    text: "Master data",
    picture: "/assets/MasterData.png",
  },
  {
    id: 5,
    icon: <CiMemoPad className="text-blue-500" />,
    text: "Report",
    picture: "/assets/seo-report.png",
  },
];
