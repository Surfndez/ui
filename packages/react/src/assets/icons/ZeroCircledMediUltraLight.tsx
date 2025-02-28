import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ZeroCircledMediUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.704C14.28 16.704 15.456 14.856 15.456 12.024C15.456 9.192 14.304 7.344 12 7.344C9.72001 7.344 8.54401 9.192 8.54401 12.024C8.54401 14.856 9.72001 16.704 12 16.704ZM5.76001 21H18.24V20.16H5.76001V21ZM5.76001 3.84H18.24V3H5.76001V3.84ZM9.38401 12.336V11.736C9.38401 9.288 10.224 8.112 12 8.112C12.96 8.112 13.656 8.448 14.064 9.144L9.62401 14.184C9.45601 13.68 9.38401 13.056 9.38401 12.336ZM9.91201 14.88L14.376 9.816C14.544 10.344 14.616 10.968 14.616 11.736V12.336C14.616 14.76 13.776 15.96 12 15.96C11.016 15.96 10.344 15.6 9.91201 14.88Z"
        fill={color}
      />
    </svg>
  );
}

export default ZeroCircledMediUltraLight;
