import styles from "../styles/About.module.css";
import Image from "next/image";
export default function About() {
  return (
    <>
      <section id="about" className={`${styles["about"]}`}>
        <h1 className={`block text-center text-4xl font-bold mb-3`}>
          <span className={`section__header relative border-solid pb-1`}>
            About Me
          </span>
        </h1>

        <div className={`${styles["about__grid"]}`}>
          <div className={`flex self-center`}>
            <p
              className={` ${styles["about__text"]} md:text-xl lg:text-2xl xl:text-3xl md:p-5`}
            >
              My main focus is in web development but I do have a bit of mobile
              app development experience as well. I am currently a senior at
              Drexel University with a year and a half year of past internship
              experience as a software developer. Some of my other hobbies
              include reading, music production, vinyl collecting, and cooking.
            </p>
          </div>
          <div className={`flex justify-center`}>
            <Image
              src="/images/aboutCollage.png"
              alt="Pixelated collage of (top-to-bottom, left-to-right) 
              vinyl records, drum machine, photo of cooking breakfast, book"
              width={800}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
}
