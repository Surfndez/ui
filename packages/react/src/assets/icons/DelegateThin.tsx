import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function DelegateThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.40796 12.444V20.844H3.88796V12.444C3.88796 9.82801 5.95196 7.74001 8.59196 7.74001H19.68L17.784 9.63601L15.912 11.508L16.248 11.844L20.592 7.50001L16.248 3.15601L15.912 3.49201L17.784 5.36401L19.68 7.26001H8.59196C5.73596 7.26001 3.40796 9.61201 3.40796 12.444Z"
        fill={color}
      />
    </svg>
  );
}

export default DelegateThin;
