import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
export default function Navbar() {
  const handleClick = (): void => {
    const nav = document.querySelector("#primary-nav");
    const button = document.querySelector("#mobile-nav-toggle");
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
  };
  return (
    <>
      <header className={`text-black"`}>
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
              <svg
                className={`${styles["hamburger"]}`}
                viewBox="0 0 100 100"
                width="50"
              >
                <rect
                  className={`${styles["line"]} ${styles["top"]}`}
                  width="80"
                  height="10"
                  x="10"
                  y="30"
                  rx="5"
                ></rect>
                <rect
                  className={`${styles["line"]} ${styles["middle"]}`}
                  width="80"
                  height="10"
                  x="10"
                  y="50"
                  rx="5"
                ></rect>
                <rect
                  className={`${styles["line"]} ${styles["bottom"]}`}
                  width="80"
                  height="10"
                  x="10"
                  y="70"
                  rx="5"
                ></rect>
              </svg>
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
                <a href="#">About</a>
              </li>
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
