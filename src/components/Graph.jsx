

export default function Graph() {

    return (
        <div className="flex gap-[35px] justify-center pb-24 pt-5">
            <div className="lg:w-1/2 w-full flex flex-col gap-[50px]">
                {/* Top Line */}
                <hr className="border-gray-300 border-2 " />
                <hr className="border-gray-300 border-2 " />
                <hr className="border-gray-300 border-2 " />
                <hr className="border-gray-300 border-2 " />

                {/* Bottom Line */}
                <hr className="border-black border-2 " />

                {/* Bar graph */}
                <div className="flex absolute lg:left-[50%] left-[30%] space-x-4 flex-wrap-reverse">
                    <div className="h-[13.5em] w-12 bg-green-400"></div>
                    <div className="h-[3em] w-12 bg-red-400"></div>
                    <div className="h-[8.5em] w-12 bg-yellow-400"></div>
                </div>


                <div className="flex justify-center space-x-10">
                    <p>Sales</p>
                    <p>Tees</p>
                    <p>Jeans</p>
                </div>
            </div>
        </div>
    );
}