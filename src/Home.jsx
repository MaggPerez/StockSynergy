
import { Link } from "react-router-dom";


function Home(){
    let name = localStorage.getItem("username");
    return(
        <>
        <header className="text-white p-3 flex justify-between">
            <h1 className="text-3xl font-bold">Hi {name}</h1>
            <Link className="font-medium text-violet-600 hover:underline dark:text-violet-500" to="/logout">Log out</Link>
        </header>

        <hr />

        <div className="text-white p-3">
            <p className="text-fuchsia-500 text-xl font-bold">NOF: 786</p>
        </div>

        <h1 className="text-3xl font-bold text-violet-600">
            Mag's NOF is currently under development. Stay Tuned</h1>
        </>
    );
}

export default Home;