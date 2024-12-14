import { component$, noSerialize } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import type { DocumentHead } from "@builder.io/qwik-city";

import Projects from "~/components/projects/projects";
import Profile from "~/components/profile/profile";

const baseUrl = "https://cloud.appwrite.io/v1/databases";

export const useFetchProfile = routeLoader$(async (requestEvent) => {
  const PROJECT_ID = requestEvent.env.get("PROJECT_ID") || "";
  const DATABASE_ID = requestEvent.env.get("DATABASE_ID") || "";
  const PROFILE_COLLECTION = requestEvent.env.get("PROFILE_COLLECTION_ID") || "";

  const url = `${baseUrl}/${DATABASE_ID}/collections/${PROFILE_COLLECTION}/documents`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Appwrite-Project": PROJECT_ID,
      },
    });

    const data = await response.json();

    if (!data) {
      return null;
    }

    return noSerialize(data.documents[0]);
  } catch (error) {
    console.log(error);
  }
});

export const useFetchProjects = routeLoader$(async (requestEvent) => {
  const PROJECT_ID = requestEvent.env.get("PROJECT_ID") || "";
  const DATABASE_ID = requestEvent.env.get("DATABASE_ID") || "";
  const PROJECTS_COLLECTION = requestEvent.env.get("PROJECTS_COLLECTION_ID") || "";

  const url = `${baseUrl}/${DATABASE_ID}/collections/${PROJECTS_COLLECTION}/documents`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Appwrite-Project": PROJECT_ID,
      },
    });

    const data = await response.json();

    if (data.length === 0) {
      return [];
    }

    return noSerialize(data.documents);
  } catch (error) {
    console.log(error);
  }
});

export default component$(() => {
  return (
    <div>
      <Profile />
      <Projects />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Jorge Sauceda's Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Jorge Sauceda's Professional Portfolio has been built using MongoDB Realm, QwikJS, Tailwind CSS, Qwik icons, and FormSubmit email submission",
    },
  ],
};
