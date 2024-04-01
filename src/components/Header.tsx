'use client'
function Header() {
    return (
        <nav className="shadow-sm bg-white flex flex-col py-2">
            <h2 className="text-gray-500 text-3xl">Weather App</h2>
            {/* <div className="flex flex-col max-w-52 gap-5 mr-10 mt-5 sm:flex-row ml-5">
                <input className="bg-gray-200 px-2 rounded-lg" type="text" placeholder="Latitude" />
                <input className="bg-gray-200 px-2 rounded-lg" type="text" placeholder="Longitude" />
                <button className="bg-blue-700 hover:bg-blue-600 rounded-md transition-all text-white py-2 px-5 font-bold text-xl">Search</button>
            </div> */}
        </nav>
    )
}

export default Header