import React from "react";
import LoginScript from "./loginScript";


function LoginForm(){
    const {Username,
        setUsername,
        setPassword,
        Password,
        signUpButton,
        signInButton,
        switchToSignUp,
        switchToLogin,
        showPassword} = LoginScript();
        
    return(

        // HTML Code
        <section className='text-base'>
            <div className="flex flex-col space-y-10 lg:flex-row lg:justify-center lg:items-center lg:h-screen">
                {/* Image Container */}

                <div className="w-1/2 mx-auto lg:w-full">
                    <img src="/dark_logo.svg" alt="Logo Image" className='w-full h-auto object-contain' />
                </div>


                {/* Login Form (Existing Users) */}
                <div className="mx-7 lg:w-full lg:px-10">
                    <form onSubmit={signInButton} id = "login-field" className="space-y-6 ">
                        <h1 className="text-3xl font-bold text-center">Welcome, Sign in!</h1>

                        {/* Enter Username */}
                        <div>
                            <label htmlFor="Username" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Enter Username</label>
                            <input type="text" name="username" id="username" className="
                            bg-violet-600 border border-violet-400 text-white  rounded-lg focus:ring-violet-300 focus:border-violet-400 block w-full p-4 
                            dark:bg-violet-700 dark:border-violet-600 dark:placeholder-violet-400 dark:text-white dark:focus:ring-violet-300 dark:focus:border-violet-400" 
                            placeholder="Username"
                            value={Username}
                            onChange={(e) => setUsername(e.target.value)} 
                             required/>
                        </div>


                        {/* Enter Password */}
                        <div>
                            <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Enter Password</label>
                            <input type="password" name="password" id="password-field" placeholder="Password" className="bg-violet-600 border border-violet-400 text-white  
                            rounded-lg focus:ring-violet-300 focus:border-violet-400 block w-full p-4 dark:bg-violet-700 dark:border-violet-600 
                            dark:placeholder-violet-400 dark:text-white dark:focus:ring-violet-300 dark:focus:border-violet-400"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                        </div>

                        {/* Show password (Sign in) */}
                        <div className='text-gray-500 dark:text-gray-400 text-sm px-1'>
                            <input type="checkbox" id='show-password' className="" onClick={() => showPassword()} />
                            <label htmlFor="" className='px-2' >Show Password</label>
                        </div>


                      {/* Login Button */}
                      <button id="signin-button" type="submit" className="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none 
                       focus:ring-violet-300 font-medium rounded-lg text-base px-5 py-4 text-center dark:bg-violet-700 dark:hover:bg-violet-800 
                       dark:focus:ring-violet-500">Sign in</button>

                      <p className="text-white text-center" id="login-message"></p>


                      {/* Switch to Sign Up */}
                      <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="#" onClick={(e) => switchToSignUp(e)} className="font-medium text-violet-600 hover:underline dark:text-violet-500">Sign up</a>
                       </p>
                    </form>







                    {/* Sign Up Form (New Users) */}
                    <div id="signUp-field" className="hidden">
                        <form onSubmit={signUpButton} className="space-y-6">
                          <h1 className="text-3xl font-bold text-center">Create an account!</h1>

                          {/* Create Username */}
                            <div>
                              <label htmlFor="username" className="block mb-2 font-medium text-gray-900 dark:text-white">Create Username</label>
                              <input type="text" name="username" id="create-username-field" placeholder="Username" 
                              className="
                            bg-violet-600 border border-violet-400 text-white rounded-lg focus:ring-violet-300 focus:border-violet-400 block w-full p-4 
                            dark:bg-violet-700 dark:border-violet-600 dark:placeholder-violet-400 dark:text-white dark:focus:ring-violet-300 dark:focus:border-violet-400" 
                            value={Username} onChange={(e) => setUsername(e.target.value)} required />
                            </div>


                            {/* Create Password */}
                             <div>
                              <label htmlFor="password" className="block mb-2 font-medium text-gray-900 dark:text-white">Create Password</label>
                              <input type="password" name="password" id="create-password-field" placeholder="Password" 
                              className="bg-violet-600 border border-violet-400 text-white 
                              rounded-lg focus:ring-violet-300 focus:border-violet-400 block w-full p-4 dark:bg-violet-700 dark:border-violet-600 
                              dark:placeholder-violet-400 dark:text-white dark:focus:ring-violet-300 dark:focus:border-violet-400" 
                              value={Password} onChange={(e) => setPassword(e.target.value)} required />
                             </div>


                             {/* Show Password (Sign Up) */}
                             <div id='signup-show-password' className='text-gray-500 dark:text-gray-400 text-sm px-1'>
                                <input type="checkbox" id='show-password' className="" onClick={() => showPassword()} />
                                <label htmlFor="" className='px-2' >Show Password</label>
                            </div>


                             {/* Sign Up Button */}
                             <button id="signup-button" type="submit" className="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none 
                             focus:ring-violet-300 font-medium rounded-lg text-base px-5 py-4 text-center dark:bg-violet-700 dark:hover:bg-violet-800 
                             dark:focus:ring-violet-500">Sign up</button>
      
                             <p className="text-white text-center" id="signup-message"></p>
      
      
                             {/* Switch to Sign In */}
                             <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                              Already signed up? <a href="#" onClick={(e) => switchToLogin(e)} className="font-medium text-violet-600 hover:underline dark:text-violet-500">Sign in</a>
                             </p>
                        </form>
                      </div>
                </div>
            </div>
        </section>
    );
}

export default LoginForm;