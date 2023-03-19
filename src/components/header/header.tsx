import { component$, useStore, $ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

const Header = component$(() => {
  const store = useStore({
    lightTheme: true,
    showMenu: false,
  });

  const toggleTheme = $(() => {
    if (!store.lightTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  const toggleMenu = $(() => {
    store.showMenu = !store.showMenu;
  });

  return (
    <>
      <nav class="relative container mx-auto p-4 bg-amber-300 dark:bg-gray-800">
        <div class="flex items-center justify-between">
          <div class="p-1">
            <img class="h-16" src="/images/logo.webp" alt="Logo image" />
          </div>
          <div class="hidden md:flex space-x-7">
            <Link class="navbar-item" href="#hero">
              About
            </Link>
            <Link class="navbar-item" href="#projects">
              Projects
            </Link>
            <Link class="navbar-item" href="#contact">
              Contact
            </Link>
          </div>
          <div class="flex space-x-3">
            <button
              onClick$={() => {
                store.lightTheme = !store.lightTheme;
                toggleTheme();
              }}
            >
              <i
                class={`fa-regular fa-xl dark:text-white ${
                  store.lightTheme ? 'fa-moon' : 'fa-sun'
                }`}
              ></i>
            </button>
            <button class="block md:hidden" onClick$={() => toggleMenu()}>
              <i
                class={`fa-solid fa-xl ${
                  !store.showMenu
                    ? 'fa-circle-chevron-down'
                    : 'fa-circle-chevron-up'
                }`}
              ></i>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {store.showMenu && (
          <div class="navbar-mobile">
            <Link
              class="navbar-item"
              href="#hero"
              onClick$={() => toggleMenu()}
            >
              About
            </Link>
            <Link
              class="navbar-item"
              href="#projects"
              onClick$={() => toggleMenu()}
            >
              Projects
            </Link>
            <Link
              class="navbar-item"
              href="#contact"
              onClick$={() => toggleMenu()}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
});

export default Header;
