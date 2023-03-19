import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { fetchProfile } from '~/services/fetchProfile';
import type { ProfileType } from '~/shared/ProfileType';
import Spinner from '../spinner/spinner';

const Profile = component$(() => {
  const useResource = useResource$(() => fetchProfile());

  return (
    <Resource
      value={useResource}
      onPending={() => (
        <Spinner bgClass="" text="Loading profile... please wait" />
      )}
      onResolved={(profile: ProfileType) => (
        <section id="hero">
          <div class="container flex flex-col-reverse items-center px-4 mx-auto mt-10 space-between-y-4 md:space-y-0 md:flex-row">
            <div class="flex flex-col mb-20 mr-10 space-y-10 md:w-3/4">
              <h1 class="max-w-md">{profile.name}</h1>
              <p class="font-medium">{profile.degree}</p>
              <p>{profile.description}</p>
              <div class="flex flex-row justify-between">
                Find me on:
                <Link href={profile.linkedin_url} class="social">
                  <i class="fa-brands fa-linkedin fa-2xl"></i>
                </Link>
                <Link href={profile.github_url} class="social">
                  <i class="fa-brands fa-github fa-2xl"></i>
                </Link>
                <Link href={profile.gitlab_url} class="social">
                  <i class="fa-brands fa-gitlab fa-2xl"></i>
                </Link>
                <Link href={profile.google_scholar_url} class="social">
                  <i class="fa-solid fa-graduation-cap fa-2xl"></i>
                </Link>
              </div>
            </div>
            <div class="md:w-1/4">
              <img
                class="rounded-lg"
                src={`/images/${profile.image_url}`}
                alt="Jorge's photo"
              />
            </div>
          </div>
        </section>
      )}
    />
  );
});

export default Profile;
