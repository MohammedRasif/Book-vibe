import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Books = ({books}) => {
    console.log(books)
    const {author,category,image,rating,tags,publisher,bookName,bookId}=books
    return (
       <Link to={`/BooksDetails/${bookId}`} className="transition border-2 hover:static-105 border-gray-200 hover:border-gray-400 border-opacity-30 hover:no-underline focus:no-underline">
        <div className=" border-solid border-2  border-gray-300 rounded-2xl m-7">
            <div className="m-5 pl-24 py-7 rounded-2xl bg-slate-200">
            <img src={image} alt="" />
            </div>
            <div className="flex  ">
                <p className="bg-slate-200 m-2 rounded-xl font-bold text-green-600 px-3"><small>{publisher}</small></p>
                <p className="bg-slate-200 m-2 rounded-xl font-bold text-green-600 px-3"><small>{tags[1]}</small></p>
            </div>
            <div className="m-3">
            <h1 className="text-3xl font-bold">{bookName}</h1>
            <h1>By : {author}</h1>
            <div className="flex justify-between">
                <h1 className="py-2">{category}</h1>
                <div className="flex items-center ">
                    <h1>{rating}</h1>
                    <CiStar></CiStar>
                </div>
            </div>
            </div>
        </div>
       </Link>




        // <div>
        //     <Link
        //     rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
		// 		<img role="presentation" className="object-cover  rounded h-44 m-5 mt-5 pl-32 pr-32 py-7 rounded-2xl bg-slate-200" src={image} />
		// 		<div className="p-6 space-y-2">
		// 			<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
		// 			<span className="text-xs dark:text-gray-600">January 26, 2021</span>
		// 			<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
		// 		</div>
		// 	</Link>
        // </div>
    );
};

export default Books;