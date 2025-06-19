import React from "react";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Switch = ({ id, label, checked, ...rest }: SwitchProps) => {
  return (
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer" style={{ width: 32, height: 20 }}>
        <input
          id={id}
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          {...rest}
        />
        <div
          className={`transition-colors duration-200 rounded-[30px] w-8 h-5 ${
            checked ? "bg-[#0ed693]" : "bg-[#dde0e7]"
          }`}
        />
        <div
          className={`absolute top-[3px] left-[3px] w-[14px] h-[14px] rounded-full bg-white transition-all duration-200 pointer-events-none ${
            checked ? "translate-x-[12px]" : ""
          }`}
        />
      </label>
      {label && (
        <label htmlFor={id} className="ml-2 mr-2 text-sm cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};
