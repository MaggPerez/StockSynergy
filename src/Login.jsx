import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from './firebase'; // Import from your firebase.js file

function Login(){
    // JS Logic
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    /**
     * Function that switches window to the home page
     */
    function switchWindowAfterLogin(){
        window.location.href = "home.jsx";
    }

    /**
     * Function that signs up the user
     */
    function signUpButton(e){

        //Prevent the form from submitting
        e.preventDefault();
        
        
            const userId = new Date().getTime(); // Unique ID for the data
            set(ref(database, `users/${userId}`), {
            Username: Username,
            Password: Password,
            })
            .then(() => {
                alert('Data written successfully!');
                setUsername('');
                setPassword('');
            })
            .catch((error) => {
                console.error('Error writing data: ', error);
            });
    }



    /**
     * Function that listens for the login button to be clicked
     */
    function loginButton(){
         //Prevent the form from submitting
         e.preventDefault();
        

         //Get the username and password
         var username = document.getElementById('username').value;
         var password = document.getElementById('password').value;
         if(username !== "" && password == !""){
             loginSuccessMessage(username);
         }else{
             loginFailedMessage();
         }
    }



    /**
     * Function that displays a message when the login is successful
     * Takes in the username of the user
     * @param {*} user 
     */
    function loginSuccessMessage(user){
        localStorage.setItem("username", user)
    
        document.getElementById('login-message').innerHTML = "Logging in! Loading...";
        document.getElementById('login-message').style.color = "green";
    
    
        //Add a little delay and then switch to the main menu
        setTimeout(function(){
            window.location.href = "/public/home.html";
        }, 2000);
    
    }


    /**
     * Function for login failed message
     */
    function loginFailedMessage(){
        document.getElementById('login-message').innerHTML = "Try again!";
        document.getElementById('login-message').style.color = "#ff014f";
    }


    /**
     * Function for switching to sign up form
     * @param {*} e 
     */
    function switchToSignUp(e){
        e.preventDefault();

        // Hide sign-in form
        document.getElementById('login-field').classList.add('hidden');
        document.getElementById('signUp-field').classList.remove('hidden');
    }


    /**
     * Function for switching to login form
     * @param {*} e 
     */
    function switchToLogin(e){
        e.preventDefault();

        // Hide sign-up form
        document.getElementById('signUp-field').classList.add('hidden');
        document.getElementById('login-field').classList.remove('hidden');
    }


    return(

        // HTML Code
        <section>
            <div className="flex flex-col space-y-10 lg:flex-row lg:justify-center lg:items-center lg:h-screen">
                {/* Image Container */}

                <div className="w-1/2 mx-auto lg:w-full">
                    <img src="/dark_logo.svg" alt="Logo Image" className='w-full h-auto object-contain' />
                </div>


                {/* Login Form (Existing Users) */}
                <div className="mx-7 lg:w-full lg:px-10">
                    <form id = "login-field" className="space-y-6">
                        <h1 className="text-3xl font-bold text-center">Welcome, Sign in!</h1>

                        {/* Enter Username */}
                        <div>
                            <label htmlFor="Username" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Enter Username</label>
                            <input type="text" name="username" id="username" className="
                            bg-violet-600 border border-violet-400 text-white text-sm rounded-lg focus:ring-violet-300 focus:border-violet-400 block w-full p-4 
                            dark:bg-violet-700 dark:border-violet-600 dark:placeholder-violet-400 dark:text-white dark:focus:ring-violet-300 dark:focus:border-violet-400" 
                            placeholder="Username" required/>
                        </div>


                        {/* Enter Password */}
                        <div>
                        <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Enter Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="bg-violet-600 border border-violet-400 text-white text-sm 
                        rounded-lg focus:ring-violet-300 focus:border-violet-400 block w-full p-4 dark:bg-violet-700 dark:border-violet-600 
                        dark:placeholder-violet-400 dark:text-white dark:focus:ring-violet-300 dark:focus:border-violet-400" required/>
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
                              <label htmlFor="username" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Create Username</label>
                              <input type="text" name="username" id="create-username-field" placeholder="Username" 
                              className="
                            bg-violet-600 border border-violet-400 text-white text-sm rounded-lg focus:ring-violet-300 focus:border-violet-400 block w-full p-4 
                            dark:bg-violet-700 dark:border-violet-600 dark:placeholder-violet-400 dark:text-white dark:focus:ring-violet-300 dark:focus:border-violet-400" 
                            value={Username} onChange={(e) => setUsername(e.target.value)} required />
                            </div>


                            {/* Create Password */}
                             <div>
                              <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Create Password</label>
                              <input type="password" name="password" id="create-password-field" placeholder="Password" 
                              className="bg-violet-600 border border-violet-400 text-white text-sm 
                              rounded-lg focus:ring-violet-300 focus:border-violet-400 block w-full p-4 dark:bg-violet-700 dark:border-violet-600 
                              dark:placeholder-violet-400 dark:text-white dark:focus:ring-violet-300 dark:focus:border-violet-400" 
                              value={Password} onChange={(e) => setPassword(e.target.value)} required />
                             </div>


                             {/* Sign Up Button */}
                             <button id="signup-button" type="submit" className="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none 
                             focus:ring-violet-300 font-medium rounded-lg text-base px-5 py-4 text-center dark:bg-violet-700 dark:hover:bg-violet-800 
                             dark:focus:ring-violet-500">Sign up</button>
      
                             <p className="text-white text-center" id="login-message"></p>
      
      
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

export default Login;