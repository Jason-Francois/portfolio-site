/* Citation: Styles/markup mostly based on Kevin Powell's orbiting icons tutorial
Link: https://www.youtube.com/watch?v=vpx8pQaaJ38 */

import styles from "@/styles/Skills.module.css";
export default function Skills() {
  return (
    <>
      <section id="skills" className={`pt-16 sm:pt-32 pb-32 px-8 sm:px-16 `}>
        <h1 className={` block text-center  text-4xl font-bold mb-12`}>
          <span className={` section__header relative border-solid pb-1`}>
            Skills
          </span>
        </h1>
        <div className={`${styles["skills__orbit-container"]}`}>
          <div className={`${styles["skills__orbit-center-img"]}`}>
            <img src="/images/angular.png" alt=""></img>
          </div>
          <ul>
            <li>
              <img
                className={`${styles["skills__orbit-img"]}`}
                src="/images/angular.png"
                alt=""
              />
              <p>Angular</p>
            </li>
            <li>
              <img
                className={`${styles["skills__orbit-img"]}`}
                src="/images/c-sharp.png"
                alt=""
              />
              <p>C#</p>
            </li>
            <li>
              <img
                className={`${styles["skills__orbit-img"]}`}
                src="/images/css.png"
                alt=""
              />
              <p>CSS</p>
            </li>
            <li>
              <img
                className={`${styles["skills__orbit-img"]}`}
                src="/images/html.png"
                alt=""
              />
              <p>HTML</p>
            </li>
            <li>
              <img
                className={`${styles["skills__orbit-img"]}`}
                src="/images/javascript.png"
                alt=""
              />
              <p>JavaScript</p>
            </li>
            <li>
              <img
                className={`${styles["skills__orbit-img"]}`}
                src="/images/postgres.png"
                alt=""
              />
              <p>PostgresSQL</p>
            </li>
            <li>
              <img
                className={`${styles["skills__orbit-img"]}`}
                src="/images/react.png"
                alt=""
              />
              <p>React</p>
            </li>
            <li>
              <img
                className={`${styles["skills__orbit-img"]}`}
                src="/images/python.png"
                alt=""
              />
              <p>Python</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
