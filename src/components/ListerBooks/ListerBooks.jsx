import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const ListerBooks = () => {
    const [tabsIndex,setTabsIndex] = useState(0)
    return (
        <div>
            <h1 className="text-5xl font-bold text-center bg-slate-200 rounded-md  py-5 mt-5">Books</h1>
            <div className="text-center py-5">
                <details className="dropdown">
                <summary className="m-1 btn bg-green-600 text-white px-16 ">Sort By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ">
                    <li><a>Sort By</a></li>
                    <li><a>Rating</a></li>
                    <li><a>Number of Pages</a></li>
                    <li><a>Published Year</a></li>
                </ul>
                </details>
            </div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-self-start flex-nowrap  dark:text-gray-800">
                <Link onClick={() => setTabsIndex(0)} 
                to='' 
                 className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                    tabsIndex === 0 ? 'border border-b-0': ' border-b'
                } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link onClick={() => setTabsIndex(1)} 
                to={`wishlistBooks`} 
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                    tabsIndex === 1 ? 'border border-b-0': ' border-b'
                } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListerBooks;
