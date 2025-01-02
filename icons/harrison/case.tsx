{
  /* */
}

interface iconProps {
  className?: string
}

export const Case = ({ className }: iconProps) => {
  return (
    <svg
      className={`${className}`}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.8979 27.5292C4.16249 22.7417 3.79374 20.3501 4.69999 18.2272C5.60415 16.1063 7.61249 14.6542 11.6271 11.7522L14.6271 9.58341C19.6208 5.973 22.1187 4.16675 25 4.16675C27.8812 4.16675 30.3792 5.973 35.3729 9.58341L38.3729 11.7522C42.3875 14.6542 44.3937 16.1063 45.3 18.2272C46.2041 20.3501 45.8375 22.7418 45.1021 27.5272L44.475 31.6105C43.4333 38.3938 42.9104 41.7855 40.4771 43.8105C38.0437 45.8355 34.4875 45.8334 27.3729 45.8334H22.625C15.5104 45.8334 11.9542 45.8334 9.52082 43.8105C7.08749 41.7855 6.56665 38.3938 5.5229 31.6084L4.8979 27.5292Z"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.4375 27.6042C25.9104 30.0772 29.1667 32.5897 29.1667 32.5897L33.6312 28.1251C33.6312 28.1251 31.1187 24.8688 28.6458 22.3959C26.1729 19.923 22.9167 17.4105 22.9167 17.4105L18.4521 21.8751C18.4521 21.8751 20.9646 25.1313 23.4375 27.6042ZM23.4375 27.6042L15.625 35.4167M34.375 27.3813L28.4229 33.3334M23.6604 16.6667L17.7083 22.6188"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
