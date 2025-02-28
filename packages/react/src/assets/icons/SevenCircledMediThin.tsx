import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SevenCircledMediThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.496 16.44H12.024C12.408 13.176 13.776 10.464 15.936 8.64V7.584H9.57601V8.064H15.456V8.424C13.224 10.392 11.88 13.2 11.496 16.44ZM5.76001 20.88H18.24V20.4H5.76001V20.88ZM5.76001 3.6H18.24V3.12H5.76001V3.6Z"
        fill={color}
      />
    </svg>
  );
}

export default SevenCircledMediThin;
