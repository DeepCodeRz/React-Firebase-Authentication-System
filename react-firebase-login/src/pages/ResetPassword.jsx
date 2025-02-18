import {Link} from "react-router";
import React, {useState} from "react";
import { passwordResetEmail } from "../services/api/auth/resetPassword.js"

export default function ResetPassword() {
    const [email, setEmail] = useState("")
    const [isPasswordResetEmailSent, setIsPasswordResetEmailSent] = useState(false)

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link
                    to="/signin"
                    className="flex-col gap-2 items-start mb-6 text-sm font-semibold text-gray-900 dark:text-white"
                >
                    <i className="ri-arrow-left-line"></i> Sign in
                </Link>
                <div
                    className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Reset Password
                    </h2>
                    <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" name="email" id="email"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="name@company.com" required=""
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                            {isPasswordResetEmailSent ?
                                <div className="mt-4 text-sm font-semibold">
                                    <span>If this email is registered in our system we will send you an link for resetting your password. Please check your email.</span>
                                </div> : null
                            }
                        </div>
                        <div>
                            {isPasswordResetEmailSent ?
                                <div className="mt-6 mb-2 text-sm">
                                    <span>Didn't get an email?</span>
                                </div> : null
                            }
                            <button
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={() => passwordResetEmail(email, setIsPasswordResetEmailSent)}
                            >
                                {!isPasswordResetEmailSent ? "Send email" : "Resend email"}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}