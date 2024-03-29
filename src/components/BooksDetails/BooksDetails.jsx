import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListerBooks from "../ListerBooks/ListerBooks";
import { saveBookApplication } from "../../utility/localStorage";


const BooksDetails = () => {
    const books = useLoaderData();
    const {bookId}=useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    console.log(bookId)
    // console.log(book,bookId)
    const handleWishClicked = () =>{
        saveBookApplication(idInt);
        toast('Books Added To Wish List')
    }

    const handleReadClicked = () =>{
        saveBookApplication(idInt);
        toast('Books Added To Read List')
    }
    
    return (
        <div className="flex">
           <div className="size-96  p-40 bg-slate-200 mr-5 rounded-xl ">
            <img  src={book.image} alt="" />
           </div>
           <div>
            <h1 className="text-5xl font-bold">{book.bookName}</h1>
            <h1>by: {book.author}</h1>
            <h1 className="text-gray-400">---------------------------------------------------------------------------------------</h1>
            <h1>{book.category}</h1>
            <h1 className="text-gray-400">---------------------------------------------------------------------------------------</h1>
            <p><small> <span className="font-bold">Review</span>{book.review}</small></p>
            <div className="flex items-center">
                <h1 className="font-bold">Tag</h1>
                <h1 className="bg-slate-200 m-2 rounded-xl font-bold text-green-600 px-3">{book.publisher}</h1>
                <p className="bg-slate-200 m-2 rounded-xl font-bold text-green-600 px-3">{book.tags[1]}</p>
            </div>
            <h1 className="text-gray-400">---------------------------------------------------------------------------------------</h1>
            
            <div className="flex">
                <h1>Number of page:</h1>
                <h1 className="font-bold pl-24">{book.totalPages}</h1>
            </div>
            <div className="flex">
                <h1>Publisher:</h1>
                <h1 className="font-bold pl-36">{book.publisher}</h1>
            </div>
            <div className="flex">
                <h1>Year of Publishing:</h1>
                <h1 className="font-bold pl-20">{book.yearOfPublishing}</h1>
            </div>
            <div className="flex">
                <h1>Rating:</h1>
                <h1 className="font-bold pl-40">{book.rating}</h1>
            </div>
            <div>
            <button onClick={handleReadClicked} className="btn my-4 m-r">Read</button>
            <button onClick={handleWishClicked} className="btn btn-accent m-4">Wishlist</button>
            </div>
            
            <ToastContainer />
           </div>
        </div>
    );
};

export default BooksDetails;