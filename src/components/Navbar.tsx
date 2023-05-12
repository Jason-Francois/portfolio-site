import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import { useEffect } from "react";
export default function Navbar() {
  const handleClick = (): void => {
    const nav = document.querySelector("#primary-nav");
    const button = document.querySelector("#mobile-nav-toggle");
    const hamburgerToggle = document.querySelector("#hamburger");
    const isExpanded = button?.getAttribute("aria-expanded");
    if (isExpanded === "false") {
      nav?.setAttribute("data-visible", "true");
      nav?.setAttribute("aria-expanded", "true");
      button?.setAttribute("aria-expanded", "true");
    } else {
      nav?.setAttribute("data-visible", "false");
      nav?.setAttribute("aria-expanded", "false");
      button?.setAttribute("aria-expanded", "false");
    }
    nav?.classList.toggle(styles["open"]);
    hamburgerToggle?.classList.toggle(styles["open"]);
  };
  const handleScroll = (): void => {
    const nav = document.querySelector(`.${styles["primary-header"]}`);
    if (nav) {
      nav.classList.add(styles["scrolled"]);
      if (window.scrollY == 0) {
        nav.classList.remove(styles["scrolled"]);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // debugger;
      handleScroll();
    });
  });
  return (
    <>
      <header className={`${styles["primary-header"]} text-black"`}>
        <div
          className={`${styles["primary-header__container"]} flex items-center justify-between`}
        >
          <div
            className={`${styles["header__logo-container"]} w-full flex items-center justify-between`}
          >
            <div>
              <Link href="/">
                <Image
                  src="logo.svg"
                  className="header-logo"
                  alt="website logo"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <button
              id="mobile-nav-toggle"
              onClick={handleClick}
              className={`${styles["mobile-nav-toggle"]} hidden`}
              aria-controls="primary-nav"
              aria-expanded="false"
              title="Open and Close Navigation"
            >
              <span className="sr-only">Menu</span>
              <div id="hamburger" className={`${styles["hamburger"]}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
          <nav
            className={`${styles["primary-nav-container"]}`}
            role="navigation"
            aria-label="Primary Navigation"
          >
            <ul
              id="primary-nav"
              className={`${styles["primary-nav"]} flex gap-4`}
              role="list"
              data-visible="false"
            >
              <li className={`${styles["primary-nav-item"]}`}>
                <a href="#">Projects</a>
              </li>
              <li className={`${styles["primary-nav-item"]}`}>
                <a href="#">Skills</a>
              </li>
              <li className={`${styles["primary-nav-item"]}`}>
                <a href="#">Contact</a>
              </li>
              <li className={`${styles["primary-nav-item"]}`}>
                <a href="#">Resume</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
