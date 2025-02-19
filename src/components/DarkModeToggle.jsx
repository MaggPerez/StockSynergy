import { useEffect, useState } from "react";

const DarkModeToggle = () => {
    const[darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() =>{
        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return(
        <button className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md
        " onClick={() => setDarkMode(!darkMode)}> (Beta):
            {darkMode ? " Turn off Dark" : " Turn off Light"}
        </button>
    );

}

export default DarkModeToggle;