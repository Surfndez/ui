import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LendLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.98804 13.752V14.904C9.82804 13.992 15.54 10.248 19.956 4.92C19.932 5.784 19.932 6.624 19.932 7.464V9.288H21.012L20.988 3.12H14.844V4.2H16.62C17.436 4.2 18.276 4.2 19.092 4.176C14.868 9.312 9.49204 12.84 2.98804 13.752ZM2.98804 20.88H4.23604V17.952H2.98804V20.88ZM7.16404 20.88H8.43604V16.608H7.16404V20.88ZM11.364 20.88H12.612V15.192H11.364V20.88ZM15.54 20.88H16.812V13.824H15.54V20.88ZM19.716 20.88H20.988V12.48H19.716V20.88Z"
        fill={color}
      />
    </svg>
  );
}

export default LendLight;
