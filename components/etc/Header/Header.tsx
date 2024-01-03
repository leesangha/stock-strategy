'use client'
import './index.scss'
import useToggle from '@/hooks/useToggle'

export function Header() {
  const toggle = useToggle({ showing: false })
  return (
    <>
      <header className="navbar" data-active={toggle.isShowing}>
        <div>lee sangha</div>
        <div onClick={() => toggle.toggle()}>button</div>
      </header>
      <nav className="navigation" data-active={toggle.isShowing}>
        <ul>
          <li>CHI SONO</li>
          <li>CHI SONO</li>
          <li>CHI SONO</li>
          <li>CHI SONO</li>
          <li>CHI SONO</li>
        </ul>
      </nav>
    </>
  )
}
