import { useEffect, useState } from "react";

const DarkModeToggle = () => {
    const[darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() =>{
        if(darkMode){
            document.body.style.background = "#1a1a1a"
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            
        }
        else{
            document.body.style.background = "#FFFFFF"
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            
        }
    }, [darkMode]);

    return(
        <button 
            className="p-2 hover:bg-gray-200 hover:dark:bg-gray-800 text-black dark:text-white rounded-md flex items-center"
            onClick={() => setDarkMode(!darkMode)}>
            <img 
                src={darkMode ? "/images/moon.svg" : "/images/sun.svg"} 
                alt={darkMode ? "Moon Icon" : "Sun Icon"} 
                className="w-6 h-6"/>
            <span>{darkMode ? "" : ""}</span>
        </button>
    );

}

export default DarkModeToggle;