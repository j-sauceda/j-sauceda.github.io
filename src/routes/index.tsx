import { component$, noSerialize } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

import connectDB from "~/db/connectDB";
import ProfileSchema from "~/db/ProfileSchema";
import ProjectSchema from "~/db/ProjectSchema";

import Projects from "~/components/projects/projects";
import Profile from "~/components/profile/profile";

export const useFetchProfile = routeLoader$(async (requestEvent) => {
  try {
    await connectDB(requestEvent.env.get("MONGODB_URI") || "");

    const data = await ProfileSchema.findOne();

    if (!data) {
      return null;
    }

    return noSerialize(data);
  } catch (error) {
    console.log(error);
  }
});

export const useFetchProjects = routeLoader$(async (requestEvent) => {
  try {
    await connectDB(requestEvent.env.get("MONGODB_URI") || "");

    const data = await ProjectSchema.find({
      featured: true,
    });

    if (!data) {
      return [];
    }

    return noSerialize(data);
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
