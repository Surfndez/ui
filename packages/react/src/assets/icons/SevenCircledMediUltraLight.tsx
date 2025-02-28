import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SevenCircledMediUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.352 16.44H12.312C12.648 13.248 13.92 10.608 16.032 8.76V7.584H9.55201V8.352H15.072V8.712C12.96 10.728 11.712 13.392 11.352 16.44ZM5.76001 21H18.24V20.16H5.76001V21ZM5.76001 3.84H18.24V3H5.76001V3.84Z"
        fill={color}
      />
    </svg>
  );
}

export default SevenCircledMediUltraLight;
