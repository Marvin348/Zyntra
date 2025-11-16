import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { TYPE_OPTIONS } from "../constants/taskOptions";
const TypeSelect = ({ type, setType, typeError }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedType = TYPE_OPTIONS.find((o) => o.value === type);

  return (
    <div className="relative">
      <label className="block mb-1 text-xs text-base-content/70 font-medium">
        Type
      </label>
      <button
        className="input w-full cursor-pointer outline-none font-normal flex items-center justify-between gap-4 text-base-content/50"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!selectedType ? (
          "Select a Type"
        ) : (
          <div className="flex items-center gap-2">
            <selectedType.icon className={selectedType.className} />
            <span className={selectedType.className}>{selectedType.label}</span>
          </div>
        )}{" "}
        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <ul className="custom-dropdown">
          {TYPE_OPTIONS.map(({ label, value, icon: Icon, className }) => (
            <li
              key={value}
              className={`${className} flex items-center gap-2 p-1 cursor-pointer rounded-lg hover:bg-base-100`}
              onClick={() => {
                setType(value);
                setIsOpen(false);
              }}
            >
              <Icon /> {label}
            </li>
          ))}
        </ul>
      )}
      {typeError && <p className="text-error text-xs mt-2">{typeError}</p>}
    </div>
  );
};
export default TypeSelect;
