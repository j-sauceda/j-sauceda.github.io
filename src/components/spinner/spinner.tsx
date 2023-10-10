import { component$ } from '@builder.io/qwik';
import type { SpinnerProps } from '~/types/SpinnerProps';

const Spinner = component$((props: SpinnerProps) => {
  return (
    <section class={`flex justify-center items-center ${props.bgClass}`}>
      <div class="spinner-grow inline-block w-20 h-20 bg-current rounded-full opacity-0 dark:text-white">
        <p>{props.text}</p>
      </div>
    </section>
  );
});

export default Spinner;
