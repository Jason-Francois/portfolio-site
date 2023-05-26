import styles from "../styles/About.module.css";
export default function About() {
  return (
    <>
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
    </>
  );
}
