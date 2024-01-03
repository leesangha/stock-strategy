'use client'
import Hamburger from './_component/Hamburger'
import './index.scss'
import useToggle from '@/hooks/useToggle'

export function Header() {
  const { isShowing, toggle } = useToggle({ showing: false })
  return (
    <>
      <header className="navbar z-9" data-active={isShowing}>
        <div>lee sangha</div>
        <Hamburger toggle={toggle} />
      </header>
      <nav className="navigation" data-active={isShowing}>
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

// export function Header() {
//   return (
//     <header id="navbar" data-v-app="">
//       <div className="navbar__content is-active">
//         <div className="navbar__header">
//           <div className="vctheme-container">
//             <div className="navbar__content__container">
//               <div className="navbar__left">
//                 <span>
//                   {' '}
//                   disponibile per <strong>lavori da freelance</strong>
//                 </span>
//               </div>
//               <div className="navbar__logo">
//                 <a href="https://alessandrogiammaria.com/">
//                   <svg
//                     className="vctheme-svg"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="37.277"
//                     height="46.455"
//                     viewBox="0 0 37.277 46.455"
//                   >
//                     <g transform="translate(-90 -67.191)">
//                       <path
//                         d="M14.434-.346h7.41L7.41,46.11H0Z"
//                         transform="translate(90 67.537)"
//                         fill="#354555"
//                       ></path>
//                       <path
//                         d="M12.389,15.527H4.979l7.056,22.931h7.41Z"
//                         transform="translate(107.833 75.186)"
//                         fill="#354555"
//                       ></path>
//                       <path
//                         d="M-3,0H10.338V7.41H-.779Z"
//                         transform="translate(107.435 90.713)"
//                         fill="#354555"
//                       ></path>
//                     </g>
//                   </svg>
//                   <span className="navbar__logo__text">
//                     <strong>Alessandro Giammaria</strong>
//                     <span>designer freelance</span>
//                   </span>
//                 </a>
//               </div>
//               <div className="navbar__hamb">
//                 <span id="hamb">
//                   <span className="top"></span>
//                   <span className="bottom"></span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <nav id="navigation">
//           <div className="vctheme-container">
//             <div className="navigation__row">
//               <div>
//                 <ul
//                   id="menu-menu-principale"
//                   className="main-navigation vc-no-style vctheme-font-50"
//                 >
//                   <li
//                     id="menu-item-235"
//                     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-235"
//                   >
//                     <a href="https://alessandrogiammaria.com/chi-sono/">
//                       Chi sono
//                     </a>
//                   </li>
//                   <li
//                     id="menu-item-234"
//                     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-234"
//                   >
//                     <a href="https://alessandrogiammaria.com/cosa-faccio/">
//                       Cosa Faccio
//                     </a>
//                   </li>
//                   <li
//                     id="menu-item-237"
//                     className="menu-item menu-item-type-custom menu-item-object-custom menu-item-237"
//                   >
//                     <a href="https://alessandrogiammaria.com/works/">Works</a>
//                   </li>
//                   <li
//                     id="menu-item-236"
//                     className="menu-item menu-item-type-custom menu-item-object-custom menu-item-236"
//                   >
//                     <a href="https://alessandrogiammaria.com/playground/">
//                       Playground
//                     </a>
//                   </li>
//                   <li
//                     id="menu-item-240"
//                     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-240"
//                   >
//                     <a href="https://alessandrogiammaria.com/contatti/">
//                       Contatti
//                     </a>
//                   </li>
//                 </ul>
//                 <ul
//                   id="menu-menu-social"
//                   className="social-navigation vc-no-style"
//                 >
//                   <li
//                     id="menu-item-242"
//                     className="menu-item menu-item-type-custom menu-item-object-custom menu-item-242"
//                   >
//                     <a href="https://www.linkedin.com/in/alessandrogiammaria/">
//                       LinkedIn
//                     </a>
//                   </li>
//                   <li
//                     id="menu-item-244"
//                     className="menu-item menu-item-type-custom menu-item-object-custom menu-item-244"
//                   >
//                     <a href="https://www.behance.net/agiammaria">Behance</a>
//                   </li>
//                   <li
//                     id="menu-item-243"
//                     className="menu-item menu-item-type-custom menu-item-object-custom menu-item-243"
//                   >
//                     <a href="https://www.instagram.com/agiammaria/">
//                       Instagram
//                     </a>
//                   </li>
//                   <li
//                     id="menu-item-241"
//                     className="menu-item menu-item-type-custom menu-item-object-custom menu-item-241"
//                   >
//                     <a href="https://www.facebook.com/alessandrogiammariadesigner">
//                       Facebook
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <div className="navigation__contacts-cta">
//                   <div>
//                     <a
//                       className="vctheme-text-beige vctheme-font-humane vctheme-text-uppercase"
//                       href="https://alessandrogiammaria.com/contatti/"
//                     >
//                       STAI CERCANDO UN PARTNER?{' '}
//                       <span>
//                         <svg
//                           className="vctheme-svg"
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="43.16"
//                           height="20.482"
//                           viewBox="0 0 43.16 20.482"
//                         >
//                           <path
//                             d="M10.469,30.032l-.744-.78,8.894-8.93H-22.45V19.259H18.619L9.725,10.33l.744-.78L20.71,19.791Z"
//                             transform="translate(22.45 -9.55)"
//                             fill="#454545"
//                           ></path>
//                         </svg>
//                       </span>
//                     </a>
//                   </div>
//                   <div className="vctheme-font-40 vctheme-text-uppercase vctheme-font-semibold">
//                     PARLIAMONE
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="navigation-contacts vctheme-font-20">
//               <div>
//                 <strong>Phone: </strong>
//                 <a href="tel:347 7419888">347 7419888</a>
//               </div>
//               <div>
//                 <strong>Email: </strong>
//                 <a href="mailto:hello@alessandrogiammaria.com">
//                   hello@alessandrogiammaria.com
//                 </a>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   )
// }
