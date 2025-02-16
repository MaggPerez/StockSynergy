export default function Dashboard() {
    return (
        <div className="flex gap-[30px] flex-wrap">
            <div className="grow bg-gray-100 rounded-3xl">
                {/* Upper left */}
                <div className="p-3">
                    <h1 className="text-3xl font-bold">NOF Updates</h1>
                    <p className="text-fuchsia-500 text-xl font-bold">NOF: 426</p>
                    <p className="text-fuchsia-500 text-xs font-bold">Previously: 786</p>
                </div>
            </div>
            <div className="grow bg-gray-100 rounded-3xl">
                {/* Upper Right */}
                <div className="p-3">
                    <p className="text-3xl font-bold">Leaderboards</p>
                    <p className="text-fuchsia-500 text-xl font-bold">1. U.S Constitution (Pulled 200)</p>
                    <p className="text-fuchsia-500 text-xl font-bold">2. Statue of Liberty (Pulled 100)</p>
                    <p className="text-fuchsia-500 text-xl font-bold">3. Kendrick Lamar (Pulled 60)</p>
                    <p className="text-fuchsia-500 text-xl font-bold">4. Sam (Pulled 0)</p>
                </div>
            </div>
            <div className="w-full p-10 bg-violet-400 text-white text-3xl font-bold text-center">
                {/* Middle Wide */}
                <h1>Restock</h1>

            </div>
            <div className="grow bg-fuchsia-300 p-10 rounded-3xl">
                {/* Bottom Left */}
                <h1 className="text-3xl font-bold">Sales Floor</h1>

            </div>
            <div className="grow rounded-3xl">
                {/* Bottom right */}
            </div>
        </div>







    );
}