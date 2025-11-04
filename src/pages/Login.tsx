import React, { useEffect } from "react";
import LoginFunctions from "../loginScript";
import { setDocumentTitle } from "../script";

const Login: React.FC = () => {
    // Set document title when the component is mounted
    setDocumentTitle("Login");

    // Destructure values from LoginFunctions hook
    const {
        Username,
        setUsername,
        setPassword,
        Password,
        signUpButton,
        signInButton,
        switchToSignUp,
        switchToLogin,
        showPassword,
    } = LoginFunctions();

    useEffect(() => {
        // Set body background for login page
        const isDarkMode = document.documentElement.classList.contains('dark');
        document.body.style.background = isDarkMode ? '#080a12' : '#f9fafb';

        // Cleanup on unmount
        return () => {
            document.body.style.background = '';
        };
    }, [])


    return (
        <section className="text-base text-gray-900 dark:text-white bg-gray-50 dark:bg-custom-black min-h-screen">
            <div className="lg:flex lg:min-h-screen">
                {/* Image Container - Desktop Only */}
                <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center bg-custom-black">
                    <img
                        src="/images/stock-synergy_dark.svg"
                        alt="Logo Image"
                        className="w-3/4 max-w-md"
                    />
                </div>


                {/* Login Form Container */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-16 py-12 lg:py-16">
                    {/* Mobile/Tablet Logo */}
                    <div className="lg:hidden flex justify-center mb-8">
                        <img
                            src="/images/stock-synergy_dark.svg"
                            alt="Logo"
                            className="w-48 sm:w-64"
                        />
                    </div>

                    {/* Login Form Card (Existing Users) */}
                    <div id="login-field" className="max-w-md mx-auto w-full">
                        <div className="bg-white dark:bg-zinc-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
                            <form onSubmit={signInButton} className="space-y-6">
                                {/* Icon and Title */}
                                <div className="flex flex-col items-center gap-4 mb-6">
                                    <div className="flex items-center justify-center w-16 h-16 bg-violet-100 dark:bg-violet-900 rounded-xl">
                                        <svg className="w-8 h-8 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Welcome Back!</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Sign in to continue to StockSynergy</p>
                                </div>

                                {/* Enter Username */}
                                <div>
                                    <label
                                        htmlFor="Username"
                                        className="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="bg-transparent border-0 border-b-2 border-violet-400 text-violet-900 rounded-t-lg focus:border-violet-600 focus:ring-0 block w-full p-4 placeholder-violet-400 transition-all duration-200 dark:text-violet-100 dark:border-violet-500 dark:placeholder-violet-500 dark:focus:border-violet-300"
                                        placeholder="Enter your username"
                                        value={Username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Enter Password */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password-field"
                                        placeholder="Enter your password"
                                        className="bg-transparent border-0 border-b-2 border-violet-400 text-violet-900 rounded-t-lg focus:border-violet-600 focus:ring-0 block w-full p-4 placeholder-violet-400 transition-all duration-200 dark:text-violet-100 dark:border-violet-500 dark:placeholder-violet-500 dark:focus:border-violet-300"
                                        value={Password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Show password (Sign in) */}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="show-password"
                                        onClick={() => showPassword()}
                                        className="w-4 h-4 text-violet-600 bg-gray-100 border-gray-300 rounded focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="show-password" className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                        Show Password
                                    </label>
                                </div>

                                {/* Error Message */}
                                <p className="text-red-600 dark:text-red-400 text-center text-sm font-medium" id="login-message"></p>

                                {/* Login Button */}
                                <button
                                    id="signin-button"
                                    type="submit"
                                    className="w-full text-white bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-700 hover:to-purple-600 hover:scale-[1.01] focus:ring-2 focus:ring-violet-300 focus:outline-none font-medium rounded-xl text-base px-5 py-4 text-center transition-all duration-200 shadow-md dark:from-violet-700 dark:to-purple-600 dark:hover:from-violet-600 dark:hover:to-purple-500 dark:focus:ring-violet-400"
                                >
                                    Sign in
                                </button>

                                {/* Switch to Sign Up */}
                                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account yet?{" "}
                                    <a
                                        href="#"
                                        onClick={(e) => switchToSignUp(e)}
                                        className="font-medium text-violet-600 hover:underline dark:text-violet-400"
                                    >
                                        Sign up
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>

                    {/* Sign Up Form Card (New Users) */}
                    <div id="signUp-field" className="hidden max-w-md mx-auto w-full">
                        <div className="bg-white dark:bg-zinc-800 p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700">
                            <form onSubmit={signUpButton} className="space-y-6">
                                {/* Icon and Title */}
                                <div className="flex flex-col items-center gap-4 mb-6">
                                    <div className="flex items-center justify-center w-16 h-16 bg-violet-100 dark:bg-violet-900 rounded-xl">
                                        <svg className="w-8 h-8 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                        </svg>
                                    </div>
                                    <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Create Account</h1>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Sign up to get started with StockSynergy</p>
                                </div>

                                {/* Create Username */}
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="create-username-field"
                                        placeholder="Choose a username"
                                        className="bg-transparent border-0 border-b-2 border-violet-400 text-violet-900 rounded-t-lg focus:border-violet-600 focus:ring-0 block w-full p-4 placeholder-violet-400 transition-all duration-200 dark:text-violet-100 dark:border-violet-500 dark:placeholder-violet-500 dark:focus:border-violet-300"
                                        value={Username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Create Password */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="create-password-field"
                                        placeholder="Create a password"
                                        className="bg-transparent border-0 border-b-2 border-violet-400 text-violet-900 rounded-t-lg focus:border-violet-600 focus:ring-0 block w-full p-4 placeholder-violet-400 transition-all duration-200 dark:text-violet-100 dark:border-violet-500 dark:placeholder-violet-500 dark:focus:border-violet-300"
                                        value={Password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Show Password (Sign Up) */}
                                <div id="signup-show-password" className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="show-password-signup"
                                        onClick={() => showPassword()}
                                        className="w-4 h-4 text-violet-600 bg-gray-100 border-gray-300 rounded focus:ring-violet-500 dark:focus:ring-violet-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="show-password-signup" className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                                        Show Password
                                    </label>
                                </div>

                                {/* Error Message */}
                                <p className="text-red-600 dark:text-red-400 text-center text-sm font-medium" id="signup-message"></p>

                                {/* Sign Up Button */}
                                <button
                                    id="signup-button"
                                    type="submit"
                                    className="w-full text-white bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-700 hover:to-purple-600 hover:scale-[1.01] focus:ring-2 focus:ring-violet-300 focus:outline-none font-medium rounded-xl text-base px-5 py-4 text-center transition-all duration-200 shadow-md dark:from-violet-700 dark:to-purple-600 dark:hover:from-violet-600 dark:hover:to-purple-500 dark:focus:ring-violet-400"
                                >
                                    Sign up
                                </button>

                                {/* Switch to Sign In */}
                                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                    Already signed up?{" "}
                                    <a
                                        href="#"
                                        onClick={(e) => switchToLogin(e)}
                                        className="font-medium text-violet-600 hover:underline dark:text-violet-400"
                                    >
                                        Sign in
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;