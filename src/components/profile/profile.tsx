import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import Spinner from "../spinner/spinner";
import ProfilePic from "/media/images/JS.webp?jsx";

import GithubIcon from "../icons/GithubIcon";
import GitlabIcon from "../icons/GitlabIcon";
import ScholarIcon from "../icons/ScholarIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

import { useFetchProfile } from "~/routes";
import type { ProfileType } from "~/types/ProfileType";

const Profile = component$(() => {
  const signal = useFetchProfile();
  const data = signal.value as ProfileType;

  if (!data) {
    return <Spinner bgClass="" text="Loading profile... please wait" />;
  }

  return (
    <section id="hero">
      <div class="container flex flex-col-reverse items-center px-4 mx-auto mt-10 space-between-y-4 md:space-y-0 md:flex-row">
        <div class="flex flex-col mb-20 mr-10 space-y-10 md:w-3/4">
          <h1 class="max-w-md">{data.name}</h1>
          <p class="font-medium">{data.degree}</p>
          <p>{data.description}</p>
          <div class="flex flex-row justify-between">
            Find me on:
            <Link href={data.linkedin_url} class="social">
              <LinkedinIcon />
            </Link>
            <Link href={data.github_url} class="social">
              <GithubIcon />
            </Link>
            <Link href={data.gitlab_url} class="social">
              <GitlabIcon />
            </Link>
            <Link href={data.google_scholar_url} class="social">
              <ScholarIcon />
            </Link>
          </div>
        </div>
        <div class="flex items-center justify-center md:w-1/4">
          <ProfilePic
            alt="Jorge's photo"
            class="mb-8 md:mb-2"
            style={{ width: "235px" }}
          />
        </div>
      </div>
    </section>
  );
});

export default Profile;
