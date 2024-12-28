interface iconProps {
  className?: string
}

export const Instagram = ({ className }: iconProps) => {
  return (
    <svg
      width="40"
      height="37"
      viewBox="0 0 40 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="39" height="35.95" transform="translate(0.5 0.937256)" fill="url(#pattern0_56_4633)" />
      <defs>
        <pattern id="pattern0_56_4633" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use transform="scale(0.00390625 0.00423729)" />
        </pattern>
        <image id="image0_56_4633" width="256" height="236" />
      </defs>
    </svg>
  )
}
