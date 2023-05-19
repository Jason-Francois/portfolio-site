import styles from "@/styles/Projects.module.css";
import projects from "@/content/projects";
import ProjectCard from "@/interfaces/ProjectCard";
export default function Projects() {
  return (
    <>
      <section className={`${styles["projects"]} py-24 px-16`}>
        <h1
          className={`${styles["projects__header"]} block text-center text-4xl font-bold mb-3`}
        >
          <span
            className={`${styles["projects__header-content"]} relative border-solid pb-1`}
          >
            Projects
          </span>
        </h1>
        <div
          className={`styles["projects__card-grid] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem] mt-[5rem]`}
        >
          {projects.map((project, index) => {
            return (
              <div
                className={`{styles["projects__card]} outline-black outline rounded-xl max-w-3xl m-0 m-auto`}
                key={index}
              >
                <div className={`${styles["projects__card-img"]}`}>
                  <img
                    alt={`Screenshot of ${project.title}`}
                    src={`/images/${project.backgroundImg}`}
                  ></img>
                </div>
                <div
                  className={`${styles["projects__card-content"]} flex flex-col`}
                >
                  <p className="font-bold">{project.title}</p>
                  <p>{project.description}</p>
                  <div className="flex">
                    <button>
                      <a href={project.siteUrl}>Live Demo</a>
                    </button>
                    <button>
                      <a href={project.githubUrl}>GitHub Repo</a>
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
