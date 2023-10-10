import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import Spinner from '../spinner/spinner';
import { Image } from '../image/image';

import { fetchProjects } from '~/services/fetchProjects';
import type { ProjectType } from '~/types/ProjectType';

const Projects = component$(() => {
  const useResource = useResource$(() => fetchProjects());

  return (
    <Resource
      value={useResource}
      onPending={() => (
        <Spinner
          bgClass="bg-amber-300 dark:bg-gray-800"
          text="Loading projects... please wait"
        />
      )}
      onResolved={(projects: ProjectType[]) => (
        <section
          class="container flex flex-col items-center py-4 pb-8 mx-auto mt-10 space-between-y-4 bg-amber-300 dark:bg-gray-800"
          id="projects"
        >
          <h2>Featured Projects</h2>
          <div class="grid grid-cols-1 pl-0 mx-4 mt-12 gap-4 space-y-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              return (
                project.featured && (
                  <div class="flex flex-col items-center justify-between space-y-4 md:shrink-0">
                    <h3>{project.title}</h3>
                    <Image altText="Project's image" extraClasses='inset-0 w-full h-fit object-cover rounded-lg' onLoadingText='Loading image...' src={`/images/${project.image_url}`} width={420} />
                    <p>{project.description}</p>
                    <div class="flex flex-row space-x-2">
                      {project.code_url && (
                        <Link class="project-link" href={project.code_url}>
                          <p>View Source</p>
                        </Link>
                      )}
                      {project.deployment_url && (
                        <Link
                          class="project-link"
                          href={project.deployment_url}
                        >
                          <p>Test site</p>
                        </Link>
                      )}
                      {project.download_url && (
                        <Link class="project-link" href={project.download_url}>
                          <p>Download Files</p>
                        </Link>
                      )}
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </section>
      )}
    />
  );
});

export default Projects;
