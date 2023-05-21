import styles from "@/styles/Projects.module.css";
import projects from "@/content/projects";
import Image from "next/image";
export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className={`${styles["projects"]} py-32 px-8 sm:px-16`}
      >
        <h1
          className={`${styles["projects__header"]} block text-center text-4xl font-bold mb-3`}
        >
          <span
            className={`${styles["projects__header-content"]} section__header relative border-solid pb-1`}
          >
            Projects
          </span>
        </h1>
        <div
          className={`${styles["projects__card-grid"]} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[3rem] mt-[5rem] items-stretch`}
        >
          {projects.map((project, index) => {
            return (
              <div
                className={`${styles["projects__card"]} rounded-2xl bg-white  lg:max-w-l  flex-col flex overflow-hidden`}
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
                  <p className="flex-1">{project.description}</p>
                  <div className="flex gap-8 flex-col md:flex-row">
                    <button
                      className={`${styles["projects__card-btn"]} btn-primary`}
                    >
                      <a href={project.siteUrl} target="_blank">
                        Live Demo
                      </a>
                    </button>
                    <button
                      className={`${styles["projects__card-btn"]} btn-secondary`}
                    >
                      <a href={project.githubUrl} target="_blank">
                        GitHub Repo
                      </a>
                    </button>
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
