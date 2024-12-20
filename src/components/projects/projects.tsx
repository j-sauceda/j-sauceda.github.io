import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import Spinner from "../spinner/spinner";
import PortfolioImage from "../image/image";

import { useFetchProjects } from "~/routes";
import type { ProjectType } from "~/types/ProjectType";

const Projects = component$(() => {
  const signal = useFetchProjects();
  const projects = signal.value as ProjectType[];

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!projects) {
    return (
      <Spinner
        bgClass="bg-amber-300 dark:bg-gray-800"
        text="Loading projects... please wait"
      />
    );
  }

  return (
    <section
      class="space-between-y-4 container mx-auto mt-10 flex flex-col items-center bg-amber-300 py-4 pb-8 dark:bg-gray-800"
      id="projects"
    >
      <h2>Featured Projects</h2>
      <div class="mx-4 mt-12 grid grid-cols-1 gap-4 space-y-4 pl-0 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            project.featured && (
              <div class="flex flex-col items-center justify-between space-y-4 md:shrink-0">
                <h3>{project.title}</h3>
                <PortfolioImage
                  altText="Project's image"
                  extraClasses="inset-0 w-full h-fit object-cover rounded-lg"
                  onLoadingText="Loading image..."
                  src={`/images/${project.image_url}`}
                  width={420}
                />
                <p>{project.description}</p>
                <div class="flex flex-row space-x-2">
                  {project.backend_url && (
                    <Link class="project-link" href={project.backend_url}>
                      <p>Backend code</p>
                    </Link>
                  )}
                  {project.deployment_url && (
                    <Link class="project-link" href={project.deployment_url}>
                      <p>Test site</p>
                    </Link>
                  )}
                  {project.download_url && (
                    <Link class="project-link" href={project.download_url}>
                      <p>Download Files</p>
                    </Link>
                  )}
                  {project.frontend_url && (
                    <Link class="project-link" href={project.frontend_url}>
                      <p>Frontend Code</p>
                    </Link>
                  )}
                  {project.monorepo_url && (
                    <Link class="project-link" href={project.monorepo_url}>
                      <p>View Repository</p>
                    </Link>
                  )}
                </div>
              </div>
            )
          );
        })}
      </div>
    </section>
  );
});

export default Projects;
