import { component$, Slot } from '@builder.io/qwik';
// import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '../components/header/header';
import Footer from "~/components/footer/footer";

// export const useServerTimeLoader = routeLoader$(() => {
//   return {
//     date: new Date().toISOString(),
//   };
// });

export default component$(() => {
  return (
    <div class="text-slate-900 bg-gray-100 dark:bg-slate-400 dark:text-white">
      <Header />
        <main>
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </div>
  );
});
