import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { firestoreDB } from "./firebase";

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

            //Checking if the user is a manager
            isManager(user)

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

            //Setting up user's profile
            setUpUserProfile(user)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}

/**
 * Function that sets up user's profile
 * @param {import('firebase/auth').User} user - Firebase user object
 */
async function setUpUserProfile(user) {
    try {
        await setDoc(doc(firestoreDB, "Users", user.uid), {
            email: user.email,
            name: user.name || "",
            createdAt: new Date(),
            isManager: false
        })
    } catch (error) {
        console.log(error.code, error.message)
    }
}

/**
 * 
 * * @param {import('firebase/auth').User} user - Firebase user object
 */
async function isManager(user) {
    const docRef = doc(firestoreDB, "Users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists() && docSnap.data().isManager) {
        sessionStorage.setItem("isManager", docSnap.data().isManager)
        sessionStorage.setItem("username", docSnap.data().email);
    }
    else {
        
    }
}

