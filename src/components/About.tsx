import styles from "@/styles/About.module.css";
export default function About() {
  return (
    <>
      <section className={`${styles["hero"]}`}>
        <div className={`${styles["hero__container"]}`}>
          <h1 className={`${styles["hero__header"]}`}>
            Hi, I&apos;m Jason François!
          </h1>
          <p className={`${styles["hero__caption"]}`}>
            A Full-Stack developer from Philadelphia, PA commited to giving
            users memorable experiences through creating web apps with a variety
            of technologies.
          </p>
        </div>
      </section>
    </>
  );
}
