import React from 'react';

export type DropdownProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  options: Array<{ label: string | number; value: string | number }>;
  className?: string;
};

const Dropdown = (props: DropdownProps) => {
  const { value, onChange, options, className = '' } = props;

  return (
    <select
      className={`border rounded px-3 py-2 min-w-[4.5rem] text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
