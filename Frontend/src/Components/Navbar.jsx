export function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
            <h1 className="text-3xl font-bold text-white">GPT-fy Me</h1>
            <div>
                <button className="text-white mx-2 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Home</button>
                <button className="text-white mx-2 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">About</button>
                <button className="text-white mx-2 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Contact</button>
            </div>
        </div>
    );
}
