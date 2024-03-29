import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Projects from "~/components/projects/projects";
import Profile from "~/components/profile/profile";

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
      name: 'description',
      content: 'Jorge Sauceda\'s Professional Portfolio has been built using MongoDB Realm, QwikJS, Tailwind CSS, Qwik icons, and FormSubmit email submission',
    },
  ],
};
