import styles from "@/styles/About.module.css";
export default function About() {
  return (
    <>
      <div className={`${styles["about-container"]}`}>
        <h1>Hi, my name is Jason François</h1>
        <p>I am a full-stack developer based in Philadelphia</p>
      </div>
    </>
  );
}
