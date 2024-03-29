
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../utility/localStorage";
import { CiLocationOn } from "react-icons/ci";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineInsertPageBreak } from "react-icons/md";

const WishlistBooks = () => {
    const book = useLoaderData();
    const [appliedBook,setAppliedBook]= useState([])
    useEffect(()=>{
        const storedBookId = getStoredBookApplication();
        if(book){
            
            const bookApplied = [] ;
            for(const id of storedBookId){
                const books = book.find(b => b.bookId == id);
                if(book){
                    bookApplied.push(books)
                }
            }
            setAppliedBook(bookApplied)
        }
    },[]);
    return (
                <div>
                {
                    appliedBook.map(item => <div key={item.bookId}>
                        <div className="flex mt-5">
                        <div className="m-2 p-10 bg-slate-300 rounded-xl">
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">{item.bookName}</h1>
                            <p>By: {item.author}</p>
                            
                            <div className="flex items-center">
                                <h1 className="font-bold">Tag</h1>
                                <h1 className="font-bold m-3 p-2 px-4 bg-cyan-200 text-green-600 rounded-3xl">#{item.tags[0]}</h1>
                                <h1 className="font-bold m-3 p-2 px-4 bg-cyan-200 text-green-600 rounded-3xl ">#{item.tags[1]}</h1>
                                <div className="flex items-center">
                                    <CiLocationOn></CiLocationOn>
                                    <h1 className="p-2">Year of Publishing: {item.yearOfPublishing}</h1>
                                </div>
                            </div>
                                <div className="flex items-center">
                                    <LiaUserFriendsSolid></LiaUserFriendsSolid>
                                    <h1 className="px-2 pr-7">Publisher: {item.publisher}</h1>
                                    <MdOutlineInsertPageBreak ></MdOutlineInsertPageBreak>
                                    <h1 className="px-2">Page: {item.totalPages}</h1>
                                </div>
                                <h1 className="text-gray-500">----------------------------------------------------------------------------</h1>
                                <div className="flex">
                                    <h1 className=" text-blue-500 bg-blue-200 p-3 px-5 m-2 rounded-3xl">Category: {item.category}</h1>
                                    <h1 className=" text-orange-500 bg-gray-300 p-3 px-5 m-2 rounded-3xl">Rating: {item.rating}</h1>
                                    <button className=" px-5 p-3 bg-green-600 text-white m-2 rounded-3xl">View Details</button>
                                </div>
                        </div>
                        </div>
                        </div>)
                }
            </div>
        );
        };

export default WishlistBooks;