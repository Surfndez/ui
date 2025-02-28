import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ShoppingBasketMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.6001 20.8801H20.4001V8.88012H16.8001V8.13612C16.8001 6.62412 16.5361 5.61612 15.9121 4.84812C15.0001 3.69612 13.4881 3.12012 12.0001 3.12012C10.5121 3.12012 9.0001 3.69612 8.0881 4.84812C7.4641 5.64012 7.2001 6.64812 7.2001 8.13612V8.88012H3.6001V20.8801ZM5.5201 19.0801V10.6801H7.2001V12.9601H9.1201V10.6801H14.8801V12.9601H16.8001V10.6801H18.4801V19.0801H5.5201ZM9.1201 8.88012V7.15212C9.1201 5.61612 9.6961 4.99212 11.3521 4.99212H12.6481C14.2801 4.99212 14.8801 5.61612 14.8801 7.15212V8.88012H9.1201Z"
        fill={color}
      />
    </svg>
  );
}

export default ShoppingBasketMedium;
