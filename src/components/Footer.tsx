import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import styles from "../styles/Footer.module.css";

const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

export default function Footer() {
  return (
    <>
      <footer className={` ${styles["footer"]} py-3 `}>
        <div className={`flex px-4 flex-col max-w-[30rem] m-auto w-100`}>
          <div className="w-full flex flex-col items-center gap-6">
            <div className="w-[5.5rem] h-[5.5rem]">
              <Logo
                onClick={scrollToTop}
                className={`${styles["footer__logo"]} fill-black pointer`}
              />
            </div>
            <p className="text-center">
              Forever committed to making the best user experiences possible
            </p>
            <div className={`${styles["footer__social"]} flex gap-3 mb-8`}>
              <a href="https://github.com/Jason-Francois" target="_blank">
                <Image
                  src={"/images/github.png"}
                  alt="Github icon"
                  height={25}
                  width={25}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jasonc-francois/"
                target="_blank"
              >
                <Image
                  src={"/images/linkedin.png"}
                  alt="LinkedIn icon"
                  height={25}
                  width={25}
                />
              </a>
              <a href="mailto: jasonc.francois@gmail.com" target="_blank">
                <Image
                  src={"/images/email.png"}
                  alt="Email icon"
                  height={25}
                  width={25}
                />
              </a>
            </div>
          </div>
          <p className="text-center text-xs">
            Copyright © {new Date().getFullYear()}. Made by Jason François
          </p>
        </div>
      </footer>
    </>
  );
}
