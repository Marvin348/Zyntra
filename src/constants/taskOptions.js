import { FaRegSquare } from "react-icons/fa";
import { BsLightning } from "react-icons/bs";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FiChevronsDown, FiChevronsRight, FiChevronsUp } from "react-icons/fi";

export const TYPE_OPTIONS = [
  {
    label: "Task",
    value: "task",
    icon: FaRegSquare,
    textClass: "text-type-task",
    bgClass: "bg-type-task/20",
  },
  {
    label: "Feature",
    value: "feature",
    icon: BsLightning,
    textClass: "text-type-feature",
    bgClass: "bg-type-feature/20",
  },
  {
    label: "Improvement",
    value: "improvement",
    icon: IoAnalyticsOutline,
    textClass: "text-type-imp",
    bgClass: "bg-type-imp/20",
  },
];

export const PRIORITY_OPTIONS = [
  {
    label: "Low",
    value: "low",
    icon: FiChevronsDown,
    textClass: "text-prio-low",
    bgClass: "bg-prio-low/20",
  },
  {
    label: "Medium",
    value: "medium",
    icon: FiChevronsRight,
    textClass: "text-prio-medium",
    bgClass: "bg-prio-medium/20",
  },
  {
    label: "High",
    value: "high",
    icon: FiChevronsUp,
    textClass: "text-prio-high",
    bgClass: "bg-prio-high/20",
  },
];
