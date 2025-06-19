import React from "react";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({ id, label, checked, ...rest }) => (
  <div className="flex items-center">
    <label className="relative inline-flex items-center cursor-pointer w-8 h-5">
      <input
        id={id}
        type="checkbox"
        className="peer opacity-0 w-8 h-5 absolute cursor-pointer"
        checked={checked}
        {...rest}
      />
      <div
        className={`transition-colors duration-200 rounded-full w-8 h-5 ${
          checked ? "bg-[#0ed693]" : "bg-[#dde0e7]"
        }`}
      />
      <div
        className={`
          absolute top-[3px] left-[3px] w-[14px] h-[14px] rounded-full bg-white transition-all duration-200
          pointer-events-none
          ${checked ? "translate-x-[12px]" : ""}
        `}
      />
    </label>
    {label && (
      <label htmlFor={id} className="ml-2 mr-2 text-[13px] cursor-pointer">
        {label}
      </label>
    )}
  </div>
);
