import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TrashUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.38003 21.36H16.62C17.604 21.36 18.42 20.544 18.42 19.56V8.68801H17.58V19.536C17.58 20.136 17.172 20.544 16.572 20.544H7.40403C6.80403 20.544 6.42003 20.136 6.42003 19.536V8.68801H5.58003V19.56C5.58003 20.544 6.39603 21.36 7.38003 21.36ZM3.78003 6.96001H20.22V6.16802H15.828V4.17601C15.828 3.31201 15.156 2.64001 14.292 2.64001H9.68403C8.82003 2.64001 8.14803 3.31201 8.14803 4.17601V6.16802H3.78003V6.96001ZM8.94003 6.16802V4.22401C8.94003 3.72001 9.22803 3.40801 9.73203 3.40801H14.244C14.748 3.40801 15.06 3.72001 15.06 4.22401V6.16802H8.94003ZM9.66003 17.52H10.476V10.008H9.66003V17.52ZM13.5 17.52H14.316V10.008H13.5V17.52Z"
        fill={color}
      />
    </svg>
  );
}

export default TrashUltraLight;
