import React, { useEffect, useState } from "react";
import LoginFunctions from "../loginScript";
import { setDocumentTitle } from "../script";
import { signIn, signUp } from "../login";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    // Set document title when the component is mounted
    setDocumentTitle("Login");
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    async function handleSignIn(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        try {
            await signIn(username, password)
            // Redirect to home page after successful sign in
            navigate('/home')
        } catch (error) {
            alert("Sign in error")
        }
    }

    async function handleSignUp(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault()

        try {
            await signUp(username, password)
            
            navigate('/home')

        } catch (error) {
            alert("Error")
        }
    }



    const {
        signUpButton,
        signInButton,
        switchToSignUp,
        switchToLogin,
        showPassword,
    } = LoginFunctions();

    useEffect(() => {
        document.body.style.background = "white";
    })


    return (
        <section className="text-base  text-black bg-white">
            <div className="space-y-3 lg:flex lg:justify-center lg:items-center lg:h-screen">
                {/* Image Container */}
                <div className="hidden lg:block lg:w-1/2">
                    <img
                        src="/images/stock-synergy_dark.svg"
                        alt="Logo Image"
                        className="w-1/2 mx-auto lg:w-full lg:h-screen bg-custom-black"
                    />
                </div>


                {/* Login Form (Existing Users) */}
                <div className="mx-7 lg:w-1/2 lg:px-28 h-screen flex flex-col justify-center">
                    <form onSubmit={handleSignIn} id="login-field" className="space-y-6 ">
                        <h1 className="text-3xl font-bold text-center">Welcome, Sign in!</h1>

                        {/* Enter Username */}
                        <div>
                            <label
                                htmlFor="Username"
                                className="block mb-2 text-base font-medium "
                            >
                                Enter Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="bg-transparent border-0 border-b-2 border-violet-400 text-violet-900 rounded-t-lg focus:border-violet-600 focus:ring-0 block w-full p-4 placeholder-violet-400 transition-all duration-200 dark:text-violet-100 dark:border-violet-500 dark:placeholder-violet-500 dark:focus:border-violet-300"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        {/* Enter Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-base font-medium "
                            >
                                Enter Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password-field"
                                placeholder="Password"
                                className="bg-transparent border-0 border-b-2 border-violet-400 text-violet-900 rounded-t-lg focus:border-violet-600 focus:ring-0 block w-full p-4 placeholder-violet-400 transition-all duration-200 dark:text-violet-100 dark:border-violet-500 dark:placeholder-violet-500 dark:focus:border-violet-300"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Show password (Sign in) */}
                        <div className="text-gray-500 dark:text-gray-400 text-sm px-1">
                            <input
                                type="checkbox"
                                id="show-password"
                                onClick={() => showPassword()}
                            />
                            <label htmlFor="" className="px-2">
                                Show Password
                            </label>
                        </div>

                        {/* Login Button */}
                        <button
                            id="signin-button"
                            type="submit"
                            className="w-full text-white bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-700 hover:to-purple-600 hover:scale-[1.01] focus:ring-2 focus:ring-violet-300 focus:outline-none font-medium rounded-lg text-base px-5 py-4 text-center transition-all duration-200 shadow-md dark:from-violet-700 dark:to-purple-600 dark:hover:from-violet-600 dark:hover:to-purple-500 dark:focus:ring-violet-400"
                        >
                            Sign in
                        </button>

                        <p className="text-white text-center" id="login-message"></p>

                        {/* Switch to Sign Up */}
                        <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?{" "}
                            <a
                                href="#"
                                onClick={(e) => switchToSignUp(e)}
                                className="font-medium text-violet-600 hover:underline dark:text-violet-500"
                            >
                                Sign up
                            </a>
                        </p>
                    </form>

                    {/* Sign Up Form (New Users) */}
                    <div id="signUp-field" className="hidden">
                        <form onSubmit={handleSignUp} className="space-y-6">
                            <h1 className="text-3xl font-bold text-center">Create an account!</h1>

                            {/* Create Username */}
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block mb-2 font-medium "
                                >
                                    Create Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="create-username-field"
                                    placeholder="Username"
                                    className="bg-transparent border-0 border-b-2 border-violet-400 text-violet-900 rounded-t-lg focus:border-violet-600 focus:ring-0 block w-full p-4 placeholder-violet-400 transition-all duration-200 dark:text-violet-100 dark:border-violet-500 dark:placeholder-violet-500 dark:focus:border-violet-300"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Create Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 font-medium "
                                >
                                    Create Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="create-password-field"
                                    placeholder="Password"
                                    className="bg-transparent border-0 border-b-2 border-violet-400 text-violet-900 rounded-t-lg focus:border-violet-600 focus:ring-0 block w-full p-4 placeholder-violet-400 transition-all duration-200 dark:text-violet-100 dark:border-violet-500 dark:placeholder-violet-500 dark:focus:border-violet-300"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Show Password (Sign Up) */}
                            <div id="signup-show-password" className="text-gray-500 dark:text-gray-400 text-sm px-1">
                                <input
                                    type="checkbox"
                                    id="show-password"
                                    onClick={() => showPassword()}
                                />
                                <label htmlFor="" className="px-2">
                                    Show Password
                                </label>
                            </div>

                            {/* Sign Up Button */}
                            <button
                                id="signup-button"
                                type="submit"
                                className="w-full text-white bg-gradient-to-r from-violet-600 to-purple-500 hover:from-violet-700 hover:to-purple-600 hover:scale-[1.01] focus:ring-2 focus:ring-violet-300 focus:outline-none font-medium rounded-lg text-base px-5 py-4 text-center transition-all duration-200 shadow-md dark:from-violet-700 dark:to-purple-600 dark:hover:from-violet-600 dark:hover:to-purple-500 dark:focus:ring-violet-400"
                            >
                                Sign up
                            </button>

                            <p className="text-white text-center" id="signup-message"></p>

                            {/* Switch to Sign In */}
                            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                Already signed up?{" "}
                                <a
                                    href="#"
                                    onClick={(e) => switchToLogin(e)}
                                    className="font-medium text-violet-600 hover:underline dark:text-violet-500"
                                >
                                    Sign in
                                </a>
                            </p>
                        </form>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Login;