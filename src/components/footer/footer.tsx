import { component$ } from "@builder.io/qwik";

const Footer = component$(() => {
  return (
    <footer id="contact">
      <div class="container flex flex-col items-center px-4 mx-auto mt-10 pb-20 space-between-y-4">
        <h2>Contact me</h2>
        <p class="text-sm font-medium mb-5">
          *Service provided by&nbsp;
          <a href="https://formsubmit.co/">FormSubmit.co</a>
        </p>
        <form
          action="https://formsubmit.co/bea753eaacdb29392839b0798b47a976"
          class="space-y-3 sm:w-36 md:w-full max-w-lg"
          method="POST"
        >
          <div>
            <input
              class="form-input w-full border-amber-300 dark:border-white dark:text-black"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <input
              class="w-full border-amber-300 dark:border-white dark:text-black"
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
          </div>
          <div>
            <textarea
              class="form-textarea w-full border-amber-300 dark:border-white dark:text-black"
              name="message"
              placeholder="Please, write your message"
              required
            ></textarea>
          </div>
          <div>
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for your message! I will reply to you soon"
            />
            <input
              type="hidden"
              name="_blacklist"
              value="societees223, caredogbest, jsauceda.info"
            />
            <input type="text" name="_honey" style="display: none" />
            <input type="hidden" name="_subject" value="New contact request" />
            <input type="hidden" name="_template" value="table" />
            <button
              class="w-full py-4 mt-3 rounded-lg uppercase bg-amber-300 dark:bg-gray-800 dark:text-white"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
});

export default Footer;
