import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ListRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.25995 7.24802H21.2999V5.68802H7.25995V7.24802ZM2.69995 18.6H4.85995V16.44H2.69995V18.6ZM2.69995 13.08H4.85995V10.92H2.69995V13.08ZM2.69995 7.56002H4.85995V5.40002H2.69995V7.56002ZM7.25995 18.288H21.2999V16.728H7.25995V18.288ZM7.25995 12.768H21.2999V11.208H7.25995V12.768Z"
        fill={color}
      />
    </svg>
  );
}

export default ListRegular;
