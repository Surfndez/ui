import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NineCircledMediUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.024 16.704C14.232 16.704 15.48 14.832 15.456 11.904C15.432 9.048 14.184 7.344 12.048 7.344C10.296 7.344 8.97601 8.664 8.97601 10.464C8.97601 12.216 10.248 13.536 11.976 13.536C13.2 13.536 14.184 12.816 14.544 11.736H14.616C14.712 14.04 14.16 15.936 12 15.936C10.728 15.936 9.98401 15.24 9.79201 13.968H8.97601C9.14401 15.624 10.368 16.704 12.024 16.704ZM5.76001 21H18.24V20.16H5.76001V21ZM5.76001 3.84H18.24V3H5.76001V3.84ZM9.81601 10.536V10.32C9.81601 8.976 10.632 8.136 12.024 8.136H12.12C13.56 8.136 14.328 9.072 14.328 10.32V10.536C14.328 11.88 13.536 12.744 12.12 12.744H12.024C10.632 12.744 9.81601 11.904 9.81601 10.536Z"
        fill={color}
      />
    </svg>
  );
}

export default NineCircledMediUltraLight;
