import React from "react";
import { useSelector } from "react-redux";
import "../styles/common.css";
export default function ContactUs() {
  const isDark = useSelector((state) => state.root.isDark);
  return (
    <div class={`px-[25%] ${isDark ? "darkbg" : ""}`}>
      <section className="px-6 bg-[#FEFFD2] rounded-md">
        <div class="py-8 lg:py-12 max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Contact Us
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center  sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium ">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button type="submit" className="authbtn font-bold ">
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
