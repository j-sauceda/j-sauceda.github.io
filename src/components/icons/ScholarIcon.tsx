import { component$ } from "@builder.io/qwik";

const ScholarIcon = component$(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 24 24"
      style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
    >
      <path d="M2 7v1l11 4 9-4V7L11 4z"></path>
      <path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z"></path>
    </svg>
  );
});

export default ScholarIcon;