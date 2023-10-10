import { component$, Resource, useResource$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { SiGithub, SiGitlab, SiGooglescholar, SiLinkedin } from "@qwikest/icons/simpleicons";

import Spinner from '../spinner/spinner';
import ProfilePic from '/media/images/JS.webp?jsx';

import { fetchProfile } from '~/services/fetchProfile';
import type { ProfileType } from '~/types/ProfileType';

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
                  <SiLinkedin />
                </Link>
                <Link href={profile.github_url} class="social">
                  <SiGithub />
                </Link>
                <Link href={profile.gitlab_url} class="social">
                  <SiGitlab />
                </Link>
                <Link href={profile.google_scholar_url} class="social">
                  <SiGooglescholar />
                </Link>
              </div>
            </div>
            <div class="flex items-center justify-center md:w-1/4">
              <ProfilePic alt="Jorge's photo" class="mb-8 md:mb-2" style={{ height: '275px', width: '235px' }} />
            </div>
          </div>
        </section>
      )}
    />
  );
});

export default Profile;
