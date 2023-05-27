import styles from "../styles/About.module.css";
import Image from "next/image";
export default function About() {
  return (
    <>
      <section id="about" className={`pt-16 sm:pt-32 px-8 sm:px-16`}>
        <div>
          <h1
            className={`${styles["projects__header"]} block text-center text-4xl font-bold mb-3`}
          >
            <span
              className={`${styles["projects__header-content"]} section__header relative border-solid pb-1`}
            >
              About Me
            </span>
          </h1>
        </div>

        <div className={`grid md:grid-cols-2 mt-12 gap-8 md:gap-12`}>
          <div className={`flex self-center`}>
            <p
              className={`md:text-xl lg:text-2xl xl:text-3xl font-semibold md:p-5 leading-7`}
            >
              My main programming domain is web development but I do have a bit
              of mobile app development experience as well. I am currently a
              senior at Drexel University with one and a half years of past
              internship experience. Some of my hobbies include reading, music
              production, vinyl collecting, and cooking.
            </p>
          </div>
          <div className={`flex justify-center`}>
            <Image
              src="/images/aboutMeGrid.png"
              alt="grid of pics"
              width={800}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
}
