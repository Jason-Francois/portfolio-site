/* Citation: Styles/markup mostly based on Kevin Powell's orbiting icons tutorial
Link: https://www.youtube.com/watch?v=vpx8pQaaJ38 */
import Image from "next/image";
import styles from "@/styles/Skills.module.css";
export default function Skills() {
  return (
    <>
      <section
        id="skills"
        className={`flex flex-col items-center pt-12 sm:pt-24 pb-32 px-8 sm:px-16 `}
      >
        <h1 className={`block text-center  text-4xl font-bold mb-12`}>
          <span className={`section__header relative border-solid pb-1`}>
            Skills
          </span>
        </h1>
        <div className={`${styles["skills__orbit-container"]}`}>
          <div className={`${styles["skills__orbit-center-img"]}`}>
            <img src="/images/skills.png" alt=""></img>
          </div>
          <ul>
            <li className={`${styles["angular-icon"]}`}>
              <div className={`${styles["skills__orbit-img"]}`}>
                <Image
                  className={`object-fit`}
                  src="/images/angular.png"
                  alt="Angular logo"
                  fill
                />
              </div>
              <p className="text-sm">Angular</p>
            </li>
            <li className={`${styles["cSharp-icon"]}`}>
              <div className={`${styles["skills__orbit-img"]}`}>
                <Image
                  className={`object-fit`}
                  src="/images/c-sharp.png"
                  alt="C# Logo"
                  fill
                />
              </div>
              <p>C#</p>
            </li>
            <li className={`${styles["css-icon"]}`}>
              <div className={`${styles["skills__orbit-img"]}`}>
                <Image
                  className={`object-fit`}
                  src="/images/css.png"
                  alt="CSS Logo"
                  fill
                />
              </div>
              <p>CSS</p>
            </li>
            <li className={`${styles["html-icon"]}`}>
              <div className={`${styles["skills__orbit-img"]}`}>
                <Image
                  className={`object-fit`}
                  src="/images/html.png"
                  alt="HTML Logo"
                  fill
                />
              </div>
              <p>HTML</p>
            </li>
            <li className={`${styles["javascript-icon"]}`}>
              <div className={`${styles["skills__orbit-img"]}`}>
                <Image
                  className={`object-fit`}
                  src="/images/javascript.png"
                  alt="JavaScript logo"
                  fill
                />
              </div>
              <p>JavaScript</p>
            </li>
            <li className={`${styles["postgres-icon"]}`}>
              <div className={`${styles["skills__orbit-img"]}`}>
                <Image
                  className={`object-fit`}
                  src="/images/postgres.png"
                  alt="PostgresSQL logo"
                  fill
                />
              </div>
              <p>PostgresSQL</p>
            </li>
            <li className={`${styles["react-icon"]}`}>
              <div className={`${styles["skills__orbit-img"]}`}>
                <Image
                  className={`object-fit`}
                  src="/images/react.png"
                  alt="React logo"
                  fill
                />
              </div>
              <p>React</p>
            </li>
            <li className={`${styles["python-icon"]}`}>
              <div className={`${styles["skills__orbit-img"]}`}>
                <Image
                  className={`object-fit`}
                  src="/images/python.png"
                  alt="Python logo"
                  fill
                />
              </div>
              <p>Python</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
