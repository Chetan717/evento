import { useRouter } from "next/router";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function NavBar() {
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <header className="bg-[color:var(--white-color)] fixed top-0 z-50 w-full shadow-md text-[color:var(--secondary-color)]">
            <div className="container mx-auto flex items-center flex-col lg:flex-row justify-between p-4">
                <div className="flex items-center">
                    {/* <img src="/logo.png" alt="Logo" className="h-8" /> */}
                    <h1
                        onClick={() => router.push("/users/dashboard")}
                        className="m-2 text-gray-800 font-bold text-4xl cursor-pointer"
                    >
                        In
                        <span className="text-[color:var(--secondary-color)]">
                            VIT
                        </span>
                        e✨
                    </h1>
                </div>
                <nav className="text-sm">
                    <ul className="flex items-center">
                        <li
                            onClick={() => router.push("/users/dashboard")}
                            className="mr-4 cursor-pointer"
                        >
                            <a>Home</a>
                        </li>
                        <li
                            onClick={() => router.push("/users/dashboard")}
                            className="mr-4 cursor-pointer"
                        >
                            <a>Events</a>
                        </li>
                        <li
                            onClick={() => router.push("/users/dashboard")}
                            className="mr-4 cursor-pointer"
                        >
                            <a>Team</a>
                        </li>
                        <li className="mr-4 cursor-pointer">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center justify-center bg-[color:var(--secondary-color)] text-[color:var(--primary-color)] text-sm font-medium rounded-md w-28 h-10 focus:outline-none"
                            >
                                <span className="mr-2">Username</span>
                                <FaAngleDown
                                    className={`h-4 w-4 ${
                                        showDropdown
                                            ? "transform rotate-180"
                                            : ""
                                    }`}
                                />
                            </button>
                            {showDropdown && (
                                <div className="absolute mt-2 w-56 bg-white rounded-md overflow-hidden shadow-lg z-10">
                                    <div className="px-4 py-2">
                                        <div className="text-gray-800 font-medium">
                                            Full Name
                                        </div>
                                        <div className="text-gray-600">
                                            {/* Full name here */} Saksham Gupta
                                        </div>
                                        <div className="text-gray-800 font-medium mt-2">
                                            Email
                                        </div>
                                        <div className="text-gray-600">
                                            {/* Email here */} test123@gmail.com
                                        </div>
                                        {/* Add other details here */}
                                    </div>
                                    <div className="py-1">
                                        <button
                                            onClick={() =>
                                                router.push("/users/signin")
                                            }
                                            className="text-left w-full px-4 py-2 text-gray-800 hover:bg-[color:var(--primary-color)]"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
