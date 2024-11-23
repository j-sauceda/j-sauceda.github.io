import { component$ } from "@builder.io/qwik";
import type { SpinnerProps } from "~/types/SpinnerProps";

const Spinner = component$((props: SpinnerProps) => {
  return (
    <section class={`flex items-center justify-center ${props.bgClass}`}>
      <div class="spinner-grow inline-block h-20 w-20 rounded-full bg-current opacity-0 dark:text-white">
        <p>{props.text}</p>
      </div>
    </section>
  );
});

export default Spinner;
