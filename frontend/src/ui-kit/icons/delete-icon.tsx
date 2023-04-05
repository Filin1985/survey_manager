export interface IIcon {
  onClick?: () => void
  style?: object
}

export const DeleteIcon: React.FC<IIcon> = ({ onClick }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M3.63499 2.66666L14.3132 13.3333"
        stroke="black"
        stroke-width="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.63499 13.3333L14.3132 2.66665"
        stroke="black"
        stroke-width="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
