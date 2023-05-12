import styles from "@/styles/About.module.css";
import Canvas from "./Canvas";
export default function About() {
  return (
    <>
      <section className={`${styles["hero"]} h-screen`}>
        <div className={`${styles["hero-bg"]}`}>
          <Canvas width={""} height={""} numParticles={30} lineDistance={0} />
        </div>
        <div className={`${styles["hero__container"]}`}>
          <h1 className={`${styles["hero__header"]}`}>
            Hi, I&apos;m{" "}
            <span className={`${styles["hero__header-name"]}`}>
              Jason François!
            </span>
          </h1>
          <p className={`${styles["hero__caption"]}`}>
            A Full-Stack developer from Philadelphia, PA
          </p>
          <button role="button" className={`${styles["hero__button"]}`}>
            Projects
          </button>
        </div>
      </section>
    </>
  );
}
