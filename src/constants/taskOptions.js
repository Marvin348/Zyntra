import { FaRegSquare } from "react-icons/fa";
import { BsLightning } from "react-icons/bs";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FiChevronsDown, FiChevronsRight, FiChevronsUp } from "react-icons/fi";

export const TYPE_OPTIONS = [
  {
    label: "Task",
    value: "task",
    icon: FaRegSquare,
    className: "text-type-task",
  },
  {
    label: "Feature",
    value: "feature",
    icon: BsLightning,
    className: "text-type-feature",
  },
  {
    label: "Improvement",
    value: "improvement",
    icon: IoAnalyticsOutline,
    className: "text-type-imp",
  },
];

export const PRIORITY_OPTIONS = [
  {
    label: "Low",
    value: "low",
    icon: FiChevronsDown,
    className: "text-prio-low",
  },
  {
    label: "Medium",
    value: "medium",
    icon: FiChevronsRight,
    className: "text-prio-medium",
  },
  {
    label: "High",
    value: "high",
    icon: FiChevronsUp,
    className: "text-prio-high",
  },
];
