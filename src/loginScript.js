import React, { useState } from 'react';
import { ref, set, get } from 'firebase/database';
import { database } from './firebase'; // Import from your firebase.js file

function LoginFunctions(){
    // JS Logic
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [UserID] = useState(new Date().getTime()); // Unique ID for the data

    const[userData, setUserData] = useState(null);
    const [error, setError] = useState("");

    /**
     * Function that switches window to the home page
     */
    function switchWindowAfterLogin(){
        window.location.href = "home.jsx";
    }

    /**
     * Function that signs up the user.
     * Takes in username and password and adds it to the database.
     * Unique ID is generated for the user.
     * @param e
     */
    function signUpButton(e){

        //Prevent the form from submitting
        e.preventDefault();
        
        
        //Adding user's data to the database
            set(ref(database, `users/${Username}`), {
            Username: Username,
            Password: Password,
            UserID: UserID,
            })
            .then(() => {
                //Displays message that the account was created successfully
                accountCreationMessage(Username);

                setUsername('');
                setPassword('');
            })
            .catch((error) => {
                console.error('Error writing data: ', error);
            });
    }


    /**
     * Function that logs in the user.
     * Takes in username and password and checks if it matches the database.
     * If it matches, it logs in the user.
     * @param {*} e 
     */
    const signInButton = async (e) => {
        //Prevent the form from submitting
        e.preventDefault();

        try {
            //Getting user's data from the database by their username
            const userRef = ref(database, `users/${Username}`);
            const snapshot = await get(userRef);

            //Checking to see if the user exists
            if(snapshot.exists()){
                const user = snapshot.val();

                //Checking to see if the user's password is correct
                if(user.Password === Password){
                    // alert("User logged in successfully!");
                    loginSuccessMessage(user)
                    setUserData(user);
                    setError("");
                    console.log("User logged in successfully!");
                }
                else{
                    setError("Incorrect password");
                    loginFailedMessage();
                }
            }
            else{
                setError("User does not exist");
                document.getElementById('login-message').innerHTML = "User does not exist!";
                document.getElementById('login-message').style.color = "#ff014f";
            }


        } catch (error) {
            console.error("Error during sign in", error)
            setError("Error during sign in");
        }
        
    
    }

    /**
     * Function that display message that the account was created successfully.
     * Takes in username and adds it to local storage to display on the home page.
     * @param {*} user 
     */
    function accountCreationMessage(user){
        localStorage.setItem("username", user);
        let signUpMessage = document.getElementById('signup-message');

        signUpMessage.innerHTML = "Account Created! Redirecting to main menu...";
        signUpMessage.style.color = "#00FF7F";
    }



    /**
     * Function that displays a message when the login is successful
     * Takes in the username of the user
     * @param {*} user 
     */
    function loginSuccessMessage(user){
        localStorage.setItem("username", user)

        document.getElementById('login-message').innerHTML = "Logging in! Loading...";
        document.getElementById('login-message').style.color = "#00FF7F";


        //Add a little delay and then switch to the main menu
        setTimeout(function(){
            // window.location.href = "/public/home.html";
        }, 2000);

    }


    /**
     * Function for login failed message
     */
    function loginFailedMessage(){
        document.getElementById('login-message').innerHTML = "Incorrect Password, Try again!";
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


    /**
     * Function that allows to show and hide password.
     */
    function showPassword(){

        //If login field is not hidden, these functionalities will be used
        if(!document.getElementById('login-field').classList.contains('hidden')){
            let showPasswordField = document.getElementById('password-field');
            if(showPasswordField.type === "password"){
                showPasswordField.type = "text";
            }
            else{
                showPasswordField.type = "password";
            }
        }
        else{
            //If sign up field is not hidden, these functionalities will be used
            let showPasswordField = document.getElementById('create-password-field');
            if(showPasswordField.type === "password"){
                showPasswordField.type = "text";
            }
            else{
                showPasswordField.type = "password";
            }
        }


        
    }

    return{
        Username,
        setUsername,
        Password,
        setPassword,
        UserID,
        signUpButton,
        signInButton,
        accountCreationMessage,
        loginSuccessMessage,
        loginFailedMessage,
        switchToSignUp,
        switchToLogin,
        showPassword,
    };

};

export default LoginFunctions;