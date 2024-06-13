import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";

const Header = ({handleToggle}) => {


  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [themeIcon, setThemeIcon] = useState(theme === "dark" ? "sun" : "moon");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    setThemeIcon(savedTheme === "dark" ? "sun" : "moon");
    document.querySelector("html").setAttribute("data-theme", savedTheme);
  }, []);

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setThemeIcon(newTheme === "dark" ? "sun" : "moon");
    localStorage.setItem("theme", newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };
  return (
    <div className='sticky top-0 z-10' >
      <div role="navigation" aria-label="Navbar" className="navbar bg-base-100 border-base-200 p-6 shadow dark:bg-[#16BA7C]" >
        <div className="relative gap-3 navbar-start w-full">
          <button aria-label="Leftmenu toggle" className="btn btn-sm btn-square btn-ghost" onClick={() => handleToggle()}>
            <svg width="21" height="19" viewBox="0 0 21 19"  xmlns="http://www.w3.org/2000/svg" aria-label="true" role="img" className="inline-block fill-current">
              <path d="M10 1.5C10 0.671573 9.32843 0 8.5 0H1.5C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3H8.5C9.32843 3 10 2.32843 10 1.5Z" />
              <path d="M21 9.5C21 8.67157 20.3284 8 19.5 8H1.5C0.671574 8 0 8.67157 0 9.5C0 10.3284 0.671574 11 1.5 11H19.5C20.3284 11 21 10.3284 21 9.5Z" />
              <path d="M17 17.5C17 16.6716 16.3284 16 15.5 16H1.5C0.671574 16 0 16.6716 0 17.5C0 18.3284 0.671574 19 1.5 19H15.5C16.3284 19 17 18.3284 17 17.5Z"  />
            </svg>
          </button>
        </div>

        {/* <div className="navbar-center"></div> */}
        <div className="gap-3 navbar-end">
           <label className="swap swap-rotate p-2 hover:bg-base-100">
                  <input
                    type="checkbox"
                    className="theme-controller"
                    checked={theme === "dark"}
                    onChange={handleTheme}
                  />
                  {/* sun icon */}
                  <svg
                    className="swap-off fill-current w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on fill-current w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
          <div>
            <div className="dropdown dropdown-bottom dropdown-end z-10">
              <label tabIndex='0' className="btn btn-circle btn-ghost btn-sm">
                <svg width="16" height="19" viewBox="0 0 16 19" className='fill-current' xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9487 11.4386L14.9388 11.4286C14.4787 10.9956 13.4531 9.28799 13.3878 7.29246V5.06123C13.3878 2.26599 11.1184 0 7.99998 0C4.88162 0 2.61223 2.26599 2.61223 5.06123V7.1596C2.57959 8.89537 1.73218 10.7971 1.06121 11.4286L1.05114 11.4387C0.954385 11.5354 0.843397 11.6161 0.732588 11.6967L0.664703 11.7463C0.261535 12.0436 0 12.5218 0 13.0612C0 13.963 0.730956 14.6939 1.63265 14.6939H14.3673C15.2691 14.6939 16 13.963 16 13.0612C16 12.5218 15.7384 12.0436 15.3353 11.7463L15.2674 11.6967C15.1566 11.6161 15.0456 11.5354 14.9487 11.4386ZM4.24459 7.19031L4.24489 7.1596V5.06123C4.24489 3.2347 5.7148 1.63265 7.99998 1.63265C10.2852 1.63265 11.7551 3.2347 11.7551 5.06123V7.29246C11.7551 7.30092 11.7551 7.30938 11.7553 7.31782C11.7554 7.32718 11.7556 7.33653 11.7559 7.34589C11.7971 8.59906 12.1362 9.73162 12.5213 10.6052C12.8811 11.4213 13.3507 12.1661 13.7979 12.5966C13.9984 12.7963 14.2387 12.9687 14.3352 13.0379L14.3664 13.0604L1.63265 13.0612L1.66487 13.0379C1.76106 12.9688 2.00072 12.7969 2.20101 12.5977C2.78668 12.0364 3.26709 11.1506 3.59785 10.2997C3.94982 9.3941 4.22386 8.29291 4.24459 7.19031Z" />
                  <path d="M6.05095 17.0388C5.93607 16.7615 5.87695 16.4643 5.87695 16.1641H10.4484C10.4484 16.4643 10.3893 16.7615 10.2744 17.0388C10.1595 17.3161 9.99116 17.5681 9.77892 17.7804C9.56667 17.9926 9.31469 18.161 9.03738 18.2757C8.76006 18.3907 8.46283 18.4498 8.16267 18.4498C7.86251 18.4498 7.56528 18.3907 7.28796 18.2757C7.01065 18.161 6.75867 17.9926 6.54642 17.7804C6.33418 17.5681 6.16582 17.3161 6.05095 17.0388Z" />
                </svg>
              </label>
              <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box card card-compact m-1 w-96 p-3 shadow" role="menu">
                <div className="flex items-center justify-between px-2">
                  <p className="flex items-center justify-between px-2"> Notification</p>
                  {/* <button className="btn gap-2 btn-sm btn-circle btn-ghost">
                        <svg width="10" height="10" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.9138 1L1.55273 20.3611" stroke="#404040" />
                          <path d="M1.00022 1L20.3613 20.3611" stroke="#404040" />
                        </svg>
                      </button> */}
                </div>

                <div className="flex items-center justify-center">
                  <div className="rounded-full border  border-base-content/10 px-3 text-center">
                    <p className="text-xs  text-base-content/80"> Today</p>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="my-0.5 flex cursor-pointer items-center gap-3 rounded-box p-1.5 transition-all hover:bg-base-content/5 active:scale-[.98]">
                    <img loading="lazy" width='128' height='128' srcSet="/images/avtar-1.avif 1x, /images/avtar-1.avif 2x" src="/images/avtar-1.avif" alt="avtar-error" decoding="async" data-nimg='1' className="size-9 bg-base-content/10 p-0.5 mask mask-circle" style={{ color: 'transparent' }} />

                    <div className="grow">
                      <p className="text-sm">Customer has requested a return for item</p>
                      <p className="text-xs text-base-content/60">1 Hour ago</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="my-0.5 flex cursor-pointer items-center gap-3 rounded-box p-1.5 transition-all hover:bg-base-content/5 active:scale-[.98]">
                    <img loading="lazy" width='128' height='128' srcSet="/images/avtar-2.avif 1x, /images/avtar-2.avif 2x" src="/images/avtar-2.avif" alt="avtar-error" decoding="async" data-nimg='1' className="size-9 bg-base-content/10 p-0.5 mask mask-circle" style={{ color: 'transparent' }} />

                    <div className="grow">
                      <p className="text-sm">Customer has requested a return for item</p>
                      <p className="text-xs text-base-content/60">1 Hour ago</p>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-center">
                  <div className="rounded-full border  border-base-content/10 px-3 text-center">
                    <p className="text-xs  text-base-content/80"> Yesterday</p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="my-0.5 flex cursor-pointer items-center gap-3 rounded-box p-1.5 transition-all hover:bg-base-content/5 active:scale-[.98]">
                    <img loading="lazy" width='128' height='128' srcSet="/images/avtar-3.avif 1x, /images/avtar-3.avif 2x" src="/images/avtar-3.avif" alt="avtar-error" decoding="async" data-nimg='1' className="size-9 bg-base-content/10 p-0.5 mask mask-circle" style={{ color: 'transparent' }} />

                    <div className="grow">
                      <p className="text-sm">Customer has requested a return for item</p>
                      <p className="text-xs text-base-content/60">1 Hour ago</p>
                    </div>
                  </div>
                </div>

                <hr className="-mx-2 mt-2 border-base-content/10" />

                <div className="flex items-center justify-between pt-2">
                  <button className="btn text-primary hover:bg-primary/10 btn-sm btn-ghost"> View All</button>
                  <button className="btn text-base-content/80 hover:bg-base-content/10 btn-sm btn-ghost">Mark as Read</button>
                </div>

              </ul>
            </div>
          </div>

          <div className="dropdown dropdown-bottom dropdown-endc ml-3">
            <label tabIndex='0' className="btn btn-ghost rounded-btn px-1.5">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-end">
                  <p className="text-[18px] landing[19] font[500]"> Harwinder Kaur</p>
                  <p className="mt-1 text-[#8C8C8C] text-[12px] landing[19] font[500]"> Super Admin</p>
                </div>
                <div aria-label="Avatar photo" className="avatar" style={{ border: "1px solid #32D296A1", borderRadius: "50%", boxShadow: "0px 0px 3px 4px #32D296A1" }}>
                  <div className="mask mask-squircle " style={{ width: '44px', height: '44px', objectFit: 'fit' }}>
                    <img src="/images/avtar-2.avif" alt="admin-avtar" />
                  </div>
                </div>
              </div>
            </label>
            <ul tabIndex='0' className='dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-4 w-52' role='menu'>
              <li className='text-[15px] font-[600] py-1'>
              <Link to='/profile' className='flex'>
                  <svg width="15" height="17" viewBox="0 0 15 17" className='fill-current' xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.888904 16.0919C0.888904 16.3374 0.689964 16.5363 0.444452 16.5363C0.19894 16.5363 0 16.3374 0 16.0919C0 14.0291 0.843851 12.1536 2.20302 10.7949C3.05346 9.94448 4.10587 9.29603 5.27977 8.92953C4.86164 8.70731 4.48046 8.42434 4.14839 8.09226C3.29087 7.23475 2.75985 6.0492 2.75985 4.74015C2.75985 3.43159 3.29036 2.24605 4.14839 1.38853C5.00591 0.531014 6.19094 0 7.5 0C8.80906 0 9.99409 0.530507 10.8516 1.38853C11.7091 2.24605 12.2401 3.43159 12.2401 4.74015C12.2401 6.0492 11.7096 7.23424 10.8516 8.09226C10.5195 8.42434 10.1384 8.70731 9.72023 8.92953C10.8941 9.29603 11.9465 9.94448 12.797 10.7949C14.1561 12.1541 15 14.0291 15 16.0919C15 16.3374 14.8011 16.5363 14.5555 16.5363C14.31 16.5363 14.1111 16.3374 14.1111 16.0919C14.1111 14.2741 13.367 12.6213 12.1688 11.4231C10.9701 10.2244 9.31729 9.4808 7.49949 9.4808C5.68169 9.4808 4.02892 10.2244 2.83072 11.4231C1.63202 12.6213 0.888398 14.2746 0.888398 16.0919H0.888904ZM10.2239 2.01674C9.52686 1.31969 8.56405 0.888904 7.50051 0.888904C6.43696 0.888904 5.47364 1.32019 4.7771 2.01674C4.08005 2.71379 3.64926 3.6766 3.64926 4.74015C3.64926 5.80369 4.08055 6.76701 4.7771 7.46355C5.47415 8.1606 6.43696 8.59189 7.50051 8.59189C8.56405 8.59189 9.52737 8.1606 10.2239 7.46355C10.921 6.7665 11.3517 5.80369 11.3517 4.74015C11.3517 3.6766 10.9205 2.71328 10.2239 2.01674Z" />
                  </svg>
                   <span>My Profile</span>
                </Link>
              </li>
              <li className='text-[15px] font-[600]'>
              <Link to='/' className='flex' >
                  <svg width="16" height="19" viewBox="0 0 16 19" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9487 11.4386L14.9388 11.4286C14.4787 10.9956 13.4531 9.28799 13.3878 7.29246V5.06123C13.3878 2.26599 11.1184 0 7.99998 0C4.88162 0 2.61223 2.26599 2.61223 5.06123V7.1596C2.57959 8.89537 1.73218 10.7971 1.06121 11.4286L1.05114 11.4387C0.954385 11.5354 0.843397 11.6161 0.732588 11.6967L0.664703 11.7463C0.261535 12.0436 0 12.5218 0 13.0612C0 13.963 0.730956 14.6939 1.63265 14.6939H14.3673C15.2691 14.6939 16 13.963 16 13.0612C16 12.5218 15.7384 12.0436 15.3353 11.7463L15.2674 11.6967C15.1566 11.6161 15.0456 11.5354 14.9487 11.4386ZM4.24459 7.19031L4.24489 7.1596V5.06123C4.24489 3.2347 5.7148 1.63265 7.99998 1.63265C10.2852 1.63265 11.7551 3.2347 11.7551 5.06123V7.29246C11.7551 7.30092 11.7551 7.30938 11.7553 7.31782C11.7554 7.32718 11.7556 7.33653 11.7559 7.34589C11.7971 8.59906 12.1362 9.73162 12.5213 10.6052C12.8811 11.4213 13.3507 12.1661 13.7979 12.5966C13.9984 12.7963 14.2387 12.9687 14.3352 13.0379L14.3664 13.0604L1.63265 13.0612L1.66487 13.0379C1.76106 12.9688 2.00072 12.7969 2.20101 12.5977C2.78668 12.0364 3.26709 11.1506 3.59785 10.2997C3.94982 9.3941 4.22386 8.29291 4.24459 7.19031Z" />
                    <path d="M6.05095 17.0388C5.93607 16.7615 5.87695 16.4643 5.87695 16.1641H10.4484C10.4484 16.4643 10.3893 16.7615 10.2744 17.0388C10.1595 17.3161 9.99116 17.5681 9.77892 17.7804C9.56667 17.9926 9.31469 18.161 9.03738 18.2757C8.76006 18.3907 8.46283 18.4498 8.16267 18.4498C7.86251 18.4498 7.56528 18.3907 7.28796 18.2757C7.01065 18.161 6.75867 17.9926 6.54642 17.7804C6.33418 17.5681 6.16582 17.3161 6.05095 17.0388Z" />
                  </svg>
                  Notification
                  </Link>
              </li>
              <hr className='-mx-2 my-1 border-base-content/10' />
              <li className='text-[15px] font-[600]'>
              <Link to='/' className='flex'>
                  <svg width="16" height="17" viewBox="0 0 16 17" className='fill-current' xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7057 10.9657C10.7057 10.7218 10.9033 10.5241 11.1472 10.5241C11.3912 10.5241 11.5888 10.7218 11.5888 10.9657V12.7325C11.5888 13.7494 11.1729 14.6732 10.5035 15.3431C9.83362 16.0125 8.90975 16.4284 7.89285 16.4284H3.69597C2.67906 16.4284 1.75469 16.0125 1.0853 15.3431C0.415413 14.6732 0 13.7494 0 12.7325V3.69597C0 2.67906 0.415413 1.7552 1.0853 1.0853C1.75469 0.415916 2.67906 0 3.69597 0H7.89285C8.90975 0 9.83362 0.415916 10.5035 1.0853C11.1729 1.7552 11.5888 2.67906 11.5888 3.69597V5.46273C11.5888 5.70665 11.3912 5.9043 11.1472 5.9043C10.9033 5.9043 10.7057 5.70665 10.7057 5.46273V3.69597C10.7057 2.92298 10.3888 2.21939 9.87888 1.70943C9.36892 1.19896 8.66533 0.882627 7.89234 0.882627H3.69547C2.92248 0.882627 2.21889 1.19947 1.70893 1.70943C1.19896 2.21939 0.882124 2.92298 0.882124 3.69597V12.7325C0.882124 13.5054 1.19896 14.209 1.70893 14.719C2.21939 15.2295 2.92248 15.5458 3.69547 15.5458H7.89234C8.66533 15.5458 9.36892 15.229 9.87888 14.719C10.3893 14.209 10.7057 13.5054 10.7057 12.7325V10.9657ZM12.5589 5.83892C12.3864 5.66641 12.3864 5.38729 12.5589 5.21479C12.7315 5.04229 13.0106 5.04229 13.1831 5.21479L15.8667 7.89838C16.0442 8.0739 16.0447 8.35453 15.8667 8.53005L13.1831 11.2136C13.0106 11.3861 12.7315 11.3861 12.5589 11.2136C12.3864 11.0411 12.3864 10.762 12.5589 10.5895L14.4927 8.65578H5.79365C5.54974 8.65578 5.35209 8.45813 5.35209 8.21421C5.35209 7.9703 5.54974 7.77265 5.79365 7.77265H14.4927L12.5589 5.83892Z" />
                  </svg>
                  Logout
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header