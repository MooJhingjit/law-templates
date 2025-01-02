interface iconProps {
  className?: string
}

export const HorizontalLine = ({ className }: iconProps) => {
  return (
    <svg width="44" height="2" viewBox="0 0 44 4" xmlns="http://www.w3.org/2000/svg" className={className}>
      <line y1="2.18726" x2="44" y2="2.18726" />
    </svg>
  )
}
