import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { PRIORITY_OPTIONS } from "../constants/taskOptions";

const PrioritySelect = ({ priority, setPriority, priorityError }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = PRIORITY_OPTIONS.find((o) => o.value === priority);

  return (
    <div className="relative">
      <label className="block mb-1 text-xs text-base-content/70 font-medium">
        Priority
      </label>
      <button
        className="input w-full cursor-pointer outline-none font-normal flex items-center justify-between gap-4 text-base-content/50"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!selectedOption ? (
          "Select a Priority"
        ) : (
          <div className="flex items-center gap-2">
            <selectedOption.icon className={selectedOption.textClass} />
            <span className={selectedOption.textClass}>
              {selectedOption.label}
            </span>
          </div>
        )}{" "}
        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <ul className="custom-dropdown">
          {PRIORITY_OPTIONS.map(({ value, label, icon: Icon, textClass }) => (
            <li
              key={value}
              className={`flex items-center gap-2 p-1 rounded-lg cursor-pointer hover:bg-base-100 ${textClass}`}
              onClick={() => {
                setPriority(value);
                setIsOpen(false);
              }}
            >
              <Icon />
              {label}
            </li>
          ))}
        </ul>
      )}
      {priorityError && (
        <p className="text-error text-xs mt-2">{priorityError}</p>
      )}
    </div>
  );
};
export default PrioritySelect;
