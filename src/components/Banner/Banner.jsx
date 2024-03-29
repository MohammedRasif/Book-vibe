import React from 'react';
import img from "../../image/pngwing 1.png"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='flex items-center justify-center py-20 bg-slate-200 rounded-lg mt-5'>
            <div>
            <h1 className='text-6xl font-bold'>Books to freshen up <br />
            your bookshelf</h1>
            <Link to='/lister'><button  className='bg-green-500 text-xl px-5 py-2 rounded-md mt-10 '>View The List</button></Link>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;