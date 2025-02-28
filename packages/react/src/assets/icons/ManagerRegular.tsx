import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ManagerRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.37982 19.704V14.568H9.41982V19.704H4.37982ZM2.81982 21.168H10.9798V13.104H2.81982V21.168ZM2.81982 10.896H10.9798V2.83203H2.81982V10.896ZM4.37982 9.43203V4.29603H9.41982V9.43203H4.37982ZM13.0198 21.168H21.1798V13.104H13.0198V21.168ZM13.0198 10.896H21.1798V2.83203H13.0198V10.896ZM14.5798 19.704V14.568H19.6198V19.704H14.5798ZM14.5798 9.43203V4.29603H19.6198V9.43203H14.5798Z"
        fill={color}
      />
    </svg>
  );
}

export default ManagerRegular;
