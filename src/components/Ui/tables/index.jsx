import React from "react";

const ThStart = ({ medium, children }) => {
  return <th className={`text-start ${medium && "w-12"}`}>{children}</th>;
};

const ThCenter = ({ right, children }) => {
  return (
    <th className={`text-center ${!right && "border-r border-light-gray"}`}>
      {children}
    </th>
  );
};

const ThEnd = ({ children }) => {
  return <th className="text-end pr-2">{children}</th>;
};

const TdCenter = ({ right, children }) => {
  return (
    <td
      className={`text-center ${
        !right && "border-r px-5 border-t border-light-gray"
      }`}
    >
      {children}
    </td>
  );
};

const TdEnd = ({ children }) => {
  return <td className="text-end pr-4">{children}</td>;
};

export { ThEnd, TdEnd, ThStart, ThCenter, TdCenter };