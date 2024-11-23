import { component$, useStore, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import ChevronDownIcon from "../icons/ChevronDownIcon";
import ChevronUpIcon from "../icons/ChevronUpIcon";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";

import ImgLogo from "/media/images/logo.webp?jsx";

const Header = component$(() => {
  const store = useStore({
    lightTheme: true,
    showMenu: false,
  });

  const toggleTheme = $(() => {
    if (!store.lightTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const toggleMenu = $(() => {
    store.showMenu = !store.showMenu;
  });

  return (
    <>
      <nav class="container relative mx-auto bg-amber-300 p-4 dark:bg-gray-800">
        <div class="flex items-center justify-between">
          <div class="p-1">
            <ImgLogo class="h-16 w-16" alt="Logo image" />
          </div>
          <div class="hidden space-x-7 md:flex">
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
              style={{ fontSize: "24px" }}
            >
              {store.lightTheme ? <MoonIcon /> : <SunIcon />}
            </button>
            <button
              class="block md:hidden"
              style={{ fontSize: "24px" }}
              onClick$={() => toggleMenu()}
            >
              {store.showMenu ? (
                <ChevronUpIcon isLightTheme={store.lightTheme} />
              ) : (
                <ChevronDownIcon isLightTheme={store.lightTheme} />
              )}
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
