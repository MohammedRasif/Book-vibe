import { useEffect, useState } from "react";
import Books from "../Books/Books";

const Book = () => {
    const [book,setBook]=useState([])
    useEffect(()=>{
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBook(data))
    },[])
    return (
        <div>
            <h1 className="text-6xl font-bold my-14 text-center text-green-600  ">Books</h1>
            <div className=" grid md:grid-cols-3  grid-cols-3 max-w-7xl mx-auto ">
                {
                    book.map(books => <Books key={books} books={books} ></Books>)
                }
            </div>
        </div>
    );
};

export default Book;