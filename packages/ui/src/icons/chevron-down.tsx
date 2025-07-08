import { IconProps } from "./types";

export default function ChevronDownIcon({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={fill}>
        <path
          d="M14.828 6.87995L9 10.843L3.172 6.87995C2.828 6.64595 2.36201 6.73595 2.13001 7.07795C1.89701 7.42095 1.98501 7.88694 2.32801 8.11994L8.57801 12.3699C8.70501 12.4559 8.852 12.4999 9 12.4999C9.148 12.4999 9.295 12.4569 9.422 12.3699L15.672 8.11994C16.015 7.88694 16.104 7.42095 15.87 7.07795C15.637 6.73595 15.17 6.64495 14.828 6.87995Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}
