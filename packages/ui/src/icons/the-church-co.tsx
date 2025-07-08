import { IconProps } from "./types";

export default function TheChurchCo({
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
      viewBox="0 0 336 336"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <rect height="336" width="336" fill="#000" rx="65" />
        <rect
          height="161"
          width="24.21"
          fill="#fff"
          rx="5"
          x="156.158"
          y="87"
        />
        <rect
          height="106.526"
          width="24.21"
          fill="#fff"
          rx="5"
          transform="rotate(90 221.526 128.158)"
          x="221.526"
          y="128.158"
        />
      </g>
    </svg>
  );
}
