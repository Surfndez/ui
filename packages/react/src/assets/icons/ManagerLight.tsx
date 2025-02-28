import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ManagerLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.2 19.848V14.28H9.72V19.848H4.2ZM3 21H10.92V13.128H3V21ZM3 10.848H10.92V3H3V10.848ZM4.2 9.72V4.128H9.72V9.72H4.2ZM13.08 21H21V13.128H13.08V21ZM13.08 10.872H21V3H13.08V10.872ZM14.28 19.848V14.28H19.8V19.848H14.28ZM14.28 9.72V4.152H19.8V9.72H14.28Z"
        fill={color}
      />
    </svg>
  );
}

export default ManagerLight;
