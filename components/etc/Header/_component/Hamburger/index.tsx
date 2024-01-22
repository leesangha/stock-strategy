import './index.scss'

interface IProps {
  toggle: () => void
}
export default function Hamburger({ toggle }: IProps) {
  return (
    <div className="menu-icon">
      <input
        className="menu-icon__checkbox"
        type="checkbox"
        onChange={() => toggle()}
      />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
