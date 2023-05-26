import styles from "@/styles/Hero.module.css";
import Canvas from "./Canvas";
export default function Hero() {
  return (
    <>
      <section
        className={`${styles["hero"]} section-padding h-screen flex justify-center items-center`}
      >
        <div
          id="hero-bg"
          className={`${styles["hero-bg"]} absolute h-full w-screen z-0 top-0 left-0 brightness-80`}
        >
          <Canvas
            width={""}
            height={""}
            numParticles={30}
            lineDistance={0}
            lineColor={""}
          />
        </div>
        <div
          className={`${styles["hero__container"]} flex flex-col gap-8 relative z-2 text-center text-zinc-100`}
        >
          <h1
            className={`${styles["hero__header"]} font-extrabold text-4xl md:text-5xl lg:text-6xl`}
          >
            Hi, I&apos;m{" "}
            <span className={`${styles["hero__header-name"]}`}>
              Jason François!
            </span>
          </h1>
          <p
            className={`${styles["hero__caption"]} center text-xl lg:text-2xl`}
          >
            A Full-Stack developer from Philadelphia, PA
          </p>
          <a
            href="#projects"
            className={`${styles["hero__button"]} 
              min-w-[33%] 
              self-center 
              px-4 
              py-5 
              tracking-wide 
              uppercase
              rounded
              border-2
              border-solid
              border-white
              block w-100 h-100 font-bold
              `}
          >
            View Projects
          </a>
        </div>
      </section>
    </>
  );
}
