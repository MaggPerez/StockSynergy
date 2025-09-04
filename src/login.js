import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

/**
 * Sign in function
 * @param {string} email 
 * @param {string} password 
 */
export async function signIn(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Sign in worked")

            sessionStorage.setItem("isManager", true)
            sessionStorage.setItem("username", user.email);

            document.getElementById('login-message').innerHTML = "Logging in! Loading...";
            document.getElementById('login-message').style.color = "#00FF7F";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}

/**
 * Sign up function
 * @param {string} email 
 * @param {string} password 
 */
export async function signUp(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("user created")

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}
