import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledSouthEastMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.62414 15.7919H15.7921V9.64789H14.1121V11.1599C14.1121 11.6879 14.1121 12.2879 14.1601 12.8639L9.14414 7.84789L7.84814 9.14389L12.8881 14.1839C12.2881 14.1599 11.7121 14.1119 11.1361 14.1119L9.62414 14.1359V15.7919ZM2.64014 11.9999C2.64014 17.2319 6.76814 21.3599 12.0001 21.3599C17.2561 21.3599 21.3601 17.0879 21.3601 11.9999C21.3601 6.76789 17.2321 2.63989 12.0001 2.63989C6.76814 2.63989 2.64014 6.76789 2.64014 11.9999ZM4.56014 11.9999C4.56014 7.82389 7.82414 4.55989 12.0001 4.55989C16.1761 4.55989 19.4401 7.82389 19.4401 11.9999C19.4401 16.0559 16.1761 19.4399 12.0001 19.4399C7.82414 19.4399 4.56014 16.1759 4.56014 11.9999Z"
        fill={color}
      />
    </svg>
  );
}

export default CircledSouthEastMedium;
