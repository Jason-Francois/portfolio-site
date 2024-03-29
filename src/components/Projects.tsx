import styles from "@/styles/Projects.module.css";
import projects from "@/content/projects";
import Image from "next/image";
export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className={`${styles["projects"]} py-16 sm:pt-32 px-8 sm:px-16`}
      >
        <h1
          className={`${styles["projects__header"]} block text-center text-4xl font-bold`}
        >
          <span
            className={`${styles["projects__header-content"]} section__header relative border-solid pb-1`}
          >
            Projects
          </span>
        </h1>
        <div
          className={`${styles["projects__card-grid"]} flex flex-col md:flex-row justify-around gap-[3rem] mt-[6rem] items-stretch`}
        >
          {projects.map((project, index) => {
            return (
              <div
                className={`${styles["projects__card"]} rounded-2xl bg-white  lg:max-w-l  flex-col flex overflow-hidden max-w-[40.5rem] lg:min-w-[32rem] xl:min-w-[35rem]`}
                key={index}
              >
                <div
                  className={`${styles["projects__card-img"]} relative h-64 overflow-hidden`}
                >
                  <a
                    className={`${styles["projects__card-imgLink"]}`}
                    href={project.siteUrl}
                    target="_blank"
                  >
                    <Image
                      alt={`Screenshot of ${project.title}`}
                      src={`/images/${project.backgroundImg}`}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    ></Image>
                  </a>
                </div>
                <div
                  className={`${styles["projects__card-content"]} flex flex-col p-6 grow gap-5`}
                >
                  <p className="text-xl font-bold">{project.title}</p>
                  <p className="flex-1  w-100  break-words">
                    {project.description}
                  </p>
                  <div
                    className={`${styles["projects__card--skills-btn-container"]}`}
                  ></div>
                  <div className="flex gap-8 flex-col md:flex-row">
                    <a
                      className={`${styles["projects__card-btn"]} btn-primary`}
                      href={project.siteUrl}
                      target="_blank"
                    >
                      Live Demo
                    </a>

                    <a
                      className={`${styles["projects__card-btn"]} btn-secondary`}
                      href={project.githubUrl}
                      target="_blank"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
