

/**
 * Thinking about adding this soon
 * @returns 
 */
function SectionLayout() {
    return (
        <section className="items-center p-4 mx-3 bg-gray-50 dark:bg-common-black rounded-3xl shadow-lg dark:shadow-2xl
        lg:w-1/2">
            {/* Restock with Logo */}
            <header className="flex gap-2 text-3xl font-bold pb-5">
                <img className="w-9 pb-1 px-1 bg-violet-500 rounded-xl" src="/images/restock-icon.svg" alt="restock logo" />Restock
            </header>

            <div className="flex gap-[30px] items-center">
                {/* Units selected */}
                <div className="w-1/3 rounded-3xl bg-white dark:bg-common-black p-5 shadow-lg dark:shadow-2xl text-center
                            lg:w-1/5">
                    <p className="text-violet-500 font-bold text-xl">0</p>
                    <p className="text-violet-500">Units</p>
                    <h3>Selected</h3>
                </div>

                {/* Stockroom Link */}
                <div className="flex justify-center items-center text-fuchsia-500 font-bold bg-white dark:bg-common-black 
                        rounded-3xl p-5 cursor-pointer hover:bg-fuchsia-500 hover:text-white dark:hover:bg-fuchsia-500 shadow-lg dark:shadow-2xl
                        lg:justify-around">
                    <p>Enter Stockroom Inventory →</p>
                    <img className="w-1/4 lg:w-1/12" src="/images/stockroom_logo.svg" alt="" />
                </div>
            </div>
        </section>
    );
}

export default SectionLayout;