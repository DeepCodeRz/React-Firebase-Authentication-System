import React from 'react';
import reactLogo from "../assets/reactLogo.png"
import firebaseLogo from "../assets/firebaseLogo.png"

export default function Landing() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <div className="flex gap-4 mb-8 justify-center items-center">
                        <img className="size-12"
                             src={reactLogo}
                             alt="React Logo"/>
                        <img className="size-12"
                             src={firebaseLogo}
                             alt="Firebase Logo"/>
                    </div>
                    <h1 className="text-4xl mb-4 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">React
                        / Firebase Authentication System</h1>
                    <span className="text-xs ">
                        Designed with Flowbite design system.
                    </span>
                    <p className="mb-8 mt-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">This
                        is an authentication system that includes email/password login and register, Google login, and
                        resetting password with email confirmation.</p>
                    <div
                        className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="/signin"
                           className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Log In
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}